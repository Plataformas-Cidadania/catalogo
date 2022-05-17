<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class PoliticaOrgao extends Model
{
    public $incrementing = false;
    protected $table = 'catalogo.politica_orgao';
    public $timestamps = false;

    protected $fillable = [
        'politica_id',
        'orgao_id'
    ];
    public $with = ['orgao'];
    public function politica()
    {
        return $this->belongsTo(Politica::class, 'politica_id');
    }

    public function orgao()
    {
        return $this->belongsTo(Orgao::class, 'orgao_id');
    }

}
