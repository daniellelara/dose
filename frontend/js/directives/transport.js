angular.module('dose')
  .directive('dgTransport', Transport);
  
function Transport() {
  return {
    restrict: 'C',
    scope: { dgData:'=' },
    replace: true,
    template: '<div class="container"><div class="row"><div class="col-md-6 northern">Northern</div><div class="col-md-6 status"> {{ dgData }}</div></div><div class="row"><div class="col-md-6 central">Central</div><div class="col-md-6 status"> {{ dgData }}</div></div><div class="row"><div class="col-md-6 bakerloo">Bakerloo</div><div class="col-md-6 status"> {{ dgData }}</div></div><div class="row"><div class="col-md-6 picadilly">Picadilly</div><div class="col-md-6 status"> {{ dgData }}</div></div><div class="row"><div class="col-md-6 district">District</div><div class="col-md-6 status"> {{ dgData }}</div></div><div class="row"><div class="col-md-6 jubilee">Jubilee</div><div class="col-md-6 status">{{ dgData }}</div></div><div class="row"><div class="col-md-6 ham">Hammersmith & City</div><div class="col-md-6 status">{{ dgData }}</div></div></div>'
  }

} 