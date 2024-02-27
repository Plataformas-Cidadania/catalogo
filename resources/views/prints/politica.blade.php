<?php
    $rota = Route::getCurrentRoute()->uri();
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$politica->nome}}</title>
    <script>
        window.print();
    </script>
</head>
<body>
    <div class="bg-politica"></div>
    <div style="clear: both;">
        <img src="/img/logo.png" width="280" style="float:left;"/>
        <img src="/img/logo-ipea.png" width="250" style="float:right; margin: 15px 20px 0 0;"/>
    </div>
    <div style="clear: both;" class="poContainer">
        <br>

        <div class="row">
            <div class="bg-title1">{{substr($politica->ano, 0, 4)}}</div>
            <div class="bg-title2">{{$politica->nome}}</div>
        </div>
        <div>
            <h3 class="text-center">Data de criação e revogação {{$politica->vigencia_inicio ? formatBr($politica->vigencia_inicio, 'num') : 'Não encontrada'}} {{$politica->vigencia_fim ? 'até ' . formatBr($politica->vigencia_fim, 'num') : ''}}</h3>
        </div>
        <div class="row">

            @if($politica->medida_provisoria != 'Não se aplica')
                <div class="col">
                    <p>Medida provisória:</p>
                    <h2>{{$politica->medida_provisoria}} </h2>
                    @if($politica->medida_provisoria_inicio_vigencia != "Não se aplica")
                        <p>Data: {{$politica->medida_provisoria_inicio_vigencia}}</p>
                    @endif
                </div>
            @endif

            @if($politica->instrumento_legal != 'Não se aplica')
                <div class="col">
                    <p>Legislacao:</p>
                    <h2>{{$politica->instrumento_legal}} - {{$politica->legislacao}}</h2>
                </div>
            @endif

            <div class="col">
                <p>&nbsp;</p>
            </div>

            <div class="col">
                <img src="/uploads/{{$area->icone}}" alt="" width="180" class="imgColor">
            </div>
        </div>


        <div class="boxContainer">
            <p class="box">
                <strong>Objetivos:</strong><br><br>
                {!! $politica->objetivos !!}<br>
            </p>
        </div>


        <div class="row">
            <div class="col">
                <strong>Público alvo legislação:</strong><br>
                {!! $politica->publico_alvo_legislacao !!}
                <br><br><br>

                <strong>Público alvo agregado:</strong>
                @foreach($politica->politica_publico_alvo as $key => $politica_publico_alvo)
                    @if($key)<hr>@endif
                    <p>{{$politica_publico_alvo['publico_alvo']['nome']}}</p>
                @endforeach
            </div>
            <div class="col">
                <div class="bg">
                    <p class="line-title">Grande área</p>
                    <h3 class="line"><strong>{{$grande_area->nome}}</strong></h3>
                </div>
                <div class="bg mt">
                    <p class="line-title">Área temática</p>
                    <h3 class="line"><strong>{{$area->nome}}</strong></h3>
                </div>
                <div class="bg mt">
                    <p class="line-title">Subárea</p>
                    @foreach($politica->politica_categoria as $key => $categorias)
                        @if($key)<hr>@endif
                            <p class="line"><strong>{{$categorias['categoria']['nome']}}</strong></p>
                    @endforeach

                </div>

            </div>
        </div>



        <div class="row break">
            <div class="bg-title2">Ministérios</div>
            <div class="boxContainer" style="margin: 15px 15px 15px 15px;">
                @foreach($politica->orgaos as $orgao)
                    <div class="box" style="min-width: 350px;">
                        {{$orgao->nome}}
                    </div>
                @endforeach
            </div>
        </div>

        @if($politica->observacao)
            <div>
                <p class="line-title"><strong>Observação</strong></p>
                <p class="" style="padding: 0 15px">{!! $politica->observacao !!}</p>
            </div>
        @endif


    </div>

<style>

    .break{
        page-break-before: always;
        page-break-inside: avoid;
    }
    .mt{
        margin-top: 6px;
    }
    .line-title{
        border-bottom: 3px solid #DD4A4D;
        padding: 0 15px 15px 15px;
    }
    .line{
        padding: 0 15px 0 15px;
    }
    .row{
        padding: 15px;
        display: flex;
    }
    .col{
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    .col h2{
        margin: 0;
    }
    .bg-title1 {
        font-weight: bold;
        display: flex;
        justify-content: center;
        flex: 3;
        background-color: #00A99C;
        text-align: center;
        font-size: 30px;
        color: #fff;
        padding: 10px;
    }

    .bg-title2 {
        font-size: 25px;
        flex: 9;
        background-color: #DD4A4D;
        color: #fff;
        padding: 10px;
    }

    body{
        font-family: arial, helvetica, sans-serif;
    }
    .text-center{
        text-align: center;
    }

    .boxContainer{
        display: flex;
        flex-wrap: wrap;
    }
    .box{
        flex:5;
        /*min-height: 80px;*/
        padding:0 15px 20px 15px;
    }
    .bg{
        background-color: #EDEDED;
    }
    body {
        -webkit-print-color-adjust: exact;
    }
    .imgColor{
        filter: invert(1);
        float: right;
        padding: 10px;
    }

    .bg-politica{
        background-image: url("/uploads/{{$area->icone}}");
        filter: brightness(0.6);
        width: 600px;
        height: 600px;
        position: absolute;
        z-index: 0;
        left: -20%;
        opacity: 0.1;
        top: 20%;
    }

    @page {
        margin: 0;
    }
</style>
</body>
</html>



