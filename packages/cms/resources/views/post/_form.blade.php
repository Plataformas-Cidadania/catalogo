@if(!empty($categoria_id))
{!! Form::hidden('categoria_id', $categoria_id, ['class'=>"form-control width-grande <% validar(post.categoria_id) %>", 'ng-model'=>'post.categoria_id', 'ng-required'=>'true', 'init-model'=>'post.categoria_id', 'placeholder' => '']) !!}<br>
@endif

<label for="data">Data *</label><br>
<input type="date" name="data" class="form-control width-medio <% validar(post.data) %>" ng-model="post.data" ng-required="true" @if(!empty($post))ng-init="post.data=stringToDate('{{$post->data}}')"@endif ><br>

{!! Form::label('titulo', 'Título *') !!}<br>
{!! Form::text('titulo', null, ['class'=>"form-control width-grande <% validar(post.titulo) %>", 'ng-model'=>'post.titulo', 'ng-required'=>'true', 'init-model'=>'post.titulo', 'placeholder' => '']) !!}<br>

{!! Form::label('resumida', 'Descrição resumida ') !!}<br>
{!! Form::textarea('resumida', null, ['class'=>"form-control width-grande <% validar(post.resumida) %>", 'ng-model'=>'post.resumida',   'init-model'=>'post.resumida', 'placeholder' => '']) !!}<br>

{!! Form::label('descricao', 'Descrição ') !!}<br>
{!! Form::textarea('descricao', null, ['class'=>"form-control width-grande <% validar(post.descricao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'post.descricao', 'init-model'=>'post.descricao']) !!}<br>


{{--@if(!empty($authors))--}}
    <p><strong>Autores</strong></p>
    @foreach($authors as $id => $integrante)
        <div class="checkbox-inline">
            {!! Form::checkbox('integrante'.$id, true, null, ['class'=>"checkbox-inline width-grande <% validar(integrante_post.integrante_$id) %>", 'ng-model'=>"integrante_post.integrante_$id", 'init-model'=>"integrante_post.integrante_$id", 'style'=>"width: 30px; height: 30px;"]) !!}
            {!! Form::label('integrante'.$id, $integrante, ['style'=>"padding: 8px 20px 0 20px;"]) !!}
        </div>
    @endforeach
    <br><br>
{{--@endif--}}

{!! Form::label('video', 'Vídeo') !!}<br>
{!! Form::text('video', null, ['class'=>"form-control width-grande <% validar(post.video) %>", 'ng-model'=>'post.video', 'init-model'=>'post.video', 'placeholder' => '']) !!}<br>

{!! Form::label('url', 'Link') !!}<br>
{!! Form::text('url', null, ['class'=>"form-control width-grande <% validar(post.url) %>", 'ng-model'=>'post.url', 'init-model'=>'post.url', 'placeholder' => '']) !!}<br>

{!! Form::label('image_detail', 'Imagem na página de detalhes? *', ['ng-required'=>'true']) !!}<br>
{!! Form::select('image_detail',
        array(
            '0' => 'Sim',
            '1' => 'Não'
        ),
null, ['class'=>"form-control width-medio <% validar(post.image_detail) %>", 'ng-model'=>'post.image_detail', 'init-model'=>'post.image_detail', 'placeholder' => 'Selecione']) !!}<br>


<p><strong>Categorias *</strong></p>
{{--@foreach($categorias as $id => $categoria)
    <div class="checkbox-inline">
        {!! Form::checkbox('categoria'.$id, true, null, ['class'=>"checkbox-inline width-grande <% validar(categoria_post.categoria_$id) %>", 'ng-model'=>"categoria_post.categoria_$id", 'init-model'=>"categoria_post.categoria_$id", 'style'=>"width: 30px; height: 30px;"]) !!}
        {!! Form::label('categoria'.$id, $categoria, ['style'=>"padding: 8px 20px 0 20px;"]) !!}
    </div>
@endforeach--}}


@foreach($categorias as $id => $categoria)
    <div class="checkbox-inline">
        {!! Form::checkbox('categoria'.$id, true, null, ['class'=>"checkbox-inline width-grande <% validar(categoria_post.categoria_$id) %>", 'ng-model'=>"categoria_post['categoria_$id']", 'init-model'=>"categoria_post.categoria_$id", 'ng-change'=>"verificarSelecao()", 'ng-required'=>"peloMenosUmSelecionado", 'style'=>"width: 30px; height: 30px;"]) !!}
        {!! Form::label('categoria'.$id, $categoria, ['style'=>"padding: 8px 20px 0 20px;"]) !!}
        {{$id}}
    </div>
@endforeach


{{--@foreach($categorias as $id => $categoria)
    <div class="checkbox-inline">
        {!! Form::checkbox('categorias[]', $id, null, ['class'=>"checkbox-inline width-grande", 'ng-model'=>"categoria_post['categoria_$id']", 'ng-change'=>"verificarSelecao()", 'ng-required'=>"peloMenosUmSelecionado", 'style'=>"width: 30px; height: 30px;"]) !!}
        {!! Form::label('categoria'.$id, $categoria, ['style'=>"padding: 8px 20px 0 20px;"]) !!}
        {{$id}}
    </div>
@endforeach--}}
<br><br>

