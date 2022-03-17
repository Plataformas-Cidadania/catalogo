<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cms.midias')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Publicações',
            'status' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('cms.categorias')->insert([
            'imagem' => '',
            'origin' => '',
            'titulo' => 'Geral',
            'midia_id' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('cms.integrantes')->insert([
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Fernanda Silva',
            'url' => '#',
            'conteudo' => 1,
            'cmsuser_id' => 1,
        ]);

        DB::table('cms.posts')->insert([
            'categoria_id' => 1,
            'imagem' => '',
            'arquivo' => '',
            'titulo' => 'Título',
            'resumida' => 'Resumo',
            'descricao' => 'Descrição',
            'data' => '2022-03-18',
            'status' => 1,
            'destaque' => 1,
            'cmsuser_id' => 1,
        ]);
    }
}
