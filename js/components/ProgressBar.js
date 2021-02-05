class ProgressBar {
    constructor (selector, data){
        this.selector = selector
        this.data = data

        this.DOM = null
        this.checkBefore()

    }


    checkBefore() {
        if (!this.validSelector() ||
            !this.validData()){
                return false;
            }

        this.render()
    }
    

    validSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '' ||
            typeof this.selector === 'number'){
            console.error('ERROR: Invalid selector.')
            return false
        }

        this.DOM = document.querySelector(this.selector)

         if (!this.DOM) {
            console.error ('ERROR: Selector was not found.')
            return false
        }

        return true;

    }


    validData() {
        if (!this.data || 
            typeof (this.data) !== 'object' ||
            !Array.isArray (this.data) ||
            this.data.length === 0){
            console.error ('ERROR: Invalid data format.', this.data)
            return false
        }

        return true
    }


    validSourceData(data){
        if (typeof data !== 'object' ||
            Array.isArray(data) ||
            data === null ||
            !data.name ||
            typeof data.name !== 'string' ||
            data.name.trim() === ''||
            !data.value ||
            typeof data.value !== 'number' ||
            !isFinite(data.value) ||
            data.value > 100 ||
            data.value < 0){
            console.error ('ERROR: Invalid source data structure', data)
            return false
        }

        return true
    }

    render() {
      
            for (let i = 0; i < this.data.length; i++){
                const data = this.data[i]
                if (!this.validSourceData(data)){
                    continue
                }
                 let HTML = `<div class="progress-bar">
                        <div class="bar-block">
                       <div class="name">${data.name}</div>
                        <div class="value">${Math.round(data.value)}%</div>
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