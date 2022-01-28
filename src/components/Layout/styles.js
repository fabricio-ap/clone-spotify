import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    overflow: 'hidden'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 24,
    [theme.breakpoints.down('lg')]: {
      padding: 24
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto'
  },
  content: {
    flex: '1 1 auto',
    height: '100%'
  }
}));

export default useStyles;
