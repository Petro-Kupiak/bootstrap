const studentsA = [64, 71, 32, 68, 13, 49, 98, 1];
const studentsB = [44,32, 97, 86, 100, 93, 99, 89, 94];
const studentsС = [12,78, 23, 14, 38, 100, 52, 77, 65, 21, 2, 53, 8];

const good = 89;
const norm = [65, 88];

allStudentsGroup(studentsA, studentsB, studentsС);

function allStudentsGroup(){
    console.log(...arguments)
	let allStudents = [].concat(...arguments);
    let sortedStudents = findStudentsMark(allStudents);
    displayStudentsMark(sortedStudents);
}
function findStudentsMark(students){
	let goodStudents=[], normStudents = [], badStudents= [];
	for(let studentMark of students){
        if(studentMark >= good){
            sortStudents(studentMark, goodStudents)  
        }else if(studentMark >= norm[0] && studentMark <= norm[1]){
            sortStudents(studentMark, normStudents) 
        }else{
            sortStudents(studentMark, badStudents)  
        }
    }
    return [].concat([goodStudents], [normStudents], [badStudents]) 
}

function sortStudents(studentMark, array){
  return array.push(studentMark)
}
function displayStudentsMark(sortedStudents){
	for(let i = 0; i < sortedStudents.length; i++){
        if(i == 0) document.write("<br><br> Good  A <hr><hr>")
        else if(i == 1) document.write("<br><br> Normal  B <hr><hr>")
        else if(i == 2) document.write("<br><br> Bad  C <hr><hr>")
        for(let j = 0; j < sortedStudents[i].length; j++){
      	    document.write(` ${j+1}) ${sortedStudents[i][j]}<br>`)
        }
    }
}