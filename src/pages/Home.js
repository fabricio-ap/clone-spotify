import foco1 from '../assets/image/playlist/foco/foco-1.jfif';
import foco2 from '../assets/image/playlist/foco/foco-2.jfif';
import foco3 from '../assets/image/playlist/foco/foco-3.jfif';
import foco4 from '../assets/image/playlist/foco/foco-4.jfif';
import foco5 from '../assets/image/playlist/foco/foco-5.jfif';
import foco6 from '../assets/image/playlist/foco/foco-6.jfif';
import trends1 from '../assets/image/playlist/trends/trends-1.jpg';
import trends2 from '../assets/image/playlist/trends/trends-2.jpg';
import trends3 from '../assets/image/playlist/trends/trends-3.jfif';
import Card from '../components/Card';
import Title from '../components/Title';
import useStyles from './styles';

const primaryPlaylists = [
  {
    id: 1,
    title: 'Top 50 - Brasil',
    text: 'Brasil: seu relatório diário das faixas mais tocadas no momento.',
    image: trends1
  },
  {
    id: 2,
    title: 'Top 50 - Mundo',
    text: 'Mundo: seu relatório diário das faixas mais tocadas no momento.',
    image: trends2
  },
  {
    id: 3,
    title: 'Top Brasil',
    text: 'Chefin Oficial e os maiores hits do país. O que tá bombando tá aqui.',
    image: trends3
  }
];
const secondaryPlaylists = [
  {
    id: 1,
    title: 'Foco com Energia',
    text: 'Beats instrumentais para te ajudar a focar mantendo o ânimo.',
    image: foco1
  },
  {
    id: 2,
    title: 'Foco no Estudo',
    text: 'Piano instrumental para ajudar sua concentração na hora de ler e estudar.',
    image: foco2
  },
  {
    id: 3,
    title: 'Concentração Perfeita',
    text: 'Concentração no máximo, sem distrações.',
    image: foco3
  },
  {
    id: 4,
    title: 'Trabalhando de Casa',
    text: 'Uma seleção de hits pra te acompanhar no home office.',
    image: foco4
  },
  {
    id: 5,
    title: 'Lofi Beats',
    text: 'A new year ahead with beats to chill, relax, study, and focus... ',
    image: foco5
  },
  {
    id: 6,
    title: 'Peaceful Piano',
    text: 'Relax and indulge with beautiful piano pieces',
    image: foco6
  }
];

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <section className={classes.section}>
        <Title title="Paradas" titleLink="Ver Tudo" />
        <div
          className={`${classes.gridContainer} ${classes.grid}`}
          style={{ '--minimumColumnWidth': '180px' }}
        >
          {primaryPlaylists.map((content) => (
            <Card
              key={content.id}
              cardImage={content.image}
              cardTitle={content.title}
              cardText={content.text}
            />
          ))}
        </div>
      </section>

      <section className={classes.section}>
        <Title title="Foco" subtitle="Música para ajudar na concentração" titleLink="Ver Tudo" />
        <div
          className={`${classes.grid} ${classes.gridContainer}`}
          style={{ '--minimumColumnWidth': '180px' }}
        >
          {secondaryPlaylists.map((content) => (
            <Card
              key={content.id}
              cardImage={content.image}
              cardTitle={content.title}
              cardText={content.text}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
