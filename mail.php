<?php

// Получение данных полей формы
$user_name = trim($_POST['name']);
$user_phone = trim($_POST['phone']);
$form_type = trim($_POST['type']);


// Метаданные для отправки письма
$email_admin  = 'coffeesmile@1gb.ru';
$email_to = 'corvusteam@yandex.ru, anakincore@yandex.ru';
$sitename  = 'Corvus-team';
$subject   = 'Новая заявка с сайта: ' . $sitename;
$header = 'From:' . $email_admin;

// Формирование текста письма
$message = '';
if($user_name) {
  $message .= 'Имя: ' . $user_name . "\n";
}
if($user_phone) {
  $message .= 'Номер телефона: ' . $user_phone . "\n";
}
if($form_type) {
  $message .= 'Тема: ' . $form_type . "\n";
}

mail($email_to, $subject, $message, $header);
?>