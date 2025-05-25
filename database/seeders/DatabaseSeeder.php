<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Str;

final class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // TODO: reconsider moving this to factory
        if (App::environment('local')) {
            $count = 20;
            $paddingLength = Str::length((string) $count);

            // TODO: seed default admin

            User::factory($count)
                ->sequence(function (Sequence $sequence) use ($paddingLength) {
                    $index = $sequence->index + 1;
                    $paddedIndex = Str::padLeft((string) $index, $paddingLength, '0');

                    return [
                        'name' => "user-$paddedIndex",
                        'email' => "user-$paddedIndex@example.com",
                    ];
                })
                ->create();
        }
    }
}
