<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
            // Pour NovaMap & Dating discret
            $table->string('vibe_status')->nullable(); // Ex: "En quête d'aventure", "Chill"
            $table->string('avatar_mood')->default('default'); // Pour tes filtres AR/Bitmojis
            
            // Pour la Proximité (Localisation éphémère)
            $table->decimal('last_latitude', 10, 8)->nullable();
            $table->decimal('last_longitude', 11, 8)->nullable();
            
            // Pour l'aspect Social-First
            $table->integer('nova_points')->default(0); // Gamification universelle
            $table->json('interest_filters')->nullable(); // Tes filtres AR d'interactions
        });
    }
};
