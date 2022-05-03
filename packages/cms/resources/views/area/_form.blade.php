<label for="nome">Nome*</label>
<input type="text" name="nome" class="form-control width-grande <% validar(area.nome)%>" ng-model="area.nome" ng-required="true">
<br>


<label for="resumo">Resumo</label>
<input type="text" name="resumo" class="form-control width-grande <% validar(area.resumo)%>" ng-model="area.resumo" ng-required="false">
<br>

<label for="resumo">Descrição</label>
<textarea name="descricao"  class="form-control width-grande <% validar(area.descricao)%>" ng-model="area.descricao" rows="20"></textarea>
<br>
