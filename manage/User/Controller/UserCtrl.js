/**
 * Created by SEELE on 2017/8/6.
 */
(function (angular) {


    function UserController($scope) {

        $scope.row = [
            {no: 1, name: 'dd'},
            {no: 1, name: 'dd'},
            {no: 1, name: 'dd'},
        ]

        var columnDefs = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];

        var rowData = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];

        $scope.grid = {
            columnDefs: columnDefs,

            onGridReady: function () {
                $scope.grid.api.setRowData(rowData)
            },
        };
    }

    angular.module('manage')
        .controller('UserController', UserController)

})(window.angular);