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
    <title>{{$area['nome']}}</title>
</head>
<body>
    <h1>{{$area['nome']}}</h1>
    @foreach($timeline as $ano => $politicas)
        <h3>{{$ano}}</h3>
        @foreach($politicas as $politica)
            <p>{{$politica['nome']}}</p>
        @endforeach

    @endforeach
</body>
</html>



