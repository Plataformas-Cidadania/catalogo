@extends('.layout')
@section('title', 'Áreas temáticas')
@section('content')

    <div class=" bg-lgt">
        <div class="bg-img-l">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <h1>Áreas temáticas</h1>
                        <p>
                            Reunimos neste espaço uma ampla biblioteca de recursos produzidos por organizações governamentais e não-governamentais em torno da agenda pró-equidade. São materiais de intervenção –
                            ideias, casos, cursos, vídeos, ferramentas, publicações, guias, relatos de experiências etc. – que têm como principal objetivo apoiar e estimular a criatividade, a reflexão e a inovação
                            na adoção de medidas que permitam, em cada contexto específico, os avanços necessários para a efetivação da inclusão de todas as pessoas que devem se beneficiar das ofertas de bens e serviços públicos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br><br>


<div class="container">
    {{--<div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>Áreas temáticas</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>--}}

    <div class="container">
        <div class="row">

            @foreach($areas as $area)
                <div class="col-md-3">
                    <a href="area-tematica/{{$area->id}}/{{clean($area->nome)}}">
                        <div class="box-list-icon">
                            <div class="box-list-icon-i">
                                <img src="/img/icones/{{$area->icone}}" alt="" width="100%">
                                {{--<i class="far fa-gem fa-3x"></i>--}}
                            </div>
                            <h2>{{$area->nome}}</h2>
                            <h3>Acessar</h3>
                        </div>
                    </a>
                    <br>
                </div>
                {{--<div class="col-md-3">
                    <a href="area-tematica/{{$area->id}}/{{clean($area->nome)}}">
                        <div class="box-list-icon">
                            <div class="box-list-icon-i"><i class="far fa-gem fa-3x"></i></div>
                            <h2><strong>{{$area->nome}}</strong></h2>
                            <p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>
                            <h3>Acessar</h3>
                        </div>
                    </a>
                    <br>
                </div>--}}
            @endforeach


        </div>
    </div>

    <?php /*?>@foreach($areas as $area)
        <div class="row">
            <a href="/noticia/{{$area->id}}/{{clean($area->title)}}">
                @if(!empty($area->imagem))
                <div class="col-md-3 col-sm-3">
                    <picture>
                        <source srcset="/imagens/notices/sm-{{$area->imagem}}" media="(max-width: 468px)">
                        <source srcset="/imagens/notices/md-{{$area->imagem}}" media="(max-width: 768px)">
                        <source srcset="/imagens/notices/sm-{{$area->imagem}}" class="img-responsive">
                        <img srcset="/imagens/notices/sm-{{$area->imagem}}" alt="Imagem sobre {{$area->title}}," title="Imagem sobre {{$area->title}}," class="align-img" width="100%">
                    </picture>
                </div>
                @endif

                @if(!empty($area->imagem))<div class="col-md-9 col-sm-9">@else<div class="col-md-12 col-sm-12">@endif
                    <h2>{{$area->title}}</h2>
                    <p>{{str_limit(strip_tags($area->description), 180)}}</p>
                    <br>
                    <div class="btn btn-default" style="color: #FFFFFF;">Continue lendo a notícia</div>
                </div>
            </a>
        </div>
        <hr>
    @endforeach
    <div>{{ $areas->links() }}</div>

<?php */?>
</div>
@endsection
