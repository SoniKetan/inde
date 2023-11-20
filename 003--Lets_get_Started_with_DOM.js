// /*// Lets_get_Started_with_DOM :--




// // Watch the first 5 min of the video and setup your code as the 
// // youtuber has done


// // Link -->   https://www.youtube.com/watch?v=0ik6X4DJKCc



// // Deliverables



// // 1) Watch the first 5 min and answer this

// // What will the DOM structure look like for this , explain in terms of 
// // attributes and everything


// // <head>

// // <h1> Title </h1>

// // </head>

// // <body>

// // <input type="text" name="Name" />

// // <input type="button" value="Submit" />

// // </body>





// // 2) Watch uptill the 17th min and write the code as per the youtuber does. 
// // Manipulate the title of the page and experiment with other things




// // 3) Watch from the 17th min uptill 23min , and do the following.

// // Watch uptill 23min - Make the title have a black border as the youtuber does.
// // Now make ADD ITEM bold and chage the font color to greeen.


// // For downloading the HTML code which the youtuber uses use this link

// // Link -->   https://drive.google.com/file/d/1EUTFR_o9lLB4ju6YP1E3qyjdGGyTT4xU/view?usp=sharing. Copy paste it in your index.html file



// // How to push new code to same repository . Watch this video -

// // Link -->   https://www.youtube.com/watch?v=13MYyMTdRxE

 

// // Push the code to git and upload the commit ID. [What is commit ID?
// //  Watch this video to understand it better]




// // Solution-->*/




///////*************************************************************************** */




// /*
// // Q.1 What will the DOM structure look like in question 1

// // Ans.) That is written by Shiva Chouhan. You can see below.
// // We will get the title and text field with submit button . 
// // But the HTML format is wrong. 





// // Q.2 What is the return type of getElementbyId?


// // a.) Array of elements
// // b.) Single Element node
// // c.) Object of elements
// // d.) None of the above


// // Ans.) 




// // Q.3 Difference between innertext and textcontent.


// // a.) Text content only returns the text value and not the Html tags .
// // b.) textContent gets the content of all elements, 
// //       including <script> and <style> elements .
// // c.) Innertext returns only returns the text content and no HTML tags .
// // d.) Innertext gets the content of all elements, 
// //       including <script> and <style> elements . 


// // Ans.) 




// // Q.4 Please enter the final commit ID here

// // Write your answer here*/




//////********************************************************************************************* */



// // By the use of .getElementById :--



let headerTitle = document.getElementById("header-title");
console.log(headerTitle);

// headerTitle.textContent = 'Hemendr Chouhan';
// // Here , we over-ride or change the text of Item Lister to Hemendr Chouhan 
// // whereas .textContent allow us the styling;

// headerTitle.innerText = 'Ketan Soni';
// // Here , we over-ride or change the text of  Hemendr Chouhan to Ketan Soni 
// // whereas .innerText does'nt allow anything;

// headerTitle.innerHTML = '<h3> Mohd.Umar </h3>';
// // Here , we over-ride or change the text of Ketan Soni to Mohd. Umar . 
// // But h1 tag is already present inside the html file and it adds the h3 tag inside it ;

//headerTitle.style.border = 'solid 5px black';
// // Here, we are getting the solid border box that contains the Item Lister inside it ;

headerTitle.style.borderBottom = 'solid 5px black';
// // Here, we are getting the solid border below the Item Lister heading ;




// // By the use of .getElementById :--

let headerA = document.getElementById("main-header");
headerA.style.borderBottom  = 'solid 5px #000';
// // Here , we are getting the border on the last of the green box . 
// // But the previous .getElementById("header-title") gives the border below the heading;



//////********************************************************************************************* */


// // By the use of .getElementsByTagName :--


let headerB = document.getElementsByTagName("h2");
console.log(headerB);

headerB[0].style.color = 'green';
// // Here, by the use of .getElementsByTagName("h2") we are able to get the h2 tags . 
// // And by mentioning the index we are able to do anything ;

headerB[0].style.fontWeight = 'bold';
// // Here, by the use of .fontWeight we bold the Add Items text;
