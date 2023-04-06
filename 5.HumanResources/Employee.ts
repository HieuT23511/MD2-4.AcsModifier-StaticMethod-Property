export class Employee{
    _firstName : string;
    _lastName : string;
    _birthday: string;
    _address: string;
    _position: string;
    _ID: string

    constructor(firstName: string, lastName: string, birthday: string, address: string, position: string, ID:string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._position = position;
        this._ID = ID;
    }
        getName(){
        return `${this._firstName} ${this._lastName}`;
        }
        getID(){
        return this._ID;
        }
        setName(firstName,lastName){
        this._firstName = firstName;
        this._lastName = lastName;
        }
}