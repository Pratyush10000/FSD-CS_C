const fs = require("fs");

const data = fs.readFileSync('./data.txt', 'utf8');
console.log(data);

if (data.includes("H")) {  // Using includes instead of match
  console.log("H is present");
  
  const newdata = data.replace("H", "AB");  // Ensure correct case
  
  fs.writeFileSync("./data.txt", newdata, "utf8");  // Fix encoding
}


//write 
// fs.writeFileSync("./data1.txt","Hello this is my new work.","utf-8");
// fs.writeFileSync("./data1.txt","ABES","utf-8"); 
// fs.appendFileSync("./data1.txt","Engineering college","utf-8");

//rename
// fs.renameSync("./data2.txt","./data3.txt");