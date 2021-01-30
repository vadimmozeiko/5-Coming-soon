function renderClock(selector, deadline) {                  // sukuriame funkcija kuri generuoja laikrodi su dviem parametrais, vieta HTML (selector) ir data (deadline)
    // input validation
    if (typeof selector !== 'string' ||                     // tikriname ar selector yra eilute (string) ir ar ji yra nera tuscia
        selector === '') {
        console.error('ERROR: netinkamo formato selectorius.'); // jeigu bent viena salyga tenkina, ismeta klaida
        return false;                                           // ir grazina false
    }
    if (typeof deadline !== 'string' ||                     // tikriname ar deadline yra eilute (string) ir ar ji yra nera tuscia
        deadline === '' ||
        !isFinite((new Date(`2000-${deadline}`)).getTime())) {  // tikriname ar nurodyta data nera NaN (!isFinite), jeigu irasome deadline 'asdsad' ar pan ismeta NaN
        console.error('ERROR: netinkamo formato deadline reiksme.'); // jeigu bent viena salyga tenkina, ismeta klaida
        return false;                                                // ir grazina false
    }

    // logic
    const clockDOM = document.querySelector(selector);                  // sukuriame konstanta ir priskiriame reiksme nurodydami paieska HTML nurodyto element (selector)
    if (!clockDOM) {                                                    // jeigu tokio elemento (selector) nera HTML, tokiu atveju yra clockDOM = null => !clockDOM
        console.error('ERROR: pagal pateikta selectoriu nepavyko rasti norimo DOM elemento.'); // jeigu elemento (selector) rasti nepavyko, ismeta klaida
        return false;                                                                          // ir grazina false
    }

    let allNumberDOM = null;                                            // sukuriame kintamaji kuriame saugosime visas nuorodas i 'number' klases elementus (class='number')
    let numbers = calcTime(deadline);                                   // sukuriame kintamaji ir priskiriame funkcija kuri skaiciuoja laika ir grazina sarasa array [d,h,m,s]
    const labels = ['days', 'hours', 'minutes', 'seconds'];             // sukuriame konstanta kurioje surasome pavadinumus kurie bus naudojami HTML kaip tekstas po skaiciais
    let HTML = '';                                                      // sukuriame globalu kintamaji kuriame saugosime rezultata HTML kodo pavidalu

    for (let i = 0; i < 4; i++) {                                       // inicijuojame cikla, kuris suksis 4 kartus ir suformuos 4 kodo blokus
        HTML += `<div class="clock-box">
                    <div class="number">${numberFormat(numbers[i])}</div>
                    <div class="number-subtitle">${labels[i]}</div>
                </div>`;
    }

    clockDOM.innerHTML = HTML;                                          // kintamajam priskiriame suformuota HTML kodo bloka
    allNumberDOM = document.querySelectorAll(`${selector} .number`);    // surandame visus selector elemente ${selector} = .clock, esancius number elementus (.number)

    setInterval(function () {                                           // paleidziame intervala, kuris vykdys bevarde funkcija (funkction())
        numbers = calcTime(deadline);                                   // kintamojo reikme lygi funkcijos calcTime() paskaiciuotas rezultatas
        for (let i = 0; i < 4; i++) {                                   // ciklas kuris sukasi 4 kartus
            allNumberDOM[i].innerText = numberFormat(numbers[i]);       // i kiekviena surasta .clock -> .number pagal indeksa i [0,1,2,3] elementa priskiria gauta reiksme numbers
        }
    }, 1000);                                                           // intervalas uzlaiko funkcija 1s ir paskuj vykdo funkcija
}

function numberFormat(number) {                                         // inicijuojame funkcija su vienu kintamuoju
    if (number < 10) {                                                  // tikriname ar funckcijos gauta reiksme yra maziau uz 10
        return '0' + number;                                            // jeigu taip, tuomet pridedame 0, t.y. 9 -> 09
    }
    return number;                                                      // funkcija grazina number reiksme
}

function calcTime(deadline) {                                              // sukuriame funkcija kuri skaiciuoja laika su vienu parametru deadline
    const date = new Date();                                               // sukuriame konstanta kuriai priskiriame dabartine data skirta patikrinti ar deadline yra praeityje
    const now = Date.now();                                                // sukuriame konstanta kuriai priskiriame laika milisekundemis nuo 1970 sausio 1 d 00:00:00
    let year = date.getFullYear();                                         // sukuriame konstanta ir priskiriame esamus metus, istraukus is esamos datos
    let fullDeadline = `${year}-${deadline}`;                              // sukuriame konstanta kuri formuoja pilna data, t.y. dabartinius metus + nurodyta deadline (2021(year)-01-04(deadline))
    let fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();    // sukuriame konstanta kuriai priskiriame laika milisekundemis kuris praejo nuo 1970-01-01 iki deadline (2021-01-04)

    if (fullDeadlineInMiliseconds < now) {                                  // tikriname ar nurodyta data (deadline) yra praeityje, t.y. ar deadline (milisec) < now (milisec)
        year++;                                                             // jeigu taip, pridedame plius vienus metus t.y. 2021 + 1
        fullDeadline = `${year}-${deadline}`;                               // ir formuojame kintamaji fullDeadline is naujo, nes metai pasikeite 2022-01-04
        fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();     // pasiketus metams priskiriame nauja reiksme milisekundemis 
    }

    const diff = fullDeadlineInMiliseconds - now;                           // sukuriame konstanta ir priskiriame reiksme kuri yra skirtumas tarp busimos datos (milisec) ir dabar (milisec)
    const seconds = Math.round(diff / 1000);                                // noredami suzinoti kiek liko sekundziu iki busimos datos (deadline), apskaiciuota skirtuma daliname is 1000
                                                                            // t.y. milisekundes paverciame i sekundes (ms => s)
    const days = Math.floor(seconds / 60 / 60 / 24);                        // sukuriame konstanta kuri sekundes pavercia i dienas (apvalina i zemesne daly (340.9 => 340))
    let unusedSeconds = seconds - days * 60 * 60 * 24;                      // sukuriame konstanta kuri apskaciuoja likusias sekundes atemus sveika dienu skaiciu, pvz. secounds(340.9) - days (340.0)

    const hours = Math.floor(unusedSeconds / 60 / 60);                      // sukuriame konstanta kuri nepanaudotas sekundes (secounds(340.9) - days (340.0)) pavercia 0.9 valandomis
    unusedSeconds -= hours * 60 * 60;                                       // is nepaudotu sekundziu atimame dali kuria rodome kaip valandas, pvz, hours = 0.5 (0.9(sekundes)-0.5(valandos))

    const minutes = Math.floor(unusedSeconds / 60);                         // sukuriame konstanta kuri likusias nepanaudotas sekundes pavercia minutemis 
    unusedSeconds -= minutes * 60;                                          // is bendru likusiu nepadaudotu sekundziu atimame dali (sekundemis) kuria rodome kaip minutes, pvz (0.9(sekundes)-0.5(valados)-0.4(minutes))

    return [days, hours, minutes, unusedSeconds];                           // graziname jau paskaiciuotas reikmes i sarasa kuri naudojame for cikle istatydami reikmes i HTML
}

export { renderClock }                                                      // eksportuojame funkcija, kad galetume naudoti kitur, pvz. main.js faile