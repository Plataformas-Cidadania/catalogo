const List = (props) => {

    const { useEffect, useState } = React;
    const [items, setItems] = useState([]);

    useEffect(() => {
        if(props.items){
            setItems(props.items);
        }
    }, [props.items]);

    return (
        <div>
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
                                        <td>{item.vigencia_inicio}</td>
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
