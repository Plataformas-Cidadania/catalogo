@extends('layout')
@section('title', '')
@section('keywords', '')
@section('description', '')
@section('image', '')
@section('content')


    <?php
    $hr = date(" H ");
    if($hr >= 12 && $hr<18) {
        $resp = "Boa tarde!";}
    else if ($hr >= 0 && $hr <12 ){
        $resp = "Bom dia!";}
    else {
        $resp = "Boa noite!";}
    ?>

    <div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>Contato</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>


    <div id="mapa"></div>
    <br><br>
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-12">
                        <strong>{{$resp}} Prezado usuário,</strong><br><br>
                        <p>{!!$setting->descricao_contato!!}</p>
                    </div>
                    <div class="col-md-12">
                        <br>
                        <div id="contact"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="dorder-container">
                    <address class="bg-lgt2 p-3">
                        <div class="bg-lgt box-list-i text-center m-3 me-4" style="float: left;">
                            <i class="fas fa-map-marker-alt fa-3x"></i>
                        </div>
                        <strong>{{$setting->endereco_titulo}}</strong>
                        <br>
                        <div>
                            {{$setting->endereco}} {{$setting->numero}} - {{$setting->complemento}}<br>
                            {{$setting->bairro}} - {{$setting->cidade}} - {{$setting->estado}}<br>
                            CEP.: {{$setting->cep}}<br>
                            <i class="fas fa-envelope"></i> {{$setting->email}}
                        </div>
                    </address>
                </div>
                <div class="dorder-container">
                    <address class="bg-lgt2 p-3">
                        <div class="bg-lgt box-list-i text-center m-3 me-4" style="float: left;">
                            <i class="fas fa-map-marker-alt fa-3x"></i>
                        </div>
                        <strong>{{$setting->endereco_titulo2}}</strong>
                        <br>
                        <div>
                            {{$setting->endereco2}} {{$setting->numero2}} - {{$setting->complemento2}}<br>
                            {{$setting->bairro2}} - {{$setting->cidade2}} - {{$setting->estado2}}<br>
                            CEP.: {{$setting->cep2}}<br>
                            <i class="fas fa-envelope"></i> {{$setting->email}}
                        </div>
                    </address>
                </div>
                <div>
                    <img src="/img/bg-top.png" alt="" width="70%" class="float-end">
                </div>
            </div>

        </div>
    </div>
    <br><br><br><br><br>
    <style>
        #mapa {
            width: 100%;
            height: 400px;
        }
    </style>
    <br>

@endsection
