<?php
/* Здесь проверяется существование переменных, т.е. если такой инпут с таким именем есть в html, то в php ему присуждается переменная*/
if (isset($_POST['name'])) {
  $phone = $_POST['phone'];
}
if (isset($_POST['phone'])) {
  $name = $_POST['name'];
}
if (isset($_POST['pochta'])) {
  $pochta = $_POST['pochta'];
}
/* Сюда впиши свою эл. почту */
$myaddres = "gkipro@yandex.com"; // кому отправляем
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Жалоба/Просьба/Отзыв/Сообщение/Другое\nИмя: $name\nПочта: $pochta\nСообщение: $phone";
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub = 'СООБЩЕНИЕ РАЗРАБОТЧИКУ'; //сабж
$send = mail($myaddres, $sub, $mes);
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="refresh" content="3; url=index.html">
  <title>Спасибо, мы с вами обязательно свяжемся!</title>
  <meta name="generator">
  <script type="text/javascript">
    setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
  </script>
</head>

<body>
  <h1>Спасибо, мы с вами обязательно свяжемся!</h1>
  <div id="preloader_malc">
    <div>
      Подождите, идет загрузка сайта ...
      <br>
      <img src="https://gki-webik.ru/img/iconka.png" width="200" alt="Логотип">
    </div>
  </div>
  <script>
    window.onload = function () {
      setTimeout(function () {
        document.getElementById("preloader_malc").style.display = "none";
        document.body.style.overflowY = "auto";
      }, 400);
    };
  </script>
</body>

</html>