import {sData} from './data/socialsData.js'
import {rSocial} from './components/renderSocials.js'
import {clockData} from './data/clockData.js'
import {renderClock} from './components/renderClock.js'

rSocial('.socials', sData);
renderClock ('.clock', clockData);