angular.module("componentes")
    .component("dicaEResposta", {
        template:
        '<h2 class="text-center text-secondary">{{$root.dicas[$root.i]}}</h2>'+
        '<div class="d-flex flex-row justify-content-center align-items-center">'+
            '<input ng-change="$root.inputChanged()" ng-model="$root.verifica" type="text">'+
        '</div>'
    })