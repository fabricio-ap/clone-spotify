import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    gridColumn: '1/-1'
  },
  box: {
    '-webkit-box-align': 'end',
    'align-items': 'flex-end',
    display: 'flex',
    marginBottom: '16px'
  },
  divTitle: {
    '-webkit-box-flex': 1,
    '-ms-flex-positive': 1,
    flexGrow: 1,
    minWidth: 0
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-.04em',
    lineHeight: '28px',
    textTransform: 'none'
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: 'normal',
    lineHeight: '16px',
    textTransform: 'none',
    margin: '8px 0'
  },
  link: {
    marginLeft: '8px'
  },
  titleLink: {
    background: 'transparent',
    color: '#b3b3b3',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    '&:hover': {
      color: '#b3b3b3',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  textLink: {
    fontSize: '12px',
    fontWeight: 400,
    letterSpacing: '.1em',
    lineHeight: '16px',
    textTransform: 'uppercase'
  }
}));

export default useStyles;
