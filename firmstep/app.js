
$(document).ready(function()    {
	$("input").change(function CheckboxFilter(){
	
						   

	

	var inputs=document.getElementsByClassName("filter-name");
	var inputs_screen=document.getElementsByClassName("filter-screen");
	var inputs_os=document.getElementsByClassName("filter-os");
	var inputs_camera=document.getElementsByClassName("filter-camera");

   
   var j=0;
   var k=0;
   var l=0;
   var m=0;
   var count=0;
   
 
   
	var text1="";
	
	$.getJSON("products.json", function(data){
    $.each(data, function( i, item) {
		count=0;
		
		for(j = 0; j < inputs.length; j++) {
			
			for(k = 0; k < inputs_screen.length; k++) {
				for(l = 0; l < inputs_os.length; l++) {
					for(m = 0; m < inputs_camera.length; m++) {
						
				if(count==0){
					
			if(((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer))&&
				((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage))&&
((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os))&&
((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera))){
	
		text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
count=1;
		//}
	}
	else if(((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer))&&
				((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage))&&
((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os)))
	{
				text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
count=1;		
	}
	else if(((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer))&&
				((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage))&&
((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera))){
			text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';	
	count=1;
	}
	else if(((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer))&&
((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os))&&
((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera))){
			text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';	
count=1;	
	}
	else if(((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage))&&
((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os))&&
((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera))){
			text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';	
count=1;		
	}
	else if(((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer))&&
				((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage))){
		
				text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
	count=1;
	}
	else if(((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer))&&
((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os))){
				text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
	count=1;	
	}
	else if(((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer))&&
((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera))){
				text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
	count=1;	
	}
	else if(((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage))&&
((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os))){
				text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
		count=1;
	}
	else if(((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage))&&
((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera))){
				text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
		count=1;
	}
	else if(((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os))&&
((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera))){
				text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
		count=1;
	}
	else if((inputs[j].checked)&&(inputs[j].value==item.specs.manufacturer)){
			text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
count=1;
	}
	else if((inputs_screen[k].checked)&&(inputs_screen[k].value==item.specs.storage)){
			text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
count=1;
	}
	else if((inputs_os[l].checked)&&(inputs_os[l].value==item.specs.os)){
			text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
count=1;
	}
	else if((inputs_camera[m].checked)&&(inputs_camera[m].value==item.specs.camera)){
			text1+='<li>';
text1+='<a href=\'#\' class=\'product-photo\'>';
text1+='<img src=\'http:'+item.image.small+'\' height=\'130\' alt='+item.name+'>';
text1+='</a>';
text1+='<h2><a href=\'#\'> '+item.name+' </a></h2>';
text1+='<ul class=\'product-description\'>';
text1+='<li><span>Manufacturer: </span>'+item.specs.manufacturer+'</li>';
text1+='<li><span>Storage: </span>'+item.specs.storage+' GB</li>';
text1+='<li><span>OS: </span>'+item.specs.os+'</li>';
text1+='<li><span>Camera: </span>'+item.specs.camera+' Mpx</li>';
text1+='<li><span>Description: </span>'+item.description+'</li>';
text1+='</ul>';
text1+='<p class=\'product-price\'>£'+item.price+'</p>';
text1+='</li>';
count=1;
	}
	
					}
					
					}}}}
					});
	});
alert(text1);
var y = document.getElementsByClassName("products-list");
y[0].innerHTML=text1;
});


});
