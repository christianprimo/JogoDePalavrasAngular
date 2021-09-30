angular.module("componentes")
    .component("classificacao", {
        template:
            '<table>'+
            '<thead>'+
                '<tr>'+
                    '<th>Nome </th>'+
                    '<th>Ponto </th>'+
                '</tr>'+
            '</thead>'+
            '<tbody>'+
                '<tr ng-repeat="(i, classif) in $root.claFinal track by $index">'+
                    '<td>{{classif.nomes}}</td>'+
                    '<td>{{classif.pontos}}</td>'+
                '</tr>'+
            '</tbody>'+
        '</table>'
    })