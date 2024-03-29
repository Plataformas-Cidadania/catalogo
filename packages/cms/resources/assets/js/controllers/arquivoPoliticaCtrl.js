cmsApp.controller('arquivoPoliticaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.arquivo = {
    };
    $scope.politica_id = 0;
    $scope.arquivos = [];
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 10;
    $scope.dadoPesquisa = '';
    $scope.campos = "id, nome";
    $scope.campoPesquisa = "nome";
    $scope.processandoListagem = false;
    $scope.processandoExcluir = false;
    $scope.ordem = "id";
    $scope.sentidoOrdem = "asc";
    var $listar = false;//para impedir de carregar o conteúdo dos watchs no carregamento da página.

    $scope.$watch('currentPage', function(){
        if($listar){
            listarArquivos($scope.politica_id);
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarArquivos($scope.politica_id);
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            if($scope.dadoPesquisa.length > 2 || $scope.dadoPesquisa.length === 0){
                listarArquivos($scope.politica_id);
            }
        }
    });

    $scope.$watch('politica_id', function(){
        listarArquivos($scope.politica_id);
    });

    var listarArquivos = function(politica_id){
        console.log(politica_id);
        $scope.processandoListagem = true;
        $http({
            url: 'api/arquivo/politica/'+politica_id,
            method: 'GET',
            params: {
                /*page: $scope.currentPage,
                itensPorPagina: $scope.itensPerPage,
                dadoPesquisa: $scope.dadoPesquisa,
                campos: $scope.campos,
                campoPesquisa: $scope.campoPesquisa,
                ordem: $scope.ordem,
                sentido: $scope.sentidoOrdem*/
            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.arquivos = data;//data.data
            //$scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = data.length;//data.data.length
            /*$scope.primeiroDaPagina = pesquisa ? 1 : data.from;
            $scope.ultimoDaPagina = pesquisa ? 1 : data.to;*/
            $listar = true;
            console.log($scope.arquivos);
            $scope.processandoListagem = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagem = false;
        });
    };



    $scope.ordernarPor = function(ordem){
        $scope.ordem = ordem;
        //console.log($scope.ordem);
        if($scope.sentidoOrdem=="asc"){
            $scope.sentidoOrdem = "desc";
        }else{
            $scope.sentidoOrdem = "asc";
        }

        //listarArquivos();
    };

    $scope.validar = function(){

    };

    //listarArquivos();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";
        $scope.arquivo.politica_id = $scope.politica_id;

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/arquivo", $scope.arquivo).success(function (data){
                 listarArquivos($scope.politica_id);
                 //delete $scope.arquivo;//limpa o form
                $scope.arquivo = {
                    tipo: '0'
                };//limpa o form
                delete $scope.picFile
                $scope.fileArquivo = null;//limpa o file
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{
            //arquivo.file = file;
            $scope.arquivo.imagem = file;
            $scope.arquivo.caminho_arquivo = arquivo;
            Upload.upload({
                url: 'api/arquivo',
                data: $scope.arquivo,
                method: 'POST',
                //data: {arquivo: $scope.arquivo, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                $scope.arquivo = {
                    tipo: '0'
                };//limpa o form
                delete $scope.picFile
                $scope.fileArquivo = null;//limpa o file
                listarArquivos($scope.politica_id);
                $scope.mensagemInserir =  "Gravado com sucesso!";
            }, function (response) {
                console.log(response.data);
                if (response.status > 0){
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                //console.log(evt);
                // Math.min is to fix IE which reports 200% sometimes
                $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }

    };

    $scope.limparImagem = function(){
        delete $scope.picFile;
        $scope.form.file.$error.maxSize = false;
    };

    $scope.validar = function(valor) {
        //console.log(valor);
        if(valor===undefined){
            return "campo-obrigatorio";
        }
        return "";
    };
    /////////////////////////////////

    //EXCLUIR/////////////////////////
    $scope.perguntaExcluir = function (id, titulo, imagem){
        $scope.idExcluir = id;
        $scope.tituloExcluir = titulo;
        $scope.imagemExcluir = imagem;
        $scope.excluido = false;
        $scope.mensagemExcluido = "";
    }

    $scope.excluir = function(id){
        $scope.processandoExcluir = true;
        $http({
            url: 'api/arquivo/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);

            $scope.processandoExcluir = false;
            $scope.excluido = true;
            $scope.mensagemExcluido = "Excluído com sucesso!";
            listarArquivos();
            return;

            /*$scope.processandoExcluir = false;
            $scope.excluido = false;
            $scope.mensagemExcluido = data.message;*/
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluir = false;
            $scope.mensagemExcluido = "Erro ao tentar excluir!";
        });
    };

    $scope.status = function(id, statusAtual){
        let arquivoStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/arquivo/"+id, arquivoStatus).success(function (data){
            //console.log(data);
            listarArquivos();
        }).error(function(data){
            console.log(data);
        });
    }




}]);
