class User {
  email: string;
  name: string;
  city: string = "";
  readonly cit: string = "jaipur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }   
}

const mayur = new User("m@m,com", "mayur");

// mayur.city = 5;    // not allowed as type is string <---> but in js it will not show an error

export {};
