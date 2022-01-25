<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebdoorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms.webdoors', function (Blueprint $table) {
            $table->id();
            $table->string('imagem');
            $table->string('titulo')->nullable();
            $table->text('descricao')->nullable();
            $table->text('link')->nullable();
            $table->string('legenda')->nullable();
            $table->integer('posicao')->default(0);
            $table->integer('status')->default(0);
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
        Schema::dropIfExists('cms.webdoors');
    }
}
