function counter (selector){
    const DOM = document.querySelector(selector);
    let number = parseFloat(DOM.innerText)
    
    const timer = setInterval ( function () {
        DOM.innerText = number;
        number--
       if (number < 0){
           clearInterval(timer)
       }
    },1000)

}

export {counter}