var k = {
    "name" : "test",  //string
    "age" : 20,       //number
    "subjects" : {"FSD2" : "NAS" , "FCSP2" : "VHA"},   //object
    "marks" : [25,22],    //array
    "present" : true,     //boolean
    "exam" : null         
}

console.log(k)

console.log(k.name)
console.log(k['name'])

console.log(k.subjects.FCSP2)

console.log(k.marks[1])