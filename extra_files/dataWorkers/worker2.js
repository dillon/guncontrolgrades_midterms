const fs = require('fs');
const correctDictionaryFolded = require('./newfile2.js');
const correctDict = correctDictionaryFolded.stateInfo
const oldDict = require('./computatedGrades.js');

let workingDictionary = oldDict.stateInfo;

for (let i in workingDictionary) {
  workingDictionary[i].legislatures.map(function (legislature, l) {
    legislature.districts.map(function (district, d) {
      if (correctDict[i].legislatures[l].districts[d]) {
        district.candidates.map(function (candidate, c) {
          const correctCandidate = correctDict[i].legislatures[l].districts[d].candidates[c]
          if (correctCandidate) {
            const correctGrade = correctCandidate.grade
            const workingGrade = candidate.grade
            if (workingGrade !== correctGrade && correctGrade !== undefined && workingGrade !== undefined && workingGrade !== 'AQ' && correctGrade !== 'AQ') {
              console.log(`stateInfo.${i}.legislatures[${l}].districts[${d}].candidates[${c}].grade = '${correctGrade}'`)
            }
          }
        })
      }
    })
  })
}