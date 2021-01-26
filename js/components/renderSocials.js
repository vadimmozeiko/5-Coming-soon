function rSocial(selector, data){
    let HTML = '';
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        HTML += `<a href="${item.link}" target="_black" class="fa fa-${item.icon}"></a>`

    }
    const DOM = document.querySelector(selector);
    DOM.innerHTML = HTML;
}


export {rSocial};