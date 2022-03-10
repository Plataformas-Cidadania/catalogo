{{--<div style="display: none;">
{!! Form::label('idioma_id', 'Idioma *') !!}<br>
{!! Form::select('idioma_id',
        $idiomas,
null, ['class'=>"form-control width-medio <% validar(url.idioma_id) %>", 'ng-model'=>'url.idioma_id', 'init-model'=>'url.idioma_id']) !!}<br>
</div>--}}


{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(url.titulo) %>", 'ng-model'=>'url.titulo', 'ng-required'=>'true', 'init-model'=>'url.titulo', 'placeholder' => '']) !!}<br>

{!! Form::label('descricao', 'Descrição') !!}<br>
{!! Form::textarea('descricao', null, ['class'=>"form-control width-grande <% validar(url.descricao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'url.descricao', 'init-model'=>'url.descricao']) !!}<br>

{!! Form::label('url', 'Url*') !!}<br>
{!! Form::text('url', null, ['class'=>"form-control width-grande <% validar(url.url) %>", 'ng-model'=>'url.url', 'ng-required'=>'true',  'init-model'=>'url.url', 'placeholder' => '']) !!}<br>

{!! Form::label('posicao', 'Posição *') !!}<br>
{!! Form::number('posicao', null, ['class'=>"form-control width-pequeno <% validar(url.posicao) %>", 'ng-model'=>'url.posicao', 'ng-required'=>'true', 'init-model'=>'url.posicao', 'placeholder' => '']) !!}<br>
