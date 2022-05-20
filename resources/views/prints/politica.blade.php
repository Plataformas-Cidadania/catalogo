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
        //window.print();
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
            <h3 class="text-center">Data de criação e revogação {{formatBr($politica->vigencia_inicio, 'num')}} {{$politica->vigencia_fim ? '' : 'até'}} {{formatBr($politica->vigencia_fim, 'num')}}</h3>
        </div>
        <div class="row">
            <div class="col">
                <p>Instrumento legal:</p>
                <h2>{{$politica->instrumento_legal}}</h2>
            </div>
            <div class="col">
                <p>Legislacao:</p>
                <h2>{{$politica->legislacao}}</h2>
            </div>
            <div class="col">
                <img src="/uploads/{{$area->icone}}" alt="" width="180" class="imgColor">
            </div>
        </div>


        <div class="boxContainer">
            <p class="box">
                <strong>Objetivos:</strong><br><br>
                {{$politica->objetivos}}<br>
            </p>
        </div>


        <div class="row">
            <div class="col">
                <strong>Público alvo agregado:</strong><br><br>
                {{$politica->acao_orcamentaria_assoc}}<br>
                <br>
                <strong>Público alvo legislação:</strong><br><br>
                {{$politica->publico_alvo_legislacao}}
            </div>
            <div class="col">
                <div class="bg">
                    <p>Grande área</p>
                    <h2></h2>
                </div>
            </div>
        </div>



        <h3 class="text-center">Ministérios</h3>

        <div class="boxContainer">
            @foreach($politica->orgaos as $orgao)
                <div class="box">
                    {{$orgao->nome}}
                </div>
            @endforeach
        </div>

    </div>

<style>
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
    }
    .box{
        flex:3;
        min-height: 80px;
        padding:0 15px 30px 15px;
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



