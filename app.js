var AppComponent = ng
  .Component({selector: 'app'})
  .View({templateUrl: 'app.html',directives: [ng.NgFor, ng.NgIf, ChildComponent]})
  .Class({
    constructor: function () {
      this.test = 666;
      this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
      this.myname = 'Den';
    },

    onKeyUp: function($event, myname) {
      console.info("!!!!!!", $event, myname);
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(AppComponent);
});
