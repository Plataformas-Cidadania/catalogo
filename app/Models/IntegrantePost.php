<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IntegrantePost extends Model
{

    protected $table = 'cms.integrantes_posts';
    protected $primaryKey = 'integrante_id';

    protected $fillable = [
        'integrante_id', 'post_id',
    ];
}
