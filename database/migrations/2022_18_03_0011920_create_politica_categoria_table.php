<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePoliticaCategoriaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('catalogo.politica_categoria', function (Blueprint $table) {

            $table->integer('politica_id');
            $table->foreign('politica_id')->references('id')
                ->on('catalogo.politica')
                ->onDelete('cascade');
            $table->integer('categoria_id');
            $table->foreign('categoria_id')->references('id')
                ->on('catalogo.categoria')
                ->onDelete('cascade');
            $table->primary(['politica_id', 'categoria_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catalogo.politica_categoria', function (Blueprint $table) {
            $table->dropForeign(['politica_id']);
            $table->dropForeign(['categoria_id']);
        });
        Schema::dropIfExists('catalogo.politica_categoria');
    }
}
