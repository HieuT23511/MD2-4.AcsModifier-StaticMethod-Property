
class User {
    protected _name: string;
    protected _email:string;
    public _role:number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    getInfo(){
        return `Name: ${this._name} \nEmail: ${this._email}`
    }
    isAdmin(){
        if(this._role === 1){
            return console.log(`is Admin`);
        } else if(this._role ===2){
            return console.log(`is User`)
        }
    }
    setName (name:string){
        this._name = name;
    }
    setEmail(email:string){
        this._email = email;
    }
    setRole(role:number){
        this._role = role;
    }
}
let user1 = new User('Hieu','ducanhsmuft@gmail.com',1);
let user2 = new User('HieuT','ducanhsmuft@gmail.com',2);
console.log(user2.getInfo());
user2.isAdmin();
user1.setEmail('hieuct.work@gmail.com');
console.log(user1.getInfo());
user1.isAdmin();
