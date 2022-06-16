// let a : string = "sina";
// let b : number = 10;
// let c : boolean = true;
// let d : any = "sina";
// console.log(a)


// let age: number = 20
// if (age < 50)
//     age += 10
// console.log(age)


// function render(document) {
//     console.log(document)
// }


// let user: [string, number] = ["sina", 20]
// user.push(1)


// enum Size { small, medium, large }
// let size: Size = Size.medium
// console.log(size)

// const enum Size { small = 2, medium, large }
// let size: Size = Size.large
// console.log(size)


// function one (a: string, b: number): string {
//     let x
//     if(a === "sina") {
//         return a 
//     }
//     return a + b
// }

// one("sina", 10)

type Employee = {
    name: string,
     age: number,
     logging: (message: string) => void
}

let user: Employee = { 
        name: "sina",
        age: 20,
        logging: (message: string) => {
            console.log(message)
        }
        }