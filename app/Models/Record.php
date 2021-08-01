<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Record model.
 *
 * @property string $title
 * @property int $year
 * @property string $type
 * @property string $imdb_id
 *
 * @method static Record firstOrCreate(array $attributes, array $values = [])
 */
class Record extends Model
{
    /**
     * Mass Assignment.
     *
     * @var string[]
     */
    protected array $fillable = [
        'title',
        'year',
        'type',
        'imdb_id',
    ];

    /**
     * One-to-one relation with Poster model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function poster(): HasOne
    {
        return $this->hasOne(Poster::class);
    }
}
