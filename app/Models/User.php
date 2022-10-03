<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'image',
        'password',
        'image'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    
    //多対多のリレーション
    public function products(){
        return $this->belongsToMany(Product::class)->withTimestamps();
    }

    //この商品に対して既にlikeしたかどうかを判別する
    public function isLike($productId){
        return $this->products()->where('product_id',$productId)->exists();
    }

    //isLikeを使って、既にlikeしたか確認したあと、いいねする（重複させない）
    public function like($productId){
        if ($this->isLike($productId)) {
            //もし既に「いいね」していたら何もしない
        } else {
            $this->products()->attach($productId);
        }
    }

    //isLikeを使って、既にlikeしたか確認して、もししていたら解除する
    public function unlike($productId){
        if ($this->isLike($productId)) {
            $this->products()->detach($productId);
        } else {
            //もし既に「いいね」していたら何もしない
        }
    }

    // 多対多のリレーション
    public function followers(){
        return $this->belongsToMany(Follow::class,'follower_user','user_id','follower_id')->withTimestamps();
    }

    // 特定のユーザをフォローしているか判定
    public function isFollow($followId){
        return $this->followers()->where('follower_id',$followId)->exists();
    }

    // isFollowを使ってフォローしていたか確認してしていなかったらフォロー
    public function follow($followId){
        if ($this->isFollow($followId)) {

        } else {
            $this->followers()->attach($followId);
        }
    }

    // isFollowを使ってフォローしていたか確認してしていなかったらフォロー
    public function unfollow($followId){
        if ($this->isFollow($followId)) {
            $this->followers()->detach($followId);
        } else {
            
        }
    }
}
