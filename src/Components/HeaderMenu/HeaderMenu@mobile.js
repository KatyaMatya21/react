import { HeaderMenu as HeaderMenuCommon } from './HeaderMenu'

export class HeaderMenu extends HeaderMenuCommon {
  attrs = () => {
    return {
      onClick: this.handleTouch
    }
  }
}
