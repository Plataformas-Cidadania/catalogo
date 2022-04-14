function getColor(d, intervalos) {

    var colors = ['#4285F4', '#689DF6', '#8EB6F8', '#B3CEFB', '#F6D473', '#F1B567', '#ED965B', '#E87850',  '#E45A45',  '#E0433C'];

    var qtdIntervalos = intervalos.length;
    for(var i=qtdIntervalos-1; i>=0; i--){
        if(d > intervalos[i]){
            return colors[i];
        }
    }

    return colors[0];

}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function numberDecimalPtBR(number, decimals){
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(number);
}

function clean(text){
    text = text.toLowerCase();
    text = text.replace(/[áàãâä]/g,'a');
    text = text.replace(/[éèêë]/g,'e');
    text = text.replace(/[íìîï]/g,'i');
    text = text.replace(/[óòõôö]/g,'o');
    text = text.replace(/[úùûü]/g,'u');
    text = text.replace(/[ç]/g,'c');

    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g,'');
    text = text.replace(/[ ]/g,'-');

    return text;
}
