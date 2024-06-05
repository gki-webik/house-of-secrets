<!DOCTYPE html>
<html lang="en">
<head> 
     
    <meta name="theme-color" content="#870619"> 
    <meta
      name="keywords"
      content="html, css, javascript, справочник, gki-webik.ru, gki-webik, web-programmist, программист, разработчик, сайт, учебник, рецепты кода, заметки для программистов, лайфхаки для программистов, веб разработчик, программист, разработчик веб и мультимедийных приложений"
    />
    <meta
      name="description"
      content="gki-webik.ru - современный, надёжный и лучший сайт для тех, кто любит web - разработку. Присоединяйся! Будет весело!"
    /> <link rel="icon" type="image/png" sizes="192x192"  href="https://gki-webik.ru/img/ico-192.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://gki-webik.ru/img/ico-32.png">
<link rel="icon" type="image/png" sizes="96x96" href="https://gki-webik.ru/img/ico-96.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://gki-webik.ru/img/ico-16.png">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <center>
    <input type="image" id="logotip" src="log.png"/>
  </center>
  
  <style type="text/css" media="all">
  @media screen and (max-width: 720px){  
    body{
      background-color: black;
    }
#log{
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 20px;
}
#pass{
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 20px;
}
#voit{
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
}
}
  @media screen and (min-width: 780px){  
    body{

      background-color: black;

    }
#log{
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 20px;
}
#pass{
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 20px;
}
#voit{
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  margin-top: 50px;
}
}

  </style>
  <form method="post">
<center>
  <input id="log" type="text" name="user" placeholder="Логин" required/><br />
  <input id="pass" type="password" name="pass" placeholder="Пароль" required/><br />
	<input id="voit" type="submit" name="submit" value="Войти" />
</center>
</form>


<?php
$admin = 'Kirill';
$pass = 'd5c186983b52c4551ee00f72316c6eaa';
if(isset($_POST['submit'])){
  if($admin == $_POST['user'] AND $pass == md5($_POST['pass'])){
    header("Location: shporaprogrammista/index3.html");
  }else echo 'Вы ввели неправильный логин или пароль!';
}
?>

   </body>
</html>


