const fs = require('fs');
const addStudent = (id, name, degrees) => {
    const studentList = loadStudent();
    if(isNaN(id) || id == 0 || name === "" || degrees.length === 0){
        console.log('enter valid Data');
    }
    else{
        const duplicateStudent  = studentList.find((el) => {
            return el.id === id
        })
        if (!duplicateStudent ) {
            const totalDegee = degrees.reduce((current, next) => {
                return current + next;
            })
            studentList.push({ id,name, degrees,total: totalDegee})
                
            
            saveData(studentList);
        }
        else {
            console.log('already exist')
        }
    }
}

const listStudents = () => {
    const studentLiist = loadStudent();
    if(studentLiist.length>0){
        studentLiist.forEach((stud) => {
            console.log(`id ${stud.id} name ${stud.name}, degrees [${stud.degrees}]`)
        })
    }
    else{
        console.log('error')
    }
}
const deleteStudent = (id)=>{
    const studentsLs = loadStudent();
    if(isNaN(id) || id == 0){
        console.log('enter valid id')
    }
    else{
        const studentstay = studentsLs.filter((stud)=>{
            return stud.id !== id
        })
        if(studentsLs.length >0){
            if(studentsLs.length !== studentstay.length){
                saveData(studentstay)
                console.log(`student id ${id} is removed`)
            }

        }
    }
}
const readStudent = (id) => {
    const students = loadStudent();
    if(isNaN(id) || id == 0){
        console.log('enter Valid id')
    }
    else{
        const studentRequest = students.find((stuu) => {
            return stuu.id === id
        })
        if (studentRequest) {
            console.log(`student id ${id} ,student name ${studentRequest.name} , degrees [${studentRequest.degrees}] , with total degree ${studentRequest.total}`)
        }
        else {
            console.log(`no one with ${id}`)
        }
    }
}


const loadStudent = () => {
    try {
        const fs = require("fs")
        const students = fs.readFileSync('studentData.json').toString();

        return JSON.parse(students);
    }
    catch (error) {
        return [];
}
 }
const saveData = (studentList) => {
    fs.writeFileSync('studentData.json', JSON.stringify(studentList));
}
module.exports = {
    addStudent,
    listStudents,
    deleteStudent,
    readStudent,
    

}



