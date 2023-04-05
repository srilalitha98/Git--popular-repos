// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, filterTab, onClickLanguageTab} = props

  const {id, language} = languageDetails

  const activeTabBtn = filterTab === id ? 'active-btn' : ''

  const onClickLanguageBtn = () => {
    onClickLanguageTab(id)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeTabBtn}`}
        onClick={onClickLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
