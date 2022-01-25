<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Item
 *
 * @property int $id
 * @property string $imagem
 * @property string $titulo
 * @property string $descricao
 * @property string $arquivo
 * @property int $posicao
 * @property int $status
 * @property int $modulo_id
 * @property int $cmsuser_id
 * @property timestamp $created_at
 * @property timestamp $updated_at
 *
 * @property Modulo $modulo
 * @property CmsUser $cms_user
 *
 * @package App\Models
 */
class Item extends Model
{
	protected $table = 'cms.items';

	protected $casts = [
		'imagem' => 'string',
		'titulo' => 'string',
		'posicao' => 'int',
		'status' => 'int',
		'modulo_id' => 'int',
	];

	protected $fillable = [
		'imagem',
		'titulo',
		'descricao',
		'arquivo',
		'posicao',
		'status',
		'modulo_id'
	];

	public function modulo()
	{
		return $this->belongsTo(Modulo::class);
	}

	public function cms_user()
	{
		return $this->belongsTo(CmsUser::class, 'cmsuser_id');
	}
}
