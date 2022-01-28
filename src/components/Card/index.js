import useStyles from './styles';

function Card({ cardImage, cardTitle, cardText }) {
  const classes = useStyles();
  return (
    <div className={`card ${classes.root}`}>
      <div className={classes.container} draggable="true">
        <div className={classes.cardImage}>
          <div className={classes.boxImage}>
            <img className={classes.image} src={cardImage} alt={cardTitle} />
          </div>
          <div className={`${classes.playButton} LunqxlFIupJw_Dkx6mNx`}>
            <button type="button" className={classes.button} style={{ '--size': '40px' }}>
              <svg height="16" role="img" width="16" viewBox="0 0 24 24" aria-hidden="true">
                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <a className={classes.titleLink} to="/">
            <div className={`${classes.title} ${classes.titleText}`}>{cardTitle}</div>
          </a>
          <div className={classes.text}>{cardText}</div>
        </div>
        <div className={classes.cardClickHandler} />
      </div>
    </div>
  );
}

export default Card;
