@extends('.layout')
@section('title', 'Áreas temáticas')
@section('content')


<div class="container">
    <div class="box-title">
        <br>
        <h1 aria-label="Áreas temáticas">Áreas temáticas</h1>
        <br>
        <hr class="hr-title">
        <div class="line-general line-general-little bg-pri"></div>
        <br>
    </div>
    <br>

    <div class="container">
        <div class="row">

            <div class="col-md-3">
                <a href="area-tematica/1/titulo">
                    <div class="box-list-icon">
                        <div class="box-list-icon-i"><i class="far fa-gem fa-3x"></i></div>
                        <h2><strong>Infraestrutura</strong></h2>
                        <p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>
                        <h3>Acessar</h3>
                    </div>
                </a>
                <br>
            </div>

            <div class="col-md-3">
                <a href="area-tematica/1/titulo">
                    <div class="box-list-icon">
                        <div class="box-list-icon-i"><i class="far fa-gem fa-3x"></i></div>
                        <h2><strong>Infraestrutura</strong></h2>
                        <p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>
                        <h3>Acessar</h3>
                    </div>
                </a>
                <br>
            </div>

            <div class="col-md-3">
                <a href="area-tematica/1/titulo">
                    <div class="box-list-icon">
                        <div class="box-list-icon-i"><i class="far fa-gem fa-3x"></i></div>
                        <h2><strong>Infraestrutura</strong></h2>
                        <p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>
                        <h3>Acessar</h3>
                    </div>
                </a>
                <br>
            </div>

            <div class="col-md-3">
                <a href="area-tematica/1/titulo">
                    <div class="box-list-icon">
                        <div class="box-list-icon-i"><i class="far fa-gem fa-3x"></i></div>
                        <h2><strong>Infraestrutura</strong></h2>
                        <p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>
                        <h3>Acessar</h3>
                    </div>
                </a>
                <br>
            </div>




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