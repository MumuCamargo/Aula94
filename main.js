nameofTheStudent Array = [];

    
function submit()
{
    var displayStudentArray = [];

 for  ( var j = 1; j <=4; j++)
{
    var nameOfTheStudents = document.getElementById("nameOfTheStudent"+j).value;
    console.log(nameOfTheStudents);
    nameOfTheStudentArray.push(nameOfTheStudentArray);
}

   console.log(nameOfTheStudentArray);

   var LenghtOfNameOfStudentsArray = nameOfTheStudentArray.lenght;
   console.log(LenghtOfNameOfStudentsArray);

   for (var k = ; k < LenghtOfNameOfStudentsArray; k++)
   {
    displayStudentArray.push("<h4>NOME - "+ nameOfTheStudentArray[k] + "</h4>");
    console.log(displayStudentArray);
   }

   console.log(displayStudentArray);
   document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;
   
   var removeCommas = displayStudentArray.join(" ");
   console.log(removeCommas);
   document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


   document.getElementById("subimitButton").style.display = "none";



}