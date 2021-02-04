class ProgressBar {
    constructor (selector, data){
        this.selector = selector
        this.data = data

        this.DOM = document.querySelector(this.selector)

        this.initialise()
    }
    

    initialise() {
        if (typeof this.selector !== 'string' ||
            this.selector === ''){
            console.error('ERROR: Selector was not found.')
            return false
        }
         if (!this.DOM) {
            console.error ('ERROR: Selector was not found.')
            return false
        }

        if (!this.data || typeof (this.data) !== 'object'){
            console.error ('ERROR: Data object was not found.')
            return false
        }
        
        this.render()
    }

    render() {
      
            for (let i = 0; i < this.data.length; i++){
                const data = this.data[i]
                 let HTML = `<div class="progress-bar">
                        <div class="bar-block">
                       <div class="name">${data.name}</div>
                        <div class="value">${data.value}%</div>
                        </div>
                        <div class="bar">
                        <div class="bar-line" style="width: ${data.value}%;">
                        <div class="bar-overlay"></div> 
                        </div> 
                        </div>`
             this.DOM.innerHTML += HTML
            }
            
    }
}

export {ProgressBar}