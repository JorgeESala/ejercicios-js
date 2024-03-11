/*
Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any 
common courses print them out to the console.
*/
function findMatches( array1, array2 ) {
    const matches = [];
    for(element of array1){
        if(array2.includes( element ))
        matches.push(element);
    }
    return matches
  }

  function findMatchesFilter( array1, array2 ) {
    return commonCourses = array1.filter(course => array2.includes(course));
  }


  
  let student1Courses = ['Math', 'English', 'Programming'];
  let student2Courses = ['Geography', 'Spanish', 'Programming'];
  let matches = findMatchesFilter( student1Courses, student2Courses )
  console.log( matches );
  document.getElementById("ejercicio4").innerHTML += findMatchesFilter( student1Courses, student2Courses );
  