<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModulosDestaquesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('cms.modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Áreas temáticas',
            'resumida' => "Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público",
            'descricao' => "Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público",
            'slug' => 'areas-tematicas',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 3,
        ]);

        DB::table('cms.modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Linhas do tempo',
            'resumida' => "Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público",
            'descricao' => "Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público",
            'slug' => 'timeline',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 3,
        ]);

        DB::table('cms.modulos')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Consulta',
            'resumida' => "Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público",
            'descricao' => "Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público",
            'slug' => 'consulta',
            'status' => 1,
            'show' => 0,
            'tipo_id' => 3,
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Consulta',
            'descricao' => "Apesar de constituírem um elemento básico de organização da atuação governamental, de perpassarem cotidianamente o debate público",
            'slug' => 'biblioteca',
        ]);



    }
}
