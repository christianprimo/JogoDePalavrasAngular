angular.module("componentes")
    .component("reRespLtrFal", {
        template:
        '<p ng-if="$root.v == 0" class="text-center">{{$root.dados[$root.i].length - $root.verifica.length}} Letras Faltando</p>'+
        '<p ng-if="$root.v > 0" class="text-center">{{$root.tam}} Letras Faltando</p>'+
        '<h4 ng-if="$root.retornoResp == \'Acertou\'" class="text-center" style="color: green;">{{$root.retornoResp}}</h4>'+
        '<h4 ng-if="$root.retornoResp == \'Errou\'" class="text-center" style="color: red;">{{$root.retornoResp}}</h4>'
    })