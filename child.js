var ChildComponent = ng
  .Component({selector: 'child'})
  .View({templateUrl: 'child.html'})
  .Class({
    constructor: function () {
      this.message = 'im child!';
    }
  });
