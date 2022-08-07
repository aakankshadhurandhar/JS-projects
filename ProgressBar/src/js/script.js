function progressBarScroll(){
    var scrollTop=document.documentElement.scrollTop
    var height=document.documentElement.scrollHeight - document.documentElement.clientHeight
    var width=(scrollTop/height)*100
    var elem=document.getElementById("progressbar")
    elem.style.width=width+"%"
    elem.innerHTML=Math.floor(width)
}
window.onscroll=function(){
    progressBarScroll()
}


