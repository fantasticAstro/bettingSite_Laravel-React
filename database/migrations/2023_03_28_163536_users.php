<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username', 50);
            $table->integer('point') ;
            $table->enum('is_admin', array('Y','N'))->nullable();            
            $table->enum('is_block', array('Y','N'))->nullable();      
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('username');
            $table->dropColumn('point');
            $table->dropColumn('is_admin');
            $table->dropColumn('is_block');     
        });
    }
}
