function $(id){
	return document.getElementById(id)?document.getElementById(id):document;
}
function $(a){
	return document.getElementById(a)?document.getElementById(a):a;
}
function addEvent(id,event,fn){
    if($(id).addEventListener) $(id).addEventListener(event,fn,false);
    else if($(id).attachEvent) $(id).attachEvent('on'+event,fn);
    else $(id)['event'];
}
function elLeft(el){
	var a=$(el).offsetLeft;
    var b=$(el).offsetParent;
    if(b!==null){
    	a+=b.offsetLeft;
    	b=b.offsetParent;
    }
    return a;
}
function elTop(el){
	var a=$(el).offsetTop;
    var b=$(el).offsetParent;
    if(b!==null){
    	a+=b.offsetTop;
    	b=b.offsetParent;
    }
    return a;
}

window.onload=function(){
	 $(tip).style.top=elTop(form)+$(form).offsetHeight-1+'px';
	 $(tip).style.left=elLeft(form)+'px';
	 addEvent(inputText,'keyup',function(){
	 	$(tip).style.display='block';
	 });
	 addEvent(document,'click',function(){
	 	$(tip).style.display='none';
	 });
	}
	
