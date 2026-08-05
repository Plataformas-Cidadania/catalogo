@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')

    <?php
        $colors = ['bg-pri', 'bg-sec', 'bg-qui', 'bg-ter'];
    ?>

    <style>
        .home-destaque-link,
        .home-destaque-static {
            display: block;
            position: relative;
            overflow: hidden;
            border-radius: 15px;
        }
        .home-destaque-link:hover {
            text-decoration: none;
        }
        .home-destaque-static {
            cursor: default;
        }
        .home-destaque-static .box {
            background: #b8b8b8 !important;
            color: #f7f7f7;
        }
        .home-destaque-static img,
        .home-destaque-static i,
        .home-destaque-static h2,
        .home-destaque-static p {
            opacity: 0.75;
        }
        .home-destaque-ribbon {
            position: absolute;
            top: 18px;
            right: -42px;
            width: 170px;
            padding: 6px 0;
            background: #6c757d;
            color: #fff;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1px;
            text-align: center;
            text-transform: uppercase;
            transform: rotate(45deg);
            z-index: 2;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
    </style>


    <div class="container">
        <div class="row">

            @foreach($destaques as $key => $destaque)
            @php($href = !empty($destaque->slug) ? $destaque->slug : $destaque->url)
            @php($ativo = (int) ($destaque->ativo ?? 1) === 1)
            <div class="col-md-3 mb-3">
                @if($ativo)
                <a href="{{$href}}" class="home-destaque-link">
                    <div class="box {{$colors[$key % count($colors)]}}">
                        @if(!empty($destaque->imagem))
                            <img src="/img/pre-img.gif" data-src="/imagens/modulos/md-{{$destaque->imagem}}" alt="Imagem sobre {{$destaque->titulo}}" title="Imagem sobre {{$destaque->titulo}}" width="170" class="lazyload">
                        @else
                            <i class="far fa-gem fa-4x mt-5 mb-4 "></i>
                        @endif
                        <h2>{{$destaque->titulo}}<br><br></h2>
                        <p>{{$destaque->resumida}}</p>
                    </div>
                </a>
                @else
                <div class="home-destaque-static">
                    <span class="home-destaque-ribbon">Em breve</span>
                    <div class="box">
                        @if(!empty($destaque->imagem))
                            <img src="/img/pre-img.gif" data-src="/imagens/modulos/md-{{$destaque->imagem}}" alt="Imagem sobre {{$destaque->titulo}}" title="Imagem sobre {{$destaque->titulo}}" width="170" class="lazyload">
                        @else
                            <i class="far fa-gem fa-4x mt-5 mb-4 "></i>
                        @endif
                        <h2>{{$destaque->titulo}}<br><br></h2>
                        <p>{{$destaque->resumida}}</p>
                    </div>
                </div>
                @endif
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


        @if(!empty($popup->status))
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">{{-- modal-lg--}}
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <a href="{{$popup->url}}" target="_blank">
                                    <img srcset="/imagens/popups/lg-{{$popup->imagem}}" alt="{{$popup->titulo}}" title="{{$popup->titulo}}" width="100%">
                                    {!! $popup->descricao !!}
                                </a>
                            </div>
                        </div>
                    </div>
                    {{--<div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>--}}
                </div>
            </div>
        </div>
        @endif




@endsection
