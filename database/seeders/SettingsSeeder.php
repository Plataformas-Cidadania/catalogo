<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cms.settings')->insert([
            'imagem' => '',
            'email' => 'catalogo@ipea.gov.br',
            'titulo' => 'Catálogo',
            'rodape' => 'Todos direitos reservados <a href="https://www.ipea.gov.br"> Ipea</a>',

            'endereco_titulo' => 'Ipea Brasília',
            'cep' => '70390-025',
            'endereco' => 'Setor de Edifícios Públicos Sul (SEPS), Centro Empresarial Brasília 50',
            'numero' => 'Quadra 702/902 – Asa Sul – Conjunto C, Torre B.',
            'complemento' => '',
            'bairro' => '',
            'cidade' => 'Brasília',
            'estado' => 'DF',
            'telefone' => '(61) 2026-5557',


            'endereco_titulo2' => 'Ipea Rio de Janeiro',
            'cep2' => '20071-900',
            'endereco2' => 'Av. Presidente Vargas',
            'numero2' => 730,
            'complemento2' => '16° andar – Torres 3 e 4 - Ed. Bacen',
            'bairro2' => 'Centro',
            'cidade2' => 'Rio de Janeiro',
            'estado2' => 'RJ',
            'telefone2' => '(21) 3515-8500',

            'facebook' => 'https://www.facebook.com/ipeaonline',
            'youtube' => 'http://www.youtube.com/user/agenciaipea',
            'pinterest' => '',
            'twitter' => 'http://www.twitter.com/ipeaonline',
            'instagram' => '',
            'blog' => '',

            'telefone3' => '',

            'titulo_contato' => 'Titulo contato',
            'descricao_contato' => 'Para entrar em contato com a equipe do INCLUA, utilize o formulário abaixo ou, se preferir, envie um e-mail para catalogo@ipea.gov.br.',

        ]);
    }
}

