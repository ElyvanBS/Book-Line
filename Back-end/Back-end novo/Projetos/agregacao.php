<?php
    //Requisições de acesso
    require_once 'classes/Produto.php';
    require_once 'classes/Cesta.php';

    //Instanciação - Criação de objeto do tipo Cesta
    $c1 = new Cesta();

    //Agregação
    //Criando objetos do tipo Produto e agregando
    $c1->addItens($p1 = new Produto('Dom Casmurro', 20, 25));
    $c1->addItens($p2 = new Produto('O pequeno Príncipe', 10, 15));
    $c1->addItens($p3 = new Produto('Iracema', 20, 29));

    //Início foreach()
    foreach ($c1->getItens() as $item) {
        print 'Item: ' . $item->getDescricao() . "<br>\n";
    }//Fim do foreach()

?>