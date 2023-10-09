cmsApp.controller('publicoAlvoCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.publicoAlvo = {
    };
    $scope.publicoAlvos = [];
    $scope.currentPage = 1;
    $scope.lastPage = 0;
    $scope.totalItens = 0;
    $scope.maxSize = 5;
    $scope.itensPerPage = 30;
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
            listarPublicoAlvos();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarPublicoAlvos();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            if($scope.dadoPesquisa.length > 2 || $scope.dadoPesquisa.length === 0){
                listarPublicoAlvos();
            }
        }
    });



    var listarPublicoAlvos = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/publico_alvo/paginado',
            method: 'GET',
            params: {
                page: $scope.currentPage,
                search: $scope.dadoPesquisa,
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
            $scope.publicoAlvos = data.data;//data
            //$scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = data.total;//data.length
            $scope.primeiroDaPagina = data.from;
            $scope.ultimoDaPagina = data.to;
            $listar = true;
            console.log($scope.publicoAlvos);
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

        listarPublicoAlvos();
    };

    $scope.validar = function(){

    };


    listarPublicoAlvos();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/publico_alvo", $scope.publicoAlvo).success(function (data){
                 listarPublicoAlvos();
                 //delete $scope.publicoAlvo;//limpa o form
                $scope.publicoAlvo = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            publicoAlvo.file = file;
            publicoAlvo.arquivo = arquivo;
            Upload.upload({
                url: 'api/publico_alvo',
                data: publicoAlvo,
                //data: {publicoAlvo: $scope.publicoAlvo, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.publicoAlvo;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listarPublicoAlvos();
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
            url: 'api/publico_alvo/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);

            $scope.processandoExcluir = false;
            $scope.excluido = true;
            $scope.mensagemExcluido = "Excluído com sucesso!";
            listarPublicoAlvos();
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
        let publicoAlvoStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/publicoAlvo/"+id, publicoAlvoStatus).success(function (data){
            //console.log(data);
            listarPublicoAlvos();
        }).error(function(data){
            console.log(data);
        });
    }




}]);
