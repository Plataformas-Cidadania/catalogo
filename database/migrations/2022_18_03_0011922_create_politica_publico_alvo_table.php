<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePoliticaPublicoAlvoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('catalogo.politica_publico_alvo', function (Blueprint $table) {

            $table->integer('politica_id');
            $table->foreign('politica_id')->references('id')
                ->on('catalogo.politica')
                ->onDelete('cascade');
            $table->integer('publico_alvo_id');
            $table->foreign('publico_alvo_id')->references('id')
                ->on('catalogo.publico_alvo')
                ->onDelete('cascade');
            $table->primary(['politica_id', 'publico_alvo_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catalogo.politica_publico_alvo', function (Blueprint $table) {
            $table->dropForeign(['politica_id']);
            $table->dropForeign(['publico_alvo_id']);
        });
        Schema::dropIfExists('catalogo.politica_publico_alvo');
    }
}
