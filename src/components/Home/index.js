import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: [], spinner: true}

  componentDidMount = async () => {
    const data = await fetch('https://apis.ccbp.in/ipl')
      .then(res => res.json())
      .then(ret => ret.teams)
    const returnData = data.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: returnData, spinner: false})
  }

  render() {
    const {spinner, teamsData} = this.state

    return (
      <div className="main-container-home">
        <div className="dashboard-heading-home">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="img-logo-ipl"
          />
          <h1 className="ipl-dashboard-heading-home">IPL Dashboard</h1>
        </div>
        <div>
          {spinner ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="main-content-home">
              {teamsData.map(each => (
                <TeamCard key={each.id} details={each} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
