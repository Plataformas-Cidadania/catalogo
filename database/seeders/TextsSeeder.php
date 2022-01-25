<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TextsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Diagnóstico',
            'descricao' => 'O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.',
            'slug' => 'diagnostico',
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Resultado',
            'descricao' => 'Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões',
            'slug' => 'resultado',
        ]);

        DB::table('cms.texts')->insert([
            'imagem' => '',
            'titulo' => 'Recursos',
            'descricao' => 'O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.',
            'slug' => 'recursos',
        ]);
    }
}
