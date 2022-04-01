<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Orgao extends Model
{
    protected $table = 'catalogo.orgao';
	protected $primaryKey = 'id';

    protected $fillable = [
        'nome'
    ];

}


