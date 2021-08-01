<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Poster;
use App\Models\Record;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;

class DataFetchingController extends Controller
{
    /**
     * Buttons and API endpoints mapping.
     *
     * @var array|string[]
     */
    private array $parameters_mapping = [
        'button_1' => 'http://www.omdbapi.com/?s=Matrix&apikey=720c3666',
        'button_2' => 'http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666',
        'button_3' => 'http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666',
    ];

    /**
     * Fetches data from the API and stores unique items.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request): Response
    {
        $button_parameter = $request->query('button');
        if (!array_key_exists($button_parameter, $this->parameters_mapping)) {
            return response(['Error' => 'Wrong "button" parameter: ' . $button_parameter]);
        }

        $response = Http::get($this->parameters_mapping[$button_parameter]);
        if (!is_array($response['Search'])) {
            return response($response);
        }

        foreach ($response['Search'] as $item) {
            $record = Record::firstOrCreate(
                ['imdb_id' => $item['imdbID']],
                [
                    'title' => $item['Title'],
                    'year' => $item['Year'],
                    'type' => $item['Type'],
                ],
            );

            if ($item['Poster'] !== 'N/A') {
                $poster = Poster::firstOrNew([
                    'url' => $item['Poster'],
                ]);

                $record->poster()->save($poster);
            }
        }

        return response($response);
    }
}
