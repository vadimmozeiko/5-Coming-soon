function renderClock(selector, data){
    const DOM = document.querySelector(selector);
    let HTML = '';

    
    for (let i = 0; i < 4; i++){
        const item = data[i];
            // data validation

        if (item.digit < 0 ){
            console.warn ('ERROR: yoo bro go and fix that number', item.digit);
            
        };

        if (item.name === ''){
            console.warn ('ERROR: you probably want to write something here..', item.name);
        };


        HTML += `<div class="clock-box">
                    <div class="number">${item.digit}</div>
                    <div class="number-subtitle">${item.name}</div>
                </div>`;
    }

    DOM.innerHTML = HTML;

}

export {renderClock};