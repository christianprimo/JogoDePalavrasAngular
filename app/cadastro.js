angular.module("componentes")
    .component("cadastrar", {
        template:
        '<input ng-model="$root.classificacao.nomes" type="text" placeholder="Digite seu nome">'+
        '<button ng-if="$root.iniTimer" ng-click="$root.m = true; $root.reset(); $root.timer()" class="btn btn-success btn-sm">Novo</button>'+
        '<button ng-if="!$root.iniTimer" ng-click="$root.m = true; $root.reset()" class="btn btn-success btn-sm">Novo</button>'
    })