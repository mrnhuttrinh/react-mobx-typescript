import * as React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import { TodoModel } from 'shared/models';

export interface HeaderProps {
  addTodo: (todo: Partial<TodoModel>) => any;
}

export interface HeaderState {
  /* empty */
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  private handleSave = (text: string) => {
    if (text.length) {
      this.props.addTodo({ text });
    }
  };

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;
