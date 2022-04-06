<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $table = 'catalogo.categoria';
	protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'nome'
    ];

}


