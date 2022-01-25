<?php $rota = Route::getCurrentRoute()->uri();?>




<script src="js/app.js"></script>
<script src="js/utils.js"></script>
<!--<script src="js/rotas.js"></script>-->

<script>
    getBaseUrl = "{{env('APP_API_ROUTE_OLD')}}";
    getBaseUrl2 = "{{env('APP_API_ROUTE')}}";
</script>
<script>



    function titleize(text, qtd) {
        let qtdString = qtd;
        let qtdTxt = text.length;

        var words = text.toLowerCase().split(" ");

        for (var a = 0; a < words.length; a++) {
            if(words[a] != "de" && words[a] != "da" && words[a] != "do" && words[a] != "dos" && words[a] != "das"){
                var w = words[a];
                words[a] = w[0].toUpperCase() + w.slice(1);
            }
        }
        words = words.join(" ");
        words = words.substr(0, qtdString)
        words = words + (qtdString > qtdTxt ? '' : '...');
        return words;
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

</script>


<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    <?php if($rota == "area-user" || $rota == "oscs-user" || $rota == "dashboard-user" || $rota == "dados-user"  || $rota == "trocar-senha" || $rota == "selo-user"){ ?>
        pageRoute = false;
    <?php }else{?>
        pageRoute = true;
    <?php }?>
</script>


{{--React 16--}}
{{--<script src="js/react/react.development.js" crossorigin></script>
<script src="js/react/react-dom.development.js" crossorigin></script>--}}

@if(env('APP_ENV')==='local')
{{--<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>--}}
<script src="js/react/react.development.js" crossorigin></script>
<script src="js/react/react-dom.development.js" crossorigin></script>
@else
<script src="js/react17/react.production.min.js" crossorigin></script>
<script src="js/react17/react-dom.production.min.js" crossorigin></script>
@endif
<script src="js/axios.min.js"></script>

<script>
    function get_location() {
        //console.log('get_location');
        if(navigator.geolocation){

            function saveLocation (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                localStorage.setItem('geo', JSON.stringify({lat: lat, lon: lon}));
                //console.log(localStorage.getItem('geo'));
                $.ajax({
                    url: "https://nominatim.openstreetmap.org/reverse?format=json&lat="+lat+"&lon="+lon,
                    success: function(data){
                        //console.log(data)
                        if(data.address){
                            localStorage.setItem('city', data.address.city);
                            localStorage.setItem('state', data.address.state);
                            localStorage.setItem('region', data.address.region);
                            localStorage.setItem('country', data.address.country);
                        }
                    },
                    error: function(xhr, status, err){
                        console.error(status, err.toString());
                    }
                });
            }
            // Solicitação de posição instantânea.
            navigator.geolocation.getCurrentPosition (saveLocation);

            //console.log(localStorage.getItem('aaa'));

            return;
        }

        console.log("O NAVEGADOR NÃO É COMPATÍVEL COM GEOLOCALIZAÇÃO");
    }
    get_location();
</script>


@if($rota=='/')
    <script>
        app_url = "{{env('APP_URL')}}";
    </script>

    <script src="js/home.js" ></script>
    <script src="js/conf-owl-carousel.js"></script>



@endif

@if($rota=="diagnostico")
    <script src="js/components/diagnostico/store.js"></script>
    <script src="js/components/diagnostico/pergunta/options.js"></script>
    <script src="js/components/diagnostico/pergunta/nota.js"></script>
    <script src="js/components/diagnostico/pergunta/range.js"></script>
    <script src="js/components/diagnostico/pergunta/index.js"></script>
    <script src="js/components/diagnostico/perguntas.js"></script>
    <script src="js/components/diagnostico/indicadores.js"></script>
    <script src="js/components/diagnostico/dimensoes.js"></script>
    <script src="js/components/diagnostico/header.js"></script>
    <script src="js/components/diagnostico/index.js"></script>
@endif
@if($rota=="/")
    <script src="js/components/home/store.js"></script>
    <script src="js/components/home/header.js"></script>
    <script src="js/components/home/index.js"></script>
@endif
@if($rota=="relate")
    <script src="js/components/relate/pergunta.js"></script>
    <script src="js/components/relate/index.js"></script>
@endif
@if($rota=="depoimento")
    <script src="js/components/depoimento/pergunta.js"></script>
    <script src="js/components/depoimento/index.js"></script>
@endif
@if($rota=="interaja")
    <script src="js/components/forum/pergunta.js"></script>
    <script src="js/components/forum/index.js"></script>
@endif
@if($rota=="recursos")
    <script src="js/components/paginate.js"></script>
    <script src="js/components/recursos/page.js"></script>
    <script src="js/components/recursos/item.js"></script>
    <script src="js/components/recursos/index.js"></script>
@endif

@if($rota=="resultado")
    <script src="https://cdn.jsdelivr.net/npm/prop-types@15.7.2/prop-types.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-apexcharts@1.3.6/dist/react-apexcharts.iife.min.js"></script>
    <script src="js/components/charts/barChart.js"></script>

    <script src="js/components/recursos/item.js"></script>
    <script src="js/components/resultado/page.js"></script>
    <script src="js/components/resultado/index.js"></script>
@endif
@if($rota=="compartilhe")
    <script src="js/components/compartilhe/edit.js"></script>
    <script src="js/components/compartilhe/list_links.js"></script>
    <script src="js/components/compartilhe/link.js"></script>
    <script src="js/components/compartilhe/list.js"></script>
    <script src="js/components/compartilhe/insert.js"></script>
    <script src="js/components/compartilhe/index.js"></script>
    {{--<script src="js/components/forms/compartilhe.js"></script>--}}
@endif



<script>
    $(document).ready(function(){
        var fonte = 15;

        if(fonte==15){
            $('#contrast').css({'font-size' : localStorage.getItem('fonte')+'px'});
        }
        $('#aumenta_fonte').click(function(){
            if (fonte<22){
                fonte = fonte+2;
                localStorage.setItem('fonte', fonte);
                $('#contrast').css({'font-size' : fonte+'px'});
            }
        });
        $('#reset_fonte').click(function(){
            fonte = 15;
            localStorage.setItem('fonte', fonte);
            $('#contrast').css({'font-size': '16px'});
        });
        $('#reduz_fonte').click(function(){
            if (fonte>10){
                fonte = fonte-2;
                localStorage.setItem('fonte', fonte);
                $('#contrast').css({'font-size' : fonte+'px'});
            }
        });
    });
</script>
<script>
    //Barra scroll
    $(window).on('scroll', function(){
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();

        var scrollPercent = (s / (d - c)) * 100;
        scrollPercent = Math.round(scrollPercent);
        document.getElementById('progress').style.width = scrollPercent+'%';

        //console.clear();
        //console.log(scrollPercent);
    })
</script>
<script>$('.block').smoove({offset:'40%'});</script>
<script>
    $(document).ready(function() {
        $('.menu-cel-hide').hide();
        $('.menu-cel-login-hide').hide();

        $('.btn-cel').click(function() {
            $('.menu-cel-hide').animate({width:'toggle'},350);
            $('.menu-cel-icon').toggle('slow, 1000');
        });
        $('#btn-cel-login').click(function() {
            $('.menu-cel-login-hide').animate({height:'toggle'},350);
        });
    });
</script>
<script>
    $(document).ready(function() {
        $('.fa-chevron-right').hide();

        $('.btn-right').click(function() {
            $('.box-floating').hide();
        });

        $('.btn-menu-txt').click(function() {
            $('.menu-icons-txt').hide();
            $('.fa-chevron-right').hide();
            $('.fa-chevron-left').show();
            $('.box-floating').css('width', '45px');
            $('.menu-icons li').css('border', '0');
            $('.menu-icons li').css('padding-bottom', 0);
            $('.menu-icons li').css('margin-bottom', 0);
        });

        $('.btn-menu-txt-show').click(function() {
            $('.menu-icons-txt').show();
            $('.fa-chevron-right').show();
            $('.fa-chevron-left').hide();
            $('.box-floating').css('width', '250px');
            $('.menu-icons li').css('border-bottom', 'solid 1px #CCCCCC');
            $('.menu-icons li').css('padding-bottom', '3px');
            $('.menu-icons li').css('margin-bottom', '2px');

        });

    });
</script>

<!--///////////////////////////////REACT////////////////////////////-->
@if($rota=="contato")
    <script src="js/components/forms/contact.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/leaflet.js"></script>
    <script src="js/components/maps/address.js"></script>
@endif






<script>
    /*$('#ativarBox').click(function(){
        $('.box-busca').toggle();
    });
    $('.box-busca').mouseleave(function(){
        $('.box-busca').toggle();
    });*/
</script>
