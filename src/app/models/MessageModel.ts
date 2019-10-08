import BaseModel from './BaseModel';
import UserModel from './UserModel';

type MessageType =  'text' | 'image' | 'emotion' | 'video';

export class MessageModel extends BaseModel {
    public roomId: number;
    public sender: UserModel;
    public message: string;
    public createdAt: Date;
    public type: MessageType;

    constructor(roomId: number, sender: UserModel, message: string, type: MessageType = 'text') {
        super();
        this.roomId = roomId;
        this.sender = sender;
        this.message = message;
        this.type = type;
    }
}

export default MessageModel;
