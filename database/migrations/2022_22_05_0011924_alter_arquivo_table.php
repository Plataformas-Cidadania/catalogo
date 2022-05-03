<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterArquivoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catalogo.arquivo', function (Blueprint $table) {
            $table->integer('politica_id');
            $table->foreign('politica_id')->references('id')
                ->on('catalogo.politica')
                ->onDelete('cascade');
        });
    }
    public function down(){
        Schema::table('catalogo.arquivo', function (Blueprint $table) {
            $table->dropForeign(['politica_id']);
        });
    }
}
