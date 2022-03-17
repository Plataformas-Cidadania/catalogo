<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $table = 'cms.categorias';

    protected $fillable = [
        'imagem', 'titulo', 'origin', 'midia_id', 'cmsuser_id',
    ];
}
