@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')


    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="box bg-pri">
                    <i class="far fa-gem fa-4x m-5"></i>
                    <h2>Áreas temáticas</h2>
                    <p>Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público</p>
                </div>
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
                <div class="box bg-ter">
                    <i class="far fa-gem fa-4x m-5"></i>
                    <h2>Consulta</h2>
                    <p>Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público</p>
                </div>
            </div>
        </div>
    </div>


    <br><br>
    <div class="bg-lgt">
        <MixedChart id='mix-chart1'  series="" labels=""/>
    </div>



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

            <div class="col-md-3">
                <div class="box-list-icon">
                    <div class="box-list-icon-i"><i class="far fa-gem fa-3x"></i></div>
                    <h2><strong>Infraestrutura</strong></h2>
                    <p>Apesar de constituírem um elemento básico de organização da atuação governamental</p>
                    <h3>Acessar</h3>
                </div>
                <br>
            </div>


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
                    <object data="img/sem-imagem.png" type="image/png">
                        <picture>
                            <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" media="(max-width: 468px)">
                            <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" media="(max-width: 768px)">
                            <source data-src="/imagens/parceiros/md-{{$partner->imagem}}" class="img-responsive">
                            <img src="/img/pre-img.gif" data-src="/imagens/parceiros/md-{{$partner->imagem}}" alt="Imagem sobre {{$partner->title}}" title="Imagem sobre {{$partner->title}}" width="100%" class="cliente-list-img-hover lazyload">
                        </picture>
                    </object>
                </div>
            @endforeach
        </div>
    </div>
    <br><br>


@endsection
