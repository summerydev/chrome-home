const fs = require('fs');
// import fs from 'fs';
'use strict'
// const fs = require('fs');
// import fs from 'fs';
function csvToJSON(csv_string) {
  const rows = csv_string.split("\r\n");
  const jsonArray = [];
  const header = rows[0].split("|");

  for (let i = 1; i < rows.length; i++) {
    let obj = {};
    let row = rows[i].split("|");
    for (let j = 0; j < header.length; j++) {
      obj[header[j]] = row[j];
    }
    jsonArray.push(obj);
  }
  return JSON.stringify(jsonArray);
}

// 브라우저 콘솔에서 fs 인식 불가능
// const fs = require('fs');
// import fs from 'fs';
const file_csv = fs.readFileSync("./quotes.csv");
const string_csv = file_csv.toString();


const arr_json = csvToJSON(string_csv);
const quotes_csv = JSON.parse(arr_json);

// 콘솔에서 js 파일 실행 시 document 인식 불가능
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes_csv[0]);

// 해결방법 고민
// fs말고 다른 방식으로 csv 파일을 읽어온다 -> 브라우저에서 작동 가능