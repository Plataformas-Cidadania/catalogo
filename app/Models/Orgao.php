<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Orgao extends Model
{
    protected $table = 'catalogo.orgao';
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'nome'
    ];

}


