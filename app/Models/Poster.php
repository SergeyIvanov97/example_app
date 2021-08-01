<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Poster model.
 *
 * @property string $url
 *
 * @method static Poster firstOrNew(array $attributes, array $values = [])
 */
class Poster extends Model
{
    /**
     * Mass Assignment.
     *
     * @var string[]
     */
    protected array $fillable = ['url'];

    /**
     * One-to-one relation with Record model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function record(): BelongsTo
    {
        return $this->belongsTo(Record::class);
    }
}
