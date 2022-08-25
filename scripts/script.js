// Materialize - Initializers
$(document).ready(function () {
  $(".scrollspy").scrollSpy();
  // Initialize collapse button
  $(".button-collapse").sideNav({
    edge: "left", // Choose the horizontal origin
    scrollOffset: 300,
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
});