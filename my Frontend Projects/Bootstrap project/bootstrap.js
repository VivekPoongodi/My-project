const { read } = require("@popperjs/core");

function load(){
    img=document.createElement('Image')
    img.src='https://www.essaarmotors.com/images/loader3.gif'
    document.getElementById('body').appendChild(img);
}

function animal(){
animate=document.getElementsByClassName('bike')
animate[0].style.transition='2s';
}

function img1(){
    //price
    price=document.getElementById('price')
    price.innerHTML='Royal Enfield Bullet 350CC';
    price.style.color='red'
 //background
    color=document.getElementById('color')
    color.style.color='black'
    color.style.position='absolute'
    color.style.border='2px solid black'
    color.style.background='black'
 // details
 bname=document.getElementById('name')
 bname.innerHTML='Price Start From'+' '+'₹ 1,53,562*'+'<br>'+'Colour: Black Gold';
 bname.style.color="red"
    image1=document.getElementById('bullet')
    image1.src='https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/stealth-black/stealth_black_000.webp'
   
}

function img2(){
    
    price=document.getElementById('price')
    price.innerHTML='Royal Enfield Bullet 360CC';
    price.style.color='red'
 
    color=document.getElementById('color')
    color.style.color='black'
    color.style.position='absolute'
    color.style.border='2px solid black'
    color.style.background='black'
 // name
 bname=document.getElementById('name')
 bname.innerHTML='Price Start From'+' '+'₹ 1,33,562*'+'<br>'+'Colour: Standard Black';
 bname.style.color="red"
    image2=document.getElementById('bullet')
    image2.src='https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/halycon-black/halycon_black_001.webp'
    image2.style.transition='2'
    
}
function img3(){
   price=document.getElementById('price')
   price.innerHTML='Royal Enfield Bullet 370CC';
   price.style.color='red'

   color=document.getElementById('color')
   color.style.color='black'
   color.style.position='absolute'
   color.style.border='2px solid black'
   color.style.background='black'
// name
bname=document.getElementById('name')
bname.innerHTML='Price Start From'+' '+'₹ 1,83,562*'+'<br>'+'Colour: Standatrd Maroon';
bname.style.color="red"
    image3=document.getElementById('bullet')
    image3.src='https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/stellar-red/steller_red_000.webp';
   
}

function img4(){
    //
    price=document.getElementById('price')
    price.innerHTML='Royal Enfield Bullet 380CC';
    price.style.color='red'
 //background
    color=document.getElementById('color')
    color.style.color='black'
    color.style.position='absolute'
    color.style.border='2px solid black'
    color.style.background='black'
 // details
 bname=document.getElementById('name')
 bname.innerHTML='Price Start From'+' '+'₹ 1,93,562*'+'<br>'+'Colour: Military Black';
 bname.style.color="red"

    image4=document.getElementById('bullet')
    image4.src='https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/jet-black/jet_black_001.webp';
   
}

function img5(){
    //name
     price=document.getElementById('price')
   price.innerHTML='Royal Enfield Bullet 390CC';
   price.style.color='red'
// background
   color=document.getElementById('color')
   color.style.color='black'
   color.style.position='absolute'
   color.style.border='2px solid black'
   color.style.background='black'
// details
bname=document.getElementById('name')
bname.innerHTML='Price Start From'+' '+'₹ 1,53,562*'+'<br>'+'Colour: Military Black';
bname.style.color="red"

    image5=document.getElementById('bullet')
    image5.src='https://www.royalenfield.com/content/dam/royal-enfield/bullet/colours/gt-red/gt_red_001.webp';
    
}

// button hover


