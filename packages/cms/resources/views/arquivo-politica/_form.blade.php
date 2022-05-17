{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(arquivo.titulo) %>", 'ng-model'=>'arquivo.titulo', 'ng-required'=>'true', 'init-model'=>'arquivo.titulo', 'placeholder' => '']) !!}<br>
