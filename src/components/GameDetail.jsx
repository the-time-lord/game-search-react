import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import rawg from '../apis/rawg';
import './GameDetail.scss';
import PlatformList from './PlatformList';
import AchievementList from './AchievementList';
import DetailSection from './DetailSection';
import InfoTable from './InfoTable';
import ScreenshotList from './ScreenshotList';

class GameDetail extends React.Component {
  state = { 
    game: {},
    achievements: [],
    additions: [],
    series: [],
    screenshots: []
  };

  componentDidMount() {
    this.fetchGame();
    this.fetchSeries();
    this.fetchData('achievements');
    this.fetchData('additions');
    this.fetchData('screenshots');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchGame();
      this.fetchSeries();
      this.fetchData('achievements');
      this.fetchData('additions');
      this.fetchData('screenshots');
    }
  }

  fetchData = async endPoint => {
    const { match } = this.props;
    const response = await rawg.get(`/games/${match.params.id}/${endPoint}`);

    this.setState({ 
      [endPoint]: response.data.results
    });
  }

  fetchGame = async () => {
    const { match } = this.props;
    const response = await rawg.get(`/games/${match.params.id}`);

    this.setState({ 
      game: response.data
    });
  }

  fetchSeries = async () => {
    const { match } = this.props;
    const response = await rawg.get(`/games/${match.params.id}/game-series`);

    this.setState({
      series: response.data.results
    })
  }

  render() {
    const background = {
      backgroundImage: `linear-gradient(to top, rgba(245,245,245,1), rgba(245,245, 245, .6)), url(${this.state.game.background_image})`,
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      width: "100%",
      height: "500px"
    }
    const { 
      background_image_additional, 
      description_raw, 
      developers, 
      genres, 
      id, 
      metacritic, 
      name,
      parent_achievements_count, 
      parent_platforms, 
      playtime, 
      publishers, 
      released, 
      tba, 
      website 
    } = this.state.game;
    const { achievements } = this.state;
    const { additions } = this.state;
    const { series } = this.state;
    const { screenshots } = this.state;

    return (
      <div className="detail__main-wrapper">
        <div style={background}></div>
        <div className="detail__wrapper">
          <div>
            <div className="detail__meta-head">
              <p className="detail__meta-date">
                {released ?
                  dayjs(`${released}`).format('DD MMM, YYYY') :
                  tba ? 'To be announced' : 'N/A'}
              </p>
              { parent_platforms && <PlatformList className="detail__meta-platforms" platforms={parent_platforms}/> }
              <p className="detail-meta-playtime">AVERAGE PLAYTIME: {playtime} HOURS</p>
            </div>
            <h1 className="detail-title">{name}</h1>
            <DetailSection 
              headingType="h2"
              heading="About"
              textType="p"
              text={description_raw}
              className="detail__about-heading"
            />
            <DetailSection
              headingType="h3"
              heading="Other games in the series:"
              textType="p"
              text={series && 
                      // series.map(game => game.name).join(', ')
                      series.map(game => 
                        <Link to={`/games/${game.id}`} key={game.id} className="detail__link">{game.name}</Link>
                      )
                    }
            />
            <DetailSection
              headingType="h3"
              heading="DLCs:"
              textType="p"
              text={additions && 
                      // additions.map(addon => addon.name).join(', ')
                      additions.map(addition =>
                        <Link to={`/games/${addition.id}`} key={addition.id} className="detail__link">{addition.name}</Link>
                      )
                    }
            />
            <DetailSection
              headingType="h3"
              heading="Website:"
              textType="a"
              text={website}
            />
          </div>
          <div className="detail__column2">
            <img className="detail__image" src={background_image_additional} alt="" />
            <ScreenshotList screenshots={screenshots.slice(0, 4)} />
            <InfoTable
              developers={developers}
              genres={genres} 
              metacritic={metacritic}
              publishers={publishers}
              platforms={parent_platforms}
              released={released}
              tba={tba} 
            />
            {achievements.length > 0 && 
              <div>
                <h3 className="detail__heading3">Achievements</h3>
                <AchievementList achievements={achievements.slice(0, 2)} />
                <Link to={`/games/${id}/achievements`}>
                  <div className="achievement--more">
                    <div className="achievement-icon icon-placeholder"><span className="placeholder__ellipsis">...</span></div>
                    <div className="achievement-detail">
                      <h4 className="achievement-text achievement-title">view all achievements</h4>
                      <p className="achievement-text">{parent_achievements_count} items</p>
                    </div>
                  </div>
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default GameDetail;