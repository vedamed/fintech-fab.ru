<?php

namespace FintechFab\Components;


class Helper
{
	public static function ucwords($str)
	{
		$str = mb_convert_case($str, MB_CASE_TITLE, "UTF-8");

		return ($str);
	}

	public static function messagesForErrors()
	{
		$rules = array(
			'required'   => 'Поле :attribute и должно быть заполнено.',
			'min'        => 'Поле :attribute должно содержать не менее :min символов.',
			'unique'     => 'Пользователь с таким E-mail уже зарегистрирован.',
			'email'      => 'Адрес E-mail должен быть корректным',
			'same'       => 'Пароли должны совпадать.',
			'alpha_dash' => 'Поле :attribute должно содержать только латинские символы, цифры, знаки подчёркивания и дефисы.',
		);

		return $rules;
	}

	public static function rulesForInput()
	{
		$rules = array(
			'first_name'     => 'required',
			'email'          => 'required|email|unique:users',
			'password'       => 'required|min:4|alpha_dash',
			'passwordRepeat' => 'same:password',
		);

		return $rules;
	}
} 