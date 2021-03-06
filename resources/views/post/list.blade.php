@extends('layout')
@section('title', '')
@section('keywords', '')
@section('description', '')
@section('image', '')
@section('content')

    <?php $midia = DB::table('cms.midias')->where('id', $midia_id)->first();?>
    <?php $text = DB::table('cms.texts')->where('slug', 'biblioteca')->first();?>

    <script>
            filtros = null;
            midia_id = '{{$midia_id}}';
    </script>

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






    <div id="listPost"></div>


<style>

    .filter-search{
        background-color: inherit;
        border: 0;
        border-bottom: 1px solid #CCCCCC;
        border-radius: 0;
        padding: 0;
        margin: 0;
        height: 25px;
        width: 100%;
        margin-bottom: 15px;
    }
    .filter-input-icon {
        font-size: 10px;
    }
    .filter-input-icon svg{
        font-size: 15px!important;
        margin-top: -35px!important;
    }
    .btn-remove{
        padding: 5px;
        line-height: 15px;
    }
    .btn-remove:hover{
        background-color: #EA4335;
        border-color: #E82F20;
    }
    .btn-remove svg{
        font-size: 12px;
    }
    .form-control-light{
        background-color: inherit;
        border: 0;
        width: 140px;
    }

    .form-control-light {
        background-color: inherit;
        border: 0;
        width: 140px;
        margin-top: 10px;
    }
    .float-right {
        float: right !important;
    }
</style>

@endsection
