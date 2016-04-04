angular.module('dose')
  .directive('dgTransport', Transport);
  
function Transport() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div><div class="headline">status updates</div><div class="row"><div class="col-md-6 northern">Northern</div><div class="col-md-6 status"> {{ dgData.northern }}</div></div><div class="row"><div class="col-md-6 central">Central</div><div class="col-md-6 status"> {{ dgData.central }}</div></div><div class="row"><div class="col-md-6 bakerloo">Bakerloo</div><div class="col-md-6 status"> {{ dgData.bakerloo }}</div></div><div class="row"><div class="col-md-6 picadilly">Picadilly</div><div class="col-md-6 status"> {{ dgData.picadilly }}</div></div><div class="row"><div class="col-md-6 district">District</div><div class="col-md-6 status"> {{ dgData.district }}</div></div><div class="row"><div class="col-md-6 jubilee">Jubilee</div><div class="col-md-6 status">{{ dgData.jubilee }}</div></div><div class="row"><div class="col-md-6 ham">Hammersmith & City</div><div class="col-md-6 status">{{ dgData.hammersmith }}</div></div></div>'
  }

} 