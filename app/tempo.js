angular.module("componentes")
    .component("timer", {
        template:
        '<div class="d-flex flex-row justify-content-center align-items-center">'+
        '<h4 ng-if="$root.t >= 20" style="color: green;">{{$root.t}}</h4>'+
        '<h4 ng-if="$root.t < 20 && $root.t >= 15" style="color: yellow;">{{$root.t}}</h4>'+
        '<h4 ng-if="$root.t < 15 && $root.t >= 10" style="color: orange;">{{$root.t}}</h4>'+
        '<h4 ng-if="$root.t < 10" style="color: red;">{{$root.t}}</h4>'+
        '<h5 ng-if="$root.retornoTemp == \'+5 segundos\'" style="color: green;">{{$root.retornoTemp}}</h5>'+
        '<h5 ng-if="$root.retornoTemp == \'-5 segundos\'" style="color: red;">{{$root.retornoTemp}}</h5>'
    })