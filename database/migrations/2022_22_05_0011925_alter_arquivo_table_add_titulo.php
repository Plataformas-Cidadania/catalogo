<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterArquivoTableAddTitulo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catalogo.arquivo', function (Blueprint $table) {
            $table->string('titulo',500)->nullable();
        });
    }
    public function down(){
        Schema::table('catalogo.arquivo', function (Blueprint $table) {
            $table->dropColumn('titulo');
        });
    }
}
