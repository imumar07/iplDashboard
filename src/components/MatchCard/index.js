import './index.css'

const MatchCard = props => {
  const {details} = props
  const {matchStatus} = details
  const styleColor = matchStatus === 'Won' ? 'green-style' : 'red-style'
  return (
    <li>
      <div className="Separate-match-result-card">
        <img
          src={details.competingTeamLogo}
          alt={`competing team ${details.competingTeam}`}
          className="Separate-match-result-card-img"
        />
        <p>{details.competingTeam}</p>

        <p>{details.result}</p>
        <p className={`${styleColor}`}>{details.matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard
