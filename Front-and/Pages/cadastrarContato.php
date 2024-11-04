<?php

    $nome = $_GET['nome'];
    $email = $_GET['email'];
    $cpf = $_GET['cpf'];
    $senha = $_GET['senha'];
    $confirmarsenha = $_GET['confirmarsenha'];


    try{
        $conn = new PDO("mysql:host=localhost;dbname=agenda", "root", "");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $sql = "INSERT INTO cadastro(nome,email,cpf,senha,confirmarsenha) 
        VALUES('$nome','$email','$cpf','$senha','$confirmarsenha')";

    $conn->exec($sql);

    echo "Dados inseridos com sucesso!!";


        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(Exception $erro) {
        echo "ERRO!! Sistema indisponivel. Tente novamente";
        echo $erro->getMessage();
    }
       

    


?>