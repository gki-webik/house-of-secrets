<?php

$mysql = mysql_connect(`localhost`, `j43115351`, `Kirill141518!`);
if (!$mysql) { die ('Connection error: ' . mysql_error()); }

// Выбираем БД
$db = mysql_select_db('test', $mysql);
if (!$db) { die ('Error select db : ' . mysql_error()); }

// Устанавливаем кодировку подключения
mysql_query("SET NAMES 'utf8'");
mysql_query("SET CHARACTER SET 'utf8'");

// Запросы ...

// Отключаемся от базы
mysql_close($mysql);
?>