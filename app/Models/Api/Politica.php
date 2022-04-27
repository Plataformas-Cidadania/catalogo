<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Model;

class Politica extends Model
{
    protected $table = 'catalogo.politica';
	protected $primaryKey = 'id';

    protected $fillable = [
        'nome','ano','medida_provisoria','medida_provisoria_inicio_vigencia','legislacao',
        'vigencia_inicio','vigencia_fim','objetivos','observacao','acao_orcamentaria_assoc',
        'publico_alvo_categ','tipo_politica','grande_area','area',
    ];

	public function tipo_politica()
	{
		return $this->belongsTo(TipoPolitica::class, 'tipo_politica');
	}
	public function grande_area()
	{
		return $this->belongsTo(GrandeArea::class, 'grande_area');
	}
	public function area()
	{
		return $this->belongsTo(Area::class, 'area');
	}
    public function politica_orgao()
    {
        return $this->hasMany(PoliticaOrgao::class, 'politica_id');
    }
    public function politica_publico_alvo()
    {
        return $this->hasMany(PoliticaPublicoAlvo::class, 'politica_id');
    }

}


