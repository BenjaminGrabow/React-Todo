import React from 'react';
import "./components/TodoComponents/App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import SearchItem from "./components/TodoComponents/SearchItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: "false"
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: "false"
        }
      ],

      userAddInput: "",

      userSearchInput: "",

      searchList: [],
    }

  }

  componentWillMount() {
    localStorage.getItem('todoList') && this.setState({
      todoList: JSON.parse(localStorage.getItem('todoList'))
    })

  }

  changeUserInput = (inputFromTheAddInputElement) => {
    this.setState({ userAddInput: inputFromTheAddInputElement })
  };

  addItemToList = (userAddInput) => {

    const newTask = {
      task: userAddInput,
      id: Date.now(),
      completed: 'false'
    }

    const newFriendList = this.state.todoList.concat(newTask);

    this.setState({
      todoList: newFriendList,
      userAddInput: ""
    })
  };

  makeItemCompleted = (target) => {

    let listArray = this.state.todoList;

    const filteredListItem = listArray.filter(value =>
      value.task === target);

    filteredListItem.map(val => val.completed = "true")

    this.setState({
      todoList: listArray
    })
  };

  clearAllCompletedElements = () => {
    let listArray = this.state.todoList;

    const filterCompletedListItems = listArray.filter(value =>
      value.completed !== "true");

    this.setState({
      todoList: filterCompletedListItems
    })
  };

  changeSearchInput = (input) => {
    this.setState({ userSearchInput: input });
  };

  searchInTodoList = (input) => {
    const listArray = this.state.todoList;

    const searchedItem = listArray.filter(val =>
      val.task.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()));

    this.setState({
      searchList: searchedItem,
      userSearchInput: ""
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todoList', JSON.stringify(nextState.todoList));
  }

  render() {
    return (
      <div className="app">
        <h1>Your Todo List</h1>
        <TodoList
          todoFromState={this.state.todoList}
          handleFinish={(event) => this.makeItemCompleted(event.target.textContent)}
        />
        <TodoForm
          input={this.state.userAddInput}
          handleUserInput={(event) => this.changeUserInput(event.target.value)}
          handleTheAddedItem={() => this.addItemToList(this.state.userAddInput)}
          handleClearButton={() => this.clearAllCompletedElements()}
        >
        </TodoForm>
        <h2>Search your Todo's here </h2>
        <div className="search">
          <SearchItem
            searchInput={this.state.userSearchInput}
            handleSearch={(event) => this.changeSearchInput(event.target.value)}
            searchTheElement={() => this.searchInTodoList(this.state.userSearchInput)}
          />
          <ul>
            {this.state.searchList.map(val => <li
              key={Date.now()}
              className="search-items">
              {val.task}
            </li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
