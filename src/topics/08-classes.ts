export class Person {

    constructor(
        public firstName: string,
        public Lastname: string,
        private address?: string
    ) { }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'NewYork')
//     }
// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        //this.person = new Person(realName);
    }
}

const tony = new Person('Tony','Stark', 'New York')
const ironMan = new Hero('Iron Man', 45, 'Tony', tony);

console.log(ironMan);