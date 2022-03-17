<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Midia extends Model
{
    protected $table = 'cms.midias';

    protected $fillable = [
        'imagem', 'titulo', 'arquivo', 'cmsuser_id',
    ];
}
