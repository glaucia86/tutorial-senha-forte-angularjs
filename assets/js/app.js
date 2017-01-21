/**
 * Arquivo: app.js
 * Author: Glaucia Lemos
 * Data: 20/01/2017
 * 
 * Description: Arquivo responsável por toda a lógica do projeto.
 */

(function(){
    var ZXCVBN_SRC = 'bower_components/zxcvbn/dist/zxcvbn.js';

    var async_load = function() {
        var primeiroElemento, script;

        /* Criando um elemento <script> para ser usado pelo DOM API*/
        script = document.createElement('script');

        /* Iniciar os atributos no elemento script */
        script.src = ZXCVBN_SRC;
        script.type = 'text/javascript';
        script.async = true; //async é um atributo do HTML5

        /* Agora aqui nós vamos pegar o primeiro elemento do script no documento */
        primeiroElemento = document.getElementsByTagName('script')[0];

        /* Em seguida vamos inserir o elemento <script> antes do primeiro elemento no documento */
        return primeiroElemento.parentNode.insertBefore(script, primeiroElemento);
    };

    /* Agora... vamos adicionar o async_load como callback para o evento window load */
    if(window.attachElement != null) {
        window.attachEvent('onload', async_load);
    } else {
        window.addEventListener('load', async_load, false);
    }
}).call(this);

(function(){
    
    /* Criando um módulo da aplicação */
    angular.module('SenhaSegura', []);

    /* Aqui estamos adicionando o controle do módulo criado */
    angular.module('SenhaSegura').controller('FormController', function($scope) {});
});