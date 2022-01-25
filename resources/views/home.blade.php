@extends('layout')
@section('title', 'Seja bem-vind@')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')

    <div class="p-3">&nbsp;</div>
    <div id="home">&nbsp;</div>


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
                <div class="box bg-sec">
                    <i class="far fa-gem fa-4x m-5"></i>
                    <h2>Linhas do tempo</h2>
                    <p>Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público</p>
                </div>
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



    <div class="p-3">&nbsp;</div>
    <div class="bg-lgt bg-lines">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="owl-carousel owl-theme">

                        <a href="">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="img/d1.png" alt="" title="" width="100%"  style="padding: 5rem">
                                </div>
                                <div class="col-md-8">
                                    <div style="padding: 8rem">
                                        <h2>“Amei! Me ajudou muito! Me fez enxergar questões que não via antes!” </h2>
                                        <h3>Maria lima</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="img/d2.png" alt="" title="" width="100%"  style="padding: 5rem">
                                </div>
                                <div class="col-md-8">
                                    <div style="padding: 8rem">
                                        <h2>“Amei! Me ajudou muito! Me fez enxergar questões que não via antes!” </h2>
                                        <h3>Maria lima</h3>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    </div>




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

<script>

    $(document).ready(function() {
        var owl = $('.customMn');
        owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            autoplay:true,
            dots: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            autoplayTimeout:15000,
            responsive: {
                0: {
                    items: 5
                },
                600: {
                    items: 8
                },
                1000: {
                    items: 4
                }
            }
        });
    })

</script>

@endsection
