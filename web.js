
let consent=localStorage.getItem("consentCookie");
    const accept=document.querySelector(".Accepter");
    const cookie=document.querySelector(".cookie")
    console.log(accept);
    const deny=document.querySelector(".Refuser");
    console.log(deny);
console.log(consent);
if(consent==="true"||consent==="false") cookie.style.display="none";
else{
    
    accept.addEventListener("click",(event)=>{
        console.log("accepter");
        cookie.style.display="none";
        consent=true;
        console.log(consent);
        localStorage.setItem("consentCookie",consent); 
    })
    deny.addEventListener("click",(event)=>{
        console.log("refuser");
        cookie.style.display="none";
        consent=false;
        console.log(consent);
        localStorage.setItem("consentCookie",consent); 
        
    })
    console.log(consent);
}