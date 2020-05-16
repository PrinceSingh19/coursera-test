( function (){
  'user strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController)

LunchCheckController.$inject=["$scope","$filter"];

function LunchCheckController($scope,$filter) {

  $scope.input="";
  $scope.message = function()
  {
     var str = $scope.input.split(',');

     if($scope.input=="")
     {
        // if(str[0]=="")
        // {
              $scope.msg = "Please enter data first";

        //  }
}
         else if(str.length<=3)
        {
            $scope.msg = "Enjoy!";
        }

  
    else {
      $scope.msg =" Too much!";
    }

};

}

})();
