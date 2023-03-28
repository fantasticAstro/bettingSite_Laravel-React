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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email', 50);
            $table->string('username', 50);
            $table->string('password', 100) ;
            $table->integer('point') ;
            $table->enum('is_admin', array('Y','N'))->nullable()->change();            
            $table->enum('is_block', array('Y','N'))->nullable()->change();
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
