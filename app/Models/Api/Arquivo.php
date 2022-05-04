<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Arquivo extends Model
{
    protected $table = 'catalogo.arquivo';
	protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'imagem',
        'caminho_arquivo'
    ];

}

