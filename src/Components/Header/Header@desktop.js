import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { Header as HeaderCommon } from './Header';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu@desktop';

const cnHeader = cn('Header');
const cnHeaderMenu = cn('HeaderMenu');

const registry = new Registry({ id: cnHeader() });
registry.set(cnHeaderMenu(), HeaderMenu);

export const Header = withRegistry(registry)(HeaderCommon);
