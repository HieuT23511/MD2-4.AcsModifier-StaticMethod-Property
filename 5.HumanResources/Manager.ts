import {Employee} from "./Employee";

export interface MANAGER {
    add(user: Employee)

    edit(ID:string,user: Employee)

    delete(ID: string)
}

export class managerEmployee implements MANAGER {
    static employeeList: Employee[] = [];
    getList():Employee[] {
        return managerEmployee.employeeList;
    }
    add(user: Employee) {
        managerEmployee.employeeList.push(user);
    }
    edit(ID:string,user: Employee) {
        let indexEpl = managerEmployee.employeeList.findIndex(elt=> elt._ID === ID)
        managerEmployee.employeeList.splice(indexEpl,1,user);
    }
    delete(ID: string) {
        managerEmployee.employeeList = managerEmployee.employeeList.filter(employee => employee._ID !== ID);
    }
    find(ID) {
        managerEmployee.employeeList.find((employ) => employ._ID === ID);
    }
}
