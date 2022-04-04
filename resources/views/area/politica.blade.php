@extends('layout')
<?php /*?>@section('title', $area->title)<?php */?>
@section('title', 'Infraestrutura')
@section('content')

    <div class=" bg-lgt">
        <div class="bg-img-l">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <h1>Populações e setores econômicos diretamente afetados por alterações no meio ambiente</h1>
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
                <p>Instrução Normativa</p>

                <div class="row">
                    <div class="col-md-6">
                        <p><strong>Medida provisória</strong></p>
                        <p>908/2019 <br>12 de março de 2019</p>
                    </div>
                    <div class="col-md-6">
                        <p><strong>Legislacao</strong></p>
                        <p>193/2020 <br>16 de junho de 2020 à Não encontrado</p>
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
                <p>Art. 3º São objetivos da Estratégia Nacional de Fortalecimento dos Vínculos Familiares: <br/>
                    I - apoiar, fortalecer e articular as iniciativas existentes no âmbito das competências das políticas coordenadas pelos órgãos do Poder Executivo federal e propor ações e aprimoramentos baseados em evidências e melhores práticas;<br/>
                    II - propor estratégias integradas que possam potencializar a articulação intersetorial, qualificar a atenção aos vínculos familiares no escopo das políticas públicas e potencializar os resultados;<br/>
                    III - promover a avaliação do impacto familiar das políticas, dos programas e das ações em elaboração ou implementados pelos órgãos do Poder Executivo federal, visando à elaboração de proposições que aprimorem a atenção às famílias no âmbito das políticas públicas;<br/>
                    IV - fomentar a pesquisa, a produção e a divulgação de conhecimento acerca da realidade das famílias brasileiras e da relação entre os vínculos familiares e o bem-estar da população; e<br/>
                    V - articular os esforços entre o Governo federal e a sociedade civil, em prol da valorização, do apoio e do fortalecimento dos vínculos familiares.
                </p>

                <p><strong>Ação Orcamentaria</strong></p>
                <p>Ação 20B0 para implantação dos CAPS (2008-2018) e 8585 (MAC) para custeio</p>

                <p><strong>Público Alvo</strong></p>
                <p>Populações e setores econômicos diretamente afetados por alterações no meio ambiente</p>


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
