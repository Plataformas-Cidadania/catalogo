@extends('layout')
@section('title', '')
@section('keywords', '')
@section('description', '')
@section('image', '')
@section('content')

    <?php $midia = DB::table('cms.midias')->where('id', $midia_id)->first();?>
    <?php $text = DB::table('cms.texts')->where('slug', 'biblioteca')->first();?>

    <div class=" bg-lgt">
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
    <br>

    <div class="container">
        <div class="row">
            @foreach($categories as $category)
                <div class="col-md-4" >
                    <div class="bg-lgt p-3 mb-4 linsLeft">
                        <a href="posts-tabela/{{$category->id}}/{{clean($category->titulo)}}" style="display: block; min-height: 80px">
                            <div class="m-0">
                                <strong>{{$category->titulo}}</strong><br>
                            </div>
                        </a>
                    </div>
                </div>
            @endforeach
        </div>
    </div>










@endsection
