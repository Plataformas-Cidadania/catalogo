<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = 'catalogo.area';
	protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'nome',
        'icone',
        'resumo',
        'descricao',
        'imagem',
        'caminho_arquivo'
    ];
    public function politicas()
    {
        return $this->hasMany(Politica::class, 'area')->orderBy('ano', 'desc');
    }
}


