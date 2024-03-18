import  inquirer from 'inquirer';


const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first number',

    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number',
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the operator',
        choice: ['Add', 'Subtract','Multiply', 'Divide'],
    }
]);

let result: number;
switch(answer.operator){
    case 'Add': 
        result = answer.num1 + answer.num2;
        console.log(result)
        break
}
