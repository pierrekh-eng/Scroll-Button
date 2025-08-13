 let body = document.body;
 body.style.cssText = `
     background-color:aqua;
    height:2000px;

 `

let btn = document.createElement('button');
body.appendChild(btn);

let context = document.createTextNode('(↑)');
btn.appendChild(context);
btn.classList.toggle("hidden");


window.addEventListener('scroll',()=>{
    if(scrollY>=200){
        btn.classList.remove("hidden");
        btn.classList.add("visible");
    }
    else{
        btn.classList.remove("visible");
        btn.classList.add("hidden");
    }
});

btn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
