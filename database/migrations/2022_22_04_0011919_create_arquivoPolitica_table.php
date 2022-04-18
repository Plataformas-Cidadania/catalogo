<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreateArquivoPoliticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('catalogo.arquivo_politica', function (Blueprint $table) {
            $table->integer('politica_id');
            $table->foreign('politica_id')->references('id')
                ->on('catalogo.politica')
                ->onDelete('cascade');
            $table->integer('arquivo_id');
            $table->foreign('arquivo_id')->references('id')
                ->on('catalogo.arquivo')
                ->onDelete('cascade');
            $table->primary(['politica_id', 'arquivo_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catalogo.arquivo_politica', function (Blueprint $table) {
            $table->dropForeign(['politica_id']);
            $table->dropForeign(['arquivo_id']);
        });
        Schema::dropIfExists('catalogo.arquivo_politica');
    }
}
