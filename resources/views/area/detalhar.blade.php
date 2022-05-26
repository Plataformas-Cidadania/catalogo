@extends('layout')
@section('title', $area->nome)
@section('content')



    <div class=" bg-lgt">
        <div class="bg-img-l">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <h1>
                            <img src="/uploads/{{$area->icone}}" alt="" width="60" style="filter : brightness(0.3);">&nbsp;
                            {{$area->nome}}
                        </h1>
                        {{--<p>{!! $area->nome !!}</p>--}}
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <br><br>

        {{--<div class="container-fluid">
            <div class="p-3">&nbsp;</div>
            <div class="dorder-container">
                <div class="bg-lgt dorder-container-mai">
                    <div class="dorder-container-line">
                        <h1>Infraestrutura</h1>
                        <div class="dorder-container-box bg-lgt"></div>
                    </div>
                </div>
            </div>
            <div class="p-3">&nbsp;</div>
        </div>--}}


        <div class="row">
            <div class="col-md-8">
                <div style="text-align: justify;">
                    {{$area->descricao}}
                </div>
                <br><br><br><br>
            </div>
            <div class="col-md-4">
                @if($area->caminho_arquivo)
                    <a href="/uploads/{{$area->caminho_arquivo}}" target="_blank">
                        <img src="/uploads/{{$area->imagem}}" alt="" width="100%">
                    </a>
                @else
                    <div class="box-icone">
                        <img src="/uploads/{{$area->icone}}" alt="" width="75%">
                    </div>
                @endif

                {{--<a href="https://mapaosc.ipea.gov.br/arquivos/posts/6732-mrosccovid.pdf" target="_blank">
                    <img src="https://mapaosc.ipea.gov.br/imagens/posts/2279-mrosc-covid.jpg" alt="" width="100%">
                </a>--}}

            </div>

            <div class="col-md-12">
                <h2>Linha do tempo</h2>
                <hr/>
                <script>
                    area = "{{$area->nome}}";
                    id_area = {{$area->id}};
                </script>
                <div id="areaTematica">&nbsp;</div>
            </div>



            <div class="col-md-12">
                <br><br><br>
                <h2>Lista de políticas</h2>
                <hr/>

                <div class="row">
                    @foreach($area['politicas'] as $politica)
                    <div class="col-md-4" >
                        <div class="bg-lgt p-3 mb-4 linsLeft">
                            <a href="politica/{{$politica->id}}/{{clean($politica->nome)}}" style="display: block; min-height: 160px">
                                <div class="m-0">
                                    <h2>{{substr($politica->ano, 0, 4)}}</h2>
                                    <strong>{{$politica->legislacao}}</strong><br>
                                    <strong>{{$politica->nome}}</strong><br>
                                    {{--{{$politica->publico_alvo_categ}}<br>--}}

                                </div>
                            </a>
                        </div>
                    </div>
                    @endforeach
                </div>
                {{--<ul class="menu-left">
                    <li class="list-group-item-theme">
                        <a href="politica/1/titulo">
                            <p class="m-0">
                                <strong>1953</strong> -
                                {{$politica->nome}}
                            </p>
                        </a>
                    </li>
                </ul>--}}

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
@endsection
