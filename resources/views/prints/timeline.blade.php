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
    <title>{{$timeline->nome}}</title>
</head>
<body>
    <h1>{{$timeline->nome}}</h1>
    <p>{{$timeline->ano}}</p>
    <p>{{$timeline->medida_provisoria}}</p>
    <p>{{$timeline->medida_provisoria_inicio_vigencia}}</p>
    <p>{{$timeline->legislacao}}</p>
    <p>{{$timeline->vigencia_inicio}}</p>
    <p>{{$timeline->vigencia_fim}}</p>
    <p>{{$timeline->objetivos}}</p>
    <p>{{$timeline->observacao}}</p>
    <p>{{$timeline->acao_orcamentaria_assoc}}</p>
    <p>{{$timeline->instrumento_legal}}</p>
    <p>{{$timeline->publico_alvo_categ}}</p>

</body>
</html>



