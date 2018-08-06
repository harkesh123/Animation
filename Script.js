var c = 0;
var t;
var a=-1;
var d=0;
var timer_is_on = 0;
var element1 = document.getElementById("first");
var element2 = document.getElementById("second");
var element3 = document.getElementById("third");
var element4 = document.getElementById("forth");
var b;
var sec;
function timedCount() {
	console.log(a,c,t,d,b)
    c = c + 1;
    t = setTimeout(timedCount, 1000);
    document.getElementById("demo").innerHTML = c;
    
    b = t%sec  //enter the animation time required
    if(b==0 ){
   	   c=0;
   	   a++;
   	   d=a%4;
   	   console.log(a,"after")
        animation();
       }       
    
   
   
}

function animation(){
	switch(d){
		case 0:element1.classList.toggle("circle");
		       element2.classList.toggle("circle");
		       break;
		case 1:element2.classList.toggle("circle");
		       element3.classList.toggle("circle");
		       break;
		case 2:element3.classList.toggle("circle");
		       element4.classList.toggle("circle");
		       break;
		case 3:element4.classList.toggle("circle");
		       element1.classList.toggle("circle");
		       break;
		default: console.log("error")

	}
}



function startCount() {
    if (timer_is_on==0) {
        sec=document.getElementById("sec").value;
        if(sec){
        timer_is_on = 1;
        timedCount();
        document.getElementById("sec").style.display="none";
        document.getElementById("button").innerHTML="Referesh";
        }
        else{
        	alert("enter no. of seconds")
        }
        console.log(sec)

    }
   else{
   	window.location.reload();
   }
}
