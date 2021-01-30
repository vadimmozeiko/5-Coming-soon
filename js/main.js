import {sData} from './data/socialsData.js'
import {rSocial} from './components/renderSocials.js'
import {renderClock} from './components/renderClock.js'

rSocial('.socials', sData);
renderClock ('.clock', '01-04 14:00:00');