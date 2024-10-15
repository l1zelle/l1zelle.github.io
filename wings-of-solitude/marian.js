function doSomething() {
    let text = document.querySelector("#text1"); 
    
    if (text.style.opacity === "0") {
        text.style.opacity = "1"; 
    } else {
        text.style.opacity = "0"; 
    }
}