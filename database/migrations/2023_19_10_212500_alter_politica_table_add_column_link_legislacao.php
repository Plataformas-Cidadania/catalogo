<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPoliticaTableAddColumnLinkLegislacao extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('catalogo.politica', function (Blueprint $table) {
            $table->string('link_legislacao')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('catalogo.politica', function (Blueprint $table) {
            $table->dropColumn('link_legislacao');
        });
    }
}
