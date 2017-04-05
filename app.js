
//Assignment 1

document.write ("<h1> Assignment 1 </h1>")
var num1 = +prompt ("Enter the number to generate the table", 2);
var input = +prompt ("Enter the number till the table needs to be generated", 10);

for (i = 1; i <= input; i++){
  
document.write (num1 + "x" + i +"=" + num1*i + "</br>")

}

// Assignment 2

document.write ("<h1>Assignment 2</h1>");

var i,j;

for (i = 1; i <= 10; i++ ){
    for (j = 1; j <= i ; j++){
      document.write("*");
      
    }
   document.write (" </br> ");

}


//Assignment 3

document.write("<h1>Assignment 3 </h1>");

var n = 6;
for(var i=n;i>0;i--) { 
  
  for(var j=1;j<i;j++) { 
   
   document.write("&nbsp"); } 
   for(var k=j-1;k<n;k++) { 
    document.write("*"); 
  document.write("&nbsp"); 
  } 
  document.write("<br>"); 
 }


//for the second half of diamond

 for(var a=n-1;a<n&&a!=-1;a--) { 
  for(var b=n;b>a;b--) { 
   document.write("&nbsp"); } 
   for(var c=0;c<a;c++) { 
    document.write("*"); 
  document.write("&nbsp");
 } 
        document.write("<br>");
    }

