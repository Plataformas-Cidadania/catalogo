<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreatePoliticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('catalogo.politica', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->date('ano');
            $table->string('medida_provisoria')->nullable();
            $table->date('media_provisoria_inicio_vigencia')->nullable();
            $table->string('legislacao')->nullable();
            $table->date('vigencia_inicio')->nullable();
            $table->date('vigencia_fim')->nullable();
            $table->text('objetivos')->nullable();
            $table->text('observacao')->nullable();
            $table->string('acao_orcamentaria_assoc')->nullable();
            $table->enum('instrumento_legal', ['Resolução','Projeto de Lei','Portaria',
                'Norma de execução','Norma operacional','Lei ordinária','Medida Provisória',
                'Decreto','Decreto-Lei','Instrução Normativa','Lei Complementar'])->nullable()->comment('Tipo de instrumento legal');
            $table->string('publico_alvo_categ');

            $table->integer('tipo_politica')->nullable();
            $table->foreign('tipo_politica')->references('id')->on('catalogo.tipo_politica')->onDelete('set null');

            $table->integer('grande_area')->nullable();
            $table->foreign('grande_area')->references('id')->on('catalogo.grande_area')->onDelete('set null');

            $table->integer('area')->nullable();
            $table->foreign('area')->references('id')->on('catalogo.area')->onDelete('set null');


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
        Schema::dropIfExists('catalogo.politica');
    }
}
