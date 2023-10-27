{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(midia.titulo) %>", 'ng-model'=>'midia.titulo', 'ng-required'=>'true', 'init-model'=>'midia.titulo', 'placeholder' => '']) !!}<br>

{!! Form::label('tipo', 'Tipo') !!}<br>
{!! Form::select('tipo',
        array(
            '0' => 'Lista',
            '1' => 'Tabela',
        ),
null, ['class'=>"form-control width-medio <% validar(midia.tipo) %>", 'ng-model'=>'midia.tipo', 'init-model'=>'midia.tipo', 'placeholder' => 'Sem Tipo']) !!}<br>
