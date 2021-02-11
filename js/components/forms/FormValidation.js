import {Validation} from './Validation.js'

class FormValidation {
    constructor() {
        this.forms = []
        this.snackbar = ''
        
        this.findSelectors()
        this.events()
    }

    findSelectors(){
        const forms = document.querySelectorAll('form')
        this.snackbar = document.getElementById('snackbar')
        this.forms = [...forms]
    

    }

    events() {
        for(const form of this.forms){
            const submitButton = form.querySelector('.button')
            const inputField = form.querySelectorAll('input')
            const textareaField = form.querySelectorAll('textarea')

            const allInputs = [...inputField, ...textareaField]

            

            submitButton.addEventListener('click', (event) => {
                event.preventDefault()
                
                for (const input of allInputs){
                    const rule = input.dataset.validation
                    const text = input.value

                    if (rule === 'name' && 
                        Validation.isValidName(text) !== true){
                        this.snackbar.className = "show"
                        this.snackbar.innerHTML = Validation.isValidName(text)
                        setTimeout(function(){this.snackbar.className = this.snackbar.className.replace("show", ""); }, 3000);
                        return false
                    } 
                        
                    if (rule === 'email' &&
                        Validation.isValidEmail(text) !== true){
                        this.snackbar.className = "show"
                        this.snackbar.innerHTML = Validation.isValidEmail(text)
                        setTimeout(function(){this.snackbar.className = this.snackbar.className.replace("show", ""); }, 3000);
                        return false
                    }

                    if (rule === 'text' &&
                        Validation.isValidText(text) !== true){
                        this.snackbar.className = "show"
                        this.snackbar.innerHTML = Validation.isValidText(text)
                        setTimeout(function(){this.snackbar.className = this.snackbar.className.replace("show", ""); }, 3000);
                        return false;
                        }  
                            
                    
                    if (Validation.isValidName() !== false &&
                        Validation.isValidEmail() !== false &&
                        Validation.isValidText() !== false){
                            this.snackbar.className = "success"
                            this.snackbar.innerHTML = 'Success!!!'
                            setTimeout(function(){this.snackbar.className = this.snackbar.className.replace("success", ""); }, 3000);
                        }
                }
            })
   
        }
    }




}

export{FormValidation}