angular.module("componentes")
    .component("cadastrar", {
        template:
        '<input ng-model="$root.classification.names" type="text" placeholder="Digite seu nome">'+
        '<button ng-if="$root.iniTimer" ng-click="$root.reset(); $root.timer()" class="btn btn-success btn-sm">Novo</button>'+
        '<button ng-if="!$root.iniTimer" ng-click="$root.reset()" class="btn btn-success btn-sm">Novo</button>'
    })