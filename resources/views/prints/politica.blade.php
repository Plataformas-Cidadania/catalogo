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
    <div style="clear: both;">
        <img src="/img/logo.png" width="400" style="float:left;"/>
        <img src="/img/logo-ipea.png" width="250" style="float:right;"/>
    </div>
    <div style="clear: both;" class="poContainer">
        <br><br>
        <h1 class="text-center" style="font-size: 25px;">{{substr($politica->ano, 0, 4)}} - {{$politica->nome}}</h1>
        {{--<p class="text-center">{!! $politica->observacao !!}</p><br>--}}
        <h3 class="text-center">Data de criação e revogação <br>{{formatBr($politica->vigencia_inicio, 'num')}} {{$politica->vigencia_fim ? 'até' : ''}} {{formatBr($politica->vigencia_fim, 'num')}}</h3>
        <br>
        <div class="boxContainer">
            <div class="box">
                Instrumento legal:<br>
                <h2>{{$politica->instrumento_legal}}</h2><br>
            </div>
            {{--<p class="box">
                <strong>Medida provisória:</strong><br>
                {{$politica->medida_provisoria}}<br>
                {{$politica->medida_provisoria_inicio_vigencia}}
            </p>--}}
            <div class="box">
                Legislacao:<br>
                <h2>{{$politica->legislacao}}</h2>
                {{formatBr($politica->vigencia_inicio, 'num')}} até {{formatBr($politica->vigencia_fim, 'num')}}
            </div>
        </div>

        <div class="boxContainer">
            <p class="box">
                <strong>Objetivos:</strong><br><br>
                {{$politica->objetivos}}<br>
            </p>
        </div>



        <div class="boxContainer">
            <p class="box">
                <strong>Público alvo agregado:</strong><br><br>
                {{$politica->acao_orcamentaria_assoc}}<br>
            </p>
            <p class="box">
                <strong>Público alvo legislação:</strong><br><br>
                {{$politica->publico_alvo_legislacao}}
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
        border-bottom: solid 1px #CCCCCC;
    }
</style>
</body>
</html>



