import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles(() => ({
  // Base Navbar
  root: {
    paddingLeft: 5,
    paddingRight: 5,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  logo: {
    cursor: 'pointer',
    width: 128,
    marginBottom: 18
  },
  navListButton: {
    flex: 1,
    marginTop: '24px',
    height: '100%',
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'normal',
    '-webkit-box-flex': 1,
    display: 'flex',
    '-ms-flex-direction': 'column',
    flexDirection: 'column',
    minHeight: 0
  },
  navButton: {
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    minHeight: 'max-content',
    padding: '8px var(--left-sidebar-padding-right) 8px var(--left-sidebar-padding-left)',
    '-webkit-transition': 'opacity .2s linear',
    transition: 'opacity .2s linear',
    width: '100%',
    opacity: 0.7,
    '&:hover': {
      color: '#FFF',
      opacity: 1
    },
    '&:focus': {
      color: '#FFF',
      opacity: 1
    }
  },
  navButtonImage: {
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    '-ms-flex-negative': 0,
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    height: '24px',
    justifyContent: 'center',
    padding: '4px',
    position: 'relative',
    width: '24px'
  },
  navButtonImageBox: {
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    alignItems: 'center',
    borderRadius: '1px',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  listLink: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: '#FFF'
    },
    '&:focus': {
      color: '#FFF'
    }
  },
  link: {
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    gap: '16px'
  },
  listItemText: {
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: 'normal',
    lineHeight: '16px',
    textTransform: 'none',
    marginTop: '4px'
  },
  navList: {
    backgroundColor: theme.palette.background.primary,
    padding: '16px 32px',
    paddingInlineEnd: '32px',
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    '-webkit-box-pack': 'justify',
    '-ms-flex-pack': 'justify',
    '-webkit-padding-end': '16px',
    alignItems: 'center',
    display: 'flex',
    height: '64px',
    justifyContent: 'space-between',
    maxWidth: 'calc(100vw - var(--nav-bar-width))',
    position: 'relative',
    width: '100%',
    zIndex: 3
  },
  navNextPrev: {
    display: 'flex'
  },
  navNextPrevButton: {
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.7)',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-flex',
    height: '32px',
    justifyContent: 'center',
    position: 'relative',
    width: '32px',
    marginRight: '16px'
  },
  navButtonBlack: {
    backgroundColor: 'transparent',
    color: '#FFF',
    border: '2px solid transparent',
    borderRadius: '500px',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '1.76px',
    lineHeight: '18px',
    padding: '8px 34px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition:
      'transform 33ms cubic-bezier(.3,0,0,1), -webkit-transform 33ms cubic-bezier(.3,0,0,1)',
    width: 'var(--size)',
    '&:focus': {
      '-webkit-transform': 'scale(1.06)',
      transform: 'scale(1.06)'
    },
    '&:hover': {
      '-webkit-transform': 'scale(1.06)',
      transform: 'scale(1.06)'
    }
  },
  navButtonWhite: {
    backgroundColor: '#FFF',
    color: '#181818',
    border: '2px solid transparent',
    borderRadius: '500px',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '1.76px',
    lineHeight: '18px',
    padding: '8px 34px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition:
      'transform 33ms cubic-bezier(.3,0,0,1), -webkit-transform 33ms cubic-bezier(.3,0,0,1)',
    width: 'var(--size)',
    '&:focus': {
      '-webkit-transform': 'scale(1.06)',
      transform: 'scale(1.06)'
    },
    '&:hover': {
      '-webkit-transform': 'scale(1.06)',
      transform: 'scale(1.06)'
    }
  }
}));

export default useStyles;
