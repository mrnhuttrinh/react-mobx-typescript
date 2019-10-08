import { observable, computed } from 'mobx';
import BaseModel from './BaseModel';

export class UserModel extends BaseModel {
    public readonly username: string;
    @observable public firstName: string;
    @observable public lastName: string;
    public avatar: string;
    public createdAt: Date;
    public updatedAt?: Date;

    constructor(username: string, firstName: string, lastName: string) {
        super();
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = new Date();
    }

    @computed
    public get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export default UserModel;
