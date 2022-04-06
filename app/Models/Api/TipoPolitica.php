<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class TipoPolitica extends Model
{
    protected $table = 'catalogo.tipo_politica';
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'nome'
    ];

}


