const fs = require('fs')
const parse = require('csv-parse')


fs.readFile('./nra-grades.csv', function (err, fileData) {
    parse(fileData, {columns: false, trim: true}, function(err, rows) {
      // Your CSV data is in an array of arrys passed to this callback as rows.
      console.log(rows[0])
    //   rows.map((columns) => {
    //     columns[0]
    //   })
    })
  })


// write file
// fs.writeFile("./newfile", data, function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 

