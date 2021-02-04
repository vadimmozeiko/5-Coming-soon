import {renderClock} from './components/renderClock.js'
import {progressBarData} from './data/progressBarData.js'
import {ProgressBar} from './components/ProgressBar.js'
import {sData} from './data/socialsData.js'
import {rSocial} from './components/renderSocials.js'

rSocial('.socials', sData);
renderClock ('.clock', '01-04 14:00:00');

const bar = new ProgressBar ('.left-column', progressBarData)

bar.render()