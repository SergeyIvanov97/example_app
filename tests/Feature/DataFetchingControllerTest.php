<?php

namespace Tests\Feature;

use Tests\TestCase;

class DataFetchingControllerTest extends TestCase
{
    /**
     * A basic feature test for data fetching.
     *
     * @return void
     */
    public function test_data_fetching()
    {
        $response = $this->get('/api/fetch-data?button=button_1');

        $response->assertJsonPath('Response', 'True');
    }

    /**
     * A basic feature test for wrong parameters.
     *
     * @return void
     */
    public function test_wrong_parameters()
    {
        $button_name = 'not_a_button';
        $response = $this->get("/api/fetch-data?button={$button_name}");

        $response->assertJsonPath('Error', 'Wrong "button" parameter: ' . $button_name);
    }
}
