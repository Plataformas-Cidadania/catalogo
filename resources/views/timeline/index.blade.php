@extends('layout')
@section('title', 'Timeline')
@section('description', 'Uma plataforma de transparência pública colaborativa, que reúne dados das organizações da sociedade civil de todo o Brasil')
@section('content')
    <div>
        {{--<div class="container-fluid">
            <div class="p-3">&nbsp;</div>
            <div class="dorder-container">
                <div class="bg-lgt dorder-container-mai">
                    <div class="dorder-container-line">
                        <h1>Linhas do Tempo</h1>
                        <div class="dorder-container-box bg-lgt"></div>
                    </div>
                </div>
            </div>
            <div class="p-3">&nbsp;</div>
        </div>--}}
        <div class=" bg-lgt">
            <div class="bg-img-l">
                <div class="bg-img-r">
                    <div class="container pt-5 pb-5 bg-lgt">
                        <div class=" ps-2 pe-2">
                            <h1>Linhas do Tempo</h1>
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


        <div id="timeline">&nbsp;</div>
    </div>
@endsection
