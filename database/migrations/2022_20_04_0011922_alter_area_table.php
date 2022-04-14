<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterAreaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::table('catalogo.area', function (Blueprint $table) {
            $table->string('icone')->nullable();
            $table->string('resumo',200)->nullable();
            $table->text('descricao')->nullable();
        });
    }

}
