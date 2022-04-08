@extends('layout')
@section('title', $politica->nome)
@section('content')

    <div class=" bg-lgt">
        <div class="bg-img-l">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <h1>{{$politica->nome}}</h1>
                        <p>{!! $politica->observacao !!}</p>
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
                    <div class="dorder-container-line" style="width: 95%;">
                        <h1>Populações e setores econômicos diretamente afetados por alterações no meio ambiente</h1>
                        <div class="dorder-container-box bg-lgt"></div>
                    </div>
                </div>
            </div>
            <div class="p-3">&nbsp;</div>
        </div>--}}

        <div class="row">

            <div class="col-md-8">

                <p><strong>Data de criação e revogação</strong></p>
                <p>16 de junho de 2020 até 10 de julho de 2019</p>


                <p><strong>Instrumento legal</strong></p>
                <p>{!! $politica->instrumento_legal !!}</p>

                <div class="row">
                    <div class="col-md-6">
                        <p><strong>Medida provisória</strong></p>
                        <p>{{$politica->medida_provisoria}} <br>{{$politica->medida_provisoria_inicio_vigencia}}</p>
                    </div>
                    <div class="col-md-6">
                        <p><strong>Legislacao</strong></p>
                        <p>{{$politica->legislacao}} <br>{{$politica->vigencia_inicio}} à {{$politica->vigencia_fim}}</p>
                    </div>
                </div>

                <p><strong>Ministérios</strong></p>
                <ul>
                    <li>Ministério da Mulher, da Família e dos Direitos Humanos</li>
                    <li>Ministério da Educação</li>
                    <li>Ministério da Cidadania</li>
                    <li>Ministério da Saúde</li>
                    <li>Casa Civil da Presidência da República</li>
                </ul>

                <p><strong>Objetivos</strong></p>
                <p>{!! $politica->objetivos !!}</p>

                <p><strong>Ação Orcamentaria</strong></p>
                <p>{!! $politica->acao_orcamentaria_assoc !!}</p>

                <p><strong>Público Alvo</strong></p>
                <p>{!! $politica->publico_alvo_categ !!}</p>


                <br><br>




            </div>

            <div class="col-md-4">
                <a href="https://mapaosc.ipea.gov.br/arquivos/posts/6732-mrosccovid.pdf" target="_blank">
                    <img src="https://mapaosc.ipea.gov.br/imagens/posts/2279-mrosc-covid.jpg" alt="" width="100%">
                </a>

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
