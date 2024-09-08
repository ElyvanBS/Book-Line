<?php

    //Classe Fabricante
    class Fabricante {
        //Atributos
        private $nome;
        private $endereco;
        private $documento;

        //Métodos
        //Método __construct()
        public function __construct($nome, $endereco, $documento) {
            $this->setNome($nome);
            $this->setEndereco($endereco);
            $this->setDocumento($documento);
        }//Fim do método __construct()

        //Método setNome()
        public function setNome($nome) {
            $this->nome = $nome;
        }//Fim do método setNome()

        //Método getNome()
        public function getNome() {
            return $this->nome;
        }//Fim do método getNome()

        //Método setEndereco()
        public function setEndereco($endereco) {
            $this->endereco = $endereco;
        }//Fim do método setEndereco()

        //Método getEndereco()
        public function getEndereco() {
            return $this->endereco;
        }//Fim do método getEndereco()

        //Método setDocumento()
        public function setDocumento($documento) {
            $this->documento = $documento;
        }//Fim do método setDocumento()

        //Método getDocumento()
        public function getDocumento() {
            return $this->documento;
        }//Fim do método getDocumento()

    }//Fim da classe Fabricante
?>