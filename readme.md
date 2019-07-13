# EcomLab

Aplicação que consome uma api de um marketplace.

## Pré-requisitos
Para o projeto rodar, voce necessita das seguintes depedencias:

- PHP

- DB: MYSQL OU MARIADB

Em ambiente de prod voce necessitara um servidor para rodar a aplicacao, voce pode usar solucoes como o [Apache2](https://httpd.apache.org/) ou [NGINX](https://www.nginx.com/).


## Iniciando

Clone o projeto na sua maquina:

````shell
$ git clone https://github.com/felipe-passada/ecomlab.git
````
### Configuracao da aplicacao
Depois de clonar em sua maquina sera necessario baixar as dependencias do projeto, isso sera necessario somente na primeira vez que voce baixar o projeto.

1. O composer é utilizado para gerenciar as dependencias do php, e nesse caso do framewok Laravel. utilize o comando pra instalar as dependencias:

    ````php
    $ composer install
    ````

2. Para gerencias as dependencias do front-end da aplicacao utilizaremos o NPM.

    ````js
    $ npm install
    ````

3. Assim que fizer os passos acima, precisamos de um arquivo .env, o Laravel este arquivo para armazenar as variaveis de ambiente da aplicao.

    ````shell
    $ cp .env.example .env
    ````

4. No arquivo .env existe uma propriedade chamada `APP_KEY=` o framework utiliza essa propriedade para trazer seguranca a aplicao, nas sessoes e outros dados encriptados, alem disso sem a chave a aplicao pode nao rodar. Gere a chave com o seguinte comando

    ````php
    $ php artisan key:generate
    ```` 
5. Criando o banco de dados, para voce persistir `"criar"` as tabelas da aplicao no banco primeiro voce deve, criar o banco de dados manualmente, e gerar os dados no banco. Depois disso rode o seguinte comando para gerar as tabelas:
    ````php
    $ php artisan migrate:fresh --seed
    ````
6. Depois desses passos, para voce rodar a aplicao localmente voce pode utilizar o artisan para subir um server com a aplicao, atreves do comando:

    ````php
    $ php artisan serve
    ````
---
## Informacoes adicionais
Caso voce tenha alguma duvida que nao ficou claro nesta doc. Voce pode consultar a documentacao oficial do [Laravel](https://laravel.com/docs/5.8)

## Rodando Testes

    soon...
## Construido com

* Laravel - Laravel is a web application framework with expressive, elegant syntax.
* Composer - Dependency Manager for PHP
* BootStrap - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.
* NPM - npm is the package manager for JavaScript and the world’s largest software registry.

## Autores

* Felipe Passada    - [Felipe] https://www.linkedin.com/in/felipe-p-142432b7/