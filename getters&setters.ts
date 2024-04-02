class User {
  private _courseCount = 1;

  constructor(
    public email: string,
    public name: string // private userId:string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
/*
  set courseCount(courseNumber): void {  ---> Not allowed for setter to set return type...
  }

*/
  set courseCount(courseNum){
     if(courseNum<=1){
        throw new Error("course count should be more than 1");
     }
     this._courseCount = courseNum
  }

}
