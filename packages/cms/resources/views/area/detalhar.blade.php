@extends('cms::layouts.app')

@section('content')
    {!! Html::script(config('app.url').'assets-cms/js/controllers/alterarAreaCtrl.js') !!}
    <div ng-controller="alterarAreaCtrl">
        <div class="box-padrao">
            <h1><a href="cms/areas"><i class="fa fa-arrow-circle-left"></i></a>&nbsp;&nbsp;Area</h1>
            <?php //print_r($area);?>
            <div ng-init="carregaImagem('{{$area->imagem}}', '{{$area->arquivo}}'); detalhar({{$area->id}})">
                <span class="texto-obrigatorio">* campos obrigatórios</span><br><br>
                {!! Form::model($area, ['name' =>'form']) !!}

                {{---------------------Ícone-----------------------}}
                <div class="container-thumb">
                    <div class="box-thumb" name="fileDrop" ngf-drag-over-class="'box-thumb-hover'" ngf-drop ngf-select ng-model="icone"
                         ng-show="!icone && !iconeBD" accept="image/*" ngf-max-size="2MB">Solte uma imagem aqui!</div>
                    <img ng-show="icone" ngf-thumbnail="icone" class="thumb">
                    <img ng-show="iconeBD" class="thumb" ng-src="uploads/<% iconeBD %>">
                </div>
                <br>
                <span class="btn btn-primary btn-file" ng-show="!icone && !iconeBD">
                    Escolher Ícone <input  type="file" ngf-select ng-model="icone" name="file" accept="image/*" ngf-max-size="2MB" ngf-model-invalid="errorFile">
                </span>
                <button class="btn btn-danger" ng-click="limparIcone()" ng-show="icone || iconeBD" type="button" >Remover Ícone</button>
                <i ng-show="form.file.$error.maxSize" style="margin-left: 10px;">Arquivo muito grande <% errorFile.size / 1000000|number:1 %>MB: máximo 2MB</i>
                <br><br>
                {{-------------------------------------------------------------}}

                {{---------------------Imagem do Arquivo-----------------------}}
                <div class="container-thumb">
                    <div class="box-thumb" name="fileDrop2" ngf-drag-over-class="'box-thumb-hover'" ngf-drop ngf-select ng-model="picFile"
                         ng-show="!picFile && !imagemBD" accept="image/*" ngf-max-size="2MB">Solte uma imagem aqui!</div>
                    <img ng-show="picFile" ngf-thumbnail="picFile" class="thumb">
                    <img ng-show="imagemBD" class="thumb" ng-src="uploads/<% imagemBD %>">
                </div>
                <br>
                <span class="btn btn-primary btn-file" ng-show="!picFile && !imagemBD">
                    Escolher Imagem Arquivo <input  type="file" ngf-select ng-model="picFile" name="file" accept="image/*" ngf-max-size="2MB" ngf-model-invalid="errorFile">
                </span>
                <button class="btn btn-danger" ng-click="limparImagem()" ng-show="picFile || imagemBD" type="button" >Remover Imagem Arquivo</button>
                <i ng-show="form.file.$error.maxSize" style="margin-left: 10px;">Arquivo muito grande <% errorFile.size / 1000000|number:1 %>MB: máximo 2MB</i>
                <br><br>
                {{-------------------------------------------------------------}}

                <span class="btn btn-primary btn-file" ng-show="!fileArquivo && !arquivoBD">
                    Escolher Arquivo <input  type="file" ngf-select ng-model="fileArquivo" name="fileArquivo" accept="application/pdf,.zip,.rar,.doc,.docx,.xlsx,.xls" ngf-max-size="100MB" ngf-model-invalid="errorFile">
                </span>
                <button class="btn btn-danger" ng-click="limparArquivo()" ng-show="fileArquivo || arquivoBD" type="button">Remover Arquivo</button>
                <a href="uploads/<% arquivoBD %>" target="_blank" ng-show="arquivoBD"><% arquivoBD %></a>
                <a ng-show="fileArquivo"><% fileArquivo.name %></a>
                {{--<br><br>--}}

                <br><br>
                @include('cms::area._form')
                <input type="hidden" name="id" ng-model="id" ng-init="id='{{$area->id}}'"/>
                <div class="row">
                    <div class="col-md-1 col-lg-1 col-xs-3">
                        <br>
                        <button class="btn btn-info" type="button" ng-click="alterar(picFile, fileArquivo, icone)" ng-disabled="form.$invalid && form.area.$dirty">Salvar</button>
                    </div>
                    <div class="col-md-2 col-lg-2 col-xs-6">
                        <span class="progress" ng-show="picFile.progress >= 0">
                            <div style="width: <% picFile.progress %>%" ng-bind="picFile.progress + '%'"></div>
                        </span>
                        <div ng-show="processandoSalvar"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                        <div><% mensagemSalvar %></div>
                        <span ng-show="picFile.result">{{--Upload Successful--}}</span>
                        <span class="err" ng-show="errorMsg"><% errorMsg %></span>
                    </div>
                    <div class="col-md-9 col-xs-3"></div>
                </div>
                <br><br><br>


                {!! Form::close()!!}
            </div>
        </div>
    </div>
@endsection
