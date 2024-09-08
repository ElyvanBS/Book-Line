<?php

    //Requisição de acesso das classes
    require_once 'classes/Fabricante.php';
    require_once 'classes/Produto.php';

    //Criação de objetos - Instanciação
    $p1 = new Produto('Dom Casmurro', 20, 25);
    $f1 = new Fabricante('Astória-books', 'Rua windows onze', '2345');

    //Associação
    $p1->setFabricante($f1);

    print 'Descrição do produto: ' . $p1->getDescricao() . "<br>\n";
    print 'Estoque do produto: ' . $p1->getEstoque() . "<br>\n";
    print 'Preço do produto (R$): ' . $p1->getPreco() . "<br>\n";
    print 'Fabricante do produto: ' . $p1->getFabricante()->getNome() . "<br>\n";
?>