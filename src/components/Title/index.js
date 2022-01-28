import useStyles from './styles';

function Title({ title, subtitle, titleLink }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div className={classes.divTitle}>
          <h2 className={classes.title}>{title}</h2>
          {subtitle ? (
            <p className={classes.subtitle} as="p" style={{ color: 'rgb(179, 179, 179)' }}>
              {subtitle}
            </p>
          ) : (
            ''
          )}
        </div>
        <a to="/" className={`${classes.titleLink} ${classes.link}`}>
          <span className={classes.textLink}>{titleLink}</span>
        </a>
      </div>
    </div>
  );
}

export default Title;
