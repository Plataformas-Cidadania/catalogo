@extends('layout')
@section('title', $destaques->titulo)
@section('description', $destaques->resumida)
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
                            <h1>{{$destaques->titulo}}</h1>
                            <p>{!! $destaques->descricao !!}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br><br>


        <div id="timeline">&nbsp;</div>
    </div>
@endsection
