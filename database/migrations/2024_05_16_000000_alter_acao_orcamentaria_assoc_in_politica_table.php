<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AlterAcaoOrcamentariaAssocInPoliticaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Usamos DB::statement com raw SQL no Postgres para garantir a conversão com USING
        // Isso também evita a necessidade do pacote doctrine/dbal
        DB::statement('ALTER TABLE catalogo.politica ALTER COLUMN acao_orcamentaria_assoc TYPE text USING acao_orcamentaria_assoc::text');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Reverte a coluna para varchar(255) caso precise dar rollback
        DB::statement('ALTER TABLE catalogo.politica ALTER COLUMN acao_orcamentaria_assoc TYPE varchar(255) USING acao_orcamentaria_assoc::varchar');
    }
}
