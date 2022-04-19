const List = () => {

    const { useEffect, useState } = React;

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Política</th>
                        <th>Grande Área</th>
                        <th>Área</th>
                        <th>Ano</th>
                        <th>Ínicio Vigência</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="6">
                            <h4 className="text-center">Listagem em desenvolvimento</h4>
                        </td>
                    </tr>
                    {/*<tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>*/}
                </tbody>
            </table>
        </div>
    );
};
