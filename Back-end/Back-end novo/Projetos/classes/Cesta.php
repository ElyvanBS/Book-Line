<?php

    //Classe Cesta
    class Cesta {

        //Atributos
        private $itens;
        private $time;

        //Métodos
        //Método __construct()
        public function __construct() {
            $this->itens = array();
            $this->time = date('Y-m-d H:i:s');
        }//Fim do método __construct()
        
        //Método addItens()
        public function addItens(Produto $p){
            $this->itens[] = $p;
        }//Fim do método addItens()

        //Método getItens()
        public function getItens(){
            return $this->itens;
        }//Fim do método getItens()

        //Método getTime()
        public function getTime(){
            return $this->time;
        }//Fim do método getTime()
    }//Fim da classe Cesta
    
?>