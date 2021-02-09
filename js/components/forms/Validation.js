class Validation {

        static isValidName(name) {
            console.log(typeof name);
            if (typeof name !== 'string' ||
                name === '' ) {
                    return 'Field is empty or invalid format'
                   
                    
                }
        }



        static isValidEmail(email) {
            
        }

}



export {Validation}