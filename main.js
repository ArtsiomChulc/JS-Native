//number, string, boolean, null, undefined,  NaN,
//object, array, function

const a = 4
const b = a

const user1 = {  //#567
    name: "Bob",
    age: 23,
    isStudent: true
}

const user2 = user1 //#567
user2.name = "Ann"
console.log(user1)

//делаем копию = вносим изменения в копию = используем копию с изменениями

// const copyUser = {}  //new Object()
// copyUser.name = user1.name
// copyUser.age = user1.age
// copyUser.isStudent = user1.isStudent

const copyUser = {...user1}

console.log(copyUser)
console.log(copyUser === user2) //false

const copyUser1 = {...user1, isStudent: false} //изменение существующего св-ва
const copyUser2 = {...user1, isMarried: false} //добавление св-ва

const address = {
    country: "Thailand",
    city: "Bangkok"
}
const copyUser3 = {...user1, ...address}
console.log(copyUser3)

const student = {
    name: "Bob",
    age: 23,
    isStudent: true,
    address: {   // #789
        country: "Thailand",
        city: "Bangkok",
        coords: {
            x: 234,
            y: 345
        }
    },
    courses: ["HTML", "CSS", "JS"] // #987
}

const copyStudent = {...student} // #789 & #987
copyStudent.courses.push("React")
console.log(student)

const copyStudent2 = {...student, courses: ["Redux", ...student.courses]}

console.log(student.courses)
console.log(copyStudent2.courses)

const copyStudents3 = {...student, address:
        {...student.address, coords:
                {x: 0, y: 0}
        }
}

console.log(copyStudents3.address.coords === student.address.coords) // false

const nickName = "Hook"

const copyStudent4 = {...student, nickName}

const users = [
    {
        id: 1,
        name:"Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name:"Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name:"Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name:"Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]

const newUser = {
    id: 5,
    name:"Donald",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum",
    }
}

const users2 = [newUser, ...users] // добавление эл-та в массив
console.log(users2)

// delete id === 3

const users3 = users.filter(u => u.id !== 3)
console.log(users3)


// id = 1, new city = "Sudan"

const users4 = users.map(u => u.id === 1 ? {...u, name: "Ali", address: {...u.address, city: "Sudan"}} : u )
console.log(users4)










