<!-- Modal Indicação-->
<div class="modal fade" id="modalPoliticaCategoria" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Categorias</h4>
            </div>
            <div class="modal-body">
                <form action="frmPoliticaCategoria">
                    <label for="categoria">Categoria</label>
                    <select
                        name="id_categoria"
                        class="form-control width-grande"
                        ng-model="categoria"
                        ng-init="categoria = null"
                        ng-required="true"
                        ng-options="option.titulo for option in categorias track by option.id_categoria"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!politicaCategoria.id_categoria">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnPoliticaCategoria" ng-click="inserirPoliticaCategoria()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemIndicacoes"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemIndicacoes && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalIndicacoes>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Categoria</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="politicaCategoria in indicacoes">
                            {{--<td><% politicaCategoria.recurso.nome %></td>--}}
                            <td><% politicaCategoria.categoria.titulo %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirPoliticaCategoria" class="fa fa-remove fa-2x" ng-click="perguntaExcluirPoliticaCategoria(politicaCategoria.id_categoria, politicaCategoria.id_recurso, politicaCategoria.categoria.titulo)"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemPoliticaCategoria %></div>
            </div>
            <div id="fecharPoliticaCategoria" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Categoria-->
<!-- Modal Excluir Categoria-->
<div class="modal fade" id="modalExcluirPoliticaCategoria" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir Categoria</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluirPoliticaCategoria %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoPoliticaCategoria %></div>
            </div>
            <div id="opcoesExcluirPoliticaCategoria" class="modal-footer" ng-show="!excluidoPoliticaCategoria">
                <button id="btnExcluirPoliticaCategoria" type="button" class="btn btn-default" ng-click="excluirPoliticaCategoria(idExcluirPoliticaCategoriaCategoria, idExcluirPoliticaCategoriaRecurso);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirPoliticaCategoria" class="modal-footer" ng-show="excluidoPoliticaCategoria">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
