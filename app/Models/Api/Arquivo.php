<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Arquivo extends Model
{
    protected $table = 'catalogo.arquivo';
	protected $primaryKey = 'id';
    public $timestamps = true;
    protected $fillable = [
        'titulo',
        'imagem',
        'caminho_arquivo',
        'politica_id',
        'tipo',
        'url_externa'
    ];
    public function politica()
    {
        return $this->belongsTo(Politica::class, 'politica_id');
    }
}


