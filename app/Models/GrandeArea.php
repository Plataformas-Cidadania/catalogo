<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GrandeArea extends Model
{
    protected $table = 'catalogo.grande_area';
	protected $primaryKey = 'id';

    protected $fillable = [
        'nome'
    ];

}


