/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

//Step 2: Get the elements for students and for pagination and page
let StudentListItem = document.querySelectorAll(".student-list li"); // Grabs all the li Item and stores them into StudentListItem
console.log(StudentListItem.length);
let ChildListItem = StudentListItem.children; //Takes the children of the li Item and stores them into ChildListItem. Aka the ul Item
//Makes the child item so you manipulate the elements in the DOM
let NumberofItem = StudentListItem.length;

//Step 3 & 4: Determine the number of elements that goes on one page. And create the variable for the number of pages needed
const ItemPerPage = 10;

//Step 5: Create a function that determines the number of pages PagesNeeded

 const TotalPages = Math.ceil(StudentListItem.length/ItemPerPage);


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage (page, ChildListItem) {
  for (let i = 0; i < StudentListItem.length; i++) { // Loops through items to find what to hide or show
    if (i < (page * ItemPerPage) && i >= ((page * ItemPerPage) - ItemPerPage)) {  // shows the first 10 items in list
      StudentListItem[i].style.display = 'block';
    } else {
      StudentListItem[i].style.display = 'none'; //hides the rest of the items
    }
  }
};

showPage(1,ChildListItem);


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
// Loop to create page buttons based on number of required pages

const buttonDiv = document.createElement('div'); // creates a div for buttons
const mainPage = document.querySelector('.page'); // creating a selector for page div
console.log(mainPage);
mainPage.appendChild(buttonDiv); // appends buttonsdiv to the page
buttonDiv.className = 'pagination'; // gives buttodiv the class name pagination
console.log(buttonDiv); // logs button div to  console
const buttonUl = document.createElement('ul'); // creating unordered list
buttonDiv.appendChild(buttonUl); //append list to buttondiv

for (let i = 0; i < TotalPages; i+= 1) { // for-loop creates li and a element.
  pageli = document.createElement('li');
  const pageLink = document.createElement('a'); // a makes the buttons hyperlinks
  if(i === 0){
  	  pageLink.className = 'active';
  }
  pageLink.href = '#'; //puts numbers as the hyperlink text
  pageLink.textContent = i + 1; //textcontent i + 1
  pageli.appendChild(pageLink); //appends the pagelinks
  buttonUl.appendChild(pageli); // appends the buttonul to the li
}
 
//if(i === 0){
//	pageLink.className = 'active';
	showPage(1,ChildListItem);
//}

  //The page = a notebook
  //The ul = pages in a notebook
  //The li = writing on the page in the notebook
  // -------------------PAGE------------------
  //            ---------UL----------
  //                  ---LI--------


  buttonDiv.addEventListener('click', (event) => {
      let buttonNumber = parseInt(event.target.textContent);
      let max = buttonNumber * 10;
      let min = max - 10;
      for (let i = 0; i < StudentListItem.length; i++)
	  {
          if (i >= min && i < max) 
		  {
              StudentListItem[i].style.display = '';
          }  
		  else
		  {
              StudentListItem[i].style.display = 'none';
          }

      }
	 
  });//evernt listener

  var btnlinks = document.querySelectorAll('a'); //Selects all the a elements and stores them into the variable btnlinks
  for ( var i = 0; i <btnlinks.length; i++){ //Loops through all of the buttons
  btnlinks[i].addEventListener("click",function(){ //add event listener so when clicked...
  	  var current = document.getElementsByClassName("active"); // gather the current a elements that is active a	
	  current[0].className = current[0].className.replace('active',""); //replace the current active class with no class 
	  this.className += "active"; //and add active class to clicked button
  });
}

console.log(buttonUl);
console.log(TotalPages);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
S