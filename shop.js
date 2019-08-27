//start   shop.js

    
    //I need to simulate the data flowing in from the cookie
    
    //1, 1, 5, 1
    
    // put it into an array
  //    var simple = [];
//simple[simple.length] = "  
        
        
    //crucial leave this here ==============================
    //damn, this number reflects how big it sees. good thing I noticed that.
    var arrayLength= 40; //I will need to add to this and perhaps try ending with [];
    //be sure to change this number if more rows are added otherwise it won't see that data
    
    var excelDB = new Array(arrayLength);
    for(var i = 0;i< excelDB.length;i++){
      excelDB[i] = new Array(arrayLength);
    } //end loop
    
//I will need to store two image names or 1 and then call them front.#.jpg and back.#.jpg
//                  0      1        2      3        4          5               6                 7
 excelDB[0][0]  = ['0',  'category','gen','size', 'subshirts','Idtag',      'title',          'price', 'pic1',     'pic2',  'largepic']; //key labels
 excelDB[0][1]  = ['1',  'shirts', 'mens',  'L',  'shirt',      'MDN786',  'Rugby Shirt',      '55',   'eight',     'nine',     'ten'];
 excelDB[0][2]  = ['2',  'shirts', 'womens',  'M', 'hoodie',    'MDN786',     'Jersey',        '87',   'eight',     'nine',     'ten'];
 excelDB[0][3]  = ['3',  'hats', 'mens',  'M',     'shirt',    'MDN782',      'Ocean Pacific','55', 'eight',     'nine',    'ten'];
 excelDB[0][4]  = ['4',  'shirts',  'womens','M',  'hoodie',      'MDN781',   'Nike',          '65', 'eight',     'nine',    'ten'];
 excelDB[0][5]  = ['5',  'shirts',  'womens','M',  'hoodie',      'MDN785',    'adidas',        '65', 'eight',     'nine',    'ten'];
 excelDB[0][6]  = ['6',  'shirts',  'womens','M',  'hoodie',    'MDN785',       'Fruit of Loom',   '55', 'eight',     'nine',    'ten'];
 excelDB[0][7]  = ['7',  'hats',   'womens','M',  'hoodie',      'MDN735',     'Holister',        '55', 'eight',     'nine',    'ten'];
 excelDB[0][8]  = ['8',  'shirts',  'womens', 'M',  'hoodie',   'MDN785',      'Nike',         '45', 'eight',     'nine',    'ten'];
 excelDB[0][9]  = ['9',  'shirts', 'womens',  '2XL','hoodie',    'MDN755',     'Gap',           '56', 'eight',     'nine',    'ten'];
 excelDB[0][10] = ['10', 'shirts', 'mens', 'L',  'shirt',     'MDN785',        'North Face',      '88', 'eight',     'nine',    'ten'];
 excelDB[0][11] = ['11', 'hats', 'mens',  '2XL',    'shirt',      'MDN785',    'North Face',     '87', 'eight',    'nine',    'ten'];
 excelDB[0][12] = ['12', 'shirts',   'mens', 'M',  'longsleeve','MDN785',        'Nike',          '120', 'eight',     'nine',    'ten'];
 excelDB[0][13] = ['13', 'hats',   'womens', 'L',  'shirt',      'MDN784',       'Adidas',        '130', 'eight',     'nine',    'ten'];
 excelDB[0][14] = ['14', 'shirts', 'womens', 'M',  'hoodie',        'MDN789',    'Jersey',         '110', 'eight',      'nine',    'ten'];
 excelDB[0][15] = ['15', 'shirts', 'mens', 'XL',  'shirt',       'MDN785',        'Nike',         '120', 'eight',      'nine',    'ten'];
 excelDB[0][16] = ['16', 'shirts', 'mens', 'XL',  'shirt',     'MDN785',          'Wanda',       '55', 'eight',      'nine',    'ten'];
 excelDB[0][17] = ['17', 'shirts', 'mens', 'XL',  'shirt',     'MDN785',          'Minion',  '86', 'eight',      'nine',    'ten'];
 excelDB[0][18] = ['18', 'shirts', 'womens', 'M',  'hoodie',     'MDN785',     'schwab',      '50', 'eight',      'nine',    'ten'];
 excelDB[0][19] = ['19', 'shirts', 'womens', 'M',  'hoodie',       'MDN785',    'yahoo',     '49', 'eight',      'nine',    'ten'];
 excelDB[0][20] = ['20', 'shirts', 'womens', 'M',  'shirt',     'MDN785',          'Dancer',      'seven', 'eight',      'nine',    'ten'];   
 excelDB[0][21] = ['21',  'hats', 'mens',  'L',  'shirt',      'MDN786',           'Blue Wave',    '27',   'eight',     'nine',     'ten'];
 excelDB[0][22] = ['22',  'shirts', 'womens',  'M', 'shirt',    'MDN786',       'Santa Cruz',        '43',   'eight',     'nine',     'ten'];
 excelDB[0][23] = ['23',  'shirts', 'womens',  'M', 'hoodie',    'MDN782',         'Natrual Bridges',  '55', 'eight',     'nine',    'ten'];
 excelDB[0][24] = ['24',  'shirts',  'womens','M',  'hoodie',      'MDN781',      'Santa Clara',   '25', 'eight',     'nine',    'ten'];
 excelDB[0][25] = ['25',  'shirts',  'womens','M',  'shirt',      'MDN785',       'Stanford',  '65', 'eight',     'nine',    'ten'];
 excelDB[0][26] = ['26',  'shirts',   'womens','M',  'shirt',    'MDN785',        'Cal Berkely',  '55', 'eight',     'nine',    'ten'];
 excelDB[0][27] = ['27',  'shirts',   'womens','M',  'hoodie',      'MDN735',       'Minion',  '85', 'eight',     'nine',    'ten'];
 excelDB[0][28] = ['28',  'shirts',  'womens', 'L',  'shirt',   'MDN785',           'coffee',  '45', 'eight',     'nine',    'ten'];
 excelDB[0][29] = ['29',  'hats', 'mens',  '2XL',    'shirt',    'MDN755',           '24',  '56', 'eight',     'nine',    'ten'];
 excelDB[0][30] = ['30', 'shirts', 'womens', 'L',  'shirt',     'MDN785',            'cafe',  '46', 'eight',     'nine',    'ten'];
 excelDB[0][31] = ['31', 'hats', 'mens',  '2XL',    'shirt',      'MDN785',           '24',  '87', 'eight',    'nine',    'ten'];
 excelDB[0][32] = ['32', 'shirts',   'womens', 'M',  'longsleeve','MDN785',        'strawberry', '160', 'eight',     'nine',    'ten'];
 excelDB[0][33] = ['33', 'hats',   'womens', 'M',  'shirt',      'MDN784',          '39',  '130', 'eight',     'nine',    'ten'];
 excelDB[0][34] = ['34', 'shirts', 'mens', 'S',  'shirt',        'MDN789',          'jet fuel',  '77', 'eight',      'nine',    'ten'];
 excelDB[0][35] = ['35', 'shirts', 'mens', 'XL',  'shirt',       'MDN785',           'pumpkin',   '120', 'eight',      'nine',    'ten'];
 excelDB[0][36] = ['36', 'shirts', 'womens', 'M',  'shirt',     'MDN785',          '39',  'seven', 'eight',      'nine',    'ten'];
 excelDB[0][37] = ['37', 'shirts', 'womens', 'M',  'shirt',     'MDN785',          '39',  'seven', 'eight',      'nine',    'ten'];
 excelDB[0][38] = ['38', 'shirts', 'womens', 'M',  'shirt',     'MDN785',          'fishfood',  'seven', 'eight',      'nine',    'ten'];
 excelDB[0][39] = ['39', 'shirts', 'womens', 'M',  'shirt',       'MDN785',          'guppy',  'eight', 'eight',      'nine',    'ten'];
 excelDB[0][40] = ['40', 'shirts', 'womens', 'M',  'shirt',     'MDN785',          '39',  'seven', 'eight',      'nine',    'ten'];   




       
    
     
 var choices = [];
     choices[choices.length] = "";



function dunkindonuts(){
var dog = localStorage.getItem('Tahoe'); //receives string with 4 single digit numbers
// representing the boolean search criteria on the filter nav page
choices[choices.length] = dog.charAt(0);
choices[choices.length] = dog.charAt(2);
choices[choices.length] = dog.charAt(4);
choices[choices.length] = dog.charAt(6);

//this fills up the choices by the user for the dynamic search engine
if(choices[1] == "1"){
choices[1] = "shirts";
} //end if

if(choices[1] == "2"){
  choices[1] = "hats";
} //end if

//======================

if(choices[2] == "1"){
  choices[2] = "mens";
} //end if


if(choices[2] == "2"){
choices[2] = "womens";
} //end if

///=====================
if(choices[3] == "1"){
choices[3] = "S";
} //end if
if(choices[3] == "2"){
choices[3] = "M";
} //end if

if(choices[3] == "3"){
choices[3] = "L";
} //end if
if(choices[3] == "4"){
choices[3] = "XL";
} //end if
if(choices[3] == "5"){
choices[3] = "2XL";
} //end if

//==============
if(choices[4] == "1"){
choices[4] = "shirt";
} //end if

if(choices[4] == "2"){
choices[4] = "longsleeve";
} //end if

if(choices[4] == "3"){
choices[4] = "hoodie";
} //end if



//alert("stop before the big plunge into the GTI search engine");

gti_search();  //search engine turned on here from the inputs received from the nav filter page
}//end func












//dunkindonuts(); //this grabs the data inputs from nav filter in memory and uses them
//to feed into the gti search engine

//I think that I can do onload="dunkindonuts()"



/*   GTI Search Engine   */
//the GTI search engine function is here
function gti_search(){ 

var compare_match = [];
compare_match[compare_match.length] = ""; //position 0 contains nothing


  var nugget=1;//position where what I am looking for it
var testing = 0;
var testing1 = 0;
var smart1;
var sweet; //used for 1 match for shirts to capture the row number which we need


/*

           GTI DYNAMIC SEARCH ENGINE          Autumn 2017 Keizer Oregon.
           
           Copyright September 2017 Blake Southwood. Algorithm design is copyrighted.
           
           Designed and Developed by Software Engineer Mr. Blake Southwood
       
       //still need to have if for if NO MATCHES
            
*/      /* loop    */

var coast = [];
coast[coast.length] = "shirts";
// so these will be constants and I just put the correct string into the 0 or 1 slot depending
//on what I prefer for simplicity. 

 var bridges = [];
bridges[bridges.length] = "mens";  //0
bridges[bridges.length] = "womens";//1

var leaf = [];
leaf[leaf.length] = "S";  //0
leaf[leaf.length] = "M";//1
leaf[leaf.length] = "L";//1
leaf[leaf.length] = "XL";//1
leaf[leaf.length] = "2XL";//1

 var subshirts = [];
subshirts[subshirts.length] = "shirt";  //0
subshirts[subshirts.length] = "longsleeve";//1
subshirts[subshirts.length] = "hoodie";//2

 var row_capture = [];
 row_capture[row_capture.length] = "";
 
 

 

 var smart1 = "<!DOCTYPE html>";
     smart1 += "<html>";
     smart1 += "<title>Modern Day News</title>";
     smart1 += "<meta name='viewport' content='width=device-width, initial-scale=1'>";
     smart1 += "<link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3mobile.css'>";
     smart1 += "<link rel='stylesheet' href='/lib/w3-theme-teal.css'>";
     smart1 += "<body style='max-width:600px'>";
     smart1 += "<body bgcolor = white>";
     smart1 += "<table width = 500>";
     smart1 += "<tr><td width = 110></td><td><font face='Menlo'><font size=4>Modern Day News</font></td></tr>";
	 smart1 += "</table>";
	 smart1 += "<table   CELLPADDING='4' style='border-collapse:collapse;border: ";
	 smart1 += "1px solid #D8D8D8; '  width = 410  border = 1 bgcolor=white  >";
     smart1 += "<tr><td align=center><font size=1><font face='Menlo'><a href='iphone_home.html' style='display:block;text-decoration:none'>";
	 smart1 += "<font color=black>Home</a></td>";
	 smart1 += "<td align=center><font size=1><font face='Menlo'><a href='iphone_aboutus.html' style='display:block;text-decoration:none'>";
     smart1 += "<font color=black>About</a></td>";
     smart1 += "<td ><font size=1><font face='Menlo'><a href='iphone_news.html' style='display:block;text-decoration:none'>";
     smart1 += " <font color=black>News</a></td>";
     smart1 += "<td align=center><font size=1><font face='Menlo'><a href='iphone_videos.html' style='display:block;text-decoration:none'>";
     smart1 += "<font color=black>Videos</a></td>";
     smart1 += "<td align=center><font size=1><font face='Menlo'><a href='iphone_characterprofiles.html' style='display:block;text-decoration:none'>";
     smart1 += "<font color=black>Characters</a></td>";
     smart1 += "<td align=center bgcolor=palegreen><font size=1><font face='Menlo'><a href='#' style='text-decoration:none'>";
     smart1 += "<font color=black>Merchandise</a></td>";
     smart1 += "<td align=center><font size=1><font face='Menlo'><a href='iphone_contactus.html' style='text-decoration:none'>";
     smart1 += "<font color=black>Contact</a></td>";
     smart1 += "</tr></table>";
     smart1 += "<table   CELLPADDING='4' style='border-collapse:collapse;border: ";
     smart1 += "1px solid #D8D8D8; '  width = 410  border = 1 bgcolor=white >";
     smart1 += "<tr><td width= 20% bgcolor=white align=center><font size=1><a href='iphone_merchandise_filter.html' style='display:block;text-decoration:none'>";
     smart1 += "<font face='Menlo'><FONT COLOR=black>Filter </a></font></td>";
     smart1 += "<td width= 20%  bgcolor=#81D4FA align=center><font size=1><font face='Menlo'>";
     smart1 += "<font color=black><div style='position;absolute;left:10px; bottom:1px;'><div class='table-cell'>Shop</font></div></div></td>";
     smart1 += "<td width= 20% bgcolor=white align=center><font size=1><font face='Menlo'>";
     smart1 += "<a href='iphone_merchandise_details.html' style='display:block;text-decoration:none'><font color=black>Details</a></font></td>";
     smart1 += "<td width= 20% align=center><font size=1><font face='Menlo'>";
     smart1 += "<a href='iphone_merchandise_basket.html' style='display:block;text-decoration:none'>";
     smart1 += "<font color=black>Basket</a></font></td>";
     smart1 += "<td width= 20% align=center><font size=1><font face='Menlo'>";
     smart1 += "<a href='iphone_merchandise_checkout.html' style='display:block;text-decoration:none'>";
     smart1 += "<font color=black>Check Out</a></font></td>";
     smart1 += "</tr></table>";
     smart1 += "<br>";
     //smart1 += "<table bgcolor= yellow><tr><td>BETA testing  PUMPKIN PATCH CODE></td></tr></table>";
    
  //this is a filler div for the search results that is replaced when there are results and it says how many
  //above the actual output because it's expected to be seen at the top but it's calculated afterwords 
  
    smart1 += "<div id='search_results'><a href='#' onclick='show_instructions();'";
    smart1 += " style='display:block;text-decoration:none;'><table width = 450><tr><td align=left>";
    smart1 += "<table  style ='border: 1px solid #D8D8D8;' width = 450 bgcolor=honeydew >";
    smart1 += "<tr><td align=center><font face='Arial'>";
    smart1 += "<font size=3>&nbsp;&nbsp;search results</font></td></tr></table>";
    smart1 += "</td><td><td align=right>";
    smart1 += "</td></tr></table></a></div>";
    //document.getElementById("search_results").innerHTML = smart1;  //this didn't work because this div wasn't there yet
    
  
   //===============================================================================================
   //===============================/////shirts search engine //////////==============================
   //===============================================================================================
   //debugger;
if ( choices[1] == "shirts" ) { //then continue with this 4 boolean shirts search engine   //bypass to 3 boolean search engine
//alert("shirts LOOP triggered");

//============= LOOP ===================
for(var j = 0;j< excelDB.length;j++){   //da j is the counter, too funny

 // 4 Boolean ifs for category AND gender AND size AND type
 //this is a dynamic search engine with the column labels the same 
 //but the selected filter items change automatically based on choice
 //all 4 criteria must be met for the search to commense.
 
if((excelDB[0][j][1] == choices[1]) && (excelDB[0][j][2] == choices[2]) &&
   (excelDB[0][j][3] == choices[3]) && (excelDB[0][j][4] == choices[4])){ 
   testing++; //add 1 to the count of matches if all 4 criteria met
   
   //this grab the first match number in loop for shirts but doesn't test if only one loop
   // and it puts it into row_capture[first_row_num];
 //++++++++++++++   
   row_capture[first_row_num] = excelDB[0][j][0];
   //alert(row_capture[first_row_num]);
 //++++++++++  
   //this writes out one row with the information about the shirt item
   //I will comment this out later. for now I need to see if for confirmation of information
   
   //I might have to print the row out into an array
   //but if I know the array row number I should still be able to access it at my leisure.
   
   // THE YELLOW ROWS ARE HERE 
//row info my meat and potatoes
//============================================================================================
//============================================================================================
//this is the LIGHT YELLOW ROWS WHICH WORKS PERFECTLY AND CAN SOLVE ALL OF MY PROBLEMS

// TEMPORARILY TURNED OFF ON SATURDAY OCT 7, 2017 AT 4PM PACIFIC TIME FOR TESTING

 smart1 += "<table><tr bgcolor=lightyellow><td>" + "row #" + excelDB[0][j][0] + "</td><td>";
 smart1 +=  excelDB[0][j][1] + "</td><td>" + excelDB[0][j][2]  +  "</td><td>" + excelDB[0][j][3];
 smart1 += "</td><td>" + excelDB[0][j][4]  +   "</td><td>" + excelDB[0][j][5] + "</td><td>" + excelDB[0][j][6];
 smart1 += "</td><td>" + excelDB[0][j][7]  +   "</td><td>" + excelDB[0][j][8] + "</td><td>" + excelDB[0][j][9];
 smart1 +=  "</td></tr></table><br><br>";



 
 //what to work on Thursday october 5th
 //this does one item per row. I need to do 2 items per row 
 //I =====> think that what I need to do is put into memory the row#
 // at this point I know that I have a match with excelDB[0][j][0] and I need to add it an array
 // and I can use the standard method arrayname[arrayname.length] so they are in order
 
 
  row_capture[row_capture.length] = excelDB[0][j][0]; //this should fill up the array starting with count 1 since 0 already is full
  //this fills up an array with the matches in the correct order
  

 
 } //end if else
} //END LOOP 








var odd_number_of_items;

if (testing % 2 != 0 ){
 odd_number_of_items = "true";
 //alert("it's odd");
 }else{
 //alert("it's even");
 odd_number_of_items = "false";
 
}

var single_shirt = "false"; //by default

//the number is in the variable testing.
//testing if the total number is even or odd.

//but first determine(for fun) how many times to do the loop.
//  loop_count is defined here coming from testing and glass.
var loop_count =testing;
alert("loop_count = " + loop_count);

var glass = testing;
glass = glass/2;
alert("glass = " + glass);

var loop_count = glass;
alert("loop_count = " + loop_count);


if (glass % 2 != 0 ){
 //alert("it's not even baby");
}

if(testing % 2 == 0){
  //alert('the total number of results is even ');
}else{
  //alert(" it's not even - it's an ODD number");
} //end if

/*
now I need to keep track of how many loops AND if their is the single shirt true or false
if single shirt true then show it. If single shirt is false then don't show it

at this point the number of loops is .... the variable >>>>answer <<<

      if single_shirt == 'true'; then show it AFTER the loop, calling the single shirt section
      //which is based on if single_shirt is true.
      if the single_shirt == "false" it's not shown anywhere
      
      when the single_shirt is shown is either at the top with no double shirt
      OR at the end of the doubles on it's own row - those are the only possiblities. 
      
      
      
      if there is only 1 match then the loop is bypassed and not run


*/
///------------------------------------***************-----------------======================
//initial scenarios
// if 1 item
var onlyone;
//MEANING ONLY 1 MATCH - NOW ABOUT GRABBING THE ROW NUMBER   //  testing == "1" && onlyone == "true"
if (testing == "1"){ // <<=======================
//alert("only one match");
onlyone = "true"; //setting the one and only variable for one shirt returned
//alert("just maybe = " + row_capture[1]);
var perhaps = row_capture[1];



//I need anotehr variable for only one match 
// it is showing 32 retrieved but it is showing output 34
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//================================================================================
// THEN WHAT I NEED IS CAPTURING THE ROW NUMBER WHICH BY DEFINITION MUST BE KNOWN.
// ALL I NEED IS THE DAMN ROW NUMBER AND THEN HAVE A SEPARATE SINGLE TSHIRT GENERATOR
// FOR THE SPECIAL CASE SCENARIO OF ONLY ONE MATCH SO THAT WAY IT'S FILTERED DOWN TO THAT
// AND SPECIFICALLY FORKS FOR THAT ONE SPECIAL SCENARIO THAT SEEMS TO BE TRIPPING ME UP
//=================================================================================
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//==================
// so I need to grab the row number and I am gold.
// I think that the issue is I need a separate generator for a single match comopared
// to the odd number last item which by definition is an odd number
//if last match single it shows wrong row number
//if it's the only sole match it doesn't show the row number


//alert(excelDB[0][j][0]); //grabbing from the exceldb

//var badnews = excelDB[0][j][0];

//alert("badnews = " + badnews);
    //alert("you do the one single template with one item and that's it");
    //smart1 += "<table bgcolor=orange><tr><td> do no loop only single one item template</td></tr></table><br>";
  single_shirt = "true";
  //if I am in a loop maybe I should jump out here for simplicity
  
  //I need anotehr variable for only one match 
  
  
 } //end if

 
// if 2 items

if (testing == '2'){
 //alert("you do the one loop for 2 items");
 loop_count = "1";
 single_shirt = "false";
 //smart1 += "<table bgcolor=orange><tr><td> do 1 loop only</td></tr></table><br>";

 }//endif


//if 3 items

if( testing == '3'){
   loop_count = "1";
   single_shirt = "true";   //so if it's an odd total more than 1 shirt then single_shirt = true;
}

    //alert("you do one loop for 2 items and the single item template");
    smart1 += "<table bgcolor=orange><tr><td> do 1 loop loop only and the single item template</td></tr></table><br>";
    smart1 += "<table bgcolor=orange><tr><td> do one loop only  and the single item template</td></tr></table><br>";
    smart1 += "</td></tr></table><br>";
  //by default it will be at the end, the last item
   
}//end if



if(testing == '4'){
   loop_count = "2";
   single_shirt = "false";
} //end if

//this test for 5 and more matches
if(( testing > '4') && (testing % 2 == '0')){  //means IF EVEN single_shirt = false
loop_count = testing/2;
loop_count = Math.floor(loop_count); //this should fix the bug ====
//alert("do " + loop_count + "loops only");
//smart1 += "<table bgcolor=orange><tr><td> do " + loop_count +" loops only</td></tr></table><br>";
single_shirt = "false"; //don't show it at the end (the caboose or tail);

}// end if

//I believe that this will show the correct number of items
//we know it's at least 4 AND odd meaning it's 5 or above
if ((testing > '4') &&  (glass % 2 != '0' )){ //meaning IF ODD then show single shirt at end
loop_count = testing/2; //determines number of loop number by taking the total and dividing by 2
loop_count = Math.floor(loop_count); //chops off the .5 at the end 

single_shirt = "true"; //yes show it at the end

//alert("do " + loop_count + " loops and 1 single template with one item");



//smart1 += "<table bgcolor=orange><tr><td> do " + loop_count +" loops and 1 single template with one item</td></tr></table><br>";

}// end if
//smart1 += "<table bgcolor=orange ><tr><td> # of matches = " + testing + "</td></tr></table><br><br>";

  var sky = "<div id='search_results'><a href='#' onclick='();'";
   
   
} //end mighty if



////==it's done at this point making it's little rows but I would have the number of matches
// by this point


//if the number = 2 or the first 2 of several rows of 2 .
//I need to figure out how logic works

//this will represent 2 items. so I will need a loop and feed two data rows in.
// first data is first row
//second data is second row or the right side.
//they will be in a sequence

//I can access the information data above and knowing how many rows I can print I can do it.
//starting with shirts testing printing out shirts but no true data used yet

if(loop_count >= 1){

// for loop here ======================== 

/*
  if sequence is 2 do one loop 
  if sequence is 3 do one loop + 1 extra template
  if sequence is 4 do two loops
  if sequence is 5 do two loops + 1 extra template
  if sequence is 6 do three loops
  
  
  TAKE COUNT AND IF IT'S EVEN THEN IT'S JUST ROWS OF THE DOUBLE SETS template.
  IF teh count of rows is odd then it means one extra.
  If it's one it's just the one with only a picture on the left side, right side empty.
  Otherwise. the loop count is the number divided by 2.
  
  If the initial number is odd then we know it's both loop template and the single template..
  loop = number of results /2. + the do once template.
  
  if it's even then just use the loop template / 2 = how many loops.
  
  that's the formula.
  
  
  take the number of matches and divide it by 2 and that is the number
  of times that I do the loop and then if there is a .5 that means one more after
  the loop template.

*/

//  using loop_count for the number of times that the double item is output
//   I will feed in the variables later from the rows above but not just yet



//============================================================================================
// ==================USING  LOOP to PRINT TSHIRTS of two image -two item  template ==============
//==============================================================================================
//   main template for printing out on shop page row of two items of shirts




//will only be triggered if at least 2 items and loop_count > 0 
//there will be bugs - that is the only certainty
//alert("before doing our ROYAL GREAT PUMPKIN loop we see that the loop_count = " + loop_count);

// ======== this is the loop for generating the tshirts with data
//or I can do the loop again of teh original seach engine
//the loop_count is based on the number of matches

var brain;
for(var victory=0; victory<loop_count; victory++){
//at least 2 items minimum
brain = victory;
brain = brain + 1; //this takes the number of rows counted above and changes the name from victory to brain
//ad then adds one to the count of brain since the loop considers starting with 0 as a number when I don't like that

//if (loop_count == "1"){                               //the current loop is victory not loop_count which is total loops

// TEMPORARILY TURNING OFF BRIGHT YELLOW ROW OUTPUT NUMBER ON SATURDAY, OCT 7, 2017 AT 4PM PACIFIC TIME
/*
smart1 += "<table width = 410 border = 0 bgcolor='yellow'><tr><td>&nbsp;&nbsp; row number " + brain + " &nbsp;</td></tr></table>"; 
*/

var football = brain; //loop count number 
//this formula calculates the matched row numbers from above before they are inserted into the double set tshirt printer
//it takes teh loop number from brain and renames it football so as to not interfere with the count on the brain variable.
//then for the second row number (on the right) it multiplies that by 2 and to get the first row number subracts one from it.
//the formula is seen below and it seems reliable. 
var second_row_num = football * 2;
var first_row_num =second_row_num - 1;  //does the formula which is second row number brain * 2, first_row = secondrow - 1;
//this is generating two rows
//this is where the matching rows are printed for seeing what it's doing and to make sure I make this puppy work correctly

// TEMPORARILY TURNED OFF SHOWING ROW INFORMATION ON SATURDAY, OCT 7, 2017 FOR TESTING AT 4PM PACIFIC TIME
/*
smart1 += "<table width = 410 border = 0 bgcolor='lightyellow'><tr><td align=center>" + row_capture[first_row_num] + "</td>";
smart1 += "<td align=center> " + row_capture[second_row_num] + " &nbsp;</td></tr></table>"; 
*/

// look in here for the last row number
//::::::::::::::::::::::::::::::::::::::::::::::
var coffeetime =loop_count;

//alert("pumpkin should be the last row number hopefull ... please   = " + coffeetime);
//::::::::::::::::::::::::::::::::::::::::::::::

//var sweet = row_capture[first_row_num]
/*
      <div id="row#top_row#intwinstshirts"> <td  width=18% bgcolor=lightgrey align=center>
     //it would look like this id="23_3"> which is short and sweet and effective
       // so what this represents is array row number _ then output twin shirt row number.
       
         by using the row number I can determine which select button was pushed
         first part is top skinny row number for id and array row
         second part of the div will be where in the output
         but I will actually snag teh first number in the div id to determine the array data
         so I should know precisely what shirt it is based on the default row number from the top
         and in the print out of tshirt doubles that row number is either from the loop or single one.
         and based on the top skinny row number I don't care if it's on the left or right
         for it will be determined by where the div tag id is located and it will find it 
         because the div id acts as an address. 
    */
    
         
//-------------------- working on this area to feed in description and prices -----------------

//} //end if

smart1 += "<table border = 0 bgcolor=lightgrey width = 410 spacing = 0 style='border: 0px solid #D8D8D8;'>"; 
//left side item first    description and price
smart1 += "<tr><td width=47% align=center>";

//assigning row numbers of current match
//these are the row number for teh matches revealing the access to the information about the item
var alpha   = row_capture[first_row_num];
var beta    = row_capture[second_row_num];

// alert("we have " + alpha + "    " + beta);
 
// 2 and 4 I believe

//left side
//White Rugby XL
///     here we have the grabbing of the tshirt description title and the price for left side
smart1 += excelDB[0][alpha][6]; //the description of the shirt however brief


//shirt short description 
//+++++++
smart1 += "&nbsp;$";
smart1 += excelDB[0][alpha][7]; //the price
//alert('and here we have (maybe a price)' + excelDB[0][alpha][8]); //price

smart1 += "</td>";

//right side item second    description and price
smart1 += "<td align=center>";

//alert("and what the hell is this " +  excelDB[0][beta][8]);    //Grey Jersey XL
//the second one's description and rpice should be using the beta second number second row

//==== this is the grabbing of right side of tshirt short name and the price
smart1 +=  excelDB[0][beta][6]; //the description of the shirt however brief

// description name of the shirt
///+++++++++++
smart1 += "&nbsp;&nbsp;$"
smart1 += excelDB[0][beta][7]; 
//smart1 +=

//alert("and this is what pretell " +  excelDB[0][j][beta]);



smart1 += "</td></tr>";



//the shirt description will go here and that will be from teh row array above based on the row number
//next to this is teh price for the item which will also be gleaned from the row number.
// the row number is the key for the correct data for each item and picture. 

smart1 += " </table> <table border = 1 bgcolor=white width = 410 spacing = 0 style='border: 0px solid #D8D8D8;'> ";
smart1 += "<tr><td align=center bgcolor=white>";

//left side item odd numbered picture name
smart1 += "<img src='greyshirt.jpg' alt='Circle' id='circle1' height= '250px;' width='180px;' onclick='change1();'> </td>";
//this image name will be inserte here and is based on the row number which I grabbed from above
//so it should be easy to determine the showername which will be in the excelDB array by row number
//I must remember that there will be a front and back image so I will actually need 2 images for each item
//for displaying front and back but initially just the front picture will load. 
//right side even numbered picture name

smart1 += "<td><img src='greyshirt.jpg' alt='Circle' id='circle2' height= '250px;' width='180px;' onclick='change2();'>";
smart1 += " </td></tr>";
 //  left side select button table cell field


smart1 += "<tr><td align=center bgcolor= #efefef align=center ><font face='Menlo'> &nbsp;select&nbsp; </font> </td>";

//  right side select button table cell field
smart1 += "<td bgcolor= #efefef align=center ><font face='Menlo'> &nbsp;select&nbsp;</font></td></tr>";
smart1 += "<tr><td align=center bgcolor= #efefef  align=center ><font face='Menlo'> &nbsp;&nbsp; </font></td></tr>";
smart1 += "<tr><td align=center>&nbsp;</td><td align=center>&nbsp;</td></tr></table><br><br>";
}//end if
} //end for loop
// END LOOP TO PRINT TSHIRTS 


//                             end of template to print 2 shirts side by side
//==================================================================================
//==================================================================================





//so this will print out one row of two shirts 
//next I will have a template for only one results, since above row is for 2 results.
// the one result is if 1 result and if many results the last odd item will be 1 result so this does dual duty.



/*
okay if I get the total number of matches (skinny rows of data) I can
figure out how many 2 set rows there are by taking the total from above and dividing by 2.
then I know how many times thru the for loop is necessary and I can set the length that way.
And after dividing by 2 like if there are 10 matches then 5 rows.
if there are 11 matches then 5 double set rows and then 1 single lone match after the loop part.

If there is only one match then there is no loop just the one single lone match.

the formula is total divided by 2. exmaple 25 matches / 2 = 12.5 so  = 12 rows + 1 single
for a total of 13 true double rows and the last one only has one item and not 2.
So 12 times thru the loop for the double sets,
and the last one is single for row 13

so the number of times thru the loop can be determinedf and if it's even like 4 or 6 times
then there is no lone item afterwards. so that's good to know.

And by doing it first the way it's set up now in single rows I can assign the two double set
rows what items and idtag and pictures that the¥ will have.




.

*/




// if many matches the last one is currently dam wrong. 
 //showing strawberry 32 and not minion 27
 // this is wrong if more than one match and total number is odd
 // and just printing one at the bottom 
 // so if I grab length and get the last number or just the row number before it grabs the shirt info for the proper row

//==========================================================================================
//             THIS PRINTS JUST ONE SHIRT WHEN THERE IS ONLY 1 RESULT FOR A SEARCH 


//============================ this is the template for doing 1 one match with  right side empty ==========
//====================================================================================================
//====   so this one does not do anything in a loop . this just prints one shirt nothing on right
//==============  this prints the ONE SHIRT on the left after the double shirts are printed if an odd number is outputted. 



/*           I might make this a separate function to reduce the complexity           */



/*
I will know that it will be either the only one or last one in a sequence.
So that really simplifies matters.
*/
//if only one row or more than 2 rows
if(single_shirt == "true"){ //might if
if((testing == "1") || ( odd_number_of_items == "true") && (loop_count >= "1")){
//meaning only 1 result   OR  odd_number of items is TRUE AND loop count at least 1

smart1 += " ";
brain = brain + 1; //this is adding one to brain because it's increasing the row number 

var thebrain = "1"; //row_capture[first_row_num];
//++++++++++++++++
// TEMPORARILY TURNING OF BRIGHT YELLOW ROW NUMBER OF OUTPUT SATURDAY, OCT 7, 2017 AT 4PM PACIFIC TIME

if(testing == "1"){
 smart1 += "<table width = 410 border = 0 bgcolor='yellow'><tr><td> row number " + thebrain + " &nbsp;</td></tr></table>"; 
}//end if

if(testing != "1"){
  smart1 += "<table width = 410 border = 0 bgcolor='yellow'><tr><td> row number " + brain + " &nbsp;</td></tr></table>"; 
 } //end if
 



var football = brain; //this is so the variable brain is not messed up and accidentially added to
var second_row_num = football * 2; //this is caculating the number whether on left or right based on double shirt loop number above

var first_row_num =second_row_num - 1; //I don't know if this will work or not

// TEMPORARILY TURNING OFF LIGHT YELLOW ROW OF ROW NUMBER INFO ON SATURDAY, OCT 7 AT 4PM PACIFIC TIME

smart1 += "<table width = 410 border = 0 bgcolor='lightyellow'>";
smart1 += "<tr><td align=left>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


// bug land ===----------------
// =======================THIS TESTS FOR JUST ONE MATCH BASED ON THE COUNTER ABOVE


//if(testing == "1"){
//var slydog = sweet;// is this right  //+++++++  here it uses teh var perhaps which has the correct row number selected
// smart1 += " &nbsp;&nbsp;&nbsp;" + perhaps  + "&nbsp;</td><td align=center> "; 
// alert(perhaps);
//} //end if

//===================

if(testing != "1"){
smart1 += " &nbsp;&nbsp;&nbsp;" + row_capture[first_row_num] + "&nbsp;</td><td align=center> ";
} //end if


//but this is in the area of printing the last sole one shirt so I just need to grab the row number
// row 32 was hardcoded here which was messing me up, simple bug to fix

if(testing != "1"){ //this tests if more than 1 match so this must be what is being called () debugging
smart1 +=  " &nbsp;&nbsp;&nbsp;</td></tr></table>"; 

// IT GOES HERE 
//only one result with this template
smart1 += "<table border = 0 bgcolor=lightgrey width = 410 spacing = 0 style='border: 0px solid #D8D8D8;'>"; 
//left side item first    description and price
smart1 += "<tr><td width=50% align=center>";
var beatles = row_capture[first_row_num];
//alert(beatles);
//all I need to do is copy the row number from the yellow row above and put it here; it can't be that tough.
//+++++ force feeding it row 32 here
smart1 += excelDB[0][beatles][6]; //shirt description
 //White Rugby XL 
 
smart1 += "&nbsp; &nbsp;$"; //++++ and here 32
smart1 += excelDB[0][beatles][7]; //the price
smart1 += "</td>";
//right side item second    description and price
smart1 += "<td bgcolor=white align=center></td></tr>";
smart1 += " </table> <table border = 1 bgcolor=white width = 410 spacing = 0 style='border: 0px solid #D8D8D8;'> ";
smart1 += "<tr><td align=center bgcolor=white>";
//left side item odd numbered picture name
smart1 += "<img src='greyshirt.jpg' alt='Circle' id='circle1' height= '250px;' width='180px;' onclick='change1();'> </td>";
//right side even numbered picture name
smart1 += "<td><img src='empty.jpg' alt='Circle' id='circle2' height= '250px;' width='180px;' onclick='change2();'> </td></tr>";
 //  left side select button table cell field
smart1 += "<tr><td align=center bgcolor= #efefef align=center ><font face='Menlo'> &nbsp;select&nbsp; </font> </td>";
//  right side select button table cell field
smart1 += "<td bgcolor= white align=center ><font face='Menlo'> &nbsp;&nbsp;</font></td></tr>";
smart1 += "<tr><td align=center bgcolor= #efefef  align=center ><font face='Menlo'> &nbsp;&nbsp; </font></td></tr>";
smart1 += "<tr><td align=center>&nbsp;</td><td align=center>&nbsp;</td></tr></table><br><br>";

} //end if for now
} //end might if
//}// end if not= 1;


//    only one shirt result total for this particular shirt - special case scenario only print one shirt
//    and the bug was that it didn't know the row number which I needed to grab the proper data

//   this is the special situation if only one match and so only one shirt is printed
///////
if ((testing == "1") && (onlyone == "true")){
smart1 +=  " &nbsp;&nbsp;&nbsp;</td></tr></table>"; 

// IT GOES HERE 
//only one result with this template
smart1 += "<table border = 0 bgcolor=lightgrey width = 410 spacing = 0 style='border: 0px solid #D8D8D8;'>"; 
//left side item first    description and price
smart1 += "<tr><td width=50% align=center>";
var beatles = row_capture[first_row_num];
//alert(beatles);
//all I need to do is copy the row number from the yellow row above and put it here; it can't be that tough.
//+++++ force feeding it row 32 here
smart1 += excelDB[0][perhaps][6]; //shirt description
 //White Rugby XL 
 
smart1 += "&nbsp; &nbsp;$"; //++++ and here 32
smart1 += excelDB[0][perhaps][7]; //the price
smart1 += "</td>";
//right side item second    description and price
smart1 += "<td bgcolor=white align=center></td></tr>";
smart1 += " </table> <table border = 1 bgcolor=white width = 410 spacing = 0 style='border: 0px solid #D8D8D8;'> ";
smart1 += "<tr><td align=center bgcolor=white>";
//left side item odd numbered picture name
smart1 += "<img src='greyshirt.jpg' alt='Circle' id='circle1' height= '250px;' width='180px;' onclick='change1();'> </td>";
//right side even numbered picture name
smart1 += "<td><img src='empty.jpg' alt='Circle' id='circle2' height= '250px;' width='180px;' onclick='change2();'> </td></tr>";
 //  left side select button table cell field
smart1 += "<tr><td align=center bgcolor= #efefef align=center ><font face='Menlo'> &nbsp;select&nbsp; </font> </td>";
//  right side select button table cell field
smart1 += "<td bgcolor= white align=center ><font face='Menlo'> &nbsp;&nbsp;</font></td></tr>";
smart1 += "<tr><td align=center bgcolor= #efefef  align=center ><font face='Menlo'> &nbsp;&nbsp; </font></td></tr>";
smart1 += "<tr><td align=center>&nbsp;</td><td align=center>&nbsp;</td></tr></table><br><br>";
// now do I set onlyone = false; or not. I need to think more about that
}
//=====================




















//========================== this just shows no matches for search results
/*
if(testing == 0){
alert("no matches for shirts");
   var cool2 = "<div id='search_results'><a href='#' onclick='show_instructions();'";
    cool2 += " style='display:block;text-decoration:none;'><table width = 200><tr><td align=left>";
    cool2 += " <table  style ='border: 1px solid #D8D8D8;' width = 200 bgcolor=honeydew >";
    cool2 += "<tr><td align=center><font face='Arial'>";
    cool2 += "<font size=3>&nbsp;&nbsp;No matches for shirts</font></td></tr></table>";
    cool2 += "</td><td><td align=right>";
    cool2 += "</td></tr></table></a></div>";
    document.getElementById("search_results").innerHTML = cool2;
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////        HATS SEARCH ENGINE       /////////////===============================

if ( choices[1] == "hats" ) {//bypass to 3 boolean search engine
//alert("hats Loop triggered");
// LOOP
for(var j = 0;j< excelDB.length;j++){
 // 3 Boolean ifs for category AND gender AND size AND type
if((excelDB[0][j][1] == choices[1]) && (excelDB[0][j][2] == choices[2]) &&  (excelDB[0][j][3] == choices[3])){ 
//alert("we have a match");
   testing1++; //add 1 to the count of matches
   
   // TEMPORARILY TURNING OFF LIGHT YELLOW ROW WITH ROW INFO ON SATURDAY, OCT 7TH 2017 AT 4PM PACIFIC TIME
   /*
 smart1 += "<table ><tr bgcolor=lightyellow><td>" + "row #" + excelDB[0][j][0] + "</td><td>" + excelDB[0][j][1] + "</td><td>" + excelDB[0][j][2]  +  "</td><td>" + excelDB[0][j][3] + "</td><td>" + excelDB[0][j][4]  +   "</td><td>" + excelDB[0][j][5] + "</td><td>" + excelDB[0][j][6]  + "</td></tr></table><br>";
   */
 } //end if else
} //end loop 
} //end mighty if

//smart1 += "<table bgcolor=pink ><tr><td> # of matches = " + testing1 + "</td></tr></table><br><br>";

  var sky = "<div id='search_results'><a href='#' onclick='();'";
   
//skip no matches hats message if shirts == true

for(var h=0;h<1;h++){ //loop once
if(testing != 0){
   break;
}
if(testing1 ==0){
  //alert("no matches for hats");
}
} // end loop


//alert('total times thru gti engine looop = ' + j);
smart1 += "</body></html>"
//alert("the number of the " + coast[0] + " " + bridges[1] + " =  " + testing);

 //I will need to create a new array with this array and populate it using a loop arrayname[arrayname.length]
document.write(smart1);

if(choices[1] == "hats" ){
   smart(testing1);//calls the function below to switch the div contents of the search results
 } //end if
if(choices[1] == "shirts" ){
  smart(testing); //calls the function below to switch the div contents of the search results
 } //end if
 
} //end func
//==================================


function smart(x){
//alert("smart called to show search results at the top");

 var sky = " <div id ='search_results'><table width = 410><tr><td align=left>";
     sky += " <table  style ='border: 1px solid #D8D8D8;' width = 410 bgcolor=honeydew >";
     sky += "<tr><td align=left><font size =3><font face='Arial'>&nbsp;";
     
     sky +=  x;
     sky += "<font size=3>&nbsp;results ";
     if(x == 1){
      sky += " for ";
     }//end if
     if(x != 1){
     sky += " for ";
     }//end if
     sky += choices[2];
     sky += " ";
     
if(choices[3] == "S"){
choices[3] = "small";
} //end if
if(choices[3] == "M"){
choices[3] = "medium";
} //end if

if(choices[3] == "L"){
choices[3] = "large";
} //end if
if(choices[3] == "XL"){
choices[3] = "extra large";
} //end if
//if(choices[3] == "2XL"){
//choices[3] = "2XL";
//å} //end if


     sky += choices[3];
     sky += " ";
     sky +=  choices[1];
     sky += " ";
     sky +=  choices[4];
     sky += "</font></td></tr></table>";
     sky += "</td><td><td align=right>";
     sky += "</td></tr></table></a></div><br>";
     document.getElementById("search_results").innerHTML = sky;

} //end func

/////////==============================================================

/*
 
  /* -------------------------------------------------------------------              
     this is called when a left nav video title is selected;
     it triggers makevideowindow() -the appropriate video is then played based on the sequence number in the list when it was generated
    --------------------------------------------------------------------
  */  
function jsfunction(x){
     makevideowindow(x) 
}



//   end script




