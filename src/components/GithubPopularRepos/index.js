import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    isLoading: true,
    filterTab: languageFiltersData[0].id,
    popularReposList: [],
  }

  componentDidMount() {
    this.renderPopularRepos()
  }

  onClickLanguageTab = id => {
    this.setState({filterTab: id, isLoading: true}, this.renderPopularRepos)
  }

  renderPopularRepos = async () => {
    const {filterTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language= ${filterTab}`
    const response = await fetch(url)
    const data = await response.json()
    const popularRepos = data.popular_repos
    const updatedData = popularRepos.map(eachItem => ({
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
      name: eachItem.name,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
    }))
    if (response.ok === true) {
      this.setState({
        isLoading: false,
        popularReposList: updatedData,
      })
    }
  }

  render() {
    const {isLoading, popularReposList, filterTab} = this.state
    const spinner = (
      <div data-testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    )
    return (
      <div className="app-container">
        <h1>Popular</h1>
        <ul className="btns-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              key={eachItem.id}
              languageDetails={eachItem}
              filterTab={filterTab}
              onClickLanguageTab={this.onClickLanguageTab}
            />
          ))}
        </ul>
        <div>
          {isLoading && spinner}
          {!isLoading && (
            <ul className="repos-container">
              {popularReposList.map(eachItem => (
                <RepositoryItem key={eachItem.id} repositoryItem={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default GithubPopularRepos
