@extends('layout')
@section('title', '')
@section('keywords', '')
@section('description', '')
@section('image', '')
@section('content')

    <?php //$midia = DB::table('cms.midias')->where('id', $category_id)->first();?>
    <?php //$text = DB::table('cms.texts')->where('slug', 'biblioteca')->first();?>

{{--    <div class="container-fluid">
        <div class="p-3">&nbsp;</div>
        <div class="dorder-container">
            <div class="bg-lgt dorder-container-mai">
                <div class="dorder-container-line">
                    <h1>{{$midia->titulo}}</h1>
                    <div class="dorder-container-box bg-lgt"></div>
                </div>
            </div>
        </div>
        <div class="p-3">&nbsp;</div>
    </div>--}}

    {{--<div class=" bg-lgt">
        <div class="bg-img-l">
            <div class="bg-img-r">
                <div class="container pt-5 pb-5 bg-lgt">
                    <div class=" ps-2 pe-2">
                        <h1>{{$midia->titulo}}</h1>
                        <p>{!! $text->descricao !!}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>--}}


    <div class="container">
        <div class="row">
            <table class="table">
                <caption></caption>
                <thead>
                <tr>
                    {{--<th scope="col"></th>--}}
                    <th scope="col">Primeiro</th>
                    <th scope="col">Último</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>

                @foreach($posts as $key =>  $post)
                    <?php $url = $post->url ? $post->url : 'post/' . $post->id . '/' . clean($post->titulo);?>
                    <?php $blank = $post->url ? '_blank' : ''?>
                    <tr>
                        {{--<th scope="row">{{$key+ 1}}</th>--}}
                        <td><a href={{$url}} target={{$blank}}>{{$post->titulo}}</a></td>
                        <td><a href={{$url}} target={{$blank}}>{{$post->data}}</a></td>
                        <td><a href={{$url}} target={{$blank}}> <i class="fas fa-angle-right"></i></a> </td>
                    </tr>
                @endforeach

                </tbody>
            </table>


        </div>
    </div>




@endsection
