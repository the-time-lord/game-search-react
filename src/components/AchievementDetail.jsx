import React from 'react';
import rawg from '../apis/rawg';
import AchievementList from './AchievementList';

class AchievementDetail extends React.Component {
  state = { achievements: [] }

  componentDidMount() {
    this.fetchAchievements();
  }

  fetchAchievements = async () => {
    const { match } = this.props;
    const response = await rawg.get(`/games/${match.params.id}/achievements`);

    this.setState({ 
      achievements: response.data.results
    });
  }

  render() {
    const { achievements } = this.state;

    return (
      <AchievementList
        achievements={achievements}
      />
    )
  }
}

export default AchievementDetail;