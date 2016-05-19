$(document).ready(function() {
		var $ul = $('#todo');
		var $not = $('#nottodo');
		
		$('#save').click( function(){
			localStorage.setItem('list', $ul.html());
			localStorage.setItem('list2', $not.html());
		});
		
		$('#clear').click( function(){
			localStorage.clear('list');
			localStorage.clear('list2');
			location.reload();
		});
		
		if(localStorage.getItem('list')){
			$ul.html(localStorage.getItem('list'));
		}
		if(localStorage.getItem('list2')){
			$not.html(localStorage.getItem('list2'));
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

