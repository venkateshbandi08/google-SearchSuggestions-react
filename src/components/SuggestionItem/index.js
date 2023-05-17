// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, onClickOnArrowButtonFunction} = props
  const {suggestion} = suggestionItemDetails
  const onClickOnArrowButton = () => {
    onClickOnArrowButtonFunction(suggestion)
  }
  return (
    <li className="each-suggestion-container">
      <p className="suggestion-text"> {suggestion} </p>
      <button
        className="arrow-img-button"
        onClick={onClickOnArrowButton}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
