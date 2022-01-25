<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class CmsUser
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string|null $remember_token
 * @property timestamp  $created_at
 * @property timestamp  $updated_at
 *
 * @property Collection|Url[] $urls
 * @property Collection|Text[] $texts
 * @property Collection|Webdoor[] $webdoors
 * @property Collection|Item[] $items
 * @property Collection|Tipo[] $tipos
 * @property Collection|Modulo[] $modulos
 *
 * @package App\Models
 */
class CmsUser extends Model
{
	protected $table = 'cms.cms_users';

	protected $casts = [
		'name' => 'string',
		'email' => 'string',
		'password' => 'string',
		'remember_token' => 'string',
		'created_at' => 'timestamp without time zone',
		'updated_at' => 'timestamp without time zone'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'name',
		'email',
		'password',
		'remember_token'
	];

	public function urls()
	{
		return $this->hasMany(Url::class, 'cmsuser_id');
	}

	public function texts()
	{
		return $this->hasMany(Text::class, 'cmsuser_id');
	}

	public function webdoors()
	{
		return $this->hasMany(Webdoor::class, 'cmsuser_id');
	}

	public function items()
	{
		return $this->hasMany(Item::class, 'cmsuser_id');
	}

	public function tipos()
	{
		return $this->hasMany(Tipo::class, 'cmsuser_id');
	}

	public function modulos()
	{
		return $this->hasMany(Modulo::class, 'cmsuser_id');
	}
}
