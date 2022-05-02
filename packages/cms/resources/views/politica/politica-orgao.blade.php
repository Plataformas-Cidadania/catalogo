<!-- Modal Indicação-->
<div class="modal fade" id="modalPoliticaOrgao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Orgaos</h4>
                <h5 class="modal-title"><% tituloPoliticaOrgao %></h5>
            </div>
            <div class="modal-body">
                <form action="frmPoliticaOrgao">
                    <label for="orgao">Orgao</label>
                    <select
                        name="id_orgao"
                        class="form-control width-grande"
                        ng-model="orgao"
                        ng-init="orgao = null"
                        ng-required="true"
                        ng-options="option.nome for option in orgaos track by option.id"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!politicaOrgao.id_orgao">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnPoliticaOrgao" ng-click="inserirPoliticaOrgao()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemIndicacoes"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemIndicacoes && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalPoliticaOrgaos>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>Orgao</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="politicaOrgao in politicaOrgaos">
                            <td><% getOrgao(politicaOrgao.orgao_id) %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirPoliticaOrgao" class="fa fa-remove fa-2x" ng-click="perguntaExcluirPoliticaOrgao(politicaOrgao.orgao_id, getOrgao(politicaOrgao.orgao_id))"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemPoliticaOrgao %></div>
            </div>
            <div id="fecharPoliticaOrgao" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Orgao-->
<!-- Modal Excluir Orgao-->
<div class="modal fade" id="modalExcluirPoliticaOrgao" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir Orgao</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluirPoliticaOrgao %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoPoliticaOrgao %></div>
            </div>
            <div id="opcoesExcluirPoliticaOrgao" class="modal-footer" ng-show="!excluidoPoliticaOrgao">
                <button id="btnExcluirPoliticaOrgao" type="button" class="btn btn-default" ng-click="excluirPoliticaOrgao(idExcluirPoliticaOrgaoOrgao, idExcluirPoliticaOrgaoPolitica);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirPoliticaOrgao" class="modal-footer" ng-show="excluidoPoliticaOrgao">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
