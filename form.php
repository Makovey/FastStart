<?php

function clean_field($key)
{
    $value = '';
    if (isset($_POST[$key])) {
        $value = trim(strip_tags($_POST[$key]));
    }
    return $value;
}

$template = ['data' => []];
$template['data'] = [
    'name' => clean_field('name'),
    'email' => clean_field('email'),
    'text' => clean_field('text')
];

$link = mysqli_connect('localhost', 'root', '', 'fast_start');
mysqli_set_charset($link, 'UTF8');
$sql = "INSERT INTO applications (id, name, email, text, date_create)";
$sql .= " VALUE (NULL, '{$_POST['name']}', '{$template['data']['email']}', '{$template['data']['text']}', NOW())";
$result = mysqli_query($link, $sql);

if ($result) {
    echo 'yes';
} else {
    echo 'nope';
}
