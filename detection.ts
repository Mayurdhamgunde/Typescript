// function detectType(val: number | string) {
//     if (typeof val === 'string') {
//         return val.toLowerCase();
//     }
//     return val + 3;
// }

// USE OF IN OPERATOR:------->

interface User{
    name: string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account:User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}

new Array()

function logValue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());       
    }
}