import './index.css'

const TasksItems = props => {
  const {eachTaskItem} = props
  const {task, tagItem} = eachTaskItem
  return (
    <li className="tasks-list">
      <p className="text">{task}</p>
      <p className="tagItem">{tagItem}</p>
    </li>
  )
}
export default TasksItems
