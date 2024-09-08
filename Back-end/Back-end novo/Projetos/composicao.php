<?php

    //Requisições de acesso
    require_once 'classes/Produto.php'; 
    require_once 'classes/Caracteristica.php';

    //Criar objeto - Instanciação
    $p1 = new Produto('Dom Casmurro', 20, 25);

    $p1->addCaracteristica('Nome', 'Dom Casmurro');
    $p1->addCaracteristica('ID', '198748994');

    print 'Descrição do produto: ' . $p1->getDescricao() . "<br>\n";
    print 'Estoque do produto: ' . $p1->getEstoque() . "<br>\n";
    print 'Preço do produto (R$): ' . $p1->getPreco() . "<br>\n";

    print 'Características do Produto'. "<br>\n";

    //Início foreach()
    //Percorre o Array desmembrando-o
    foreach ($p1->getCaracteristicas() as $c) {
        print 'Nome da Característica: '. $c->getNome(). "<br>\n";
        print 'Valor da Característica: '. $c->getValor(). "<br>\n";
    }//Fim do foreach()
?>