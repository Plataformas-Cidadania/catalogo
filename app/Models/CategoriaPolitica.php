<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriaPolitica extends Model
{
    protected $table = 'catalogo.categoria';
	protected $primaryKey = 'id';

    protected $fillable = [
        'nome'
    ];

}


