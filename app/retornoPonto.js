angular.module("componentes")
    .component("retornoPt", {
        template:
        '<div class="d-flex flex-row>"'+
        '<p ng-style="{\'color\': $root.checkAwr ? \'green\' : \'black\'}">Pontuaçao: {{$root.classification.points}} </p>'+
        '<div ng-show="$root.showReturn">'+
        '<p ng-style="{\'color\': \'green\'}"> +100 Pontos</p>'+
            '</div>'+
        '<\div>'    
    })