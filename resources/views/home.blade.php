@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')

    <?php
        $colors = ['bg-pri', 'bg-sec', 'bg-ter'];
    ?>


    <div class="container">
        <div class="row">

            @foreach($destaques as $key => $destaque)
            <div class="col-md-4 mb-4">
                <a href="{{$destaque->slug}}">
                    <div class="box {{$colors[$key]}}">
                        @if($destaque->imagem)
                            <img src="/img/pre-img.gif" data-src="/imagens/modulos/md-{{$destaque->imagem}}" alt="Imagem sobre {{$destaque->titulo}}" title="Imagem sobre {{$destaque->titulo}}" width="170" class="lazyload">
                        @else
                            <i class="far fa-gem fa-4x mt-5 mb-4 "></i>
                        @endif

                        {{--<i class="far fa-gem fa-4x m-5"></i>--}}
                        <h2>{{$destaque->titulo}}<br><br></h2>
                        {{--<p>{{$destaque->resumida}}</p>--}}
                    </div>
                </a>
            </div>
            @endforeach

            {{--<div class="col-md-4">
                <a href="areas-tematicas">
                    <div class="box bg-pri">
                        <i class="far fa-gem fa-4x m-5"></i>
                        <h2>Áreas temáticas</h2>
                        <p>Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público</p>
                    </div>
                </a>
            </div>
            <div class="col-md-4">
                <a href="timeline">
                    <div class="box bg-sec">
                        <i class="far fa-gem fa-4x m-5"></i>
                        <h2>Linhas do tempo</h2>
                        <p>Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público</p>
                    </div>
                </a>
            </div>
            <div class="col-md-4">
                <a href="consulta">
                    <div class="box bg-ter">
                        <i class="far fa-gem fa-4x m-5"></i>
                        <h2>Consulta</h2>
                        <p>Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público</p>
                    </div>
                </a>
            </div>--}}
        </div>
    </div>

    <div id="home">&nbsp;</div>





    <div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h2>Áreas temáticas</h2>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>
    <div class="container">
        <div class="row">

            <div class="custom0 owl-carousel owl-theme">
                @foreach($areas as $area)
                    <a href="area-tematica/{{$area->id}}/{{clean($area->nome)}}" >
                        <div class="item    box-list-icon">
                            <div class="box-list-icon-i">
                                {{--<i class="far fa-gem fa-3x"></i>--}}
                                <img src="/uploads/{{$area->icone}}" alt="" width="100%">
                            </div>
                            <h2>{{$area->nome}}</h2>
                            {{--<p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>--}}
                            <h3>Acessar</h3>
                        </div>
                        <br>
                    </a>
                @endforeach
            </div>

            {{--<div class="col-md-3">
                <div class="box-list-icon">
                    <div class="box-list-icon-i"><i class="far fa-gem fa-3x"></i></div>
                    <h2><strong>Infraestrutura</strong></h2>
                    <p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>
                    <h3>Acessar</h3>
                </div>
                <br>
            </div>--}}




        </div>
    </div>
    <br><br>




    <div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h2>Parceiros</h2>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>
    <div class="container">
        <div class="row">
            @foreach($partners as $partner)
                <div class="col-xs-6 col-sm-4 col-md-2 item-logo">
                    @if(empty($partner->imagem))
                        <object data="img/sem-imagem.png" type="image/png" class="img-responsive">
                    @else
                        <object data="/imagens/parceiros/xs-{{$partner->imagem}}" type="image/png" class="img-responsive">
                    @endif
                        <picture>
                            <source data-src="/imagens/parceiros/xs-{{$partner->imagem}}" media="(max-width: 468px)">
                            <source data-src="/imagens/parceiros/xs-{{$partner->imagem}}" media="(max-width: 768px)">
                            <source data-src="/imagens/parceiros/xs-{{$partner->imagem}}" class="img-responsive">
                            <img src="/img/pre-img.gif" data-src="/imagens/parceiros/xs-{{$partner->imagem}}" alt="Imagem sobre {{$partner->title}}" title="Imagem sobre {{$partner->title}}" width="100%" class="cliente-list-img-hover lazyload">
                        </picture>
                    </object>
                </div>
            @endforeach
        </div>
    </div>
    <br><br>


@endsection
