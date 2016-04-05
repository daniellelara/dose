angular.module('dose')
  .directive('dgTransport', Transport);

Transport.$inject = ['TransportService']
function Transport(TransportService) {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div><div class="row"><div class="col-md-6 northern">Northern</div><div class="col-md-6 status"> {{ dgData.northern }}</div></div><div class="row"><div class="col-md-6 central">Central</div><div class="col-md-6 status"> {{ dgData.central }}</div></div><div class="row"><div class="col-md-6 bakerloo">Bakerloo</div><div class="col-md-6 status"> {{ dgData.bakerloo }}</div></div><div class="row"><div class="col-md-6 picadilly">Picadilly</div><div class="col-md-6 status"> {{ dgData.picadilly }}</div></div><div class="row"><div class="col-md-6 district">District</div><div class="col-md-6 status"> {{ dgData.district }}</div></div><div class="row"><div class="col-md-6 jubilee">Jubilee</div><div class="col-md-6 status">{{ dgData.jubilee }}</div></div><div class="row"><div class="col-md-6 ham">Hammersmith & City</div><div class="col-md-6 extra status">{{ dgData.hammersmith }}</div></div></div>',
    link: function($scope, $elem, attrs) {

      $scope.update = function() {
        console.log("UPDATE???");
      }

      TransportService.get().then(function(res){
        $scope.$applyAsync(function(){
          $scope.dgData = {
            bakerloo: res.data[0].lineStatuses[0].statusSeverityDescription,
            central: res.data[1].lineStatuses[0].statusSeverityDescription,
            district: res.data[3].lineStatuses[0].statusSeverityDescription,
            hammersmith: res.data[4].lineStatuses[0].statusSeverityDescription,
            jubilee: res.data[5].lineStatuses[0].statusSeverityDescription,
            northern: res.data[7].lineStatuses[0].statusSeverityDescription,
            picadilly: res.data[8].lineStatuses[0].statusSeverityDescription
          }
        });
      })
    }
  }

} 