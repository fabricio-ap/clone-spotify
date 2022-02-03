import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  main: {
    gridGap: '24px',
    display: 'grid',
    margin: 0,
    maxWidth: '1955px',
    '@media (min-width: 1024px)': {
      padding: '0 32px'
    }
  },
  section: {
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'normal',
    display: 'flex',
    '-ms-flex-direction': 'column',
    flexDirection: 'column',
    marginBottom: '16px',
    minHeight: '300px',
    minWidth: '100%',
    position: 'relative'
  },
  grid: {
    gridAutoRows: '0',
    gridTemplateRows: '1fr',
    overflowY: 'hidden',
    '& .BtbiwMynlB4flsYu_hA2': {
      gridAutoRows: 'auto'
    }
  },
  gridContainer: {
    gridGap: '24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(var(--minimumColumnWidth), 1fr))'
  }
}));

export default useStyles;
