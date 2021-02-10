import { allowedSocialIcons } from '../data/allowedSocialIoncs.js'; // importuojame leistinu reiksmiu sarasa

function rSocial(selector, data) {
    // input validation

    if (typeof selector !== 'string' ||             // tikriname ar duomenu tipas yra eilute 'string'
        selector === '') {                          // taip pat ar ta eilute nera tuscia
        console.error('ERROR: netinkamas selectoriaus parametras.');
        return false;
    }
    if (!Array.isArray(data) ||                     //tikriname ar duoti duomenys yra objektas 'object', array irgi yra object
        data.length === 0) {                        // tikriname ar duomenys nera tusti '{}, [], [{}]'
        console.error('ERROR: netinkamas data parametras.');
        return false;
    }

    // logic
    const DOM = document.querySelector(selector);   // inicijuojame konstanta DOM, kuri iesko HTML dokumente nurodyta objekta (pvz. .socials ir t.t.)

    if (!DOM) {                                     // tikriname ar yra toks objektas (selector) HTML (selector = class ar pan), jeigu neranda grazina NULL, NULL === !DOM
        console.error('ERROR: nepavyko rasti elemento pagal pateikta selectoriu.');
        return false;
    }

    let HTML = '';                                  // inicijuojame kintamaji 'HTML'

    for (let i = 0; i < data.length; i++) {         // ciklas for, skirtas is duotu duomenu eiti per sarasa ir isrinkti duomenys po viena objekta [{data[i]}, {data[i]}, {data[i]}]
        const item = data[i];                       // inicijuojame kintamaji kuriame saugosime ciklo metu isrinktus duomenis

           // duomenu objekto validacija
           if (typeof item !== 'object' ||          // tikriname ar duotame sarase 'array' yra objekto tipo duomenys {}, t. y -> [{object}, {object}]
           Array.isArray(item) ||                   // tikriname ar duoti duomenys nera tiesiog sarasa, t. y. -> array []
           !item.link ||                            // tikriname ar nurodytame objekte 'link' isvis egzistuoja
           typeof item.link !== 'string' ||         // tikriname ar objekte duomenys 'link' yra eilutes tipo 'string'
           !item.icon ||                            // tikriname ar nurodytame objekte 'icon' isvis egzistuoja
           typeof item.icon !== 'string' ||         // tikriname ar objekte duomenys 'icon' yra eilutes tipo 'string'
           !allowedSocialIcons.includes(item.icon)) {  // tikrina su sarase esanciais duomenimis, ar atitinka.. t. y. jeigu paraseme 'facebook', o jo sarase nera, jo nevykdo
           console.warn('WARNING: netinkamo formato objektas', item);
           continue;                                // jeigu nors viena is salygu tenkinama, neuzbaigia ciklo ir tesia toliau (nevykdo ciklo HTML +=....)
    }

        HTML += `<a href="${item.link}" target="_black" class="fa fa-${item.icon}" rel="noreferrer"></a>`;  // i HTML konstanta irasome visas nuorodas su kintamaisiais
    }

    //post logic validation

    if (HTML === '') {                                // tikriname prie ikeliant i DOM.innerHTML ar po ciklo elementas nera tuscias
        console.error('ERROR: tarp pateiktu duomenu nera nei tinkamos informacijos.');
        return false;
    }

    // return result
    DOM.innerHTML = HTML;                           // visus gautus duomenis irasome i HTML (perraso visus esamus, norint prideti prie jau esamu duomenu naudojame DOM.innerHTML += HTML )
}

export {rSocial};