import { Toolbar } from '@mui/material';
import React from 'react';
import Navbar from '../Navbar';
import useStyles from './styles';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      {/* <head>
        <title>{title}</title>
        <link
          rel="icon"
          href="https://www.youtube.com/s/desktop/8a85ed3f/img/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        />
      </head> */}

      <div className={classes.root}>
        <Navbar />

        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <Toolbar />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
