//array []
//object {}
// class keyword is used in front of class
//In class instance shud be created
//spread operator used to create array in array, class in class, object in object.
set1 = [1,2,3,4,5]
set2 = [...set1,6,7,8,9,10]
console.log(set2)
const Engg =
{
    sem : "V",
    branch : "AIML"

};
const Section =
{
    ...Engg,
    noOfStudents: 76
}
console.log(Section)