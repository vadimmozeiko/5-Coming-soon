class FormValidation {
    constructor() {
        this.forms = []
        
        this.findSelectors()
        this.events()
    }

    findSelectors(){
        const forms = document.querySelectorAll('form')
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
                    console.log(input.value);
                }
            })
   
        }
    }




}

export{FormValidation}