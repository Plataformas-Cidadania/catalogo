@extends('layout')
@section('title', $politica->nome)
@section('content')


    <div class="bg-politica"></div>
    <div class=" bg-lgt " style="position: relative; z-index: 1;">
        <div class="bg-img-l">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <h1><strong>{{substr($politica->ano, 0, 4)}}</strong> - {{$politica->nome}}</h1>
                        <div style="float: right;">
                            <a href="/imprimir-politica/{{$politica->id}}" target="_blank" >
                                <i class="fas fa-print cursor fa-2x"></i>
                            </a>
                        </div>
                        {{--<p>{!! $politica->observacao !!}</p>--}}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .bg-politica{
            background-image: url("/uploads/{{$area->icone}}");
            filter: brightness(0.6);
            width: 600px;
            height: 600px;
            position: absolute;
            z-index: 0;
            right: 0;
            opacity: 0.1;
            top: 40%;
        }
        .circle-item {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            /*width: 220px;*/
            min-height: 220px;
            /*border-radius:50%;*/
            border-radius:10%;
            text-align: center;
            color: #FFFFFF;
            border: 10px double #FFFFFF;
            padding: 15px;
            cursor: inherit;
            transition: .3s;
        }
        .circle-item:hover {
            transform: scale(1.1);
        }
        .circle-item h2{
            font-size: 20px;
        }
        .circle-item p{
            font-size: 18px;
        }
        .tx-top{
            line-height: 40px;
            margin-bottom: 50px;
        }
    </style>

    <div class="container" style="position: relative; z-index: 1;">
        <br><br>



        <div class="row">


            <div class="col-md-8">


                <div>
                    <div>
                        <p>Data de criação e revogação</p>
                        <h2><strong><i class="far fa-clock"></i> {{formatBr($politica->vigencia_inicio, 'ext')}} {{$politica->vigencia_fim ? '' : 'até'}} {{formatBr($politica->vigencia_fim, 'ext')}}</strong></h2>
                    </div>
                    <hr>
                    <div>
                        <p>Instrumento legal</p>
                        <h2><strong>{!! $politica->instrumento_legal !!}</strong></h2>
                    </div>
                    <hr>
                    <div>
                        <p>Legislacao</p>
                        <h2><strong>{{$politica->legislacao}}</strong>
                        </h2>
                        <p>Data</p>
                        <h2>{{formatBr($politica->vigencia_inicio, 'ext')}} {{$politica->vigencia_fim ? 'à' : ''}} {{formatBr($politica->vigencia_fim), 'ext'}}</strong></h2>
                    </div>
                </div>


                {{----}}


                <div>
                    <br><br>
                    <div class=" bg-lgt">
                        <div class="bg-img-r">
                            <div class="container pt-5 pb-5 bg-lgt">
                                <div class=" ps-2 pe-2">
                                    <br>
                                    <h2 class="text-center">Objetivos</h2><br>
                                    <p>{!! $politica->objetivos !!}</p>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br><br>
                </div>


                <div class="row">
                    <div class="col-md-12">
                        {{--<p><strong>Ação Orcamentaria</strong></p>
                        <p>{!! $politica->acao_orcamentaria_assoc !!}</p>--}}

                        <p>Público alvo agregado</p>
                        {{--<p>{!! $politica->publico_alvo_categ !!}</p>--}}

                    </div>

                    <div class="col-md-12">
                        {{--<p><strong>Ação Orcamentaria</strong></p>
                        <p>{!! $politica->acao_orcamentaria_assoc !!}</p>--}}

                        <p>Público alvo legislação</p>
                        <h2>{!! $politica->publico_alvo_legislacao !!}</h2>

                    </div>
                </div>


                <div class="col-md-12">
                    <h2 class="text-center">
                        <br><br><strong>Órgãos</strong><br>
                    </h2>


                    <div class="flexRow">
                        @foreach($politica->orgaos as $orgao)
                            <div class="flexCol">
                                <div class="bg-lgt p-3 mb-4 linsLeft">
                                    {{$orgao->nome}}
                                </div>
                            </div>
                        @endforeach
                    </div>

                    <br><br>
                </div>


                {{----}}






            </div>


            <div class="col-md-4">

                <div class="row">
                    <div class="col-md-12">
                        <div class="p-2 mb-4 linsBor">
                            <strong>Grande área</strong><br>
                            {{$grande_area->nome}}
                        </div>
                    </div>
                    <div class="col-md-12">
                        <a href="area-tematica/{{$politica->area}}/{{clean($politica->nome)}}">
                            <div class="p-2 mb-4  linsBor linsBorhover">
                                <img src="/uploads/{{$area->icone}}" alt="" width="50">
                                <strong>Área temática</strong><br>
                                {{$area->nome}}
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="area-tematica/{{$politica->area}}/{{clean($politica->nome)}}">
                            <div class="p-2 mb-4 linsBor">
                                <strong>Subarea</strong><br>
                                ??
                            </div>
                        </a>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-12">
                        <h3>Arquivos</h3>
                    </div>
                </div>

                <div class="row">
                    @foreach($arquivos as $arquivo)
                        @if(!empty($arquivo->imagem))
                            <div class="col-md-3">
                                <a href="/uploads/{{$arquivo->caminho_arquivo}}" target="_blank">
                                    <img src="/uploads/{{$arquivo->imagem}}" alt="" width="100%">
                                </a>
                            </div>
                        @endif
                            <div class=" @if($arquivo->imagem) col-md-9 @else col-md-12 @endif ">
                                <a href="/uploads/{{$arquivo->caminho_arquivo}}" target="_blank">
                                    {{$arquivo->titulo}}
                                </a>
                            </div>

                        <div class="col-md-12"><hr/></div>
                    @endforeach

                </div>


            </div>

        </div>



    </div>
    <style>
        .flexRow {
            display: flex;
            flex-wrap: wrap;
        }
        .flexCol {
            flex: 1;
            justify-content: space-between;
            margin: 5px 15px;
            min-width: 17%;

        }
    </style>



@endsection
