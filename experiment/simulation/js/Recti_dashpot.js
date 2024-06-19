
   
function imchange(select){
	var i= document.getElementById("MASS(kg)").selectedIndex;
	  var M=(document.getElementById("MASS(kg)").options[i].innerHTML);
	if (M == 0){
		
	document.getElementById('img').src = "Mass_Dashpot/ULmassd/0.jpg";
	document.getElementById('valR2').style.display="block";
	document.getElementById('range').style.display="block";
	document.getElementById('run0kg').style.display="block";
	//document.getElementById('weights').style.display="none";
	}
	else{
		document.getElementById('valR2').style.display="none";
		document.getElementById('run0kg').style.display="none";
		//document.getElementById('weights').style.display="block";
	}
	 if(M==2){
	document.getElementById('img').src = "Mass_Dashpot/massd/0.jpg";	
	document.getElementById('valR').style.display="block";
	document.getElementById('range').style.display="block";
	document.getElementById('run2kg').style.display="block";
	//document.getElementById('weights').style.display="none";
	}
	else{
	document.getElementById('valR').style.display="none";
document.getElementById('run2kg').style.display="none";	
//document.getElementById('weights').style.display="block";
}
 if(M==0.5){
	document.getElementById('img').src = "Mass_Dashpot/onemassd/0.jpg";	
	document.getElementById('valR3').style.display="block";
	document.getElementById('range').style.display="block";
	document.getElementById('run0.5kg').style.display="block";
	//document.getElementById('weights').style.display="none";
	}
	else{
	document.getElementById('valR3').style.display="none";
document.getElementById('run0.5kg').style.display="none";	
//document.getElementById('weights').style.display="block";
}
if(M==1){
	document.getElementById('img').src = "Mass_Dashpot/twomassd/0.jpg";	
	document.getElementById('valR4').style.display="block";
	document.getElementById('range').style.display="block";
	document.getElementById('run1kg').style.display="block";
	//document.getElementById('weights').style.display="none";
	}
	else{
	document.getElementById('valR4').style.display="none";
document.getElementById('run1kg').style.display="none";	
//document.getElementById('weights').style.display="block";
}
if(M==1.5){
	document.getElementById('img').src = "Mass_Dashpot/threemassd/0.jpg";	
	document.getElementById('valR5').style.display="block";
	document.getElementById('range').style.display="block";
	document.getElementById('run1.5kg').style.display="block";
	//document.getElementById('weights').style.display="none";
	}
	else{
	document.getElementById('valR5').style.display="none";
document.getElementById('run1.5kg').style.display="none";	
//document.getElementById('weights').style.display="block";
}

}




   //var val = document.getElementById("valR").value;
        //document.getElementById("range").innerHTML=val;
		//var opt = document.getElementById("MASS(kg)").selectedIndex;
		//For 2kg mass//
                function showVal1(newVal){
          document.getElementById("range").innerHTML=newVal;
		  
		 if(newVal== -0.5){
          document.getElementById("img").src =  "Mass_Dashpot/massd/0.5.jpg ";
		  document.getElementById("slider").value="1000";
        }
		else if (newVal== -1){
   document.getElementById("img").src =  "Mass_Dashpot/massd/1.jpg ";
   document.getElementById("slider").value="2000";
        }
  else if (newVal== -1.5){
   document.getElementById("img").src =  "Mass_Dashpot/massd/1.5.jpg ";
   document.getElementById("slider").value="3000";
    }
	else if (newVal== -2){
   document.getElementById("img").src =  "Mass_Dashpot/massd/2.jpg ";
   document.getElementById("slider").value="4000";
	}
	else if (newVal== -2.5){
   document.getElementById("img").src =  "Mass_Dashpot/massd/2.5.jpg ";
   document.getElementById("slider").value="5000";
	}
	else if(newVal== 0){
	document.getElementById("img").src = "Mass_Dashpot/massd/0.jpg "
	document.getElementById("slider").value="0000";
	}
	else if(newVal== 0.5){
	document.getElementById("img").src = "Mass_Dashpot/massd compression/p0.5.jpg "
	document.getElementById("slider").value="1000";
	}
	else if(newVal== 1){
	document.getElementById("img").src = "Mass_Dashpot/massd compression/p1.jpg "
	document.getElementById("slider").value="2000";
	}
	else if(newVal== 1.5){
	document.getElementById("img").src = "Mass_Dashpot/massd compression/p1.5.jpg "
	document.getElementById("slider").value="3000";
	}
	else if(newVal== 2){
	document.getElementById("img").src = "Mass_Dashpot/massd compression/p2.jpg "
	document.getElementById("slider").value="4000";
	}
	else if(newVal== 2.5){
	document.getElementById("img").src = "Mass_Dashpot/massd compression/p2.5.jpg "
	document.getElementById("slider").value="5000";
	}	
}
//For unloaded mass//

function showVal2(newVal){
          document.getElementById("range").innerHTML=newVal;
		 if(newVal== -0.5   ){
          document.getElementById("img").src = "Mass_Dashpot/ULmassd/0.5.jpg";
		  document.getElementById("slider").value="1000";
        }
		else if (newVal== -1){
   document.getElementById("img").src =  "Mass_Dashpot/ULmassd/1.jpg";
   document.getElementById("slider").value="2000";
        }
  else if (newVal== -1.5){
   document.getElementById("img").src =  "Mass_Dashpot/ULmassd/1.5.jpg";
   document.getElementById("slider").value="3000";
    }
	else if (newVal== -2){
   document.getElementById("img").src =  "Mass_Dashpot/ULmassd/2.jpg ";
   document.getElementById("slider").value="4000";
	}
	else if (newVal== -2.5){
   document.getElementById("img").src =  "Mass_Dashpot/ULmassd/2.5.jpg ";
   document.getElementById("slider").value="5000";
	}
	else if(newVal== 0){
	document.getElementById("img").src = "Mass_Dashpot/ULmassd/0.jpg "
	document.getElementById("slider").value="0000";
	}
	else if(newVal== 0.5){
	document.getElementById("img").src = "Mass_Dashpot/ULmassd compression/p0.5.jpg "
	document.getElementById("slider").value="1000";
	}
	else if(newVal== 1){
	document.getElementById("img").src = "Mass_Dashpot/ULmassd compression/p1.jpg "
	document.getElementById("slider").value="2000";
	}
	else if(newVal== 1.5){
	document.getElementById("img").src = "Mass_Dashpot/ULmassd compression/p1.5.jpg "
	document.getElementById("slider").value="3000";
	}
	else if(newVal== 2){
	document.getElementById("img").src = "Mass_Dashpot/ULmassd compression/p2.jpg "
	document.getElementById("slider").value="4000";
	}
	else if(newVal== 2.5){
	document.getElementById("img").src = "Mass_Dashpot/ULmassd compression/p2.5.jpg "
	document.getElementById("slider").value="5000";
	}	
}

//For 0.5kg mass//

function showVal3(newVal){
          document.getElementById("range").innerHTML=newVal;
		 if(newVal== -0.5   ){
          document.getElementById("img").src =  "Mass_Dashpot/onemassd/0.5.jpg ";
		  document.getElementById("slider").value="1000";
        }
		else if (newVal== -1){
   document.getElementById("img").src =  "Mass_Dashpot/onemassd/1.jpg ";
   document.getElementById("slider").value="2000";
        }
  else if (newVal== -1.5){
   document.getElementById("img").src =  "Mass_Dashpot/onemassd/1.5.jpg ";
   document.getElementById("slider").value="3000";
    }
	else if (newVal== -2){
   document.getElementById("img").src =  "Mass_Dashpot/onemassd/2.jpg ";
   document.getElementById("slider").value="4000";
	}
	else if (newVal== -2.5){
   document.getElementById("img").src =  "Mass_Dashpot/onemassd/2.5.jpg ";
   document.getElementById("slider").value="5000";
	}
	else if(newVal== 0){
	document.getElementById("img").src = "Mass_Dashpot/onemassd/0.jpg "
	document.getElementById("slider").value="0000";
	}
	else if(newVal== 0.5){
	document.getElementById("img").src = "Mass_Dashpot/onemassd compression/p0.5.jpg "
	document.getElementById("slider").value="1000";
	}
	else if(newVal== 1){
	document.getElementById("img").src = "Mass_Dashpot/onemassd compression/p1.jpg "
	document.getElementById("slider").value="2000";
	}
	else if(newVal== 1.5){
	document.getElementById("img").src = "Mass_Dashpot/onemassd compression/p1.5.jpg "
	document.getElementById("slider").value="3000";
	}
	else if(newVal== 2){
	document.getElementById("img").src = "Mass_Dashpot/onemassd compression/p2.jpg "
	document.getElementById("slider").value="4000";
	}
	else if(newVal== 2.5){
	document.getElementById("img").src = "Mass_Dashpot/onemassd compression/p2.5.jpg "
	document.getElementById("slider").value="5000";
	}	
}
//For 1 kg mass//

function showVal4(newVal){
          document.getElementById("range").innerHTML=newVal;
		 if(newVal== -0.5   ){
          document.getElementById("img").src =  "Mass_Dashpot/twomassd/0.5.jpg ";
		  document.getElementById("slider").value="1000";
        }
		else if (newVal== -1){
   document.getElementById("img").src =  "Mass_Dashpot/twomassd/1.jpg ";
   document.getElementById("slider").value="2000";
        }
  else if (newVal== -1.5){
   document.getElementById("img").src =  "Mass_Dashpot/twomassd/1.5.jpg ";
   document.getElementById("slider").value="3000";
    }
	else if (newVal== -2){
   document.getElementById("img").src =  "Mass_Dashpot/twomassd/2.jpg ";
   document.getElementById("slider").value="4000";
	}
	else if (newVal== -2.5){
   document.getElementById("img").src =  "Mass_Dashpot/twomassd/2.5.jpg ";
   document.getElementById("slider").value="5000";
	}
	else if(newVal== 0){
	document.getElementById("img").src = "Mass_Dashpot/twomassd/0.jpg "
	document.getElementById("slider").value="0000";
	}
	else if(newVal== 0.5){
	document.getElementById("img").src = "Mass_Dashpot/twomassd compression/p0.5.jpg "
	document.getElementById("slider").value="1000";
	}
	else if(newVal== 1){
	document.getElementById("img").src = "Mass_Dashpot/twomassd compression/p1.jpg "
	document.getElementById("slider").value="2000";
	}
	else if(newVal== 1.5){
	document.getElementById("img").src = "Mass_Dashpot/twomassd compression/p1.5.jpg "
	document.getElementById("slider").value="3000";
	}
	else if(newVal== 2){
	document.getElementById("img").src = "Mass_Dashpot/twomassd compression/p2.jpg "
	document.getElementById("slider").value="4000";
	}
	else if(newVal== 2.5){
	document.getElementById("img").src = "Mass_Dashpot/twomassd compression/p2.5.jpg "
	document.getElementById("slider").value="5000";
	}	
}
//For 1.5 kg mass//

function showVal5(newVal){
          document.getElementById("range").innerHTML=newVal;
		 if(newVal== -0.5   ){
          document.getElementById("img").src =  "Mass_Dashpot/threemassd/0.5.jpg ";
		  document.getElementById("slider").value="1000";
        }
		else if (newVal== -1){
   document.getElementById("img").src =  "Mass_Dashpot/threemassd/1.jpg ";
   document.getElementById("slider").value="2000";
        }
  else if (newVal== -1.5){
   document.getElementById("img").src =  "Mass_Dashpot/threemassd/1.5.jpg ";
   document.getElementById("slider").value="3000";
    }
	else if (newVal== -2){
   document.getElementById("img").src =  "Mass_Dashpot/threemassd/2.jpg ";
   document.getElementById("slider").value="4000";
	}
	else if (newVal== -2.5){
   document.getElementById("img").src =  "Mass_Dashpot/threemassd/2.5.jpg ";
   document.getElementById("slider").value="5000";
	}
	else if(newVal== 0){
	document.getElementById("img").src = "Mass_Dashpot/threemassd/0.jpg "
	document.getElementById("slider").value="0000";
	}
	else if(newVal== 0.5){
	document.getElementById("img").src = "Mass_Dashpot/threemassd compression/p0.5.jpg "
	document.getElementById("slider").value="1000";
	}
	else if(newVal== 1){
	document.getElementById("img").src = "Mass_Dashpot/threemassd compression/p1.jpg "
	document.getElementById("slider").value="2000";
	}
	else if(newVal== 1.5){
	document.getElementById("img").src = "Mass_Dashpot/threemassd compression/p1.5.jpg "
	document.getElementById("slider").value="3000";
	}
	else if(newVal== 2){
	document.getElementById("img").src = "Mass_Dashpot/threemassd compression/p2.jpg "
	document.getElementById("slider").value="4000";
	}
	else if(newVal== 2.5){
	document.getElementById("img").src = "Mass_Dashpot/threemassd compression/p2.5.jpg "
	document.getElementById("slider").value="5000";
	}	
}









function hover(Range){
document.getElementById("range").innerHTML=Range;
if(Range==0){
document.getElementById("slider").value="953";
}

}

////////////

function TBOX(){
document.getElementById("Trajectory Configuration").style.display="block";
}
function stepcon(){
var stepradio= document.getElementById("step");
//var rampradio= document.getElementById("ramp");
if(stepradio . checked == true  ){
document.getElementById("Step Configuration").style.display="block";
document.getElementById("olstep").style.display="block";
//document.getElementById("stepok").style.display="block";
document.getElementById("olradioname").style.display="block";                 
return;
}
else {
document.getElementById("olstep").style.display="none";
document.getElementById("stepok").style.display="none";
document.getElementById("olradioname").style.display="none";
}
}
function stopstep(){

document.getElementById("Step Configuration").style.display="none";
document.getElementById("Trajectory Configuration").style.display="none";
var ol= document.getElementById("olstep");
if(ol . checked == true ){
document.getElementById("status").innerHTML="OPEN";
}
}

function DBOX(){
document.getElementById("dataAquisition").style.display="block";
}
function stopdata(){
document.getElementById("dataAquisition").style.display="none";
}
function plotsetup(){
	document.getElementById('Plot Configuration').style.display="block";
}
function stopplot(){
	document.getElementById('Plot Configuration').style.display="none";
}






//////animation or 2kg mass//////
var arr = [];
arr[0]= new Image();
arr[0].src = "Mass_Dashpot/massd/0.jpg";
arr[1]= new Image();
arr[1].src = "Mass_Dashpot/massd compression/p0.5.jpg";
arr[2]= new Image();
arr[2].src = "Mass_Dashpot/massd compression/p1.jpg";
arr[3]= new Image();
arr[3].src = "Mass_Dashpot/massd compression/p0.5.jpg";
arr[4]= new Image();
arr[4].src = "Mass_Dashpot/massd/0.jpg";
arr[5]= new Image();
arr[5].src = "Mass_Dashpot/massd/0.5.jpg";
arr[6]= new Image();
arr[6].src = "Mass_Dashpot/massd/1.jpg";
arr[7]= new Image();
arr[7].src = "Mass_Dashpot/massd/0.5.jpg";
arr[8]= new Image();
arr[8].src = "Mass_Dashpot/massd/0.jpg";


//////animation or 0kg mass//////
var arr2 = [];
arr2[0]= new Image();
arr2[0].src = "Mass_Dashpot/ULmassd/0.jpg";
arr2[1]= new Image();
arr2[1].src = "Mass_Dashpot/ULmassd compression/p0.5.jpg";
arr2[2]= new Image();
arr2[2].src = "Mass_Dashpot/ULmassd compression/p1.jpg";
arr2[3]= new Image();
arr2[3].src = "Mass_Dashpot/ULmassd compression/p0.5.jpg";
arr2[4]= new Image();
arr2[4].src = "Mass_Dashpot/ULmassd/0.jpg";
arr2[5]= new Image();
arr2[5].src = "Mass_Dashpot/ULmassd/0.5.jpg";
arr2[6]= new Image();
arr2[6].src = "Mass_Dashpot/ULmassd/1.jpg";
arr2[7]= new Image();
arr2[7].src = "Mass_Dashpot/ULmassd/0.5.jpg";
arr2[8]= new Image();
arr2[8].src = "Mass_Dashpot/ULmassd/0.jpg";

//////animation or 0.5kg mass//////
var arr3 = [];
arr3[0]= new Image();
arr3[0].src = "Mass_Dashpot/onemassd/0.jpg";
arr3[1]= new Image();
arr3[1].src = "Mass_Dashpot/onemassd compression/p0.5.jpg";
arr3[2]= new Image();
arr3[2].src = "Mass_Dashpot/onemassd compression/p1.jpg";
arr3[3]= new Image();
arr3[3].src = "Mass_Dashpot/onemassd compression/p0.5.jpg";
arr3[4]= new Image();
arr3[4].src = "Mass_Dashpot/onemassd/0.jpg";
arr3[5]= new Image();
arr3[5].src = "Mass_Dashpot/onemassd/0.5.jpg";
arr3[6]= new Image();
arr3[6].src = "Mass_Dashpot/onemassd/1.jpg";
arr3[7]= new Image();
arr3[7].src = "Mass_Dashpot/onemassd/0.5.jpg";
arr3[8]= new Image();
arr3[8].src = "Mass_Dashpot/onemassd/0.jpg";

//////animation or 1 kg mass//////
var arr4 = [];
arr4[0]= new Image();
arr4[0].src = "Mass_Dashpot/twomassd/0.jpg";
arr4[1]= new Image();
arr4[1].src = "Mass_Dashpot/twomassd compression/p0.5.jpg";
arr4[2]= new Image();
arr4[2].src = "Mass_Dashpot/twomassd compression/p1.jpg";
arr4[3]= new Image();
arr4[3].src = "Mass_Dashpot/twomassd compression/p0.5.jpg";
arr4[4]= new Image();
arr4[4].src = "Mass_Dashpot/twomassd/0.jpg";
arr4[5]= new Image();
arr4[5].src = "Mass_Dashpot/twomassd/0.5.jpg";
arr4[6]= new Image();
arr4[6].src = "Mass_Dashpot/twomassd/1.jpg";
arr4[7]= new Image();
arr4[7].src = "Mass_Dashpot/twomassd/0.5.jpg";
arr4[8]= new Image();
arr4[8].src = "Mass_Dashpot/twomassd/0.jpg";
//var i=0;

//////animation or 1.5 kg mass//////
var arr5 = [];
arr5[0]= new Image();
arr5[0].src = "Mass_Dashpot/threemassd/0.jpg";
arr5[1]= new Image();
arr5[1].src = "Mass_Dashpot/threemassd compression/p0.5.jpg";
arr5[2]= new Image();
arr5[2].src = "Mass_Dashpot/threemassd compression/p1.jpg";
arr5[3]= new Image();
arr5[3].src = "Mass_Dashpot/threemassd compression/p0.5.jpg";
arr5[4]= new Image();
arr5[4].src = "Mass_Dashpot/threemassd/0.jpg";
arr5[5]= new Image();
arr5[5].src = "Mass_Dashpot/threemassd/0.5.jpg";
arr5[6]= new Image();
arr5[6].src = "Mass_Dashpot/threemassd/1.jpg";
arr5[7]= new Image();
arr5[7].src = "Mass_Dashpot/threemassd/0.5.jpg";
arr5[8]= new Image();
arr5[8].src = "Mass_Dashpot/threemassd/0.jpg";

var i=0;

function slide(){
 document.getElementById("img").src= arr[i].src;
 i++; 
 if(i==arr.length){
  i=0;
 }
 setTimeout(function(){ slide(); },40);
 clearTimeout(25); 
}
function slide2(){
 document.getElementById("img").src= arr2[i].src;
 i++; 
 if(i==arr2.length){
  i=0;
 }
 setTimeout(function(){ slide2(); },40);
 clearTimeout(25); 
}
function slide3(){
 document.getElementById("img").src= arr3[i].src;
 i++; 
 if(i==arr3.length){
  i=0;
 }
 setTimeout(function(){ slide3(); },40);
 clearTimeout(25); 
}
function slide4(){
 document.getElementById("img").src= arr4[i].src;
 i++; 
 if(i==arr4.length){
  i=0;
 }
 setTimeout(function(){ slide4(); },40);
 clearTimeout(25); 
}
function slide5(){
 document.getElementById("img").src= arr5[i].src;
 i++; 
 if(i==arr5.length){
  i=0;
 }
 setTimeout(function(){ slide5(); },40);
 clearTimeout(25); 
}

function EBOX(){
document.getElementById("Execute").style.display="block";
}

function RunAnim(){
	/////for alert of no. of samples collected/////////
	var sampleperiod = parseFloat(0.00442);
	var repeatation = document.getElementById('rep').value;
	var dwelltime = document.getElementById('dt').value;
	var servocycle = document.getElementById('servo').value;
	
	var totaltime = (dwelltime*2); ///time in msec
	var totaltimesec = (totaltime/1000); ///time in sec
	
	var num = (totaltimesec * repeatation);
	var den = parseFloat(sampleperiod * servocycle);
	
	var samplecount = parseInt(num/den);
	
	
document.getElementById("img").style.display="block";
slide('img',arr);
setTimeout(function(){ alert("Data uploaded successfully,check plot. "  + samplecount +  " samples collected"); }, 4000);
document.getElementById("Execute").style.display="none";

}
function RunAnim2(){
	/////for alert of no. of samples collected/////////
	var sampleperiod = parseFloat(0.00442);
	var repeatation = document.getElementById('rep').value;
	var dwelltime = document.getElementById('dt').value;
	var servocycle = document.getElementById('servo').value;
	
	var totaltime = (dwelltime*2); ///time in msec
	var totaltimesec = (totaltime/1000); ///time in sec
	
	var num = (totaltimesec * repeatation);
	var den = parseFloat(sampleperiod * servocycle);
	
	var samplecount = parseInt(num/den);
	
document.getElementById("img").style.display="block";
slide2('img',arr2);
setTimeout(function(){ alert("Data uploaded successfully,check plot. "  + samplecount +  " samples collected"); }, 4000);
document.getElementById("Execute").style.display="none";

}
function RunAnim3(){
	
	/////for alert of no. of samples collected/////////
	var sampleperiod = parseFloat(0.00442);
	var repeatation = document.getElementById('rep').value;
	var dwelltime = document.getElementById('dt').value;
	var servocycle = document.getElementById('servo').value;
	
	var totaltime = (dwelltime*2); ///time in msec
	var totaltimesec = (totaltime/1000); ///time in sec
	
	var num = (totaltimesec * repeatation);
	var den = parseFloat(sampleperiod * servocycle);
	
	var samplecount = parseInt(num/den);
	
	
document.getElementById("img").style.display="block";
slide3('img',arr3);
setTimeout(function(){ alert("Data uploaded successfully,check plot. "  + samplecount +  " samples collected"); }, 4000);
document.getElementById("Execute").style.display="none";

}
function RunAnim4(){
	
	/////for alert of no. of samples collected/////////
	var sampleperiod = parseFloat(0.00442);
	var repeatation = document.getElementById('rep').value;
	var dwelltime = document.getElementById('dt').value;
	var servocycle = document.getElementById('servo').value;
	
	var totaltime = (dwelltime*2); ///time in msec
	var totaltimesec = (totaltime/1000); ///time in sec
	
	var num = (totaltimesec * repeatation);
	var den = parseFloat(sampleperiod * servocycle);
	
	var samplecount = parseInt(num/den);	
	
	
document.getElementById("img").style.display="block";
slide4('img',arr4);
setTimeout(function(){ alert("Data uploaded successfully,check plot. "  + samplecount +  " samples collected"); }, 4000);
document.getElementById("Execute").style.display="none";

}
function RunAnim5(){
	
	
	
	/////for alert of no. of samples collected/////////
	var sampleperiod = parseFloat(0.00442);
	var repeatation = document.getElementById('rep').value;
	var dwelltime = document.getElementById('dt').value;
	var servocycle = document.getElementById('servo').value;
	
	var totaltime = (dwelltime*2); ///time in msec
	var totaltimesec = (totaltime/1000); ///time in sec
	
	var num = (totaltimesec * repeatation);
	var den = parseFloat(sampleperiod * servocycle);
	
	var samplecount = parseInt(num/den);
	
document.getElementById("img").style.display="block";
slide5('img',arr5);
setTimeout(function(){ alert("Data uploaded successfully,check plot. "  + samplecount +  " samples collected"); }, 4000);
document.getElementById("Execute").style.display="none";

}


function CancelRun(){
document.getElementById("Execute").style.display="none";
}
function Resetcontroller(){
	location.reload();
//document.getElementById("img").style.display="block";
}


///plot for all masses///
  function plotposition() {
	  
	var y= new Array();
var dataPoints=[];
document.getElementById("plotbucket").style.display="block";
	  document.getElementById("chartContainer").style.display="block";
	  document.getElementById("chartContainer2").style.display="none";

var ipvalue = parseFloat(Math.abs(Number(document.getElementById('range').innerHTML)));///in cmeter new edit
	
      var i= document.getElementById("MASS(kg)").selectedIndex;
	  var M= parseFloat(document.getElementById("MASS(kg)").options[i].innerHTML);//value.innerHTML);
	  var mc = 0.77;
	  var TM =parseFloat(M+mc);// parseFloat(2.866);//+(M+mc).toFixed(2);
	  var c = parseFloat(12.563);//zeta value 0.05
	  var c2 =parseFloat(Math.pow(c,2));
	  var k = 390; var fk =parseFloat(1/k);
	  var zeta2 = parseFloat(c2/(4*TM*k));
	  var zetad = (1-zeta2);
	  var zetad2 = Math.sqrt(zetad);var fzeta= parseFloat(1/zetad2);
	  var zwn = parseFloat(c/(2*TM));
	  var wn1 = parseFloat(k/TM);
	  var wn2 = Math.sqrt(wn1);
	  var thetad = parseFloat(k*TM);
	  var roottheta = Math.sqrt(thetad);
	  var theta = parseFloat(c/(2*roottheta));
	  var thetaradian = parseFloat(Math.acos(theta)*Math.PI/180);
	  var wd = parseFloat(wn2 * zetad2);
	  
	  var gain = parseFloat(parseFloat(0.691617)*ipvalue);
	 //alert('gain='+gain);
	 var hwgain = parseFloat(363.111); 
	  
	  
	 /* <script>
function myFunction() {

  var x = 
  document.getElementById("demo").innerHTML = x;
}
</script>*/

	  
	  
	 var dwtime = document.getElementById('dt').value;
	  var dwsect = parseFloat(parseFloat(dwtime/1000)*2); 
	 var repvalue = document.getElementById('rep').value;
	  
	  //for repeatation 1////////
	 

	  for(var t=0; t<= parseFloat(dwsect*repvalue); t+=0.1){
		 
		  var sinepart = parseFloat(wd*t);
		  var sineadd = sinepart+ thetaradian ;
		  var exppart = parseFloat(zwn*t);
		  var scndprt = (fzeta *  Math.exp(-exppart)* Math.sin(sineadd));
		  var stdyst = parseFloat(1.00);
		  var substr = (stdyst-scndprt);
		  //y[t]= parseFloat(fk* substr);
		  
		  y[t]= parseFloat(gain*fk* substr*hwgain);
 
		 var cmeter = parseFloat(y[t]/0.691617);
		var counts = parseFloat(cmeter*2266.288952);
		  
		  
		  
		  /*var cmcount = parseFloat(2266.28895184);//acc to manual 7.06 cm = 16000 counts, hence 1cm = approx 2266.28895184 counts, hence 10^-3 m = 2266.28895184 counts
		  var mcount = parseFloat(cmcount * 1000);                                   //hence 1 m = 2266.28895184/10^-3 counts.....or (2266.28895184 * 10^3)counts
		  var counts = (mcount * y[t]);*/
		  
		  dataPoints.push({x:(t), y:(counts)});
	  
	  }
	  
	 
    var chart = new CanvasJS.Chart("chartContainer",
    {
       
	  title:{
      text: "OpenLoop Step Plot"
	  
      },
	  
	  axisX:{
        interlacedColor: "#D9D9DA",
        title: "Time (sec)"
      },
	  axisY: {
            title: "Amplitude (Encoder position counts)",
			
			//maximum:0.0018,
        },
      data: [
      {        
        type: "spline",
		color:"black",
        dataPoints:dataPoints
		
		/*[
        //{ x: 0, y: -5000 },
        { x: 0.4, y: -5000},
        { x: 0.6, y: 4500 },
		{ x: 0.8, y: -3400 },
        { x: 1.0, y: 3000 },
        { x: 1.2, y: -2685 },
        { x: 1.4, y: 2000 },
        { x: 1.6, y: 100 },
        { x: 1.8, y: -2000},
        { x: 2.0, y: 1500},
        { x: 2.2, y: -1800}, 
        { x: 2.4, y: 800},
        { x: 2.6, y: -1500},
        { x: 2.8, y: 0},
       { x: 3.0, y: 600},
       { x: 3.2, y: 0},
       { x: 3.4, y: -500},
       { x: 3.6, y: 50},
       { x: 3.8, y: 0},
       { x: 4.0, y: 0},
       { x: 5.0, y: 0},
       { x: 6.0, y: 0},
       { x: 6.5, },
        ]*/
      }
      ]
    });

    chart.render();
	document.getElementById("exportPositionChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
  }
 

function plotvelocity(){
	var v= new Array();
var dataPoints=[];	
      var i= document.getElementById("MASS(kg)").selectedIndex;
	  var M= parseFloat(document.getElementById("MASS(kg)").options[i].innerHTML);//value.innerHTML);
	  var mc = 0.77;
	  var TM =parseFloat(M+mc);// parseFloat(2.866);//+(M+mc).toFixed(2);
	  var c = parseFloat(12.563);//zeta value 0.05
	  var c2 =parseFloat(Math.pow(c,2));
	  var k = 390; var fk =parseFloat(1/k);
	  var zeta2 = parseFloat(c2/(4*TM*k));
	  var zetad = (1.00-zeta2);
	  var zetad2 = Math.sqrt(zetad);var fzeta= parseFloat(1/zetad2);
	  var zwn = parseFloat(c/(2*TM));  
	   var multifactors = (fk*fzeta*zwn);
	  var wn1 = parseFloat(k/TM);
	  var wn2 = Math.sqrt(wn1);
	  var thetad = parseFloat(k*TM);
	  var roottheta = Math.sqrt(thetad);
	  var rootthetasqrt = parseFloat(1/roottheta);
	  var theta = parseFloat(c/(2*roottheta));
	  var thetaradian = parseFloat(Math.acos(theta)*Math.PI/180);
	  var wd = parseFloat(wn2 * zetad2);
	  
	  
	  
	  
	  
	   var repvalue = document.getElementById('rep').value;
	  
	 
	   for(var t=0; t<=(0.3*repvalue); t+=0.01){
		  
		  var exppart = parseFloat(zwn * t);
		  var sinepart = parseFloat(wd*t);
		  var sineadd = sinepart+ thetaradian ;
		  
		  var velofrstprt = parseFloat(multifactors*Math.exp(-exppart)*Math.sin(sineadd));
		  var veloscndprt = parseFloat(rootthetasqrt*Math.exp(-exppart)*Math.cos(sineadd));
		  v[t] = (velofrstprt-veloscndprt);
		  
		  var cmcount = parseFloat(2266.28895184);//acc to manual 7.06 cm = 16000 counts, hence 1cm = approx 2266.28895184 counts, hence 10^-3 m = 2266.28895184 counts
		  var mcount = parseFloat(cmcount * 1000);                                   //hence 1 m = 2266.28895184/10^-3 counts.....or (2266.28895184 * 10^3)counts
		  var counts = (mcount * v[t]);
		  dataPoints.push({x:(t), y:(counts)});
		  
		  
	  } 
	  
	  var chart = new CanvasJS.Chart("chartContainer2",
    {
       
	  title:{
      text: "Velocity vs. Time Plot"
	  
      },
	  
	  axisX:{
        interlacedColor: "#D9D9DA",
        title: "Time(sec)"
      },
	  axisY: {
            title: "Velocity Curves",
			
			//maximum:0.0018,
        },
      data: [
      {        
        type: "line",
		color:"black",
        dataPoints:dataPoints
		
      }
      ]
    });

    chart.render();
	document.getElementById("exportVelocityChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
  } 

function graph(){
if( document.getElementById('olstep').checked==true && document.getElementById('step').checked==true && document.getElementById('position').checked==true){
plotposition();
document.getElementById('exportPositionChart').style.display="block";
}
else if(document.getElementById('olstep').checked==true && document.getElementById('step').checked==true && document.getElementById('velocity').checked==true){
plotvelocity();
document.getElementById('exportVelocityChart').style.display="block";
}

}

function removeDashpot(){
	
	 window.location.assign("index.html");
}


  
 


/*function graph(){
if( document.getElementById('olstep').checked==true && document.getElementById('step').checked==true && document.getElementById('MASS(kg)').value==5){
plot();
document.getElementById('hideplot').style.display="block";
}
else if(document.getElementById('olstep').checked==true && document.getElementById('step').checked==true && document.getElementById('MASS(kg)').value==1){
plot2();
document.getElementById('hideplot').style.display="block";
}
else if(document.getElementById('olstep').checked==true && document.getElementById('step').checked==true && document.getElementById('MASS(kg)').value==4){
plot3();
document.getElementById('hideplot').style.display="block";
}
}*/

function show_DBox(){
document.getElementById('DBox').style.display="block";
}
function hide_DBox(){
document.getElementById('DBox').style.display="none";
}


function Simulate2(){


//calculation for Dashpot damping assuming C=12.563 kg.rad/sec///
var m = parseFloat(document.getElementById('mass').value);
 var mc =parseFloat(0.77);
var TM =(m+mc);
 var c = parseFloat(12.563);
 var c2 =parseFloat(Math.pow(c,2));
 var k = 390; 
 var zeta2 = parseFloat(c2/(4*TM*k));
  var zeta =( Math.sqrt(zeta2));
 var wn2 = parseFloat(k/TM);
  var wn = Math.sqrt(wn2);
  
 var ceq = parseFloat(2*zeta*wn*TM);
 
 
 
  
  //final calculation show//
  
 
document.getElementById('zeta').value= zeta;
document.getElementById('wn').value= wn;
document.getElementById('C').value= ceq;
  
  

 /*var i= document.getElementById("MASS(kg)").selectedIndex;
	  var M= parseFloat(document.getElementById("MASS(kg)").options[i].innerHTML);//value.innerHTML);
	  var mc = 0.866;
	  var TM =parseFloat(M+mc);// parseFloat(2.866);//+(M+mc).toFixed(2);
	  var c = parseFloat(4.782);//zeta value 0.05
	  var c2 =parseFloat(Math.pow(c,2));
	  var k = 798; var fk =parseFloat(1/k);
	  var zeta2 = parseFloat(c2/(4*TM*k));
	  var zeta = Math.sqrt(zeta2);
	  var keq = parseFloat(c2/(4*TM*zeta2));
	  var zetad = (1-zeta2);
	  var zetad2 = Math.sqrt(zetad);var fzeta= parseFloat(1/zetad2);
	  var zwn = parseFloat(c/(2*TM));
	  var wn1 = parseFloat(k/TM);
	  var wn2 = Math.sqrt(wn1);
	  var thetad = parseFloat(k*TM);
	  var roottheta = Math.sqrt(thetad);
	  var theta = parseFloat(c/(2*roottheta));
	  var thetaradian = parseFloat(Math.acos(theta)*Math.PI/180);
	  var wd = parseFloat(wn2 * zetad2);*/




}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	 
  /* ev.preventDefault();
 
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data)); */
  
  var _target = $("#" + ev.target.id);
  var data = ev.dataTransfer.getData("text");
  
  
  if(data == "drag1" && ev.target.id =="div1"){
	 ev.preventDefault(); 
	 ev.target.appendChild(document.getElementById(data));  
	  //green();
	document.getElementById("MASS(kg)").options[1].selected = 'selected';
     imchange();
	 document.getElementById('drag1').style.position = "absolute";
	 document.getElementById('drag1').style.left = 4 +"%";
	 document.getElementById('drag1').style.top = 0 +"%";
	  document.getElementById('drag1').style.width = 93 +"%";
	 document.getElementById('drag1').style.height = 100 +"%";
 } 
 
 
 
 else if( data == "drag2" && ev.target.id =="div2"){
	 ev.preventDefault(); 
	 ev.target.appendChild(document.getElementById(data));  
	 
	document.getElementById("MASS(kg)").options[2].selected = 'selected';
     imchange();
	 document.getElementById('drag2').style.position = "absolute";
	 document.getElementById('drag2').style.left = 4 +"%";
	 document.getElementById('drag2').style.top = 0 +"%";
	 document.getElementById('drag2').style.width = 93 +"%";
	 document.getElementById('drag2').style.height = 100 +"%";
 } 
 else if( data == "drag3" && ev.target.id =="div3"){
	 ev.preventDefault(); 
	 ev.target.appendChild(document.getElementById(data));  
	 
	document.getElementById("MASS(kg)").options[3].selected = 'selected';
     imchange();
	 document.getElementById('drag3').style.position = "absolute";
	 document.getElementById('drag3').style.left = 4 +"%";
	 document.getElementById('drag3').style.top = 0 +"%";
	 document.getElementById('drag3').style.width = 93 +"%";
	 document.getElementById('drag3').style.height = 100 +"%";
 }
 else if( data == "drag4" && ev.target.id =="div4"){
	 ev.preventDefault(); 
	 ev.target.appendChild(document.getElementById(data));  
	 
	document.getElementById("MASS(kg)").options[4].selected = 'selected';
     imchange();
	 document.getElementById('drag4').style.position = "absolute";
	 document.getElementById('drag4').style.left = 4 +"%";
	 document.getElementById('drag4').style.top = 0 +"%";
	 document.getElementById('drag4').style.width = 93 +"%";
	 document.getElementById('drag4').style.height = 100 +"%";
 }
 
 else if((data == "drag1" && ev.target.id !="div1") || (data == "drag2" && ev.target.id !="div2") || (data == "drag3" && ev.target.id !="div3") || (data == "drag4" && ev.target.id !="div4")){
	 ev.preventDefault(); 
	alert('Place weights properly');
 } 
 
}

function showweights(){
	//document.getElementById('weights').style.display="block";
	document.getElementById('div1').style.display="block";
	document.getElementById('div2').style.display="block";
	document.getElementById('div3').style.display="block";
	document.getElementById('div4').style.display="block";
	
}

function hideweights(){
	//document.getElementById('weights').style.display="none";
	document.getElementById('div1').style.display="none";
	document.getElementById('div2').style.display="none";
	document.getElementById('div3').style.display="none";
	document.getElementById('div4').style.display="none";
}
























































  