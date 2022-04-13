
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

<label for="ano">Ano *</label>
<input type="number" name="ano" class="form-control width-grande <% validar(politica.ano)%>" ng-model="politica.ano" ng-required="true">

<label for="medida_provisoria">Medida Provisória</label>
<input type="text" name="medida_provisoria" class="form-control width-medio <% validar(politica.medida_provisoria)%>" ng-model="politica.medida_provisoria" ng-required="true">

<label for="medida_provisoria_inicio_vigencia">Medida Provisória Início Vigência</label>
<input type="text" name="medida_provisoria_inicio_vigencia" class="form-control width-medio <% validar(politica.medida_provisoria_inicio_vigencia)%>" ng-model="politica.medida_provisoria_inicio_vigencia" ng-required="true">

<label for="legislacao">Legislação</label>
<input type="text" name="legislacao" class="form-control width-grande <% validar(politica.legislacao)%>" ng-model="politica.legislacao" ng-required="false">

<label for="vigencia_inicio">Vigência Início</label>
<input type="date" name="vigencia_inicio" class="form-control width-grande <% validar(politica.vigencia_inicio)%>" ng-model="politica.vigencia_inicio" ng-required="false">

<label for="vigencia_fim">Vigência Fim</label>
<input type="date" name="vigencia_fim" class="form-control width-grande <% validar(politica.vigencia_fim)%>" ng-model="politica.vigencia_fim" ng-required="true">

<label for="acao_orcamentaria_assoc">Ação Orçamentária Assoc</label>
<input type="text" name="acao_orcamentaria_assoc" class="form-control width-grande <% validar(politica.acao_orcamentaria_assoc)%>" ng-model="politica.acao_orcamentaria_assoc" ng-required="true">

<label for="objetivos">Objetivos</label>
<textarea name="objetitos" rows="20" class="form-control width-grande <% validar(politica.objetivos)%>" ng-model="politica.objetivos"></textarea>


{{--
{!! Form::label('observacao', 'Observacao ') !!}<br>
{!! Form::textarea('observacao', null, ['class'=>"form-control width-grande <% validar(politica.observacao) %>", 'ui-tinymce'=>'tinymceOptions', 'ng-model'=>'politica.observacao', 'init-model'=>'politica.observacao']) !!}<br>
--}}

{{--<label for="status">Status</label>
<select name="status" id="status" class="form-control width-pequeno <% validar(politica.status)%>" ng-model="politica.status">
    <option value="1" ng-selected="politica.status == 1">Ativo</option>
    <option value="0" ng-selected="politica.status == 0">Inativo</option>
</select>--}}
