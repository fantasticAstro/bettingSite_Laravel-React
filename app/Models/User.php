<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    protected $table = 'users';
    protected $fillable = ['email','username','full_name','points','mobile', 'is_bock', 'is_admin'];
    use HasFactory;
}
