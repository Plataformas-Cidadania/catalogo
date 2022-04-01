<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoPolitica extends Model
{
    protected $table = 'catalogo.tipo_politica';
	protected $primaryKey = 'id';

    protected $fillable = [
        'nome'
    ];

}


