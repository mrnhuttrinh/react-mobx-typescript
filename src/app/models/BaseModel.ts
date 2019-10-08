export class BaseModel {
    readonly id: number;

    constructor() {
        this.id = BaseModel.generateId();
    }

    static nextId = 1;
    static generateId() {
      return this.nextId++;
    }
}

export default BaseModel;