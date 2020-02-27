$(document).ready(function () {
  $('.datepicker').datepicker();
  $('.fixed-action-btn').floatingActionButton({
  	direction: 'left',
  	hoverEnabled: false
  });
  $('.modal').modal({
    opacity:0.3
  });
  $('.tooltipped').tooltip();
});