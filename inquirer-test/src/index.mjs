import inquirer from "inquirer"

// doc: https://www.npmjs.com/package/inquirer#question

inquirer
  .prompt([
    /* Pass your questions in here */
    // {
    //   type: "input",
    //   name: "yourName",
    //   message: "Your Name: ",
    //   default: "No Name",
    //   validate: (value) => {
    //     // return value === "Jack"
    //     return typeof value === "string"
    //   },
    //   // like placeholder
    //   transformer: (value) => {
    //     return `name [${value}]`
    //   },
    //   filter: (value) => {
    //     return `name [${value}]`
    //   },
    // },

    // {
    //   type: "number",
    //   name: "num",
    //   message: "Input Number: ",
    // },

    // {
    //   type: "list",
    //   name: "choice",
    //   message: "your choice",
    //   default: 1,
    //   choices: [
    //     {
    //       value: 1,
    //       name: "Jack",
    //     },
    //     {
    //       value: 2,
    //       name: "Bob",
    //     },
    //     {
    //       value: 3,
    //       name: "Jerry",
    //     },
    //   ],
    // },

    // {
    //   type: "rawlist",
    //   name: "choice",
    //   message: "your choice",
    //   default: 1,
    //   choices: [
    //     {
    //       value: 1,
    //       name: "Jack",
    //     },
    //     {
    //       value: 2,
    //       name: "Bob",
    //     },
    //     {
    //       value: 3,
    //       name: "Jerry",
    //     },
    //   ],
    // },

    // {
    //   type: "expand",
    //   name: "choice",
    //   message: "your choice",
    //   default: "red",
    //   choices: [
    //     { key: "R", value: "red" },
    //     { key: "G", value: "Green" },
    //     { key: "B", value: "Blue" },
    //   ],
    // },

    // {
    //   type: "checkbox",
    //   name: "choice",
    //   message: "your choice",
    //   default: "red",
    //   choices: [
    //     { key: "R", value: "red" },
    //     { key: "G", value: "Green" },
    //     { key: "B", value: "Blue" },
    //   ],
    // },

    // {
    //   type: "password",
    //   name: "choice",
    //   message: "your choice",
    //   default: "red",
    //   choices: [
    //     { key: "R", value: "red" },
    //     { key: "G", value: "Green" },
    //     { key: "B", value: "Blue" },
    //   ],
    // },

    {
      type: "editor",
      name: "choice",
      message: "your choice",
    },
  ])
  .then((answers) => {
    console.log(answers)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
