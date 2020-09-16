const _ = require("underscore")

const strObj = [
  {
    name: "Harry Potter",
    occupation: "Wizard",
    quote:
      "I’ll be in my bedroom, making no noise and pretending I’m not there.",
    id: 1,
  },
  {
    name: "Hagrid",
    occupation: "Teacher",
    quote: "Yer a wizard Harry",
    id: 2,
  },
  {
    name: "Ron Weasley",
    occupation: "Wizard",
    lastWords: "When in doubt, go to the library.",
    id: 3,
  },
]

const foundWizard = _.findWhere(strObj, { id: 2 }) // this find the first object that has this key/value pair and returning that one only.

const foundWizards = _.where(strObj, { occupation: "Wizard" }) // this returns all objects in a list that match the key/value pair

console.log(foundWizard)
console.log(
  "****************************************************************************"
)
console.log(foundWizards)
