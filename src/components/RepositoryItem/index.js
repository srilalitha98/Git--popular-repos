// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItem} = props
  const {avatarUrl, name, issuesCount, forksCount, starsCount} = repositoryItem
  return (
    <li className="item-container">
      <img src={avatarUrl} alt={name} className="item-image" />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon-image"
        />
        <p>{`${starsCount} stars`}</p>
      </div>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon-image"
        />
        <p>{`${forksCount} forks`}</p>
      </div>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon-image"
        />
        <p>{`${issuesCount} open Issues`}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
