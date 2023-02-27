import icon from '../images/icon.svg'
import Nginx from '../images/Nginx.svg'
import nodejs from '../images/nodejs.svg'
import reactIcon from '../images/react-icon.svg'
import Redux from '../images/Redux.svg'
import Typescript from '../images/Typescript.svg'
import Webpack from '../images/Webpack.svg'
import webstorm from '../images/webstorm.svg'

const svgs = [ webstorm, Webpack, icon, Nginx, nodejs, reactIcon, Redux, Typescript ]

export const cardsData = [...svgs, ...svgs]
  .sort(() => Math.random() > 0.5 ? 1 : -1)
  .map((img, index) => ({id: index, image: img}))