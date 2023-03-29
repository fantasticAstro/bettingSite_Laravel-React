<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScoreLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    
     public function up()
    {
        Schema::create('score_log', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->datetime('updatetime');
            $table->string('username', 50);
            $table->string('points', 50);
            $table->timestamps();       
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
