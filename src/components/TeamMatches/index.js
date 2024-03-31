import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamSeparateData: {},
    spinner: true,
    matchCardsMatches: [],
    latest: {},
  }

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const data = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      .then(res => res.json())
      .then(res => res)

    const dataChanged = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const cardMatchesData = dataChanged.recentMatches.map(each => ({
      result: each.result,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
    }))

    const latestMatch = {
      competingTeam: dataChanged.latestMatchDetails.competing_team,
      competingTeamLogo: dataChanged.latestMatchDetails.competing_team_logo,
      date: dataChanged.latestMatchDetails.date,
      id: dataChanged.latestMatchDetails.id,
      firstInnings: dataChanged.latestMatchDetails.first_innings,
      manOfTheMatch: dataChanged.latestMatchDetails.man_of_the_match,
      result: dataChanged.latestMatchDetails.result,
      matchStatus: dataChanged.latestMatchDetails.match_status,
      secondInnings: dataChanged.latestMatchDetails.second_innings,
      umpires: dataChanged.latestMatchDetails.umpires,
      venue: dataChanged.latestMatchDetails.venue,
    }
    this.setState({
      teamSeparateData: dataChanged,
      spinner: false,
      matchCardsMatches: cardMatchesData,
      latest: latestMatch,
    })
  }

  render() {
    const {teamSeparateData, spinner, matchCardsMatches, latest} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    let bg = ''
    switch (id) {
      case 'RCB':
        bg = 'bg-RCB'
        break
      case 'KXP':
        bg = 'bg-KXP'
        break
      case 'KKR':
        bg = 'bg-KKR'
        break
      case 'CSK':
        bg = 'bg-CSK'
        break
      case 'SH':
        bg = 'bg-SRH'
        break
      case 'MI':
        bg = 'bg-MI'
        break
      case 'DC':
        bg = 'bg-MI'
        break
      case 'RR':
        bg = 'bg-RR'
        break
      default:
        bg = ''
    }

    return (
      <div className={`${bg} main-container-team-card`}>
        {spinner ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div>
              <img
                src={teamSeparateData.teamBannerUrl}
                alt="team banner"
                className="team-banner-image"
              />
              <div className="middle-card">
                <p className="latest-matches-p">Latest Matches</p>
                <LatestMatch details={latest} />
              </div>
              {matchCardsMatches.length > 0 && (
                <ul className="ul-container">
                  {matchCardsMatches.map(each => (
                    <MatchCard details={each} key={uuidv4()} />
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
