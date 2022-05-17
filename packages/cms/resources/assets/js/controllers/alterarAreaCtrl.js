cmsApp.controller('alterarAreaCtrl', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timeout){

    $scope.processandoSalvar = false;
    $scope.processandoDetalhar = false;

    $scope.id = 0;
    $scope.formatos = [];
    $scope.tipo = null;
    $scope.formato = null;

    //ALTERAR/////////////////////////////

    $scope.tinymceOptions = tinymceOptions;

    $scope.mostrarForm = false;

    $scope.removerImagem = false;

    $scope.detalhar = function(id){
        $scope.processandoDetalhar = true;
        $http({
            url: 'api/area/'+id,
            method: 'GET',
            params: {

            }
        }).success(function(data, status, headers, config){
            //console.log(data);
            $scope.area = data;
            $scope.iconeBD = $scope.area.icone;
            $scope.imagemBD = $scope.area.imagem;//Imagem do Arquivo
            $scope.arquivoBD = $scope.area.caminho_arquivo;
            $scope.processandoDetalhar = false;
        }).error(function(data){
            $scope.message = "Ocorreu um erro: "+data;
            $scope.processandoDetalhar = false;
        });
    };





    $scope.alterar = function (imagemArquivo, arquivo, icone){

        $scope.area.resumo = $scope.area.resumo ? $scope.area.resumo : '.';
        $scope.area.descricao = $scope.area.descricao ? $scope.area.descricao : '.';

        if(imagemArquivo==null && arquivo==null && icone==null){

            $scope.processandoSalvar = true;
            delete $scope.area.icone;
            delete $scope.area.imagem;
            delete $scope.area.caminho_arquivo;
            $http.put("api/area/"+$scope.id, $scope.area).success(function (data){
                //console.log(data);
                $scope.processandoSalvar = false;
                $scope.mensagemSalvar = data.message;
                $scope.removericone = false;
                $scope.removerImagem = false;
                $scope.removerArquivo = false;
            }).error(function(data){
                //console.log(data);
                $scope.mensagemSalvar = "Ocorreu um erro: "+data;
                $scope.processandoSalvar = false;
            });

        }else{

            $scope.area.icone = icone;
            $scope.area.imagem = imagemArquivo;//imagem do arquivo
            $scope.area.caminho_arquivo = arquivo;
            $scope.area._method = 'PUT';
            Upload.upload({
                url: 'api/area/'+$scope.id,
                data: $scope.area,
            }).then(function (response) {
                $timeout(function () {
                    $scope.result = response.data;
                });
                //console.log(response.data);
                $scope.icone = null;//limpa o icone
                $scope.picFile = null;//limpa a imagemArquivo
                $scope.fileArquivo = null;//limpa o arquivo
                $scope.mensagemInserir =  "Gravado com sucesso!";
                $scope.detalhar(response.data.id);
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

    $scope.limparIcone = function(){
        $scope.icone = null;
        $scope.iconeBD = null;
        $scope.removerIcone = true;
    };

    $scope.limparImagem = function(){
        $scope.picFile = null;
        $scope.imagemBD = null;
        $scope.removerImagem = true;
    };

    $scope.limparArquivo = function(){
        $scope.arquivo = null;
        $scope.arquivoBD = null;
        $scope.removerArquivo = true;
    };

    $scope.carregaImagem  = function(img) {
        if(img!=''){
            $scope.imagemBD = 'imagens/areas/xs-'+img;
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
