import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
      userAddInput: ""
    }

  }

  changeUserInput(inputFromTheAddInputElement) {
    this.setState({ userAddInput: inputFromTheAddInputElement })
  };

  addItemToList(userAddInput) {
    
   const newTask = {
       task: userAddInput,
       id: Date.now(),
       completed: 'false'
     }

   const newFriendList = this.state.todoList.concat(newTask);;
   
    this.setState({
      todoList: newFriendList,
      userAddInput: ""
    });
  }

  render() {
    return (
      <div>
        <TodoList
          todoFromState={this.state.todoList}
          // handleFinish={(event) => this.makeItemFinish(event.target.textContent)}
        />
        <TodoForm
          input={this.state.userAddInput}
          handleUserInput={(event) => this.changeUserInput(event.target.value)}
          handleTheAddedItem={() => this.addItemToList(this.state.userAddInput)}
          // handleClearButton={() => this.clearAllCompletedElements()}
          >
        </TodoForm>
      </div>
    );
  }
}

export default App;
