class Validation {

    static isValidName(name) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(name)) {
            return 'Name field must not be empty';
        }

        // nei priekyje, nei gale nera tarpu
        if (!Validation.noSpacesAround(name)) {
            return 'Should be no spaces in front of the name';
        }

        // negali buti daugiau nei vienas zodis (nera tarpu)
        if (!Validation.isSingleWord(name)) {
            return 'Name should be one word';
        }

        // pirma raide didzioji
        if (!Validation.isFirstLetterUppercase(name)) {
            return 'Name first letter must be uppercase';
        }

        // visos likusios - tik mazosios
        if (!Validation.isLowercaseButFirst(name)) {
            return 'All remaining letters after first must be lowercase';
        }

        // sudarytas tik is raidziu (nekreipiant demesio i tikslias abeceles)
        if (!Validation.onlyAlphabetLetters(name)) {
            return 'Name field must contain only letters';
        }

        return true;
    }

    static isValidEmail(email) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(email)) {
            return 'Email field must not be empty';
        }

        // nei priekyje, nei gale nera tarpu
        if (!Validation.noSpacesAround(email)) {
            return 'Should be no spaces in front of the email';
        }

        // butinas ir tik vienas @ 
        if (!Validation.textContainsLetter(email, '@')) {
            return 'Email field must contain one @ symbol.';
        }

        const emailParts = email.split('@');
        // pries @ (lokali dalis) turi buti - ne tuscias tekstas
        // uztenka patikrinti, jog pirmas simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[0])) {
            return 'Local part of email must not be empty';
        }

        // uz @ (domeno dalis) turi buti - ne tuscias tekstas
        // uztenka patikrinti, jog paskutinis simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[1])) {
            return 'Domain part of email must not be empty';
        }
        return true;
    }

    static isValidText(text) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(text)) {
            return 'Message text should not be empty.';
        }

        return true;
    }

    static isNonEmptyText(text) {
        if (typeof text !== 'string' ||
            text === '') {
            return false;
        }
        return true;
    }

    static isSingleWord(text) {
        return !text.includes(' ');
    }

    static isFirstLetterUppercase(text) {
        return text[0] === text[0].toUpperCase();
    }

    static noSpacesAround(text) {
        return text === text.trim();
    }

    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }

    static textContainsLetter(text, letter, count = 1) {
        let letterCount = 0;
        for (let symbol of text) {
            if (symbol === letter) {
                letterCount++;
            }
        }

        // letterCount = text.split('').filter(symbol => symbol === letter).length;

        return letterCount === count;
    }

    static onlyAlphabetLetters(text) {
        const uppercase = text.toUpperCase();
        const lowercase = text.toLowerCase();
        const size = text.length;

        for (let i = 0; i < size; i++) {
            if (uppercase[i] === lowercase[i]) {
                return false;
            }
        }

        return true;
    }
}

export { Validation }