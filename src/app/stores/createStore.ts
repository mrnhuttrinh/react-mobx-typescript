import { History } from 'history';
import { TodoModel } from 'app/models';
import { TodoStore } from './TodoStore';
import { RoomStore } from './RoomStore';
import { RouterStore } from './RouterStore';
import { STORE_TODO, STORE_ROUTER, STORE_ROOM } from 'app/constants';

export function createStores(history: History, defaultTodos?: TodoModel[]) {
  const todoStore = new TodoStore(defaultTodos);
  const routerStore = new RouterStore(history);
  const roomStore = new RoomStore([]);
  return {
    [STORE_TODO]: todoStore,
    [STORE_ROOM]: roomStore,
    [STORE_ROUTER]: routerStore,
  };
}
