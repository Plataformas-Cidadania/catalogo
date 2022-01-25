<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms.settings', function (Blueprint $table) {
            $table->id();
            $table->string('imagem')->nullable();
            $table->string('email')->nullable();
            $table->string('titulo')->nullable();
            $table->string('rodape')->nullable();
            $table->string('cep')->nullable();
            $table->string('endereco_titulo')->nullable();
            $table->string('endereco')->nullable();
            $table->string('numero')->nullable();
            $table->string('complemento')->nullable();
            $table->string('bairro')->nullable();
            $table->string('cidade')->nullable();
            $table->string('estado')->nullable();
            $table->string('titulo_contato')->nullable();
            $table->longText('descricao_contato')->nullable();
            $table->string('endereco_titulo2')->nullable();
            $table->string('endereco2')->nullable();
            $table->string('numero2')->nullable();
            $table->string('complemento2')->nullable();
            $table->string('bairro2')->nullable();
            $table->string('cidade2')->nullable();
            $table->string('estado2')->nullable();
            $table->string('cep2')->nullable();
            $table->string('telefone')->nullable();
            $table->string('telefone2')->nullable();
            $table->string('telefone3')->nullable();
            $table->string('facebook')->nullable();
            $table->string('youtube')->nullable();
            $table->string('pinterest')->nullable();
            $table->string('twitter')->nullable()->nullable();
            $table->string('instagram');
            $table->string('blog')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cms.settings');
    }
}
