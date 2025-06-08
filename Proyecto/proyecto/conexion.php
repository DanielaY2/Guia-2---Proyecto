<?php
$host = 'localhost';
$usuario = 'root';
$contrasena = '';
$base_datos = 'mi_sitio';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$base_datos", $usuario, $contraseña);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
