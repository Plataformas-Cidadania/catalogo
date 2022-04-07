<?php


namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class PoliticaPublicoAlvo extends Model
{
    public $incrementing = false;
    protected $table = 'catalogo.politica_publico_alvo';
    public $timestamps = false;

    protected $fillable = [
        'politica_id',
        'publico_alvo_id'
    ];

    public function politica()
    {
        return $this->belongsTo(Politica::class, 'politica_id');
    }

    public function publico_alvo()
    {
        return $this->belongsTo(PublicoAlvo::class, 'publico_alvo_id');
    }


}
