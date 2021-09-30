angular.module("componentes")
    .component("recomecar", {
        template:
            '<button ng-click="$root.reset()" class="btn btn-danger">Recomeçar</button>' +
            '<button ng-click="$root.n = false; $root.c = true; $root.y = true;'+ 
            '$root.classificacao.nomes = \'\'; $root.contadorResp = 0; $root.contadorPula = 0" class="btn btn-warning">Mudar jogador</button>'
    })