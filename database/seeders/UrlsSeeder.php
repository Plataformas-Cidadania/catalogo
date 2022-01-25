<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UrlsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cms.urls')->insert([
            'imagem' => '',
            'titulo' => 'Retrato das Desigualdades de Gênero e Raça (IPEA)',
            'descricao' => '',
            'url' => 'https://www.ipea.gov.br/retrato/',
            'status' => 1,
            'posicao' => 1,
        ]);

        DB::table('cms.urls')->insert([
            'imagem' => '',
            'titulo' => 'Igualdades Racial (IPEA)',
            'descricao' => '',
            'url' => 'https://www.ipea.gov.br/igualdaderacial/',
            'status' => 1,
            'posicao' => 2,
        ]);

        DB::table('cms.urls')->insert([
            'imagem' => '',
            'titulo' => 'Observatório das desigualdades (Fundação João Pinheiro)',
            'descricao' => '',
            'url' => 'http://observatoriodesigualdades.fjp.mg.gov.br/',
            'status' => 1,
            'posicao' => 3,
        ]);

        DB::table('cms.urls')->insert([
            'imagem' => '',
            'titulo' => 'Observatório das desigualdades (UFRN)',
            'descricao' => '',
            'url' => 'https://ccsa.ufrn.br/portal/?page_id=11940',
            'status' => 1,
            'posicao' => 3,
        ]);

        DB::table('cms.urls')->insert([
            'imagem' => '',
            'titulo' => 'Plataforma Brasileira pela Reforma do Sistema Político',
            'descricao' => '',
            'url' => 'https://reformapolitica.org.br/',
            'status' => 1,
            'posicao' => 3,
        ]);


    }
}

