<?php
if(move_uploaded_file($_FILES['filename']['tmp_name'],'test/'.$_FILES['filename']['name'])){
  echo  'Файл успешно загружен!';
}
else{
  echo 'Ошибка';
}
?>