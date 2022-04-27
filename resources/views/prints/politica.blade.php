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
</head>
<body>
    <div style="clear: both;">
        <img src="/img/logo.png" width="400" style="float:left;"/>
        <img src="/img/logo-ipea.png" width="250" style="float:right;"/>
    </div>
    <div style="clear: both;" class="poContainer">
        <br><br>
        <h1 class="text-center" style="font-size: 25px;">{{substr($politica->ano, 0, 4)}} - {{$politica->nome}}</h1>
        <p class="text-center">{!! $politica->observacao !!}</p><br>
        <h2 class="text-center">Data de criação e revogação <br>{{$politica->vigencia_inicio}} {{$politica->vigencia_fim ? 'até' : ''}} {{$politica->vigencia_fim}}</h2>
        <br>
        <div class="boxContainer">
            <p class="box">
                <strong>Instrumento legal:</strong><br>
                {{$politica->instrumento_legal}}<br>
            </p>
            <p class="box">
                <strong>Medida provisória:</strong><br>
                {{$politica->medida_provisoria}}<br>
                {{$politica->medida_provisoria_inicio_vigencia}}
            </p>
            <p class="box">
                <strong>Legislacao:</strong><br>
                {{$politica->legislacao}}<br>
                {{$politica->vigencia_inicio}}<br>
                {{$politica->vigencia_fim}}
            </p>
        </div>

        <h3 class="text-center">Ministérios</h3>

        <div class="boxContainer">
            @foreach($politica->orgaos as $orgao)
                <div class="box">
                    {{$orgao->nome}}
                </div>
            @endforeach
        </div>



        <div class="boxContainer">
            <p class="box">
                <strong>Objetivos:</strong><br>
                {{$politica->objetivos}}<br>
            </p>
        </div>

        <div class="boxContainer">
            <p class="box">
                <strong>Ação Orcamentaria:</strong><br>
                {{$politica->acao_orcamentaria_assoc}}<br>
            </p>
            <p class="box">
                <strong>Público Alvo:</strong><br>
                {{$politica->publico_alvo_categ}}
            </p>
        </div>

    </div>

<style>
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
        padding:15px;
        border: solid 1px #333333;
    }
</style>
</body>
</html>



