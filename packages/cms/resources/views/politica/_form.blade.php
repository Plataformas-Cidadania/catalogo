
<label for="grande_area">Grande Área *</label>
<select
    name="grande_area"
    class="form-control width-medio"
    ng-model="grande_area"
    ng-init="grande_area = null"
    ng-required="true"
    ng-options="option.nome for option in grandes_areas track by option.id"
    placeholder="Selecione"
>
    <option value="" ng-disabled="!!politica.grande_area">Selecione</option>
</select>
<br>

<label for="area">Área *</label>
<select
    name="area"
    class="form-control width-medio"
    ng-model="area"
    ng-init="area = null"
    ng-required="true"
    ng-options="option.nome for option in areas track by option.id"
    placeholder="Selecione"
>
    <option value="" ng-disabled="!!politica.area">Selecione</option>
</select>
<br>

<label for="tipo_politica">Tipo *</label>
<select
    name="tipo_politica"
    class="form-control width-medio"
    ng-model="tipo_politica"
    ng-init="tipo_politica = null"
    ng-required="true"
    ng-options="option.nome for option in tipos_politicas track by option.id"
    placeholder="Selecione"
>
    <option value="" ng-disabled="!!politica.tipo_politica">Selecione</option>
</select>
<br>

<label for="nome">Nome *</label>
<input type="text" name="nome" class="form-control width-grande <% validar(politica.nome)%>" ng-model="politica.nome" ng-required="true">
<br>

<label for="ano">Ano *</label>
<input type="number" name="ano" class="form-control width-pequeno <% validar(politica.ano)%>" ng-model="politica.ano" ng-required="true" min="1900" max="2100">
<br>

<label for="medida_provisoria">Medida Provisória</label>
<input type="text" name="medida_provisoria" class="form-control width-medio <% validar(politica.medida_provisoria)%>" ng-model="politica.medida_provisoria" ng-required="true">
<br>

<label for="medida_provisoria_inicio_vigencia">Medida Provisória Início Vigência</label>
<input type="text" name="medida_provisoria_inicio_vigencia" class="form-control width-medio <% validar(politica.medida_provisoria_inicio_vigencia)%>" ng-model="politica.medida_provisoria_inicio_vigencia" ng-required="true">
<br>

<label for="legislacao">Legislação</label>
<input type="text" name="legislacao" class="form-control width-grande <% validar(politica.legislacao)%>" ng-model="politica.legislacao" ng-required="false">
<br>

<label for="vigencia_inicio">Vigência Início</label>
<input type="date" name="vigencia_inicio" class="form-control width-medio <% validar(politica.vigencia_inicio)%>" ng-model="politica.vigencia_inicio" ng-required="false">
<br>

<label for="vigencia_fim">Vigência Fim</label>
<input type="date" name="vigencia_fim" class="form-control width-medio <% validar(politica.vigencia_fim)%>" ng-model="politica.vigencia_fim" ng-required="true">
<br>

{{--<label for="objetivos">Objetivos</label>
<textarea name="objetivos" rows="10" class="form-control width-grande <% validar(politica.objetivos)%>" ng-model="politica.objetivos"></textarea>
<br>--}}

{!! Form::label('objetivos', 'Objetivos') !!}<br>
{!! Form::textarea('objetivos', null, ['class'=>"form-control width-grande <% validar(politica.objetivos) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-required'=>'false', 'ng-model'=>'politica.objetivos', 'init-model'=>'politica.objetivos']) !!}
<br>


{{--<label for="observacao">Observação</label>
<textarea name="observacao" rows="10" class="form-control width-grande <% validar(politica.observacao)%>" ng-model="politica.observacao"></textarea>
<br>--}}

{!! Form::label('observacao', 'Objetivos') !!}<br>
{!! Form::textarea('observacao', null, ['class'=>"form-control width-grande <% validar(politica.observacao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-required'=>'false', 'ng-model'=>'politica.observacao', 'init-model'=>'politica.observacao']) !!}
<br>

<?php
    $instrumentos_legais = ['Resolução','Projeto de Lei','Portaria',
        'Norma de execução','Norma operacional','Lei ordinária','Medida Provisória',
        'Decreto','Decreto-Lei','Instrução Normativa','Lei Complementar','Não se aplica'];
?>

<label for="acao_orcamentaria_assoc">Ação Orçamentária Assoc</label>
<input type="text" name="acao_orcamentaria_assoc" class="form-control width-grande <% validar(politica.acao_orcamentaria_assoc)%>" ng-model="politica.acao_orcamentaria_assoc" ng-required="true">
<br>

<label for="instrumento_legal">Instrumento Legal</label>
<select
    name="instrumento_legal"
    class="form-control width-medio"
    ng-model="politica.instrumento_legal"
    ng-init="politica.instrumento_legal = null"
    placeholder="Selecione"
>
    <option value="">Selecione</option>
    <?php foreach ($instrumentos_legais as $instrumento_legal) { ?>
    <option value="{{$instrumento_legal}}">{{$instrumento_legal}}</option>
    <?php } ?>
</select>
<br>

{{--<label for="publico_alvo_categ">Público Alvo Categ</label>
<input type="text" name="publico_alvo_categ" class="form-control width-grande <% validar(politica.publico_alvo_categ)%>" ng-model="politica.publico_alvo_categ" ng-required="false">
<br>--}}

{{--<label for="publico_alvo_legislacao">Público Alvo Legislação</label>
<input type="text" name="publico_alvo_legislacao" class="form-control width-grande <% validar(politica.publico_alvo_legislacao)%>" ng-model="politica.publico_alvo_legislacao" ng-required="false">
<br>--}}

{!! Form::label('publico_alvo_legislacao', 'Público Alvo Legislação') !!}<br>
{!! Form::textarea('publico_alvo_legislacao', null, ['class'=>"form-control width-grande <% validar(politica.publico_alvo_legislacao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-required'=>'false', 'ng-model'=>'politica.publico_alvo_legislacao', 'init-model'=>'politica.publico_alvo_legislacao']) !!}
<br>

{{--
{!! Form::label('observacao', 'Observacao ') !!}<br>
{!! Form::textarea('observacao', null, ['class'=>"form-control width-grande <% validar(politica.observacao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'politica.observacao', 'init-model'=>'politica.observacao']) !!}<br>
--}}

{{--<label for="status">Status</label>
<select name="status" id="status" class="form-control width-pequeno <% validar(politica.status)%>" ng-model="politica.status">
    <option value="1" ng-selected="politica.status == 1">Ativo</option>
    <option value="0" ng-selected="politica.status == 0">Inativo</option>
</select>--}}
