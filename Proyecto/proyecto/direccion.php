<?php
include 'conexion.php';

session_start();

if (isset($_SESSION['usuario_id'])) {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $direccion = $_POST['dirección'];
        $usuario_id = $_SESSION['usuario_id'];

        $stmt = $pdo->prepare("INSERT INTO direcciones (usuario_id, dirección) VALUES (?, ?)");
        $stmt->execute([$usuario_id, $direccion]);

        echo "Dirección guardada!";
    }

    // Mostrar direcciones
    $stmt = $pdo->prepare("SELECT * FROM direcciones WHERE usuario_id = ?");
    $stmt->execute([$_SESSION['usuario_id']]);
    $direcciones = $stmt->fetchAll();

    foreach ($direcciones as $dir) {
        echo "<p>" . htmlspecialchars($dir['dirección']) . "</p>";
    }
} else {
    echo "Por favor, inicia sesión.";
}
?>
