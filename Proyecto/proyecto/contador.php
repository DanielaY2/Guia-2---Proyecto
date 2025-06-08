<?php
include 'conexion.php';

$pagina = $_SERVER['REQUEST_URI'];

$stmt = $pdo->prepare("INSERT INTO visitas (pagina) VALUES (?)");
$stmt->execute([$pagina]);
?>
