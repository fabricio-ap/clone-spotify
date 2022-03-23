import { Sidebar } from 'components/Sidebar';
import { LayoutContainer } from './styles';

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar className='nav-bar' />
      {children}
    </LayoutContainer>
  );
};
