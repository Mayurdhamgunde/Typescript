const superHeros: string[] = [];
const heroPower: number[] = [];
//      OR
// const heroPower:Array<number> = []

superHeros.push("spiderman");
superHeros.push("ironman");
heroPower.push(5);
heroPower.push(8);

console.log(superHeros[1]);
console.log(heroPower);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

allUsers.push({ name: "", isActive: true });

console.log(allUsers);


export {};
