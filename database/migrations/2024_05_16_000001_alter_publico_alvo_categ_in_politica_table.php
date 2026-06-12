<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AlterPublicoAlvoCategInPoliticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('ALTER TABLE catalogo.politica ALTER COLUMN publico_alvo_categ TYPE text USING publico_alvo_categ::text');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('ALTER TABLE catalogo.politica ALTER COLUMN publico_alvo_categ TYPE varchar(255) USING publico_alvo_categ::varchar');
    }
}
