angular.module("componentes")
    .component("main", {
        template:
        '<nav id=\'mudaNav\' class=\'navbar navbar-dark bg-primary\'>'+
        '<div class=\'container-fluid\'>'+
            '<span class=\'navbar-brand mb-0 h1\'>Jogo de palavras</span>'+
        '</div>'+
    '</nav>'+
    '<div ng-hide="$root.hideRegister" class="justify-content-center align-items-center"'+
        'style="flex-direction: row; display: flex; margin-top: 50px;">'+
        '<cadastrar></cadastrar>'+
    '</div>'+
    '<div ng-show="$root.showTime && $root.t >= 1">'+
        '<timer></timer>'+
        '<div class=\'d-flex flex-row\'>'+
            '<retorno-pt></retorno-pt>'+

        '</div>'+
        '<dica-e-resposta></dica-e-resposta>'+
        '<re-resp-ltr-fal></re-resp-ltr-fal>'+

        '<pul-perg-mstr-resp></pul-perg-mstr-resp>'+
    '</div>'+
    '<div ng-show="$root.t <=0 && !$root.showClassification">'+
        '<acabou></acabou>'+
    '</div>'+
    '<div ng-show="$root.showClassification && !$root.hideClassification"'+
        'class=\'list-group justify-content-center align-items-center\'>'+
        '<classificacao></classificacao>'+
        '<div class=\'d-flex flex-row justify-content-center align-items-center\'>'+
            '<recomecar></recomecar>'+
        '</div>'+
    '</div>'
    })