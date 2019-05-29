import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
 constructor(props) {
   super(props);

   this.state= {
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
  render() {
    return (
      <div>
        <TodoList
          todoFromState={this.state.todoList}
        />
        <TodoForm
          handleUserInput={(event) => this.changeUserInput(event.target.value)}
          input={this.state.userAddInput}
          handleTheAddedItem={() => this.addItemToList(this.state.userInput)}
          handleClearButton={() => this.clearAllCompletedElements()}>
        </TodoForm>
      </div>
    );
  }
}

export default App;
