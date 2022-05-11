<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPoliticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catalogo.politica', function (Blueprint $table) {
            $table->dropColumn('publico_alvo_categ');
            $table->text('publico_alvo_legislacao')->nullable();
        });
    }
    public function down(){
        Schema::table('catalogo.politica', function (Blueprint $table) {
            $table->string('publico_alvo_categ')->nullable();
            $table->dropColumn('publico_alvo_legislacao');
        });
    }
}
