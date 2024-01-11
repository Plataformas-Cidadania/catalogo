const List = (props) => {

    const { useEffect, useState } = React;
    const [items, setItems] = useState([]);

    useEffect(() => {
        if(props.items){
            setItems(props.items);
        }
    }, [props.items]);

    return (
        <div className="table-responsive mb-3">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Política</th>
                        <th>Grande Área</th>
                        <th>Área</th>
                        <th>Subáreas</th>
                        <th>Ano</th>
                        <th>Ínicio Vigência</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.loading ? (
                        <tr>
                            <td colSpan={6}>
                                <div className="text-center">
                                    <i className="fa fa-spinner fa-spin fa-4x"/>
                                </div>
                            </td>
                        </tr>
                    ) : (
                        items.length > 0 ? (
                            items.map((item) => {

                                var dataOriginal = item.vigencia_inicio;
                                var dataObj = new Date(dataOriginal);

                                var dia = ('0' + dataObj.getDate()).slice(-2);
                                var mes = ('0' + (dataObj.getMonth() + 1)).slice(-2);
                                var ano = dataObj.getFullYear();
                                var dataFormatada = dia + '/' + mes + '/' + ano;
                                return (
                                    <tr>
                                        <td><a href={"politica/"+item.id+"/"+clean(item.nome)}>{item.nome}</a></td>
                                        <td>{item.grande_area.nome}</td>
                                        <td>{item.area.nome}</td>
                                        <td>
                                            {
                                                item.politica_categoria.map((categoria, index) => {
                                                    return categoria.categoria.nome + (index < item.politica_categoria.length-1 ? " - " : "");
                                                })
                                            }
                                        </td>
                                        <td>{item.ano.substring(0, 4)}</td>
                                        <td>{dataFormatada}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={6}>
                                    <h4 className="text-center">Não foram encontradas políticas para esta consulta!</h4>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    );
};
