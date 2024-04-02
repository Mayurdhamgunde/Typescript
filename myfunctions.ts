function addTwo(num: number) {
  return num + 2;
}

function addtwo(num: number): number {
  return num + 5;
  // return "hello";          // this could be possible case so to avoid use this format-->
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(name.toUpperCase());
  console.log(email);
  console.log(isPaid);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

console.log(addTwo(5));
console.log(getUpper("hello mayur"));

signUpUser("mayur dhamgunde", "mayurd@gmail.com", true);

console.log(loginUser("m", "m@m.com"));

const gethello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero:string) => {
  return `heros are ${hero}`;
});

console.log(heros);

function consoleError(errmsg:string):void{
    console.log(errmsg);    
}

function hadndleError(errmsg:string):never{
    throw new Error(errmsg);
}

export {};
