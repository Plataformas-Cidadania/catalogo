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
    <h1>{{$politica->nome}}</h1>
    <p>{{$politica->ano}}</p>
    <p>{{$politica->medida_provisoria}}</p>
    <p>{{$politica->medida_provisoria_inicio_vigencia}}</p>
    <p>{{$politica->legislacao}}</p>
    <p>{{$politica->vigencia_inicio}}</p>
    <p>{{$politica->vigencia_fim}}</p>
    <p>{{$politica->objetivos}}</p>
    <p>{{$politica->observacao}}</p>
    <p>{{$politica->acao_orcamentaria_assoc}}</p>
    <p>{{$politica->instrumento_legal}}</p>
    <p>{{$politica->publico_alvo_categ}}</p>

</body>
</html>



