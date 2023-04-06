import {Employee} from "./Employee";
import {ManagerEmployee} from "../../3.TS-OVV/11.ManagerEmployee/Manager-Employee";
import {managerEmployee} from "./Manager";

let epl1 = new Employee('Nguyen','Anh','23/05/1997','ND','HR','01');
let epl2 = new Employee('Tran','Em','23/06/1996','HP','CEO','02');
let epl3 = new Employee('Le','Chi','27/05/1998','HN','Engineer','03');
let epl4 = new Employee('Vu','Chau','27/07/1999','NB','IT','04');
let listEpl = new managerEmployee();
listEpl.add(epl1);
listEpl.add(epl2);
listEpl.add(epl3);
// console.table(listEpl.getList());
listEpl.delete('01');
listEpl.edit('03',epl4);
console.table(listEpl.getList());
