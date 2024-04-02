interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
//   startTrail: () => string;
    startTrail():string
    getCoupon(couponname:string,value:number):number
}

const mayur: User = { dbId: 22, email: "m@m.com", userId: 1122,
 startTrail:() =>{
    return "trail started"
 },
 getCoupon:(name:"mayur10",value:78) =>{
  return 10;
 }
};

mayur.email = "mayur@gmail.com";

// mayur.dbId = 45   // Cannot allowed because read-only property is assigned ---->
