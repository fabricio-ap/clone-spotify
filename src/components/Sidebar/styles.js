import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: 232px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background[100]};
  z-index: 3;
`;

export const SidebarContainer = styled.div`
  display: flex;
  cursor: default;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  width: 100%;
  padding-top: 24px;
  user-select: none;
`;

export const SidebarLogo = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  justify-content: space-between;
`;

export const SidebarLogoLink = styled.a`
  cursor: pointer;
  border: 0;
  flex: 1;
  margin-bottom: 18px;
  padding: 0 24px;

  &.logo {
    color: ${({ theme }) => theme.colors.text[100]};
    position: relative;
  }

  .spotify-logo--text {
    height: 40px;
    max-width: 131px;
    width: 100%;
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
`;

export const SidebarListItem = styled.li`
  padding: 0 8px;
`;

export const SidebarListItemLink = styled.a`
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 16px;
  height: 40px;
  padding: 0 16px;

  &.link-subtle {
    color: ${({ theme }) => theme.colors.text[80]};
    transition-duration: 0.2s;
    transition-property: color;
    transition-timing-function: linear;

    &:hover {
      color: ${({ theme }) => theme.colors.text[100]};
    }
  }

  .link-icon {
    fill: currentcolor;
    flex-shrink: 0;
    height: 24px;
    width: 24px;
  }
`;

export const SidebarPlaylistBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  margin-top: 24px;
  position: relative;
`;

export const SidebarPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;
  height: 100%;
`;

export const SidebarPlaylistButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text[100]};
  cursor: pointer;
  display: flex;
  min-height: max-content;
  opacity: 0.7;
  transition: opacity 0.2s linear;
  width: 100%;
  padding: 8px 24px;

  &:hover {
    opacity: 1;
  }
`;

export const SidebarPlaylistButtonIcon = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 24px;
  justify-content: center;
  position: relative;
  width: 24px;
  margin-right: 16px;
`;

export const SidebarPlaylistButtonIconBackground = styled.div`
  align-items: center;
  background: ${({ theme, bg }) => bg || theme.colors.text[100]};
  border-radius: 1px;
  color: #000;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;

  .playlist-icon {
    height: 12px;
    width: 12px;
  }
`;

export const SidebarDividerContainer = styled.div`
  position: relative;
`;

export const SidebarDivider = styled.hr`
  background: ${({ theme }) => theme.colors.background[80]};
  border: none;
  height: 1px;
  margin: 8px 24px 0 24px;
  min-height: 1px;
`;

export const SidebarDividerBox = styled.div`
  background: ${({ theme }) => theme.colors.background[100]};
  bottom: -16px;
  height: 16px;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const SidebarPlaylistLinkContainer = styled.div`
  height: 100%;
  overscroll-behavior-y: contain;
  padding: 8px 0;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow: visible !important;
  position: relative;
`;

export const SidebarPlaylistLinkContainerBox = styled.div`
  bottom: 0;
  direction: inherit;
  height: auto !important;
  left: 0;
  margin: 0;
  overflow: visible;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto !important;
  z-index: 0;
`;

export const SidebarPlaylistLinkViewport = styled.div`
  transform: translateZ(0);
  bottom: 0;
  box-sizing: inherit !important;
  direction: inherit !important;
  left: 0;
  margin: 0;
  outline: none !important;
  padding: 0;
  position: absolute;
  resize: none !important;
  right: 0;
  top: 0;
`;

export const SidebarPlaylistLinkContent = styled.div`
  padding: 8px 0px;
  height: 100%;
  width: 100%;
  box-sizing: border-box !important;
  direction: inherit;
  display: block;
  height: 100%;
  position: relative;
  visibility: visible;
  width: 100%;

  .playlist-list {
    list-style: none;
  }
`;

export const SidebarPlaylistLinkItem = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

export const SidebarPlaylistLink = styled.div`
  color: #b3b3b3;
  cursor: default;
  align-items: center;
  border-bottom: none;
  display: flex;
  flex: 1;
  height: 32px;
  justify-content: flex-start;
  overflow: hidden;
  user-select: none;
  white-space: unset;
  word-break: break-all;
  text-overflow: ellipsis;
`;

export const SidebarFooter = styled.div`
  background: ${({ theme }) => theme.colors.background[100]};
  z-index: 1;
`;

export const SidebarFooterContainer = styled.div`
  padding: 0 8px;
  background: ${({ theme }) => theme.colors.background[100]};
`;

export const SidebarFooterButton = styled.a`
  color: ${({ theme }) => theme.colors.text[80]};
  padding-right: 20px;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  gap: 16px;
  height: 40px;
  padding: 0 16px;

  .footer-icon {
    height: 24px;
    width: 24px;
    fill: currentColor;
  }
`;
