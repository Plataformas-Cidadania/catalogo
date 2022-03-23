@extends('layout')
<?php /*?>@section('title', $area->title)<?php */?>
@section('title', 'Infraestrutura')
@section('content')


    <div class="container">

        <div class="box-title">
            <br>
            <h1 aria-label="Infraestrutura" style="font-size: 30px;">Infraestrutura</h1>
            <br>
            <hr class="hr-title">
            <div class="line-general line-general-little bg-pri"></div>
            <br>
        </div>

        <div class="row">
            <div class="col-md-8">
                Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente
                o debate público sobre a realidade dos países, e de serem objeto de análise de inúmeros estudos e pesquisas desenvolvidos nas mais variadas áreas do conhecimento, não há, assim como observado em diferentes fenômenos das ciências
                humanas, uma definição única sobre o que são políticas públicas. A diversidade polissêmica adotada para caracterizar
                as políticas públicas está relacionada às múltiplas possibilidades de compreensão de seus aspectos – por exemplo, seu
                papel, formas de produção e etapas constitutivas, potencial de provocar mudanças na sociedade ou, ainda, como são
                influenciadas pelos diferentes atores que compõem a ação política, entre outras questões <br><br>

                A diversidade polissêmica adotada para caracterizar
                as políticas públicas está relacionada às múltiplas possibilidades de compreensão de seus aspectos – por exemplo, seu
                papel, formas de produção e etapas constitutivas, potencial de provocar mudanças na sociedade ou, ainda, como são
                influenciadas pelos diferentes atores que compõem a ação política, entre outras questões.
                <br><br>
            </div>
            <div class="col-md-4">
                <a href="https://mapaosc.ipea.gov.br/arquivos/posts/6732-mrosccovid.pdf" target="_blank">
                    <img src="https://mapaosc.ipea.gov.br/imagens/posts/2279-mrosc-covid.jpg" alt="" width="100%">
                </a>

            </div>

            <div class="col-md-3">
                <h2>Lista de políticas</h2>
                <ul class="menu-left">
                    <li class="list-group-item-theme">
                        <a href="politica/1/titulo">
                            <h2>1953</h2>
                            <p>Política Nacional do Petróleo</p>
                            <p>Ministério da Economia</p>
                            <p>subárea</p>
                        </a>
                    </li>
                </ul>

            </div>
            <div class="col-md-9">
                <h2>Linha do tempo</h2>
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
