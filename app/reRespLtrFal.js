angular.module("componentes")
    .component("reRespLtrFal", {
        template:
        '<p ng-if="!$root.showReturn" class="text-center">{{$root.answers[$root.i].length - $root.inputAnswer.length}} Letras Faltando</p>'+
        '<p ng-if="$root.showReturn > 0" class="text-center">{{$root.missLetters}} Letras Faltando</p>'+
        '<div ng-show="$root.showReturn">'+
        '<h4 ng-if="$root.checkAwr" class="text-center" style="color: green;">Acertou</h4>'+
        '<h4 ng-if="!$root.checkAwr" class="text-center" style="color: red;">Errou</h4>'+
        '</div>'
    })