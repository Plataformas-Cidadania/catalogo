<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Parceiro
 *
 * @property int $id
 * @property string $imagem
 * @property string|null $titulo
 * @property string|null $descricao
 * @property string|null $url
 * @property timestamp $created_at
 * @property timestamp $updated_at
 *
 * @package App\Models
 */
class Parceiro extends Model
{
	protected $table = 'cms.parceiros';

	protected $casts = [
		'imagem' => 'string',
		'titulo' => 'string',
		'url' => 'string',
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'url'
	];
}
