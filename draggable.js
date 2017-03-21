 /* getting the co-ordinate od the dropped location */
	    var offsets = document.getElementById('div1').getBoundingClientRect();
		var top1 = offsets.top;
		var left1 = offsets.left;
		console.log(top1);
		console.log(left1);
/* end getting the co-ordinate od the dropped location */

  /* for touch */
  
   
	   
	 var draggable = document.getElementById('drag8');
	  draggable.addEventListener('touchmove', function(event) {
		var touch = event.targetTouches[0];	
		// Place element where the finger is
		var myShadowX = touch.screenX-500;
		var myShadowY = touch.screenY-200;
		var dragDivPosX=touch.screenX;
		var dragDivPosY=touch.screenY;
		draggable.style.left = touch.screenX-500 + 'px';
		draggable.style.top = touch.screenY-200 + 'px';	
		
		if(dragDivPosX >= 580 && dragDivPosY >= 150 && dragDivPosY <= 200 && dragDivPosX <=620)
		{ 
		    
			alert("x:"+dragDivPosX+"y:"+dragDivPosY);
		}
		
		
		
		event.preventDefault();
	  }, false);
	  
     /* end of touch */

function abc(){
	   console.log(offsets.top,draggable.style);
	   
   }


function allowDrop(ev) {
		   ev.preventDefault();
}

	function drag(ev) {		
			ev.dataTransfer.setData("text/plain", ev.target.id);
		}
	
	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		var num=document.getElementById(data).innerHTML;
		var a = parseInt(num);	
		var nodeCopy = document.getElementById(data).cloneNode(true);
		nodeCopy.id="copy";

		var resultString=document.getElementById("droppedValue").innerHTML;
		var prevVal=parseInt(resultString);		
		prevVal +=a;
		document.getElementById("droppedValue").innerHTML=prevVal;
	}