@extends('layout')
@section('title', $politica->nome)
@section('content')



    <div class=" bg-lgt">
        <div class="bg-img-l">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <h1><strong>{{substr($politica->ano, 0, 4)}}</strong> - {{$politica->nome}}</h1>
                        <p>{!! $politica->observacao !!}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
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

    <div class="container">
        <br><br>

        <div style="float: right;">
            <a href="/imprimir-politica/{{$politica->id}}" target="_blank" >
                <i class="fas fa-print cursor fa-2x"></i>
            </a>
        </div>

        <div class="row">


            <div class="col-md-7">



                <h2 class="text-center tx-top">
                    <strong>Data de criação e revogação</strong><br>
                    <i class="far fa-clock"></i>
                    {{formatBr($politica->vigencia_inicio, 'ext')}} {{$politica->vigencia_fim ? 'até' : ''}} {{formatBr($politica->vigencia_fim)}}
                    <br>
                </h2>





                <div class="row">
                    <div class="col-md-4">
                        <div class="circle-item bg-pri">
                            <h2><br><strong>Instrumento legal</strong></h2>
                            <p>{!! $politica->instrumento_legal !!}</p>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="circle-item bg-sec">
                            <h2><br><strong>Medida provisória</strong></h2>
                            <p>{{$politica->medida_provisoria}} <br>{{$politica->medida_provisoria_inicio_vigencia}}</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="circle-item bg-ter">
                            <h2><br><strong>Legislacao</strong></h2>
                            <p>{{$politica->legislacao}} <br> {{formatBr($politica->vigencia_inicio, 'num')}} {{$politica->vigencia_fim ? 'à' : ''}} {{formatBr($politica->vigencia_fim), 'num'}}</p>
                        </div>
                    </div>
                </div>
                <br><br>

                <div class="flexRow">

                        <div class="flexCol" style="margin-left: 0">
                            <div class="p-3 mb-4 linsLeft linsBor">
                                Desenvolvimento Econômico
                            </div>
                        </div>

                        <i class="fas fa-angle-right mt-5"></i>

                        <div class="flexCol" style="margin-rigth: 0">
                            <a href="area-tematica/{{$politica->area}}/{{clean($politica->nome)}}">
                                <div class="p-3 mb-4 linsLeft linsBor" >
                                    Agropecuária e Agrária
                                </div>
                            </a>
                        </div>

                </div>

                {{--<div class="row">
                    <div class="col-md-12">
                        <p><br><strong>OBS.:</strong></p>
                       <p>{{$politica->observacao}} </p>
                    </div>
                </div>--}}




            </div>

            <div class="col-md-1">&nbsp;</div>
            <div class="col-md-4">

                <div class="row">
                    <div class="col-md-12">
                        <h3>Arquivos</h3>
                    </div>
                </div>

                <div class="row">
                    @foreach($politica->orgaos as $orgao)
                        <a href="/arquivos/arquivos/{{$orgao->imagem}}" target="_blank">
                            <div class="col-md-12">
                                <img src="/imagens/arquivos/arquivos/{{$orgao->caminho_arquivo}}" alt="" width="100%">
                            </div>
                            <div class="col-md-9">{{$orgao->nome}}</div>
                        </a>
                        <div class="col-md-12"><hr/></div>
                    @endforeach

                </div>


                {{--<div class="row">
                    <div class="col-md-3">
                        <a href="https://mapaosc.ipea.gov.br/arquivos/posts/6732-mrosccovid.pdf" target="_blank">
                            <img src="https://mapaosc.ipea.gov.br/imagens/posts/2279-mrosc-covid.jpg" alt="" width="100%">
                        </a>
                    </div>
                    <div class="col-md-9">Ministério da Mulher, da Família e dos Direitos Humanos</div>
                </div>--}}

            </div>

        </div>


    <?php /*?><div class="row">
            <div class=" @if(!empty($area->imagem)) col-md-5 @else hidden @endif ">
                @if(!empty($area->imagem))
                    <br>
                    <picture>
                        <source srcset="/imagens/areas/sm-{{$area->imagem}}" media="(max-width: 468px)">
                        <source srcset="/imagens/areas/md-{{$area->imagem}}" media="(max-width: 768px)">
                        <source srcset="/imagens/areas/md-{{$area->imagem}}" class="img-responsive">
                        <img srcset="/imagens/areas/md-{{$area->imagem}}" alt="{{$area->title}}" title="{{$area->title}}" class="align-img" width="100%" >
                    </picture>
                @endif
            </div>
            <div  class=" @if(!empty($area->imagem)) col-md-7 @else col-md-12 @endif ">
                <h5 class="text-right"><i class="fa fa-calendar" aria-hidden="true"></i> {{Carbon\Carbon::parse($area->created_at)->format('d/m/Y - H:i:s')}}</h5>
                @if(!empty($area->author))
                    <h5>Autor: {{$area->author}}</h5>
                @endif
                <p>{!!$area->description!!}</p>
                @if(!empty($area->source))
                    <p>
                        <a href="{{$area->url}}" target="_blank">
                            <b>{{$area->source}}</b>
                        </a>
                    </p>
                @endif
            </div>
        </div><?php */?>

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

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="text-center">
                    <br><br><br><strong>Ministérios</strong><br>
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


                {{--<div class="row">
                    @foreach($politica->orgaos as $orgao)
                        <div class="col-md-3">
                            <div class="bg-lgt p-3 mb-4 linsLeft">
                                {{$orgao->nome}}
                            </div>
                        </div>
                    @endforeach
                </div>--}}
                <br><br>
            </div>
        </div>
    </div>


    <div>
        <br><br>
        <div class=" bg-lgt">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <br><br>
                        <h2 class="text-center">Objetivos</h2><br>
                        <p>{!! $politica->objetivos !!}</p>
                        <br><br>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
    </div>




    <div class="container">
        <div class="row">
            <div class="col-md-12">
                    <p><strong>Ação Orcamentaria</strong></p>
                    <p>{!! $politica->acao_orcamentaria_assoc !!}</p>

                    <p><strong>Público Alvo</strong></p>
                    <p>{!! $politica->publico_alvo_categ !!}</p>


                    <br><br>
            </div>
        </div>
    </div>

@endsection
