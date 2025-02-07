const fs=require('fs');
const read = () =>{
  fs.readFile('./data.txt','utf8', (error, data) => {
    if(error){
      console.log("Error reading file",error);
    }
    else{
      console.log("File content:",data);
    }
    });
}
module.exports =read;