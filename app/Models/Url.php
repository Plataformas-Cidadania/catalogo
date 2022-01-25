<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Url
 *
 * @property int $id
 * @property string $imagem
 * @property string|null $titulo
 * @property string|null $descricao
 * @property string|null $url
 * @property int $status
 * @property int $posicao
 * @property int $cmsuser_id
 * @property timestamp $created_at
 * @property timestamp $updated_at
 *
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Url extends Model
{
	protected $table = 'cms.urls';

	protected $casts = [
		'imagem' => 'string',
		'titulo' => 'string',
		'url' => 'string',
		'status' => 'int',
		'posicao' => 'int'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'url',
		'status',
		'posicao'
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
