import './index.css'

import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
Wordpress2016.headerFontFamily = ['"Helvetica Neue","Helvetica",Aria,PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;']
Wordpress2016.overrideThemeStyles = () => {
  return {
    "body": {
      fontFamily: '"Helvetica Neue","Helvetica",Aria,PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;',
      background: 'var(--bg)',
      color: 'var(--textNormal)',
      fontSize: '16px',
      lineHeight: '1.42',
    },
    "a": {
      color: 'var(--textLink)',
      boxShadow: `none`,
    },
    "a:hover": {
      textDecoration: 'underline',
    },
  }
}

delete Wordpress2016.googleFonts
//delete Wordpress2016.headerFontFamily
delete Wordpress2016.bodyFontFamily

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
