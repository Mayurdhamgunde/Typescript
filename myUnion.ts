// type User = {
//   name: string;
//   id: number;
// };

type Admin = {
  username: string;
  id: number;
};

/*      USE OF Pipe Symbol                    */

// let mayur: User | Admin = { name: "mayur", id: 45 };

// mayur = { username: "hc", id: 45 };

function getDbId(id: number | string) {
  /*
        if(typeof id === "string"){
            id.toLowerCase()
        }
    */
  console.log(`DB id is: ${id}`);
}

const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
/*

const data3:string[] | number[] = ["1","2","3"] 

^
| This will store either string types of full array or eiher number type not mix of both ---->

*/
const data3: (string | number)[] = ["hello", 5, 6, "world!"];


