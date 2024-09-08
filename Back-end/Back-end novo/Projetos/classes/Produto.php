<?php

    //Classe Produto
    class Produto {
        //Atributos
        private $descricao;
        private $estoque;
        private $preco;
        private $fabricante;
        private $caracteristicas;

        //Métodos
        
        //Método __construct()
        public function __construct($descricao, $estoque, $preco) {
            $this->setDescricao($descricao);
            $this->setEstoque($estoque);
            $this->setPreco($preco);
        }//Fim do método __construcut()
        
        //Método setDescricao()
        public function setDescricao($descricao) {
            $this->descricao = $descricao;
        }//Fim do método setDescricao()

        //Método getDescricao()
        public function getDescricao() {
            return $this->descricao;
        }//Fim do método getDescricao();

        //Método setEstoque()
        public function setEstoque($estoque) {
            $this->estoque = $estoque;
        }//Fim do método setEstoque()

        //Método getEstoque()
        public function getEstoque() {
            return $this->estoque;
        }//Fim do método getEstoque()

        //Método setPreco()
        public function setPreco($preco) {
            $this->preco = $preco;
        }//Fim do método setPreco()

        //Método getPreco()
        public function getPreco() {
            return $this->preco;
        }//Fim do metódo getPreco()

        //Método setFabricante()
        //Associação!
        public function setFabricante (Fabricante $f) {
            $this->fabricante = $f;
        }//Fim do método setFabricante()

        //Método getFabricante()
        public function getFabricante() {
            return $this->fabricante;
        }//Fim do método getFabricante()

        //Método addCaracteristica()
        public function addCaracteristica($nome, $valor) {
            //Array caracteristicas[]
            //Array de objetos
            $this->caracteristicas[] = new Caracteristica($nome, $valor);
        }//Fim do método addCaracteristica

        //Método getCaracteristicas()
        public function getCaracteristicas() {
            return $this->caracteristicas;
        }//Fim do método getCaracteristicas()

    }//Fim da classe Produto
?>