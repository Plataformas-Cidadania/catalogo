const Ano = (props) => {

    const { useEffect, useState } = React;

    const date = new Date();
    const anoAtual = date.getFullYear();

    const [from, setFrom] = useState('1900');
    const [to, setTo] = useState(anoAtual);

    useEffect(() => {
        let anos = [];
        for(let i=1940; i<=parseInt(anoAtual); i++){
            anos.push(i);
        }

        $("#range").ionRangeSlider({
            values: anos,
            hide_min_max: true,
            //keyboard: true,
            //min: 0,
            //max: 5000,
            from: anos[0],
            to: anos[anos.length-1],
            type: 'integer',
            //step: 1,
            prefix: "",
            //postfix: " million pounds",
            grid: false,
            onStart: function (data) {
                //console.log('start', data);
            },
            onChange: function (data) {
                //console.log('change', data);
            },
            onFinish: function (data) {
                //console.log(data);
                console.log('finish', data.from_value, data.to_value);
                setFrom(data.from_value);
                setTo(data.to_value);
            },
            onUpdate: function (data) {
                console.log('update', data);
            }

        });
        const slider = $("#range").data("ionRangeSlider");
    }, []);

    useEffect(() => {
        if(from && to){
            props.addFilter({filter: 'ano', value: {inicio: from, fim: to}});
        }
    }, [from, to]);

    return (
        <div>
            <label htmlFor="">Período</label>
            <input type="text" id="range" name="range" />
        </div>
    );
};
