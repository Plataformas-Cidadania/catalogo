{{--<div id="barra-brasil" style="background:#7F7F7F; height: 20px; padding:0 0 0 10px;display:block;">
    <ul id="menu-barra-temp" style="list-style:none;">
        <li style="display:inline; float:left;padding-right:10px; margin-right:10px; border-right:1px solid #EDEDED">
            <a href="http://brasil.gov.br" style="font-family:sans,sans-serif; text-decoration:none; color:white;">Portal do Governo Brasileiro</a>
        </li>
    </ul>
</div>--}}
<?php
    $midias = DB::table('cms.midias')->where('status', 1)->orderBy('titulo')->get();
?>

<div class="progress">
    <div  id="progress" class="progress-bar bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="bg-lgt d-print-none topM" id="acessibilidade" >
    <div class="container">
        <div class="row">
            <div class="col-6 celHider">
                <ul id="atalhos" class="top-links">
                    <?php
                    $currentRequest = Request::url();
                    $explode2 = explode("/", $currentRequest);
                    $explode3 = explode($explode2[2], $currentRequest);

                    ?>
                    <li><a href="{{$explode3[1]}}/#iniciodoconteudo" accesskey="1">Ir para o Conteúdo [1]</a></li>
                    <li><a href="{{$explode3[1]}}/#iniciodomenu" accesskey="2">Ir para o Menu [2]</a></li>
                    {{--<li><a href="<?php if($rota != '/'){?>{{$rota}}<?php }?>#search" accesskey="3">Ir para a busca [3]</a></li>--}}
                    <li><a href="{{$explode3[1]}}/#iniciodorodape" accesskey="4" class="link-to-menu">Ir para o rodapé [4]</a></li>
                </ul>
            </div>
            <div class="col text-lg-right text-md-right">
                <a href="https://www.ipea.gov.br" target="_blank" alt="Link externo para o IPEA." title="Link externo para o IPEA."><img src="img/logo-ipea.png" class="top-ipea"/></a>
            </div>
            <div class="col text-right top-icons">
                <ul id="botoes" >
                    <li class="bg-pri box-font-size rounded-circle cursor"><a id="aumenta_fonte" {{--onClick="fonte('a');"--}}>A+</a></li>
                    <li class="bg-sec box-font-size rounded-circle cursor"><a id="reset_fonte">A&nbsp;</a></li>
                    <li class="bg-ter box-font-size rounded-circle cursor"><a id="reduz_fonte">A-</a></li>
                    <li><a class="btn-constrat cursor"><i class="fas fa-adjust fa-2x" style="vertical-align: middle;"></i> {{--Alto contraste--}}</a></li>
                    <li><a href="acessibilidade"><i class="fas fa-universal-access fa-2x" style="vertical-align: middle;"></i> <!--Acessibilidade--></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


<script>
    (function (){
        'use strict';

        var btnSetItem = document.querySelector('.btn-constrat')

        function setLocalStorage(){

            if(localStorage.getItem('contrast')==='true'){
                document.getElementById('contrast').className = 'contrast';
            }else{
                document.getElementById('contrast').className = 'contrast-off';
            }

            btnSetItem.addEventListener('click', () => {
                if(localStorage.getItem('contrast')==='true'){
                    localStorage.setItem('contrast', false);
                    document.getElementById('contrast').className = 'contrast-off';
                }else{
                    localStorage.setItem('contrast', true);
                    document.getElementById('contrast').className = 'contrast';
                }
            })

        }

        setLocalStorage();


    }());
</script>

<style>
    .box-font-size{
        width: 25px;
        height: 25px;
        color: #FFFFFF;
        cursor: pointer;
        text-align: center;
        padding-top: -1px;
    }
    .box-font-size a{
        display: block;
    }
</style>

{{--CEl--}}
<div class="header-cel text-center d-block d-sm-none" >
    <div class="row">
        <div class="col-2">
            <i class="fas fa-bars fa-2x btn-cel menu-cel-icon"></i>
            <i class="fas fa-times fa-2x btn-cel menu-cel-hide"></i>
        </div>
        <div class="col-8">

            <a href="/">
                <img src="/img/logo.png" alt="">
            </a>
        </div>
        <div class="col-xs-2"></div>
    </div>
</div>

<div class="menu-cel hidden-lg hidden-md hidden-sm menu-cel-hide" style="display: none;" id="iniciodomenu">
    <ul>
        <br>

        <li role="presentation"><a href="" accesskey="h" @if($rota=='/') class="corrente" @endif>Início</a></li>
        @foreach($midias as $midia)
            <li role="presentation"><a href="posts/{{$midia->id}}/{{clean($midia->titulo)}}" @if($rota=='quem') class="corrente" @endif>{{$midia->titulo}}</a></li>
        @endforeach
        <li role="presentation"><a href="https://www.siop.planejamento.gov.br"  @if($rota=='sobre') class="corrente" @endif target="_blank">Orçamento</a></li>
        <li role="presentation"><a href="sobre" accesskey="q" @if($rota=='sobre') class="corrente" @endif>Sobre</a></li>
        <li role="presentation"><a href="mapa-do-site" accesskey="c" @if($rota=='contato') class="contato" @endif>Ajuda</a></li>

    </ul>
</div>
<div class="box-menu menu-cel-hide" style="display: none;"></div>
{{--CEl--}}



<header   role="banner">

    <div class="container d-none d-xl-block d-sm-block">
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-light">
                    <a class="navbar-brand" href="#">
                        <h2 class="logo">
                            <img src="/img/logo.png" alt="">
                        </h2>
                    </a>
                    <div>
                        <div class="btn-group">
                            <ul id="menu-desk">
                                <li role="presentation"><a href="" accesskey="h" @if($rota=='/') class="corrente" @endif>Início</a></li>
                                <li role="presentation"><a href="posts/1/biblioteca" @if($rota=='sobre') class="publicacoes" @endif>Biblioteca</a>
                                    <ul class="noJS menu-desk-sub">
                                        @foreach($midias as $midia)
                                            <li role="presentation"><a href="{{$midia->tipo === 0 ? 'posts/' : 'posts-categorias/'}}{{$midia->id}}/{{clean($midia->titulo)}}" @if($rota=='quem') class="corrente" @endif>{{$midia->titulo}}</a></li>
                                        @endforeach
                                    </ul>
                                </li>
                                <li role="presentation"><a href="https://www.siop.planejamento.gov.br"  @if($rota=='sobre') class="corrente" @endif target="_blank">Orçamento</a></li>
                                <li role="presentation"><a href="sobre" accesskey="q" @if($rota=='sobre') class="corrente" @endif>Sobre</a></li>
                                <li role="presentation"><a href="mapa-do-site" accesskey="c" @if($rota=='contato') class="contato" @endif>Ajuda</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>

<style>
    .btn-login-menu{
        width: 90%;
        border-radius: 2px;
        margin: 0 5px 8px 8px;
    }
</style>

    @if($rota=='/')
        <div class="owl-carousel owl-theme">
            @foreach($webdoors as $webdoor)
                <a href="{{$webdoor->link}}">
                    <picture>
                        <source class="owl-lazy" media="(min-width: 350px)" data-srcset="imagens/webdoors/lg-{{$webdoor->imagem}}">
                        <source class="owl-lazy" media="(min-width: 650px)" data-srcset="imagens/webdoors/md-{{$webdoor->imagem}}">
                        <img class="owl-lazy" data-src="imagens/webdoors/lg-{{$webdoor->imagem}}" alt="">
                    </picture>
                </a>
            @endforeach

        </div>
    @endif


<div id="iniciodoconteudo"></div>

</header>
