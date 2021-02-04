class ProgressBar {
    constructor (selector, data){
        this.selector = selector
        this.data = data

        this.DOM = document.querySelector(this.selector);
    }


    render() {
        this.DOM.innerHTML = 'Progress bar'
    }
}

export {ProgressBar}