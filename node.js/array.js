var students = ["Raj", "Vinay", "Sam", "Vijay", "Abdul"]
//console.log(students.length)
//students.unshift("Karuna")
//console.log(students)
var fewStudents1 = students.slice(1,2)
//slice will not change the original array
// takes from index 1 to <2
console.log(fewStudents1)
console.log(students)
var fewStudents2 = students.splice(1,2)
//splice will change the original array
//starts at index 1 and takes two elemsts
console.log(fewStudents2)
console.log(students)