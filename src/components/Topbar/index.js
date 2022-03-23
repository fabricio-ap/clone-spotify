import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { ReactComponent as NextPageIcon } from 'assets/icons/next-page.svg';
import { ReactComponent as PrevPageIcon } from 'assets/icons/prev-page.svg';
import { Text } from 'components/Text';
import { theme } from 'theme';
import {
  NavigationButton,
  NavigationButtonContainer,
  TopbarBackground,
  TopbarContainer,
  TopbarWrapper,
  UserButtonContainer,
  UserButtonIconBox,
  UserButtonImage,
  UserButtonImageBox,
} from './styles';

export const Topbar = () => {
  return (
    <TopbarWrapper>
      <TopbarContainer>
        <TopbarBackground />
        <NavigationButtonContainer>
          <NavigationButton>
            <PrevPageIcon />
          </NavigationButton>
          <NavigationButton>
            <NextPageIcon />
          </NavigationButton>
        </NavigationButtonContainer>

        <UserButtonContainer>
          <UserButtonImageBox>
            <UserButtonImage
              aria-hidden='false'
              draggable='false'
              loading='eager'
              src='https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2891635484295548&amp;height=300&amp;width=300&amp;ext=1650620242&amp;hash=AeSzC9KwdOukZ4kMqVA'
              alt='Fabrício Araujo'
              className='mMx2LUixlnN_Fu45JpFB zG1A4D_KmJ5_9XpcNKJ7'
            />
          </UserButtonImageBox>
          <Text size={14} lh={14} weight='700'>
            Fabrício Araújo
          </Text>
          <UserButtonIconBox>
            <DownIcon fill={theme.colors.text[100]} />
          </UserButtonIconBox>
        </UserButtonContainer>
      </TopbarContainer>
    </TopbarWrapper>
  );
};
