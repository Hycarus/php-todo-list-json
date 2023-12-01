<?php
// leggo il file data.json e lo metto in una variabile come stringa
$filecontent = file_get_contents("data.json");

// var_dump($filecontent);

// decodifico la stirnga in un array php
$list = json_decode($filecontent, true);

if (isset($_POST['task'])) {
    $newTask = [
        'text' => $_POST['task'],
        'done' => false
    ];
    array_push($list, $newTask);
    file_put_contents('data.json', json_encode($list));
}

if (isset($_POST['removeTask'])) {
    $removed = $_POST['removeTask'];
    array_splice($list, $removed, 1);
    file_put_contents('data.json', json_encode($list));
}

header('Content-Type: application/json');

// stampo la lista in json
echo json_encode($list);
