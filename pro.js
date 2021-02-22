const students = [{name: "s1", subject: "pyhton"},{name:"s2",subject:"JS"}];

function enrollStudent(stud){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      students.push(stud);
      console.log("Student has been enrolled");
      const error = false;

      if(!error){
        resolve();
      }else{
        reject();
      }
    },1000);
  })
}

function getStudents() {
  setTimeout(function() {
    let str = "";
    students.forEach((student) => {
      str += "<li>"+ student.name + "</li>";
    });

    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched");
  },1000);
}

let newStud = {name:"s3",subject:"AI"};

enrollStudent(newStud).then(getStudents).catch(()=>{
  console.log("Some error occured");
})