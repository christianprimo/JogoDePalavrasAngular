angular.module("componentes")
    .component("recomecar", {
        template:
            '<button ng-click="$root.reset()" class="btn btn-danger">Recomeçar</button>' +
            '<button ng-click="$root.resetNewPlayer()" class="btn btn-warning">Mudar jogador</button>'
    })