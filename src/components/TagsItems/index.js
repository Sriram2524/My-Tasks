import './index.css'

const TagsItems = props => {
  const {eachTag, clickTag} = props
  const {displayText, optionId} = eachTag
  const onClickTag = () => {
    clickTag(optionId)
  }
  return (
    <li className="tag-list">
      <button onClick={onClickTag} type="button" className="tag-button">
        {displayText}
      </button>
    </li>
  )
}
export default TagsItems
