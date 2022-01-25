<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Webdoor
 *
 * @property int $id
 * @property string $imagem
 * @property string|null $titulo
 * @property string|null $descricao
 * @property string|null $link
 * @property string|null $legenda
 * @property int $posicao
 * @property int $status
 * @property int $cmsuser_id
 * @property timestamp $created_at
 * @property timestamp $updated_at
 *
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Webdoor extends Model
{
	protected $table = 'cms.webdoors';

	protected $casts = [
		'imagem' => 'string',
		'titulo' => 'string',
		'legenda' => 'string',
		'posicao' => 'int',
		'status' => 'int'
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'link',
		'legenda',
		'posicao',
		'status',
	];

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
