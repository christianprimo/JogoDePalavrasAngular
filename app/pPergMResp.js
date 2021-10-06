angular.module("componentes")
    .component("pulPergMstrResp", {
        template:
        '<div class="d-flex flex-column justify-content-start align-items-start" style="position: absolute;">'+
        '<span>Disponível: {{$root.countAnswer}} </span>'+
        '<input type="button" class="btn btn-outline-dark" ng-click="$root.showAnswer()" value="Mostrar resposta">'+
    '</div>'+
    '<div class="d-flex flex-column justify-content-start align-items-end">'+
        '<span style="margin-right: 30px;">Disponível: {{$root.countJump}} </span>'+
        '<button class="btn btn-outline-dark" ng-click="$root.skipQuestion()">Pular pergunta</button>'+
    '</div>'+
    '<h4 ng-show="$root.shoAnswer" class="text-center">Resposta: {{$root.answers[$root.i]}}</h4>'
    })