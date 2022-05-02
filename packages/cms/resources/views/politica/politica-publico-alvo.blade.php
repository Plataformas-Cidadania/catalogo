<!-- Modal Indicação-->
<div class="modal fade" id="modalPoliticaPublicoAlvo" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">PublicoAlvos</h4>
                <h5 class="modal-title"><% tituloPoliticaPublicoAlvo %></h5>
            </div>
            <div class="modal-body">
                <form action="frmPoliticaPublicoAlvo">
                    <label for="publicoAlvo">PublicoAlvo</label>
                    <select
                        name="idpublico_alvo"
                        class="form-control width-grande"
                        ng-model="publicoAlvo"
                        ng-init="publicoAlvo = null"
                        ng-required="true"
                        ng-options="option.nome for option in publicoAlvos track by option.id"
                        placeholder="Selecione"
                    >
                        <option value="" ng-disabled="!!politicaPublicoAlvo.idpublico_alvo">Selecione</option>
                    </select>
                    <br>
                    <button type="button" class="btn btn-info" id="btnPoliticaPublicoAlvo" ng-click="inserirPoliticaPublicoAlvo()">Adicionar</button>
                </form>
                <br>
                <div ng-show="processandoListagemIndicacoes"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <h2 class="tabela_vazia" ng-show="!processandoListagemIndicacoes && totalIndicaoes==0">Nenhum registro encontrado!</h2>
                <div style="height: 300px;  overflow-y: auto;">
                    <table ng-show="totalPoliticaPublicoAlvos>0" class="table table-striped">
                        <thead>
                        <tr>
                            {{--<th>Recurso</th>--}}
                            <th>PublicoAlvo</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="politicaPublicoAlvo in politicaPublicoAlvos">
                            <td><% getPublicoAlvo(politicaPublicoAlvo.publico_alvo_id) %></td>
                            <td class="text-right">
                                <div>
                                    <a><i data-toggle="modal" data-target="#modalExcluirPoliticaPublicoAlvo" class="fa fa-remove fa-2x" ng-click="perguntaExcluirPoliticaPublicoAlvo(politicaPublicoAlvo.publico_alvo_id, getPublicoAlvo(politicaPublicoAlvo.publico_alvo_id))"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div ng-show="processando"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemPoliticaPublicoAlvo %></div>
            </div>
            <div id="fecharPoliticaPublicoAlvo" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal PublicoAlvo-->
<!-- Modal Excluir PublicoAlvo-->
<div class="modal fade" id="modalExcluirPoliticaPublicoAlvo" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Excluir PublicoAlvo</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {{--<div class="col-md-3">
                        <img  ng-src="imagens/recursos/xs-<% imagemExcluir %>" width="100">
                    </div>--}}
                    <div class="col-md-9">
                        <p><% tituloExcluirPoliticaPublicoAlvo %></p>
                    </div>
                </div>
                <div ng-show="processandoExcluir"><i class="fa fa-spinner fa-spin"></i> Processando...</div>
                <div class="mensagem-ok text-center text-danger"><% mensagemExcluidoPoliticaPublicoAlvo %></div>
            </div>
            <div id="opcoesExcluirPoliticaPublicoAlvo" class="modal-footer" ng-show="!excluidoPoliticaPublicoAlvo">
                <button id="btnExcluirPoliticaPublicoAlvo" type="button" class="btn btn-default" ng-click="excluirPoliticaPublicoAlvo(idExcluirPoliticaPublicoAlvoPublicoAlvo, idExcluirPoliticaPublicoAlvoPolitica);">Sim</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
            </div>
            <div id="fecharExcluirPoliticaPublicoAlvo" class="modal-footer" ng-show="excluidoPoliticaPublicoAlvo">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fim Modal Excluir-->
