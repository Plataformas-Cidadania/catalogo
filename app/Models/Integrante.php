<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Integrante extends Model
{
    protected $table = 'cms.integrantes';

    protected $fillable = [
        'imagem', 'titulo', 'url', 'arquivo', 'conteudo', 'cmsuser_id',
    ];
}
