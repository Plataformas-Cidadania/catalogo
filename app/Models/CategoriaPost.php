<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriaPost extends Model
{

    protected $table = 'cms.categorias_posts';
    protected $primaryKey = 'categoria_id';

    protected $fillable = [
        'categoria_id', 'post_id',
    ];
}
