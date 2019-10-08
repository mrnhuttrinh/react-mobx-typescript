import { observable } from 'mobx';
import BaseModel from './BaseModel';

export class TodoModel extends BaseModel {
  @observable public text: string;
  @observable public completed: boolean;

  constructor(text: string, completed: boolean = false) {
    super();
    this.text = text;
    this.completed = completed;
  }
}

export default TodoModel;
