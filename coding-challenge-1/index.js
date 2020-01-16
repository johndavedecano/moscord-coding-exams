const people = [
  { name: "Arisa", department: "BP", gender: "F" },
  { name: "Ham", department: "IT", gender: "F" },
  { name: "Alice", department: "IT", gender: "F" },
  { name: "Anna", department: "DA", gender: "F" },
  { name: "Larry", department: "Sales", gender: "M" },
  { name: "Ria", department: "Sales", gender: "F" },
  { name: "JD", department: "Sales", gender: "M" },
  { name: "Thor", department: "Sales", gender: "M" },
  { name: "Karl", department: "Sales", gender: "M" },
  { name: "Rachel", department: "Sales", gender: "F" }
];

const listByGender = (gender = "F") => {
  return people.filter(l => l.gender === gender).map(l => l.name);
};

// Version 1
// Returns
/*
  {
    Sales: [{ name: "Rachel", department: "Sales", gender: "F" }],
    DA: [{ name: "Anna", department: "DA", gender: "F" }]
  }
*/
const groupByDepartment = () => {
  return people.reduce((a, b) => {
    if (!a[b.department]) {
      a[b.department] = []
    }
    a[b.department][a[b.department].length - 1] = b
    return a
  }, {})
}

// Version 2
// Returns
/*
  [{
    department: 'Sales',
    people: [],
  }]
*/
const groupByDepartment2 = () => {
  const deps = []
  const pips = []


  for (var i=0; i<people.length; i++) {

    const b = people[i]

    if (deps.indexOf(b.department) === -1) {
      deps.push(b.department)
      pips.push({
        department:b.department,
        people: []
      })
    }

    const depIndex = deps.indexOf(b.department)

    pips[depIndex]['people'].push(b)
  }

   return pips
}
