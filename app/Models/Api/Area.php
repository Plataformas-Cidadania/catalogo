<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = 'catalogo.area';
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'nome'
    ];

}

