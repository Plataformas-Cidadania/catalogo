const Tables = (props) => {

    let teste = "";

    return (

        <div className="tableFlex">

            <div className="tableCol">
                <div className="tableRow" ><strong>Título</strong></div>
                {
                    props.labels.map((item, key) => {
                        return (
                            <div className="tableRow" key={'tr'+key}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>

            {
                props.series.map((item, key) => {

                    teste = item.data.map((item, key) => {
                        return <div className="tableRow" key={key} style={{textAlign: 'center'}}>{item}</div>
                    })

                    return (
                        <div className="tableCol"  key={'tableCol'+key}  style={{textAlign: 'center'}}>
                            <div className="tableRow"><strong>{item.name}</strong></div>
                            {teste}
                        </div>
                    )
                })
            }

        </div>

    );
};
