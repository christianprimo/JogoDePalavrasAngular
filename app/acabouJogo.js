angular.module("componentes")
    .component("acabou", {
        template:
        '<h1 class="text-center">O jogo acabou</h1>'+
        '<h3 class="text-center">Sua pontuaçao foi {{$root.classification.points}}</h3>'+
        '<div class="d-flex flex-row justify-content-center align-items-center">'+
         '   <button ng-click="$root.showClassification = true; $root.hideClassification = false;  $root.iniTimer = false; $root.countPoints(1000); $root.countPoints(500); $root.addClassification()"'+
                'class="btn btn-secondary btn-sm">Ver pontuaçao</button>'+
        '</div>'
    })