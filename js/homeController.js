/* global kendo*/

function HomeController($scope) {

    $scope.dropDownOptions = {
        dataSource: new kendo.data.DataSource({
            data: [{ name: "Thing 1", id: 1 },
                   { name: "Thing 2", id: 2 },
                   { name: "Thing 3", id: 3 }]
        }),
        dataTextField: "name",
        dataValueField: "id",
        template:'<b>${data.name}</b><br/><h5>id = ${data.id}</h5>'
    };

    $scope.window = {
        open: function() {
            $scope.modal.center().open();
        }
    };
    $scope.autoCompleteOptions = {
        dataSource: new kendo.data.DataSource({
            data: [ {name: 'Rosja',id: 1},
                    {name: 'Litwa',id: 2},
                    {name: 'Ukraina',id: 3},
                    {name: 'Białoruś',id: 4},
                    {name: 'Słowacja',id: 5},
                    {name: 'Czechy',id: 6},
                    {name: 'Niemcy',id: 7}]
        }),
        filter:"contains",
        placeholder: 'wybierz kraj...',
        dataTextField : 'name',
        dataValueField : 'id',
        placeholder: 'wybierz sąsiada polski',
        separator: ", "
    }
}
