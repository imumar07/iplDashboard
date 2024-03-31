import './index.css'

const LatestMatch = props => {
  const {details} = props
  console.log(details)
  return (
    <div className="lastest-match-middle-container">
      <div className="left-middle">
        <p>{details.competingTeam}</p>
        <p>{details.date}</p>
        <p className="p-content">{details.venue}</p>
        <p className="p-content">{details.result}</p>
      </div>
      <div>
        <img
          src={details.competingTeamLogo}
          alt={`latest team ${details.competingTeam}`}
          className="img-content"
        />
      </div>
      <div className="right-middle">
        <p>First Innings</p>
        <p>{details.firstInnings}</p>
        <p>Second Innings</p>
        <p>{details.secondInnings}</p>
        <p>Man of The Match</p>
        <p>{details.manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{details.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
