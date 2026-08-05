{{--{!! Form::label('idioma_id', 'Idioma *') !!}<br>
{!! Form::select('idioma_id',
        $idiomas,
null, ['class'=>"form-control width-medio <% validar(modulo.idioma_id) %>", 'ng-model'=>'modulo.idioma_id', 'ng-required'=>'true', 'init-model'=>'modulo.idioma_id', 'placeholder' => 'Selecione']) !!}<br>--}}
{!! Form::label('tipo_id', 'Tipo') !!}<br>
{!! Form::select('tipo_id',
        $tipos,
null, ['class'=>"form-control width-medio <% validar(modulo.tipo_id) %>", 'ng-model'=>'modulo.tipo_id', 'init-model'=>'modulo.tipo_id', 'placeholder' => 'Sem Tipo']) !!}<br>


{!! Form::label('titulo', 'Titulo *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(modulo.titulo) %>", 'ng-model'=>'modulo.titulo', 'ng-required'=>'true', 'init-model'=>'modulo.titulo', 'placeholder' => '']) !!}<br>

{!! Form::label('resumida', 'Chamada') !!}<br>
{!! Form::text('resumida', null, ['class'=>"form-control width-grande <% validar(modulo.resumida) %>", 'ng-model'=>'modulo.resumida', 'init-model'=>'modulo.resumida', 'placeholder' => '']) !!}<br>

{!! Form::label('slug', 'slug') !!}<br>
{!! Form::text('slug', null, ['class'=>"form-control width-medio <% validar(modulo.slug) %>", 'ng-model'=>'modulo.slug', 'init-model'=>'modulo.slug', 'placeholder' => '']) !!}<br>

{!! Form::label('url', 'URL') !!}<br>
{!! Form::text('url', null, ['class'=>"form-control width-grande <% validar(modulo.url) %>", 'ng-model'=>'modulo.url', 'init-model'=>'modulo.url', 'placeholder' => 'https://...']) !!}<br>

{!! Form::label('posicao', 'Posicao *') !!}<br>
{!! Form::number('posicao', null, ['class'=>"form-control width-pequeno <% validar(modulo.posicao) %>", 'ng-model'=>'modulo.posicao', 'ng-required'=>'true', 'init-model'=>'modulo.posicao', 'placeholder' => '']) !!}<br>

{!! Form::label('descricao', 'Descricao *') !!}<br>
{!! Form::textarea('descricao', null, ['class'=>"form-control width-grande <% validar(modulo.descricao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'modulo.descricao', 'init-model'=>'modulo.descricao']) !!}<br>

{!! Form::label('show', 'Show') !!}<br>
{!! Form::select('show',
        array(
            '0' => 'Oculto',
            '1' => 'Visivel',
            '2' => 'Colunas',
        ),
null, ['class'=>"form-control width-medio <% validar(modulo.show) %>", 'ng-model'=>'modulo.show', 'init-model'=>'modulo.show', 'placeholder' => 'Sem Tipo']) !!}<br>

{!! Form::label('ativo', 'Ativo') !!}<br>
{!! Form::select('ativo',
        array(
            '1' => 'Sim',
            '0' => 'Nao',
        ),
null, ['class'=>"form-control width-medio <% validar(modulo.ativo) %>", 'ng-model'=>'modulo.ativo', 'init-model'=>'modulo.ativo']) !!}<br>
