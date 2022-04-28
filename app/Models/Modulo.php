<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Modulo
 *
 * @property int $id
 * @property string|null $imagem
 * @property string|null $titulo
 * @property string|null $descricao
 * @property string|null $arquivo
 * @property string|null $slug
 * @property int $status
 * @property int $show
 * @property int $tipo_id
 * @property int $cmsuser_id
 * @property timestamp $created_at
 * @property timestamp $updated_at
 *
 * @property CmsUser $cms_user
 * @property Collection|Item[] $items
 *
 * @package App\Models
 */
class Modulo extends Model
{
	protected $table = 'cms.modulos';

	protected $casts = [
		'imagem' => 'string',
		'titulo' => 'string',
		'status' => 'int',
		'show' => 'int',
		'tipo_id' => 'int'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'resumida',
		'arquivo',
		'slug',
		'status',
		'show',
		'tipo_id'
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}

	public function items()
	{
		return $this->hasMany(Item::class);
	}
}
