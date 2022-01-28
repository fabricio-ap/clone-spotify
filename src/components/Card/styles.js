import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles(() => ({
  root: {
    '-webkit-box-flex': 1,
    background: theme.palette.background.secondary,
    borderRadius: '4px',
    '-ms-flex': 1,
    flex: 1,
    isolation: 'isolate',
    padding: '16px',
    position: 'relative',
    width: '100%',
    transition: 'background-color 0.3s ease',
    '-webkit-transition': 'background-color 0.3s ease',
    '&:hover': {
      background: '#282828'
    },
    '&:focus-within': {
      background: '#282828'
    },
    '& button': {
      position: 'relative',
      zIndex: 1
    },
    '&:hover .LunqxlFIupJw_Dkx6mNx': {
      opacity: 1,
      pointerEvents: 'auto',
      position: 'absolute'
    },
    '&:focus-within .LunqxlFIupJw_Dkx6mNx': {
      opacity: 1,
      pointerEvents: 'auto',
      position: 'absolute'
    }
  },
  container: {
    height: '100%'
  },
  cardImage: {
    marginBottom: '16px',
    position: 'relative'
  },
  boxImage: {
    backgroundColor: '#333',
    '-webkit-box-shadow': '0 8px 24px rgb(0 0 0 / 50%)',
    boxShadow: '0 8px 24px rgb(0 0 0 / 50%)',
    paddingBottom: '100%',
    position: 'relative',
    width: '100%'
  },
  image: {
    borderRadius: '2px',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  playButton: {
    right: '8px',
    borderRadius: '500px',
    bottom: '16px',
    '-webkit-box-shadow': '0 8px 8px rgb(0 0 0 / 30%)',
    boxShadow: '0 8px 8px rgb(0 0 0 / 30%)',
    opacity: 0,
    pointerEvents: 'none',
    position: 'absolute',
    '-webkit-transform': 'translateY(8px)',
    transform: 'translateY(8px)',
    '-webkit-transition': 'all .3s ease',
    transition: 'all .3s ease',
    zIndex: 2
  },
  button: {
    backgroundColor: '#1db954',
    color: '#FFF',
    '--size': '40px',
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    alignItems: 'center',
    border: 0,
    borderRadius: '500px',
    display: 'flex',
    fontSize: '8px',
    height: 'var(--size)',
    justifyContent: 'center',
    minWidth: 'var(--size)',
    padding: 0,
    position: 'relative',
    '-webkit-transition': '-webkit-transform 33ms cubic-bezier(.3,0,0,1)',
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
  cardTitle: {
    minHeight: '62px'
  },
  titleLink: {
    color: '#FFF',
    position: 'relative',
    zIndex: 1
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  titleText: {
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: 'normal',
    lineHeight: '24px',
    textTransform: 'none'
  },
  text: {
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    display: '-webkit-box',
    marginTop: '4px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'normal',
    lineHeight: '16px',
    textTransform: 'none',
    color: '#b3b3b3'
  },
  cardClickHandler: {
    position: 'absolute',
    zIndex: 0,
    bottom: 0,
    content: '""',
    cursor: 'pointer',
    left: 0,
    overflow: 'hidden',
    right: 0,
    textIndent: '100%',
    top: 0,
    whiteSpace: 'nowrap'
  }
}));

export default useStyles;
