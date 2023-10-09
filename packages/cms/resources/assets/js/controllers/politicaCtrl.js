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
            url: 'api/politica/buscaAvancada',
            method: 'POST',
            data: {
                page: $scope.currentPage,
                politica: $scope.dadoPesquisa,
            },
            params: {
                /*politica: $scope.campoPesquisa,
                page: $scope.currentPage,
                itensPorPagina: $scope.itensPerPage,
                dadoPesquisa: $scope.dadoPesquisa,
                campos: $scope.campos,
                ordem: $scope.ordem,
                sentido: $scope.sentidoOrdem*/
            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            $scope.politicas = data.data;//data.data
            //$scope.lastPage = pesquisa ? 1 : data.last_page;
            $scope.totalItens = data.total;//data.data.length
            $scope.primeiroDaPagina = data.from;
            $scope.ultimoDaPagina = data.to;
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
        if($scope.politica.ano.toString().length === 4){
            $scope.politica.ano = $scope.politica.ano + '-01-01';
        }


        //console.log($scope.politica);

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


    //PoliticaCategoria////////////////////////////////////
    $scope.politicaCategoria = {};
    $scope.dimensao = null;
    $scope.categoria = null;
    $scope.politicaCategorias = [];
    $scope.totalPoliticaCategorias = 0;
    $scope.processandoCategorias = false;
    $scope.processandoInserirPoliticaCategoria = false;
    $scope.processandoListagemPoliticaCategorias = false;

    $scope.listarCategorias = function(){
        $scope.processandoCategorias = true;
        $http({
            url: 'api/categoria',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            //$scope.categorias = data;
            $scope.categorias = data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
            $scope.processandoCategorias = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoCategorias = false;
        });
    }

    $scope.getCategoria = function(categoria_id){
        let categoria = $scope.categorias.find(function(item){
            return item.id === categoria_id;
        });
        return categoria.nome;
    }


    $scope.getPolitica = function(politica_id){
        if(politica_id){
            let politica = $scope.politicas.find(function(item){
                return item.id === politica_id;
            });
            return politica.nome;
        }
    }

    $scope.modalPoliticaCategoria = function (id, titulo){
        $scope.politicaCategoria.politica_id = id;
        $scope.tituloPoliticaCategoria = titulo;
        $scope.listarCategorias();
        $scope.listarPoliticaCategorias();
    }

    $scope.inserirPoliticaCategoria = function(){
        console.log($scope.politicaCategoria);
        $scope.processandoInserirPoliticaCategoria= true;
        $scope.mensagemInserirPoliticaCategoria = "";
        $scope.politicaCategoria.categoria_id = $scope.categoria.id;
        $http.post("api/politica_categoria", $scope.politicaCategoria).success(function (data){
            $scope.listarPoliticaCategorias();
            $scope.mensagemInserirPoliticaCategoria =  "Gravado com sucesso!";
            $scope.processandoInserirPoliticaCategoria = false;
            //$scope.politicaCategoria = {};
        }).error(function(data){
            $scope.mensagemInserirPoliticaCategoria = "Ocorreu um erro!";
            $scope.processandoInserirPoliticaCategoria = false;
        });
    }

    $scope.listarPoliticaCategorias = function(){
        $scope.processandoListagemPoliticaCategorias = true;
        $http({
            url: 'api/politica_categoria/'+$scope.politicaCategoria.politica_id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.politicaCategorias = data;
            $scope.totalPoliticaCategorias = $scope.politicaCategorias.length;
            $scope.processandoListagemPoliticaCategorias = false;
        }).error(function(data){
            $scope.politicaCategorias = [];
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemPoliticaCategorias = false;
        });
    }

    $scope.perguntaExcluirPoliticaCategoria = function (idCategoria, titulo){
        $scope.idExcluirPoliticaCategoriaCategoria = idCategoria;
        $scope.idExcluirPoliticaCategoriaPolitica = $scope.politicaCategoria.politica_id;
        $scope.tituloExcluirPoliticaCategoria = titulo;
        $scope.excluidoPoliticaCategoria = false;
        $scope.mensagemExcluidoPoliticaCategoria = "";
    }


    $scope.excluirPoliticaCategoria = function(idCategoria, idPolitica){
        $scope.processandoExcluirPoliticaCategoria = true;
        $http({
            url: 'api/politica_categoria/'+idPolitica+'/'+idCategoria,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            //if(data.success){
                $scope.processandoExcluirPoliticaCategoria = false;
                $scope.excluidoPoliticaCategoria = true;
                $scope.mensagemExcluidoPoliticaCategoria = data.message;
                $scope.listarPoliticaCategorias();
                //return;
            //}
            //$scope.processandoExcluirPoliticaCategoria = false;
            //$scope.excluidoPoliticaCategoria = false;
            //$scope.mensagemExcluidoPoliticaCategoria = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirPoliticaCategoria = false;
            $scope.mensagemExcluidoPoliticaCategoria = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////


    //PoliticaOrgao////////////////////////////////////
    $scope.politicaOrgao = {};
    $scope.dimensao = null;
    $scope.orgao = null;
    $scope.politicaOrgaos = [];
    $scope.totalPoliticaOrgaos = 0;
    $scope.processandoOrgaos = false;
    $scope.processandoInserirPoliticaOrgao = false;
    $scope.processandoListagemPoliticaOrgaos = false;

    $scope.listarOrgaos = function(){
        $scope.processandoOrgaos = true;
        $http({
            url: 'api/orgao',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            //$scope.orgaos = data;
            $scope.orgaos = data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
            $scope.processandoOrgaos = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoOrgaos = false;
        });
    }

    $scope.getOrgao = function(orgao_id){
        let orgao = $scope.orgaos.find(function(item){
            return item.id === orgao_id;
        });
        return orgao.nome;
    }


    $scope.getPolitica = function(politica_id){
        if(politica_id){
            let politica = $scope.politicas.find(function(item){
                return item.id === politica_id;
            });
            return politica.nome;
        }
    }

    $scope.modalPoliticaOrgao = function (id, titulo){
        $scope.politicaOrgao.politica_id = id;
        $scope.tituloPoliticaOrgao = titulo;
        $scope.listarOrgaos();
        $scope.listarPoliticaOrgaos();
    }

    $scope.inserirPoliticaOrgao = function(){
        console.log($scope.politicaOrgao);
        $scope.processandoInserirPoliticaOrgao= true;
        $scope.mensagemInserirPoliticaOrgao = "";
        $scope.politicaOrgao.orgao_id = $scope.orgao.id;
        $http.post("api/politica_orgao", $scope.politicaOrgao).success(function (data){
            $scope.listarPoliticaOrgaos();
            $scope.mensagemInserirPoliticaOrgao =  "Gravado com sucesso!";
            $scope.processandoInserirPoliticaOrgao = false;
            //$scope.politicaOrgao = {};
        }).error(function(data){
            $scope.mensagemInserirPoliticaOrgao = "Ocorreu um erro!";
            $scope.processandoInserirPoliticaOrgao = false;
        });
    }

    $scope.listarPoliticaOrgaos = function(){
        $scope.processandoListagemPoliticaOrgaos = true;
        $http({
            url: 'api/politica_orgao/'+$scope.politicaOrgao.politica_id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.politicaOrgaos = data;
            $scope.totalPoliticaOrgaos = $scope.politicaOrgaos.length;
            $scope.processandoListagemPoliticaOrgaos = false;
        }).error(function(data){
            $scope.politicaOrgaos = [];
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemPoliticaOrgaos = false;
        });
    }

    $scope.perguntaExcluirPoliticaOrgao = function (idOrgao, titulo){
        $scope.idExcluirPoliticaOrgaoOrgao = idOrgao;
        $scope.idExcluirPoliticaOrgaoPolitica = $scope.politicaOrgao.politica_id;
        $scope.tituloExcluirPoliticaOrgao = titulo;
        $scope.excluidoPoliticaOrgao = false;
        $scope.mensagemExcluidoPoliticaOrgao = "";
    }


    $scope.excluirPoliticaOrgao = function(idOrgao, idPolitica){
        $scope.processandoExcluirPoliticaOrgao = true;
        $http({
            url: 'api/politica_orgao/'+idPolitica+'/'+idOrgao,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            //if(data.success){
            $scope.processandoExcluirPoliticaOrgao = false;
            $scope.excluidoPoliticaOrgao = true;
            $scope.mensagemExcluidoPoliticaOrgao = data.message;
            $scope.listarPoliticaOrgaos();
            //return;
            //}
            //$scope.processandoExcluirPoliticaOrgao = false;
            //$scope.excluidoPoliticaOrgao = false;
            //$scope.mensagemExcluidoPoliticaOrgao = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirPoliticaOrgao = false;
            $scope.mensagemExcluidoPoliticaOrgao = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////


    //PoliticaPublicoAlvo////////////////////////////////////
    $scope.politicaPublicoAlvo = {};
    $scope.dimensao = null;
    $scope.publicoAlvo = null;
    $scope.politicaPublicoAlvos = [];
    $scope.totalPoliticaPublicoAlvos = 0;
    $scope.processandoPublicoAlvos = false;
    $scope.processandoInserirPoliticaPublicoAlvo = false;
    $scope.processandoListagemPoliticaPublicoAlvos = false;

    $scope.listarPublicoAlvos = function(){
        $scope.processandoPublicoAlvos = true;
        $http({
            url: 'api/publico_alvo',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data.data);
            //$scope.publicoAlvos = data;
            $scope.publicoAlvos = data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
            $scope.processandoPublicoAlvos = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoPublicoAlvos = false;
        });
    }

    $scope.getPublicoAlvo = function(publico_alvo_id){
        let publicoAlvo = $scope.publicoAlvos.find(function(item){
            return item.id === publico_alvo_id;
        });
        return publicoAlvo.nome;
    }


    $scope.getPolitica = function(politica_id){
        if(politica_id){
            let politica = $scope.politicas.find(function(item){
                return item.id === politica_id;
            });
            return politica.nome;
        }
    }

    $scope.modalPoliticaPublicoAlvo = function (id, titulo){
        $scope.politicaPublicoAlvo.politica_id = id;
        $scope.tituloPoliticaPublicoAlvo = titulo;
        $scope.listarPublicoAlvos();
        $scope.listarPoliticaPublicoAlvos();
    }

    $scope.inserirPoliticaPublicoAlvo = function(){
        console.log($scope.politicaPublicoAlvo);
        $scope.processandoInserirPoliticaPublicoAlvo= true;
        $scope.mensagemInserirPoliticaPublicoAlvo = "";
        $scope.politicaPublicoAlvo.publico_alvo_id = $scope.publicoAlvo.id;
        $http.post("api/politica_publico_alvo", $scope.politicaPublicoAlvo).success(function (data){
            $scope.listarPoliticaPublicoAlvos();
            $scope.mensagemInserirPoliticaPublicoAlvo =  "Gravado com sucesso!";
            $scope.processandoInserirPoliticaPublicoAlvo = false;
            //$scope.politicaPublicoAlvo = {};
        }).error(function(data){
            $scope.mensagemInserirPoliticaPublicoAlvo = "Ocorreu um erro!";
            $scope.processandoInserirPoliticaPublicoAlvo = false;
        });
    }

    $scope.listarPoliticaPublicoAlvos = function(){
        $scope.processandoListagemPoliticaPublicoAlvos = true;
        $http({
            url: 'api/politica_publico_alvo/'+$scope.politicaPublicoAlvo.politica_id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.politicaPublicoAlvos = data;
            $scope.totalPoliticaPublicoAlvos = $scope.politicaPublicoAlvos.length;
            $scope.processandoListagemPoliticaPublicoAlvos = false;
        }).error(function(data){
            $scope.politicaPublicoAlvos = [];
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoListagemPoliticaPublicoAlvos = false;
        });
    }

    $scope.perguntaExcluirPoliticaPublicoAlvo = function (idPublicoAlvo, titulo){
        $scope.idExcluirPoliticaPublicoAlvoPublicoAlvo = idPublicoAlvo;
        $scope.idExcluirPoliticaPublicoAlvoPolitica = $scope.politicaPublicoAlvo.politica_id;
        $scope.tituloExcluirPoliticaPublicoAlvo = titulo;
        $scope.excluidoPoliticaPublicoAlvo = false;
        $scope.mensagemExcluidoPoliticaPublicoAlvo = "";
    }


    $scope.excluirPoliticaPublicoAlvo = function(idPublicoAlvo, idPolitica){
        $scope.processandoExcluirPoliticaPublicoAlvo = true;
        $http({
            url: 'api/politica_publico_alvo/'+idPolitica+'/'+idPublicoAlvo,
            method: 'DELETE'
        }).success(function(data, status, headers, config){
            console.log(data);
            //if(data.success){
            $scope.processandoExcluirPoliticaPublicoAlvo = false;
            $scope.excluidoPoliticaPublicoAlvo = true;
            $scope.mensagemExcluidoPoliticaPublicoAlvo = data.message;
            $scope.listarPoliticaPublicoAlvos();
            //return;
            //}
            //$scope.processandoExcluirPoliticaPublicoAlvo = false;
            //$scope.excluidoPoliticaPublicoAlvo = false;
            //$scope.mensagemExcluidoPoliticaPublicoAlvo = data.message;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoExcluirPoliticaPublicoAlvo = false;
            $scope.mensagemExcluidoPoliticaPublicoAlvo = "Erro ao tentar excluir!";
        });
    };

    ///////////////////////////////////////////////

}]);
