angular.module("componentes")
    .component("retornoPt", {
        template:
        '<p ng-if="$root.retornoPonto != \'+100 pontos\'">Pontuaçao: {{$root.classificacao.pontos}}</p>'+
        '<p ng-if="$root.retornoPonto == \'+100 pontos\'" style="color: green;">Pontuaçao: {{$root.classificacao.pontos}}'+
            '{{$root.retornoPonto}}</p>'
    })