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
                    '<td>{{classif.names}}</td>'+
                    '<td>{{classif.points}}</td>'+
                '</tr>'+
            '</tbody>'+
        '</table>'
    })