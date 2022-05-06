<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropArquivoPoliticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('catalogo.arquivo_politica');
    }
    public function down(){
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
}
