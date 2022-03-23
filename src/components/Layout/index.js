import { Sidebar } from 'components/Sidebar';
import { Topbar } from 'components/Topbar';
import { LayoutContainer } from './styles';

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar className='nav-bar' />
      <Topbar className='top-bar' />
      <div className='now-playing-bar'></div>
      <div className='main-view'>{children}</div>
    </LayoutContainer>
  );
};
