<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'cms.posts';

    protected $fillable = [
        'imagem', 'titulo', 'resumida', 'descricao', 'arquivo', 'data', 'categoria_id', 'cmsuser_id', 'video', 'url', 'image_detail',
    ];
}
