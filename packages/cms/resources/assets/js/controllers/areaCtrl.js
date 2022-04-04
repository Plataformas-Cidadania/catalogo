cmsApp.controller('areaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.area = {
    };
    $scope.areas = [];
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
            listarAreas();
        }
    });
    $scope.$watch('itensPerPage', function(){
        if($listar){
            listarAreas();
        }
    });
    $scope.$watch('dadoPesquisa', function(){
        if($listar){
            if($scope.dadoPesquisa.length > 2 || $scope.dadoPesquisa.length === 0){
                listarAreas();
            }
        }
    });



    var listarAreas = function(){
        $scope.processandoListagem = true;
        $http({
            url: 'api/area/',
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
            $scope.areas = data.data;
            //$scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = data.data.length;
            /*$scope.primeiroDaPagina = pesquisa ? 1 : data.from;
            $scope.ultimoDaPagina = pesquisa ? 1 : data.to;*/
            $listar = true;
            console.log($scope.areas);
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

        listarAreas();
    };

    $scope.validar = function(){

    };


    listarAreas();

    //INSERIR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;
    $scope.mostrarForm = false;
    $scope.processandoInserir = false;

    $scope.inserir = function (file, arquivo){

        $scope.mensagemInserir = "";

        if(file==null && arquivo==null){
            $scope.processandoInserir = true;
            $http.post("api/area", $scope.area).success(function (data){
                 listarAreas();
                 //delete $scope.area;//limpa o form
                $scope.area = {};//limpa o form
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.processandoInserir = false;
             }).error(function(data){
                $scope.mensagemInserir = "Ocorreu um erro!";
                $scope.processandoInserir = false;
             });
        }else{

            area.file = file;
            area.arquivo = arquivo;
            Upload.upload({
                url: 'api/area',
                data: area,
                //data: {area: $scope.area, file: file, arquivo: arquivo},
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                console.log(response.data);
                delete $scope.area;//limpa o form
                $scope.picFile = null;//limpa o file
                $scope.fileArquivo = null;//limpa o file
                listarAreas();
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
            url: 'api/area/'+id,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluir = false;
                $scope.excluido = true;
                $scope.mensagemExcluido = data.message;
                listarAreas();
                return;
            }
            $scope.processandoExcluir = false;
            $scope.excluido = false;
            $scope.mensagemExcluido = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluir = false;
            $scope.mensagemExcluido = "Erro ao tentar excluir!";
        });
    };

    $scope.status = function(id, statusAtual){
        let areaStatus = {
            status: statusAtual === 0 ? 1 : 0
        }
        $http.put("api/area/"+id, areaStatus).success(function (data){
            //console.log(data);
            listarAreas();
        }).error(function(data){
            console.log(data);
        });
    }

    //Area Recurso////////////////////////////////////
    $scope.area_recurso = {};
    $scope.dimensao = null;
    $scope.categoria = null;
    $scope.recursoArea = [];
    $scope.totalRecursoArea = 0;
    $scope.processandoRecursos = false;
    $scope.processandoInserirarea_recurso = false;
    $scope.processandoListagemRecursoArea = false;

    $scope.listarRecursos = function(){
        $scope.processandoRecursos = true;
        $http({
            url: 'api/recurso',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.recursos = data.data;
            $scope.processandoRecursos = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoRecursos = false;
        });
    }

    $scope.getRecursos = function(id_recurso){
        let recurso = $scope.recursos.find(function(item){
            return item.id_recurso === id_recurso;
        });
        return recurso.nome;
    }

    $scope.getArea = function(id){
        let area = $scope.areas.find(function(item){
            return item.id === id;
        });
        return area.nome;
    }


    $scope.modalAreaRecurso = function (id, titulo){
        $scope.area_recurso.id = id;
        $scope.tituloarea_recurso = titulo;
        $scope.listarRecursos();
        $scope.listarRecursoArea();
    }

    $scope.inserirarea_recurso = function(){
        console.log($scope.area_recurso);
        $scope.processandoInserirarea_recurso= true;
        $scope.mensagemInserirarea_recurso = "";
        $scope.area_recurso.id_recurso = $scope.recurso.id_recurso;
        $http.post("api/area_recurso", $scope.area_recurso).success(function (data){
            $scope.listarRecursoArea();
            $scope.mensagemInserirarea_recurso =  "Gravado com sucesso!";
            $scope.processandoInserirarea_recurso = false;
            //$scope.area_recurso = {};
        }).error(function(data){
            $scope.mensagemInserirarea_recurso = "Ocorreu um erro!";
            $scope.processandoInserirarea_recurso = false;
        });
    }



    $scope.listarRecursoArea = function(){
        $scope.processandoListagemAreaRecurso = true;
        $http({
            url: 'api/area_recurso/'+$scope.area_recurso.id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.areasRecursos = data.data;
            console.log( $scope.areasRecursos);
            $scope.totalAreaRecurso = $scope.areasRecursos.length;
            $scope.processandoListagemAreaRecurso = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemAreaRecurso = false;
        });
    }

    $scope.perguntaExcluirarea_recurso = function (idArea, idRecurso, titulo){
        $scope.idExcluirAreaRecursoIdArea = idArea;
        $scope.idExcluirAreaRecursoidRecurso = idRecurso;
        $scope.tituloExcluirarea_recurso = titulo;
        $scope.excluidoarea_recurso = false;
        $scope.mensagemExcluidoarea_recurso = "";
    }

    $scope.excluirarea_recurso = function(idArea, idRecurso){
        $scope.processandoExcluirarea_recurso = true;
        $http({
            url: 'api/area_recurso/'+idArea+'/'+idRecurso,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            if(data.success){
                $scope.processandoExcluirarea_recurso = false;
                $scope.excluidoarea_recurso = true;
                $scope.mensagemExcluidoarea_recurso = data.message;
                $scope.listarRecursoArea();
                return;
            }
            $scope.processandoExcluirarea_recurso = false;
            $scope.excluidoarea_recurso = false;
            $scope.mensagemExcluidoarea_recurso = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirarea_recurso = false;
            $scope.mensagemExcluidoarea_recurso = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////




}]);
