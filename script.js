// JavaScript Document

var screenObj=document.getElementById('screen');

function inputKey(num){
	
	if(bool){
		
		screenObj.value="";
		bool=false;
		
		}

	if(screenObj.value=="0"&& num!="."){
		screenObj.value=num;
	}
	else{
		if((screenObj.value.indexOf(".")==-1&&num==".")||num!=="."){
			screenObj.value=screenObj.value+num;
			}
			
		}

	}	 
	
	var beforeNum,afterNum,signGlobal,bool=false;
	function operatingFun(sign){
		if(signGlobal!=null){
			afterNum=screenObj.value;
			result();
		    afterNum=null;
			}
	
		beforeNum=screenObj.value;
		signGlobal=sign;
		bool=true;
		
		}
		
	function result(){
		if(afterNum==null){
		afterNum=screenObj.value;
		}
		  if(signGlobal=="+"){
			screenObj.value=Number(beforeNum)+Number(afterNum);
		
			}
	
		else if(signGlobal=="-"){
		    screenObj.value=Number(beforeNum)-Number(afterNum);
		
		}
		else if(signGlobal=="*"){
			screenObj.value=Number(beforeNum)*Number(afterNum);
		
			}
		else if(signGlobal=="/"){
			screenObj.value=Number(beforeNum)/Number(afterNum);
			
			}
		else if(signGlobal=="%"){
			screenObj.value=Number(beforeNum)%Number(afterNum);
		
			}
			beforeNum=screenObj.value;
			beforeNum=null;
	
	}
	function del(){
	
		screenObj.value=screenObj.value.slice(0,-1);
		
	}
	
	function clearFun(){
		screenObj.value="0";
		beforeNum=null;
		afterNum=null;
		signGlobal=null;
		}
		
	
	function sqr(){
		screenObj.value=Math.sqrt(screenObj.value);
		}
	
