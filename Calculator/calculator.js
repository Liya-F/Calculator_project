
     function display(value){
         document.getElementById("screen").value += value;
      }  
    
     function calculate(){
      try{
        let result = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = result;
      }catch(e){
         if(e instanceof SyntaxError){
            document.getElementById("screen").value = "Error";
         }
      }
   }

     function back(){
        document.getElementById("screen").value = document.getElementById("screen").value.slice(0,-1);
     }

     function styleChange(){
        if(document.getElementById("table").style.backgroundColor==="black"){
            document.getElementById("table").style.backgroundColor="white"; 
        }else{
        document.getElementById("table").style.backgroundColor="black";
        document.getElementsByClassName("buttonum").style.backgroundColor="pink";

        }
     }
