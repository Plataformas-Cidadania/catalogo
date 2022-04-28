cmsApp.controller('politicaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.politica = {
    };
    $scope.politicas = [];
    $scope.grandes_areas = [];
    $scope.grande_area = null;
    $scope.areas = [];
    $scope.area = null;
    $scope.tipos_politicas = [];
    $scope.tipo_politica = null;
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
            listarPoliticas();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarPoliticas();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            if($scope.dadoPesquisa.length > 2 || $scope.dadoPesquisa.length === 0){
                listarPoliticas();
            }
        }
    });

    var listarGrandesAreas= function(){
        //$scope.processandoListagem = true;
        $http({
            url: 'api/grande_area',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data);
            $scope.grandes_areas = data;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    var listarAreas= function(){
        //$scope.processandoListagem = true;
        $http({
            url: 'api/area',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data);
            $scope.areas = data;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    var listarTipos= function(){
        //$scope.processandoListagem = true;
        $http({
            url: 'api/tipo_politica',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data);
            $scope.tipos_politicas = data;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }


    var listarPoliticas = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/politica/',
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
            $scope.politicas = data;//data.data
            //$scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = data.length;//data.data.length
            /*$scope.primeiroDaPagina = pesquisa ? 1 : data.from;
            $scope.ultimoDaPagina = pesquisa ? 1 : data.to;*/
            $listar = true;
            //console.log($scope.politicas);
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

        listarPoliticas();
    };

    $scope.validar = function(){

    };

    listarGrandesAreas();
    listarAreas();
    listarTipos();
    listarPoliticas();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        $scope.politica.grande_area = $scope.grande_area.id;
        $scope.politica.area = $scope.area.id;
        $scope.politica.tipo_politica = $scope.tipo_politica.id;
        $scope.politica.ano = $scope.politica.ano + '-01-01';

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/politica", $scope.politica).success(function (data){
                 listarPoliticas();
                 //delete $scope.politica;//limpa o form
                $scope.politica = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            politica.file = file;
            politica.arquivo = arquivo;
            Upload.upload({
                url: 'api/politica',
                data: politica,
                //data: {politica: $scope.politica, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.politica;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listarPoliticas();
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
            url: 'api/politica/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);

            $scope.processandoExcluir = false;
            $scope.excluido = true;
            $scope.mensagemExcluido = "Excluído com sucesso!";
            listarPoliticas();
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
        let politicaStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/politica/"+id, politicaStatus).success(function (data){
            //console.log(data);
            listarPoliticas();
        }).error(function(data){
            console.log(data);
        });
    }




}]);
