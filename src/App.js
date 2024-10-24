import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagsItems from './components/TagsItems'
import TasksItems from './components/TasksItems'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]
const intialList = []
// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    activeId: tagsList[0].optionId,
    tasksList: intialList,
  }

  onChangeDropdown = event => {
    this.setState({activeId: event.target.value})
  }

  onChangeinput = event => {
    this.setState({searchInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {searchInput, activeId} = this.state
    const text = tagsList.filter(each => each.optionId === activeId)
    console.log(text)
    const newList = {
      id: uuidv4(),
      optId: text[0].optionId,
      task: searchInput,
      tagItem: text[0].displayText,
    }
    this.setState(preState => ({
      tasksList: [...preState.tasksList, newList],
      searchInput: '',
      activeId: tagsList[0].optionId,
    }))
  }

  clickTag = optionId => {
    const {tasksList} = this.state
    const filteredTasks = tasksList.filter(each => each.optId === optionId)
    console.log(filteredTasks)
    this.setState({tasksList: filteredTasks})
  }

  render() {
    const {tasksList, searchInput, activeId} = this.state
    return (
      <div className="bg-container">
        <div className="left-container">
          <h1 className="main-heading">Create a task</h1>
          <form onSubmit={this.submitForm} className="form">
            <label className="label" htmlFor="taskLabel">
              Task
            </label>
            <input
              onChange={this.onChangeinput}
              id="taskLabel"
              value={searchInput}
              className="input"
              placeholder="Enter the task here"
              type="text"
            />
            <label className="label" htmlFor="tagsLabel">
              Tags
            </label>
            <select
              className="input"
              onChange={this.onChangeDropdown}
              value={activeId}
              id="tagsLabel"
            >
              {tagsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <div className="button-con">
              <button className="button" type="submit">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="right-con">
          <h1 className="tags">Tags</h1>
          <ul className="unordered-tags-list">
            {tagsList.map(each => (
              <TagsItems
                clickTag={this.clickTag}
                key={each.optionId}
                eachTag={each}
              />
            ))}
          </ul>
          <h1 className="tags">Tasks</h1>
          {tasksList.length === 0 ? (
            <p className="no-taska">No Tasks Added Yet</p>
          ) : (
            <ul className="unordered-tasks-list">
              {tasksList.map(each => (
                <TasksItems eachTaskItem={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default App
