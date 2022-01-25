<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Link
 *
 * @property int $id_link
 * @property string|null $uri
 * @property string|null $idioma
 * @property int $id_recurso
 *
 * @property Recurso $recurso
 *
 * @package App\Models
 */
class Link extends Model
{
	protected $table = 'avaliacao.link';
	protected $primaryKey = 'id_link';
	public $timestamps = false;

	protected $casts = [
		'id_link' => 'int',
		'uri' => 'string',
		'idioma' => 'string',
		'id_recurso' => 'int'
	];

	protected $fillable = [
		'uri',
		'idioma',
		'id_recurso'
	];

	public function recurso()
	{
		return $this->belongsTo(Recurso::class, 'id_recurso');
	}
}
