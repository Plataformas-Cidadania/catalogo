<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Popup extends Model
{
    protected $table = 'cms.popups';

    protected $fillable = [
        'imagem', 'arquivo', 'titulo', 'descricao', 'url', 'status'
    ];
}
