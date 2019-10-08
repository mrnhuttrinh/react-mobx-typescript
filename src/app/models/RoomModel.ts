import { observable, action } from 'mobx';
import UserModel from './UserModel';
import BaseModel from './BaseModel';
import MessageModel from './MessageModel';

export class RoomModel extends BaseModel {
    public sender: UserModel;
    public receivers: Array<UserModel>;
    public lastMessage: string;
    @observable public messages: Array<MessageModel>;
    public createdAt: Date;

    constructor(sender: UserModel, receivers: Array<UserModel>, lastMessage: string) {
        super();
        this.sender = sender;
        this.receivers = receivers;
        this.lastMessage = lastMessage;
        this.createdAt = new Date();
        this.messages = [];
    }

    @action
    addMessage = (item: Partial<MessageModel>): void => {
        this.messages.push(new MessageModel(this.id, item.sender, item.message));
    };
}

export default RoomModel;