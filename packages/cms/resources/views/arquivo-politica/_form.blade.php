<label for="tipo">Tipo</label>
<select class="form-control width-medio" name="tipo" id="tipo" ng-model="arquivo.tipo" ng-init="arquivo.tipo = '0'">
    <option value="0">Arquivo</option>
    <option value="1">Url Externa</option>
</select><br>


{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(arquivo.titulo) %>", 'ng-model'=>'arquivo.titulo', 'ng-required'=>'true', 'init-model'=>'arquivo.titulo', 'placeholder' => '']) !!}<br>

<div ng-show="arquivo.tipo == 1">
    {!! Form::label('url_externa', 'Url Externa *') !!}<br>
    {!! Form::text(
        'url_externa', null, [
            'class'=>"form-control width-grande <% validar(arquivo.url_externavv) %>",
            'ng-model'=>'arquivo.url_externa',
            'ng-required'=>'arquivo.tipo == 1',
            'init-model'=>'arquivo.url_externa',
            'placeholder' => ''
        ]) !!}<br>
</div>

