<?php

namespace FintechFab\QiwiGate\Models;

use Eloquent;

/**
 * @property integer $id
 * @property string  $user
 * @property string  $amount
 * @property string  $ccy
 * @property string  $comment
 * @property string  $lifetime
 * @property string  $pay_source*
 * @property string  $prv_name
 * @property string  $created_at
 * @property string  $updated_at
 *
 * @method static Merchant find()
 */
class Bills extends Eloquent
{
	protected $fillable = array('merchant_id', 'user', 'amount', 'ccy', 'comment', 'lifetime', 'pay_source', 'prv_name');
	protected $table = 'merchants_bills';
	protected $connection = 'qiwiGate';

	public function Merchant()
	{
		return $this->belongsTo('FintechFab\QiwiGate\Models\Merchant');
	}
}