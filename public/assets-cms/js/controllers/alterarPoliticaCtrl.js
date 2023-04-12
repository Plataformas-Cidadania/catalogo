cmsApp.controller('alterarPoliticaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.processandoSalvar = false;
    $scope.processandoDetalhar = false;

    $scope.id = 0;
    $scope.formatos = [];
    $scope.tipo = null;
    $scope.formato = null;

    $scope.grandes_areas = [];
    $scope.grande_area = null;
    $scope.areas = [];
    $scope.area = null;
    $scope.tipos_politicas = [];
    $scope.tipo_politica = null;

    //ALTERAR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;

    $scope.mostrarForm = false;

    $scope.removerImagem = false;

    var listarGrandesAreas= function(){
        $scope.processandoDetalhar = true;
        $http({
            url: 'api/grande_area',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data);
            $scope.grandes_areas = data;
            listarAreas();
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    var listarAreas= function(){
        $http({
            url: 'api/area',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data);
            $scope.areas = data;
            listarTipos();
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    var listarTipos= function(){
        $http({
            url: 'api/tipo_politica',
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data);
            $scope.tipos_politicas = data;
            $scope.detalhar($scope.id);
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
        });
    }

    $scope.detalhar = function(id){
        //$scope.processandoDetalhar = true;
        $http({
            url: 'api/politica/'+id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            $scope.politica = data;//data.data
            $scope.politica.ano = parseInt($scope.politica.ano.substring(0, 4));

            //console.log($scope.politica.vigencia_inicio, $scope.politica.vigencia_fim);
            $scope.politica.vigencia_inicio = new Date($scope.politica.vigencia_inicio+'T00:00');
            $scope.politica.vigencia_fim = new Date($scope.politica.vigencia_fim+'T00:00');

            $scope.grandes_areas.forEach(function (item){
                if(item.id === $scope.politica.grande_area){
                    $scope.grande_area = item;
                }
            });
            $scope.areas.forEach(function (item){
                if(item.id === $scope.politica.area){
                    $scope.area = item;
                }
            });
            $scope.tipos_politicas.forEach(function (item){
                if(item.id === $scope.politica.tipo_politica){
                    $scope.tipo_politica = item;
                }
            });

            $scope.processandoDetalhar = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoDetalhar = false;
        });
    };

    listarGrandesAreas();


    $scope.alterar = function (file){

        $scope.politica.grande_area = $scope.grande_area.id;
        $scope.politica.area = $scope.area.id;
        $scope.politica.tipo_politica = $scope.tipo_politica.id;
        if($scope.politica.ano.toString().length === 4){
            $scope.politica.ano = $scope.politica.ano + '-01-01';
        }

        if(file==null){

            $scope.processandoSalvar = true;
            $http.put("api/politica/"+$scope.id, $scope.politica).success(function (data){
                //console.log(data);
                $scope.processandoSalvar = false;
                $scope.mensagemSalvar = data.message;
                $scope.removerImagem = false;
            }).error(function(data){
                //console.log(data);
                $scope.mensagemSalvar = "Ocorreu um erro: "+data;
                $scope.processandoSalvar = false;
            });

        }else{

            file.upload = Upload.upload({
                url: 'api/politica/'+$scope.id,
                data: {text: $scope.text, file: file},
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
                $scope.picFile = null;//limpa o form
                $scope.mensagemSalvar =  "Gravado com sucesso!";
                $scope.removerImagem = false;
                $scope.imagemBD = 'imagens/texts/'+response.data;
                console.log($scope.imagemDB);
            }, function (response) {
                if (response.status > 0){
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                //console.log(evt);
                // Math.min is to fix IE which reports 200% sometimes
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });

        }

    };

    $scope.limparImagem = function(){
        $scope.picFile = null;
        $scope.imagemBD = null;
        $scope.removerImagem = true;
    };

    $scope.carregaImagem  = function(img) {
        if(img!=''){
            $scope.imagemBD = 'imagens/politicas/xs-'+img;
            //console.log($scope.imagemBD);
        }
    };

    $scope.validar = function(valor) {
        if(valor===undefined && $scope.form.$dirty){
            return "campo-obrigatorio";
        }
        return "";
    };
    /////////////////////////////////



}]);
