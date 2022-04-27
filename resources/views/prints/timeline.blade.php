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
    <div style="clear: both;">
        <img src="/img/logo.png" width="400" style="float:left;"/>
        <img src="/img/logo-ipea.png" width="250" style="float:right;"/>
    </div>
    <h1 style="clear: both; text-align: center;">{{$area['nome']}}</h1>


    <div class="tmContainer">
        <?php $cont = 0?>
        @foreach($timeline as $ano => $politicas)

            <div class="tmItem">
                <h3>{{$ano}}</h3>
                @foreach($politicas as $politica)
                    <p>{{$politica['nome']}}</p>
                    <hr>
                @endforeach
            </div>
            @if($cont==7)
                <div class="tmBreak">&nbsp;</div>
            @endif
                <?php $cont++?>

                <?php if($cont==8){
                    $cont = 0;
                }?>
        @endforeach
    </div>



<style>
    body{
        font-family: arial, helvetica, sans-serif;
    }
    .tmContainer{
        display: flex;
        flex-wrap: wrap;
        clear: both;

    }
    .tmContainer h3{
        border-bottom: 2px solid #333333;
        text-align: center;
        padding: 5px 0;
    }
    .tmItem{
        min-width: 200px;
        padding: 10px;
        flex: 5;
        font-size: 13px;
    }
    .tmItem hr{
        margin: 7px 0;
        padding: 0;
    }
    .tmItem p{
        margin: 0;
        padding: 0;
    }


    @media print{

        @page{
            size: landscape;
        }

        /*.tmItem hr:last-child{
            page-break-after: always;
        }*/

        .tmBreak{
            page-break-after: always;
            /*background-color: red;
            width:100%;
            height: 5px;
            border-bottom: 1px solid red;*/
        }

        #image-example{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }

    }
</style>
</body>
</html>



