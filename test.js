// console.log(5 + "3")
// console.log(5 + + "3")
// console.log(5 - "3")

/******************************************************************************************* */

async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const jsonData = await data.json()
    console.log('fetched data : ', jsonData);
}

// getData();

function getdatacallback(callback) {
    callback();
}
/*********************************************************************************** */
// Nodejs event phases

// console.log('a');

// setImmediate(() => console.log('b'))

// getdatacallback(() => {
//     console.log('c')
// })

// setTimeout(() => {
//     console.log('d')
// }, 0);

// Promise.resolve().then(() => console.log('e'));

// process.nextTick(() => console.log('f'));

// console.log('g');


/***************************************************************************************** */
// palindrome or not

function palindrome1(str) {
    let rev = str.split("").reverse().join("");

    if (str === rev) {
        console.log(str + ' is palindrome');
    } else {
        console.log(str + ' is not palindrome');
    }
}

// 2nd approach
function palindrome2(str) {
    const len = str.length;
    let palindrome = true;
    for(let i = 0; i <= parseInt(len/2); i++){
        if (str[i] === str[len - 1 - i]) {
            continue;
        } else {
            palindrome = false;
            console.log(str + ' is not palindrome');
            break;
        }
    }
    if (palindrome) {
        console.log(str + ' is palindrome');
    }
}

// 3rd approach
function palindrome3(str) {
    let rev = [];
    let len = str.length;
    for(let i=0; i<len; i++) {
        rev[i] = str[len - i -1]
    }
    let revStr = rev.join("");
    if (str === revStr) {
        console.log(str + ' is palindrome');
    } else {
        console.log(str + ' is not palindrome');
    }
}
// palindrome3("madama");


/************************************************************************************** */

// Group objects by similar key

// approach 1 - resduce method 
function groupByAge1(data) {
    let result = data.reduce((accumulator, obj) => {
        let key = obj.age;
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(obj);
        return accumulator;
    }, {})
    console.log(result)
}

// approach 2
function groupByAge2(data) {
    let result = {}
    data.forEach(obj => {
        let age = obj.age;
        if (result[age] == undefined) {
            result[age] = []
        }
        result[age].push(obj)
    })
    console.log(result);
}

// approach 3
function groupByAge3(data) {
    let result = {};
    for(obj of data) {
        if(result.hasOwnProperty(obj.age)){
            result[obj.age].push(obj)
        } else {
            result[obj.age] = [obj]
        }
    }
    console.log(result);
}

const data = [
    {id: 1, name: "aaa", age: 23},
    {id: 2, name: "bbb", age: 25},
    {id: 3, name: "ccc", age: 24},
    {id: 4, name: "ddd", age: 24},
    {id: 5, name: "eee", age: 23},
]

// groupByAge1(data);

/*************************************************************************************** */

// reverse array elements

function reverseArr1(arr) {
    let revArr = [];
    let len = arr.length;
    for(i=0; i<len; i++) {
        revArr[i] = arr[len - i - 1]
    }
    return revArr;
}


function reverseArr2(arr) {
    let revArr = [];
    for(i=arr.length - 1; i>=0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

// console.log(reverseArr2([2, 3, 4, 5, 6]));

/******************************************************************************************* */
// write a function which takes a string as argument and returns a object which shows the character counts
// string = "raja" => {r: 1, a: 2, j: 1}

function charCount(str) {
    let obj = {};
    for (char of str) {
        if(obj[char]) {
            obj[char] = obj[char] + 1;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

// console.log(charCount("chitreshgargwanshi"));

/***************************************************************************** */

// write a function to convert nested arr as a single arr
// [1, 2, 3, [4, 5, [6, 7], 8], 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

let temp = [];
function mergeWithParentArr(arr) {
    arr.forEach(ele => {
        if(typeof(ele) === "object") {
            mergeWithParentArr(ele)
        } else {
            temp.push(ele);
        }
    })
}

// mergeWithParentArr([1, [2, 3, 33], 22, [4, 5, [6, 7], 8], 9, 10, 11, 12]);
// console.log(temp);

/******************************************************************* */
// in List of Employees find the highest paid employee in each department

function findHighestSalaryinDept(employees) {
    let dept = {};

    for(empl of employees) {
        if(dept.hasOwnProperty(empl.department)) {
            if(dept[empl.department].salary < empl.salary){
                dept[empl.department].salary = empl.salary;
                dept[empl.department].name = empl.name;
            }
        } else {
            dept[empl.department] = {
                name: empl.name,
                salary: empl.salary
            }
        }
    }

    console.log(dept);
}

function findSecondHighestSalaryEmployee(employees) {
    let high = 0;
    let shigh = 0;

    for(employee of employees) {
        if(employee.salary > high) {
            shigh = high;
            high = employee.salary;
        } else if(employee.salary > shigh) {
            shigh = employee.salary;
        }
    }

    console.log('High Salary : ', high);
    console.log('Second High Salary : ', shigh);
}

const employees = [
    {name: 'aa', department: 'IT', salary: 8800},
    {name: 'bb', department: 'Sales', salary: 8000},
    {name: 'cc', department: 'HR', salary: 9000},
    {name: 'dd', department: 'IT', salary: 9000},
    {name: 'ee', department: 'Sales', salary: 5000},
]

// findHighestSalaryinDept(employees);
findSecondHighestSalaryEmployee(employees);
