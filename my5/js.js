function $(id){
	return document.getElementById(id)?document.getElementById(id):document;
}
function addEvent(id,event,fn){
    if($(id).addEventListener) $(id).addEventListener(event,fn,false);
    else if($(id).attachEvent) $(id).attachEvent('on'+event,fn);
    else $(id)['event'];
}

window.onload=function(){
	
		addEvent('labA','click',function(){
	    if($('selectT').offsetHeight==52)
		$('selectT').style.height=100+'px';
		else if($('selectT').offsetHeight==102)
		$('selectT').style.height=50+'px';
		})
		addEvent('labB','click',function(){
		$('selectT').style.height=50+'px';
		var a;
		a=$('labB').innerHTML;
		$('labB').innerHTML=$('labA').innerHTML;
		$('labA').innerHTML=a;
		})
	
}