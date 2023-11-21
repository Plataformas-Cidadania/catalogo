<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Setting
 *
 * @property int $id
 * @property string $imagem
 * @property string $email
 * @property string $titulo
 * @property string $rodape
 * @property string $cep
 * @property string|null $endereco_titulo
 * @property string $endereco
 * @property string $numero
 * @property string|null $complemento
 * @property string $bairro
 * @property string $cidade
 * @property string $estado
 * @property string $titulo_contato
 * @property string $descricao_contato
 * @property string|null $endereco_titulo2
 * @property string|null $endereco2
 * @property string|null $numero2
 * @property string|null $complemento2
 * @property string|null $bairro2
 * @property string|null $cidade2
 * @property string|null $estado2
 * @property string|null $cep2
 * @property string $telefone
 * @property string|null $telefone2
 * @property string|null $telefone3
 * @property string $facebook
 * @property string $youtube
 * @property string $pinterest
 * @property string $twitter
 * @property string $instagram
 * @property string $blog
 * @property string $bd_atualizado
 * @property int $cmsuser_id
 * @property timestamp $created_at
 * @property timestamp $updated_at
 *
 * @package App\Models
 */
class Setting extends Model
{
	protected $table = 'cms.settings';

	protected $casts = [
		'imagem' => 'string',
		'email' => 'string',
		'titulo' => 'string',
		'rodape' => 'string',
		'cep' => 'string',
		'endereco_titulo' => 'string',
		'endereco' => 'string',
		'numero' => 'string',
		'complemento' => 'string',
		'bairro' => 'string',
		'cidade' => 'string',
		'estado' => 'string',
		'titulo_contato' => 'string',
		'descricao_contato' => 'string',
		'endereco_titulo2' => 'string',
		'endereco2' => 'string',
		'numero2' => 'string',
		'complemento2' => 'string',
		'bairro2' => 'string',
		'cidade2' => 'string',
		'estado2' => 'string',
		'cep2' => 'string',
		'telefone' => 'string',
		'telefone2' => 'string',
		'telefone3' => 'string',
		'facebook' => 'string',
		'youtube' => 'string',
		'pinterest' => 'string',
		'twitter' => 'string',
		'instagram' => 'string',
		'blog' => 'string',
		'bd_atualizado' => 'string'
	];

	protected $fillable = [
		'imagem',
		'email',
		'titulo',
		'rodape',
		'cep',
		'endereco_titulo',
		'endereco',
		'numero',
		'complemento',
		'bairro',
		'cidade',
		'estado',
		'titulo_contato',
		'descricao_contato',
		'endereco_titulo2',
		'endereco2',
		'numero2',
		'complemento2',
		'bairro2',
		'cidade2',
		'estado2',
		'cep2',
		'telefone',
		'telefone2',
		'telefone3',
		'facebook',
		'youtube',
		'pinterest',
		'twitter',
		'instagram',
		'blog',
		'bd_atualizado'
	];
}
