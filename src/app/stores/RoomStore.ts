import { observable, action } from 'mobx';
import { RoomModel } from 'app/models';

export class RoomStore {
    constructor(rooms: RoomModel[]) {
        this.rooms = rooms;
    }

    @observable public rooms: Array<RoomModel>;

    @action
    addRoom = (item: Partial<RoomModel>): void => {
        this.rooms.push(new RoomModel(item.sender, item.receivers, item.lastMessage));
    };

    @action
    deleteRoom = (id: number): void => {
      this.rooms = this.rooms.filter((room) => room.id !== id);
    };
}