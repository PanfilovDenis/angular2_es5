function AppComponent() {
  this.test = 666;
  this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
}

AppComponent.annotations = [
  new ng.ComponentMetadata({selector: 'app'}),
  new ng.ViewMetadata({templateUrl: 'app.html',directives: [ng.NgFor, ng.NgIf]})
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(AppComponent);
});
