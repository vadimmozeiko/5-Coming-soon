class ProgressBar {
    constructor (selector, data){
        this.selector = selector
        this.data = data

        this.DOM = document.querySelector(this.selector)
    }


    render() {
        if (typeof this.selector !== 'string' ||
        this.selector === ''){
           console.error('ERROR: Selector was not found.')
           return false
        }
         if (!this.DOM) {
             console.error ('ERROR: Selector was not found.')
             return false
        }
            for (let i = 0; i < this.data.length; i++){
                 let HTML = `<div class="progress-bar">
                        PROGRESS BAR </div>`
             this.DOM.innerHTML += HTML
            }
            
    }
}

export {ProgressBar}