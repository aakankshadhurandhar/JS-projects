var flag=true;
function move(){
    if(flag){
        flag=false
        var width=10;
        var elem=document.getElementById("progressbar") 
        var progress=setInterval(frame,10)
        function frame(){
            if(width>=100){
                clearInterval(progress)
                flag=true
            }
            else{
                width++
                elem.style.width=width+"%"
                elem.innerHTML=width+"%"
            }
        }
    }
}
