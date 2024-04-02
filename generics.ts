/*

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("hello world!");
const someNumberValue = genericFunction<number>(5);

*/

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(3)

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({})

function getSearchProduct<T>(products: T[]): T[] {
  console.log(products.length);
  return products;
}

/*
     <----------------- O R ---------------->

function getSearchProduct<T>(products:Array<T>):Array<T>{
      console.log(products.length)
      return products
}

*/

const getMoreSearchProducts = <T,>(products:T[]):T =>{\
    const myindex = 4
    return products[myindex]
}

// function anotherFunction<T,U>(valOne:T,valTwo:U):object{
//   return{
//     valOne,
//     valTwo
//   }
// }

interface Database{
  connection:string,
  username:string,
  password:string
}

function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
  return{
    valOne,
    valTwo
  }
}

// anotherFunction(3,{connection:"hello",username:"mayur",password:"2303"});

//  Generic Classes & Examples -------->

interface Quiz{
  name:string,
  type:string
}

interface Course{
  name:string,
  author:string,
  subject:string
}

class sellable<T>{
  public cart:T[] = []

  addToCart(product:T){
    this.cart.push(product)
  }



}