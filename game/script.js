let x=document.getElementById("box1");
//by mouse entering numbers will be change!
x.addEventListener("mouseenter",function(){
   let r=Math.floor(Math.random()*10);
   x.innerHTML=`${r}`;
})
x.addEventListener("mouseleave",function(){
    x.style.backgroundColor="1";
 })
 //by mouse hovering colors will be change (only red or green)
 let y=document.getElementById("box3");
 let clr="green";
 y.addEventListener("mouseenter",function(){
 if(clr=="green")
 {
    y.style.backgroundColor="green";
    clr="red"; 
 }
 else
    {
        y.style.backgroundColor="red";
        clr="green";  
    }
})
//by mouse entering colors will be change!(any colors)
let z=document.getElementById("box2");
z.addEventListener("mouseenter",function(){
    let r1=Math.floor(Math.random()*285);
    let r2=Math.floor(Math.random()*285);
    let r3=Math.floor(Math.random()*285);
    z.style.backgroundColor=`rgb(${r1} ,${r2},${r3})`;    
})
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor="white";
 })
//by mouse clicking colors will be change rest of the boxes!
let b=document.getElementById("box4");
b.addEventListener("click",function(){
    x.style.backgroundColor="purple";
    y.style.backgroundColor="orange";
    z.style.backgroundColor="rgb(45 , 200 , 55)";    
})
b.addEventListener("mouseleave",function(){
    b.style.backgroundColor="white";
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    z.style.backgroundColor="white";
 })