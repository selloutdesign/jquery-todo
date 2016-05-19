$(document).ready(function() {
	var $ul = $('#todo');
	
	$('#save').click( function(){
		localStorage.setItem('list', $ul.html());
	});
		
	$('#clear').click( function(){
		localStorage.clear('list');
		location.reload();
	});
	
	if(localStorage.getItem('list')){
		$ul.html(localStorage.getItem('list'));
	}










	$( "#todo, #nottodo" ).sortable({connectWith: ".connectedSortable"}).disableSelection();
  
  	$("ul").on("click", ".delete" ,function(event) {
  		/* Act on the event */
  		$(this).parent().remove();
  	});

  	$(".add-this").on("click",function(e){
  		var text = $("#add-text").val();
  		$("#todo").prepend($('<li class="selectable">' + '<div class="delete"><i class="fa fa-close" aria-hidden="true"></i></div>' + '<div class="item">' + text + '</div>' + '<li>'));
  	});




 
});

