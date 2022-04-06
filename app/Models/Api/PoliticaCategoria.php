<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;


class PoliticaCategoria extends Model
{
    public $incrementing = false;
    protected $table = 'catalogo.politica_categoria';
    public $timestamps = false;

    protected $fillable = [
        'politica_id',
        'categoria_id'
    ];


    public function politica()
    {
        return $this->belongsTo(Politica::class, 'politica_id');
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }


}
