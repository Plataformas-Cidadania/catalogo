<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePoliticaOrgaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('catalogo.politica_orgao', function (Blueprint $table) {

            $table->integer('politica_id');
            $table->foreign('politica_id')->references('id')
                ->on('catalogo.politica')
                ->onDelete('cascade');
            $table->integer('orgao_id');
            $table->foreign('orgao_id')->references('id')
                ->on('catalogo.orgao')
                ->onDelete('cascade');
            $table->primary(['politica_id', 'orgao_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catalogo.politica_orgao', function (Blueprint $table) {
            $table->dropForeign(['politica_id']);
            $table->dropForeign(['orgao_id']);
        });
        Schema::dropIfExists('catalogo.politica_orgao');
    }
}
