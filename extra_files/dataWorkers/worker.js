var fs = require('fs');
var parse = require('csv-parse');
var dictionary = require('./stateInfo.js');
var { stateInfo } = dictionary
var newStateInfo = stateInfo
var namesOfStates = { AL: { full_state_name: 'Alabama' }, AK: { full_state_name: 'Alaska' }, AZ: { full_state_name: 'Arizona' }, AR: { full_state_name: 'Arkansas' }, CA: { full_state_name: 'California' }, CO: { full_state_name: 'Colorado' }, CT: { full_state_name: 'Connecticut' }, DE: { full_state_name: 'Delaware' }, DC: { full_state_name: 'District Of Columbia' }, FL: { full_state_name: 'Florida' }, GA: { full_state_name: 'Georgia' }, HI: { full_state_name: 'Hawaii' }, ID: { full_state_name: 'Idaho' }, IL: { full_state_name: 'Illinois' }, IN: { full_state_name: 'Indiana' }, IA: { full_state_name: 'Iowa' }, KS: { full_state_name: 'Kansas' }, KY: { full_state_name: 'Kentucky' }, LA: { full_state_name: 'Louisiana' }, ME: { full_state_name: 'Maine' }, MD: { full_state_name: 'Maryland' }, MA: { full_state_name: 'Massachusetts' }, MI: { full_state_name: 'Michigan' }, MN: { full_state_name: 'Minnesota' }, MS: { full_state_name: 'Mississippi' }, MO: { full_state_name: 'Missouri' }, MT: { full_state_name: 'Montana' }, NE: { full_state_name: 'Nebraska' }, NV: { full_state_name: 'Nevada' }, NH: { full_state_name: 'New Hampshire' }, NJ: { full_state_name: 'New Jersey' }, NM: { full_state_name: 'New Mexico' }, NY: { full_state_name: 'New York' }, NC: { full_state_name: 'North Carolina' }, ND: { full_state_name: 'North Dakota' }, OH: { full_state_name: 'Ohio' }, OK: { full_state_name: 'Oklahoma' }, OR: { full_state_name: 'Oregon' }, PA: { full_state_name: 'Pennsylvania' }, RI: { full_state_name: 'Rhode Island' }, SC: { full_state_name: 'South Carolina' }, SD: { full_state_name: 'South Dakota' }, TN: { full_state_name: 'Tennessee' }, TX: { full_state_name: 'Texas' }, UT: { full_state_name: 'Utah' }, VT: { full_state_name: 'Vermont' }, VA: { full_state_name: 'Virginia' }, WA: { full_state_name: 'Washington' }, WV: { full_state_name: 'West Virginia' }, WI: { full_state_name: 'Wisconsin' }, WY: { full_state_name: 'Wyoming' } }
const gradesArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F+', 'F', 'F-'] // 15 values

var keepingTrackOfDuplicates = []
var numberOfDuplicates = 0;
var numberOfMatches = 0;
var numberOfMatchesWithGrades = 0;

function flipGrade(grade) {
  var gradeIndex = gradesArray.indexOf(grade)
  if (gradeIndex === -1) { return grade }
  return gradesArray[gradesArray.length - 1 - gradeIndex];
}

function containsDuplicate(obj, list) {
  var j;
  for (j = 0; j < list.length; j++) {
    if (
      list[j].full_name === obj.full_name
      && list[j].party === obj.party
      && list[j].state === obj.state
      // && list[j].body_type === obj.body_type
      && parseInt(list[j].year) > parseInt(obj.year)
    ) { ++numberOfDuplicates; return true; }
  } return false;
}

fs.readFile('./nra-grades.csv', function (err, fileData) {
  parse(fileData, { columns: true, trim: false }, function (err, rows) {
    // Your CSV data is in an array of arrys passed to this callback as rows.
    rows.map(function (row) {
      // if (row.body_type !== 'State House' && row.body_type !== 'State Senate') { // make sure not State House or State Senate
      if (!containsDuplicate(row, keepingTrackOfDuplicates)) {
        for (var i in newStateInfo) {
          newStateInfo[i].legislatures.map(function (legislature) {
            legislature.districts.map(function (district) {
              district.candidates.map(function (candidate) {
                // console.log(candidate.name, row.full_name);
                if (
                  candidate.name === row.full_name
                  && newStateInfo[i].name === namesOfStates[row.state].full_state_name
                ) {
                  var partyMatches = true;
                  if (row.party && candidate.party) {
                    if (row.party === 'D') {
                      partyMatches = candidate.party[0] != 'R'
                    } else if (row.party === 'R') { partyMatches = candidate.party[0] != 'D' }
                  }
                  if (partyMatches) {
                    // log comparisons
                    // console.log('---------------------------------------------------');
                    // console.log(newStateInfo[i].name, ':', legislature.name, ':', district.name, ':', candidate.name);
                    // console.log(namesOfStates[row.state].full_state_name, ':', row.body_type, ':', row.district_or_office, ':', row.full_name)
                    if (!candidate.grade) {
                      ++numberOfMatches; // increment tracking
                      if (gradesArray.indexOf(row.grade) >= 0) {
                        ++numberOfMatchesWithGrades;
                      }
                    }
                    candidate.grade = flipGrade(row.grade) // edit dictionary by adding a grade to the candidate
                    keepingTrackOfDuplicates.push(row) // add row to keepingTrackOfDuplicates
                  }
                }
              });
            });
          });
        }
      }
      // }
    });

    var candidatesNotFound = [];
    function getSpaces(length, total) {
      var myString = ' '
      var n = 0;
      for (n = 0; n <= total - length; n++) { myString = myString + '-' }
      myString = myString + ' '
      return myString;
    }
    function findCandidates() {
      for (var i in newStateInfo) {
        newStateInfo[i].legislatures.map(function (legislature) {
          legislature.districts.map(function (district) {
            district.candidates.map(function (candidate) {
              if (!candidate.grade) { candidatesNotFound.push(candidate.name + getSpaces(candidate.name.length, 25) + newStateInfo[i].name + getSpaces(newStateInfo[i].name.length, 14) + legislature.name + getSpaces(legislature.name.length, 24) + district.name) }
            })
          })
        })
      }
    }
    findCandidates();

    // write file 1
    var stringToWrite = JSON.stringify(newStateInfo)
    fs.writeFile("./newfile.json", stringToWrite, function (err) {
      if (err) return console.log(err);
      console.log('\n\n');
      console.log("The file was saved."); console.log('\n\n')
      console.log('Number of Non-Duplicate Candidates Found:', Math.round((numberOfMatches / 1222) * 100) + '%');
      console.log(numberOfMatches);
      console.log('Number of Actual Grades Found:', Math.round((numberOfMatchesWithGrades / 1222) * 100) + '%');
      console.log(numberOfMatchesWithGrades); console.log();
      console.log('Number of Duplicate Grades Accounted for:');
      console.log(numberOfDuplicates); console.log('\n\n');
    });

    // write file 2
    candidatesNotFoundStringToWrite = candidatesNotFound.join('\n');
    fs.writeFile("./candidatesNotFound.txt", candidatesNotFoundStringToWrite, function (err) {
      if (err) return console.log(err);
    });
  })
});