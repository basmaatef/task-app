const yargs = require('yargs');
const degree =require("./degree")



yargs.command({
    command: 'add',
    describe: 'add new student',
    builder: {
        id: {
            describe: 'id of student add',
            demandOption: true,
            type: 'number',            
        },
        name: {
            describe: 'student name of add',
            demandOption: true,
            type: 'string',           
        },
        degrees: { 
            describe: 'student degrees of add',
            demandOption: true,
            type: 'array',
            
        },
        comment: {
            describe: 'comments student of add',
            type: 'string'
        }
    },
    handler: (x) => { degree.addStudent(x.id, x.name, x.degrees, x.comment)
    }
})


yargs.command({
    command:'list',
    describe:'list of students',
    handler:()=>{
     degree.listStudents();
    }
})

yargs.command({
    command:'delete',
    describe:'delete',
    builder:{
        id:{
            describe:'id delete',
            demandOption:true,
            type:'number'
        }
    },
    handler : (x)=>{
       degree.deleteStudent(x.id)
    }
    
})
yargs.parse()

