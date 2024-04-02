// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User) {}

// createUser({ name: "", email: "", isActive: true });

type User = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditcardDetails?:number
}

let myUser:User = {
    _id:"123456",
    name:"h",
    email:"h@h.com",
    isActive:false
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"       // error bcz readonly ---->

type cardNumber = {
    cardnumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

export {};
