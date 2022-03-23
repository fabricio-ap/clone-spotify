import { ReactComponent as NewIcon } from 'assets/icons/add.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart-filled.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as LibraryIcon } from 'assets/icons/library.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as SpotifyLogo } from 'assets/image/logo/spotify-logo-white.svg';
import { Text } from 'components/Text';
import { theme } from 'theme';
import {
  SidebarContainer,
  SidebarDivider,
  SidebarDividerBox,
  SidebarDividerContainer,
  SidebarFooter,
  SidebarFooterButton,
  SidebarFooterContainer,
  SidebarList,
  SidebarListItem,
  SidebarListItemLink,
  SidebarLogo,
  SidebarLogoLink,
  SidebarPlaylistBox,
  SidebarPlaylistButton,
  SidebarPlaylistButtonIcon,
  SidebarPlaylistButtonIconBackground,
  SidebarPlaylistContainer,
  SidebarPlaylistLink,
  SidebarPlaylistLinkContainer,
  SidebarPlaylistLinkContainerBox,
  SidebarPlaylistLinkContent,
  SidebarPlaylistLinkItem,
  SidebarPlaylistLinkViewport,
  SidebarWrapper,
} from './styles';

const SIDEBAR_LIST = [
  { id: 0, text: 'Início', icon: <HomeIcon className='link-icon' /> },
  { id: 1, text: 'Buscar', icon: <SearchIcon className='link-icon' /> },
  {
    id: 2,
    text: 'Sua Biblioteca',
    icon: <LibraryIcon className='link-icon' />,
  },
];

const PLAYLIST_BUTTON = [
  {
    id: 0,
    text: 'Criar playlist',
    icon: <NewIcon className='playlist-icon' />,
  },
  {
    id: 1,
    text: 'Músicas curtidas',
    icon: <HeartIcon className='playlist-icon' fill={theme.colors.text[100]} />,
  },
];

const PLAYLIST_LINK = [
  { id: 0, text: 'Playlist 1' },
  { id: 1, text: 'Playlist 2' },
];

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarContainer>
        <SidebarLogo>
          <SidebarLogoLink className='logo'>
            <SpotifyLogo className='spotify-logo--text' />
          </SidebarLogoLink>
        </SidebarLogo>

        <SidebarList>
          {SIDEBAR_LIST.map((item) => (
            <SidebarListItem key={item.id}>
              <SidebarListItemLink className='link-subtle'>
                {item.icon}
                <Text size={14} lh={14} weight='700'>
                  {item.text}
                </Text>
              </SidebarListItemLink>
            </SidebarListItem>
          ))}
        </SidebarList>

        <SidebarPlaylistBox>
          <SidebarPlaylistContainer>
            {PLAYLIST_BUTTON.map((item) => (
              <div key={item.id}>
                <SidebarPlaylistButton>
                  <SidebarPlaylistButtonIcon>
                    <SidebarPlaylistButtonIconBackground
                      bg={
                        item.id == 1
                          ? 'linear-gradient(135deg,#450af5,#c4efd9);'
                          : ''
                      }
                    >
                      {item.icon}
                    </SidebarPlaylistButtonIconBackground>
                  </SidebarPlaylistButtonIcon>
                  <Text size={14} lh={14} weight='500'>
                    {item.text}
                  </Text>
                </SidebarPlaylistButton>
              </div>
            ))}

            {PLAYLIST_LINK.length != 0 ? (
              <>
                <SidebarDividerContainer>
                  <SidebarDivider />
                  <SidebarDividerBox />
                </SidebarDividerContainer>

                <SidebarPlaylistLinkContainer>
                  <SidebarPlaylistLinkContainerBox>
                    <SidebarPlaylistLinkViewport>
                      <SidebarPlaylistLinkContent>
                        <ul className='playlist-list'>
                          {PLAYLIST_LINK.map((item) => (
                            <li key={item.id}>
                              <SidebarPlaylistLinkItem>
                                <SidebarPlaylistLink>
                                  <Text size={14} lh={32} weight='400'>
                                    {item.text}
                                  </Text>
                                </SidebarPlaylistLink>
                              </SidebarPlaylistLinkItem>
                            </li>
                          ))}
                        </ul>
                      </SidebarPlaylistLinkContent>
                    </SidebarPlaylistLinkViewport>
                  </SidebarPlaylistLinkContainerBox>
                </SidebarPlaylistLinkContainer>
              </>
            ) : (
              <></>
            )}
          </SidebarPlaylistContainer>
        </SidebarPlaylistBox>

        <SidebarFooter>
          <SidebarFooterContainer>
            <SidebarFooterButton>
              <DownloadIcon className='footer-icon' />
              <Text size={14} lh={14} weight='700'>
                Instalar aplicativo
              </Text>
            </SidebarFooterButton>
          </SidebarFooterContainer>
        </SidebarFooter>
      </SidebarContainer>
    </SidebarWrapper>
  );
};
