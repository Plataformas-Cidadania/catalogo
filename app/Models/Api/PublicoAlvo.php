<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class PublicoAlvo extends Model
{
    protected $table = 'catalogo.publico_alvo';
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'nome'
    ];

}


