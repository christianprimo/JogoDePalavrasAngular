angular.module("componentes")
    .component("acabou", {
        template:
        '<h1 class="text-center">O jogo acabou</h1>'+
        '<h3 class="text-center">Sua pontuaçao foi {{$root.classificacao.pontos}}</h3>'+
        '<div class="d-flex flex-row justify-content-center align-items-center">'+
         '   <button ng-click="$root.c = true; $root.z = false; $root.y = false; $root.iniTimer = false; $root.mostraRespostaCount(); $root.pulaPerguntaCount(); $root.adicionar()"'+
                'class="btn btn-secondary btn-sm">Ver pontuaçao</button>'+
        '</div>'
    })