<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIntegrantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cms.integrantes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imagem')->nullable();
            $table->string('titulo')->nullable();
            $table->string('url')->nullable();
            $table->text('arquivo')->nullable();
            $table->integer('conteudo')->default(0);
            $table->integer('cmsuser_id')->unsigned();
            $table->foreign('cmsuser_id')->references('id')->on('cms.cms_users')->onDelete('restrict');
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
        Schema::drop('cms.integrantes');
    }
}
