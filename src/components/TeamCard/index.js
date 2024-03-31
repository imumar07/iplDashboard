import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  constructor(props) {
    super(props)
    const {details} = props
    this.state = {data: details}
  }

  render() {
    const {data} = this.state
    return (
      <Link to={`ipl/${data.id}`}>
        <li>
          <div className="team-card">
            <img
              src={data.teamImageUrl}
              alt={data.name}
              className="home-teamcard-img"
            />
            <p>{data.name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
