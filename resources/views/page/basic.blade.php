<?php
    $show = $page->show;
    $rota = Route::getCurrentRoute()->uri();

?>
@extends('layout')
@section('title', $page->titulo)
@section('keywords', keywords($page->titulo." ".$page->descricao, 2))
@section('description', description($page->descricao))
@section('image', "/imagens/modulos/lg-".$page->imagem)
@section('content')




    <style>
        .mb-0{
            background-color: #FFFFFF !important;
            font-weight: bold;
            color: #333333;
            margin: 0 0 5px 0 !important;
            border: 0 !important;
        }
        .mb-0:hover{
            background-color: #EEEEEE !important;
        }
        .card {
            border: 0;
            border-radius: 0;
            box-shadow: none !important;
        }
    </style>


    {{--<div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>{{$page->titulo}}</h1>
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
                        <h1>{{$page->titulo}}</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br>
    <div class="container">
        <div class="row">
            @if(count($subMenus)>1)
            <div class="col-md-3">
                <ul class="menu-left">
                    @foreach($subMenus as $menu)
                        <li class="list-group-item-theme @if($menu->slug==$rota) menu-left-active @endif" >
                            <a href="{{$menu->slug}}">{{$menu->titulo}}</a>
                        </li>
                    @endforeach
                        @if($page->tipo_id==3)
                            <li class="list-group-item-theme" >
                                <a href="contato">Fale conosco</a>
                            </li>
                        @endif
                </ul>
            </div>
            @endif
            <div @if(count($subMenus)>1) class="col-md-9" @else class="col-md-12" @endif>
                <article>
                    @if($page->imagem!="")
                    <picture>
                        <source srcset="/imagens/modulos/sm-{{$page->imagem}}" media="(max-width: 468px)">
                        <source srcset="/imagens/modulos/md-{{$page->imagem}}" media="(max-width: 768px)">
                        <source srcset="/imagens/modulos/lg-{{$page->imagem}}" class="img-responsive">
                        <img src="img/loading.gif" data-src="/imagens/modulos/lg-{{$page->imagem}}" alt="Imagem sobre {{$page->titulo}}" title="Imagem sobre {{$page->titulo}}" width="100%" class="img-fluid lazyload">
                    </picture>
                    <br><br>
                    @endif

                    <p tabindex="0">{!! $page->descricao !!}</p>
                    {{--<p data-message="{!! $page->descricao !!}" tabindex="0">{!! $page->descricao !!}</p>--}}


                    @if($rota=="parceiros")
                        <div>
                            @include('page.about.partner')
                        </div>
                    @endif
                    @if($rota=="links")
                        <div>
                            @include('page.about.link')
                        </div>
                    @endif



                    <br>
                </article>
            </div>
        </div>
    </div>

@endsection
