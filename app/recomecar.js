angular.module("componentes")
    .component("recomecar", {
        template:
            '<button ng-click="$root.reset()" class="btn btn-danger">Recomeçar</button>' +
            '<button ng-click="$root.hideRegister = false; $root.c = true; $root.hideClassification = true;'+ 
            '$root.classification.names = \'\'; $root.countAnswer = 0; $root.countJump = 0" class="btn btn-warning">Mudar jogador</button>'
    })