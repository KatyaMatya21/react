import { compose } from '@bem-react/core';
import Base from './Button';
import ButtonYellow from './Button_color_yellow';
import ButtonGray from './Button_color_gray';

export default compose(ButtonYellow, ButtonGray)(Base);
