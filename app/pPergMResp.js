angular.module("componentes")
    .component("pulPergMstrResp", {
        template:
        '<div class="d-flex flex-column justify-content-start align-items-start" style="position: absolute;">'+
        '<span>Disponível: {{$root.contadorResp}} </span>'+
        '<input type="button" class="btn btn-outline-dark" ng-click="$root.mostraResposta()" value="Mostrar resposta">'+
    '</div>'+
    '<div class="d-flex flex-column justify-content-start align-items-end">'+
        '<span style="margin-right: 30px;">Disponível: {{$root.contadorPula}} </span>'+
        '<button class="btn btn-outline-dark" ng-click="$root.pulaPergunta()">Pular pergunta</button>'+
    '</div>'+
    '<h4 ng-show="mostra" class="text-center">Resposta: {{$root.dados[$root.i]}}</h4>'
    })