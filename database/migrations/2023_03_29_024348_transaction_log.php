<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TransactionLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction_log', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->datetime('updatetime');
            $table->integer('market_id');
            $table->integer('bet_id');
            $table->string('bet_data', 200);
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
