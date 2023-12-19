//navbar
login=document.getElementById("logbox")
function log(){
  login.style.display="block"
}
    // cancel button
    function cancel(){
        login.style.display='none';
    }


// carocel
arr=['https://wallpapercave.com/wp/wp11127527.jpg','https://wallpapercrafter.com/sizes/2560x1440/69057-fields-tree-plain-nature.jpg','https://previews.123rf.com/images/ivantsov/ivantsov1503/ivantsov150301698/37379993-beautiful-green-forest.jpg']
mainImg=document.getElementById('mainImg');
mainImg.border="1px solid black";
mainImg.style.height="500px";
mainImg.src=arr[0];
c=1
// dots
dot1=document.getElementById('dot1')
dot2=document.getElementById('dot2')
dot3=document.getElementById('dot3')

function carocel(){
    e=c++;
    if(e>=2){
        c=0
    }
    mainImg.src=arr[e];
if(e==0){
    dot1.style.color="black"
}
else{
    dot1.style.color="gray"
}
if(e==1){
    dot2.style.color="black"
}
else{
    dot2.style.color="gray"
}

if(e==2){
    dot3.style.color="black"
}
else{
    dot3.style.color="gray"
}
    }

setInterval(function(){
    carocel();
    
         
},4000);