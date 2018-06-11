// stateInfo.{stateId}
// stateInfo.{stateId}.name  === 'Florida'
// stateInfo.{stateId}.legislatures
// stateInfo.{stateId}.legislatures[i]
// stateInfo.{stateId}.legislatures[i].name === 'US House'
// stateInfo.{stateId}.legislatures[i].id === 'usHouse'
// stateInfo.{stateId}.legislatures[i].districts
// stateInfo.{stateId}.legislatures[i].districts[i].name === 'District 1'
// stateInfo.{stateId}.legislatures[i].districts[i].candidates
// stateInfo.{stateId}.legislatures[i].districts[i].candidates[i]
// stateInfo.{stateId}.legislatures[i].districts[i].candidates[i].name === 'Jody Hice'
// stateInfo.{stateId}.legislatures[i].districts[i].candidates[i].img === "portrait014)
// stateInfo.{stateId}.legislatures[i]districts[i]candidates[i].grade === 'A'

export const stateInfo = {
  FL: {
    name: "Florida",
    legislatures: [
      {
        name: "US House",
        id: "usHouse",
        districts: [
          {
            name: "District 3",
            candidates: [
              {
                name: "Jody Hice",
                img: "portrait001",
                grade: "A"
              },
              {
                name: "Drew Ferguson",
                img: "portrait002",
                grade: "F"
              }
            ]
          },
          {
            name: "District 7",
            candidates: [
              {
                name: "Jacob Reed",
                img: "portrait003",
                grade: "B"
              },
              {
                name: "Lindsey Graham",
                img: "portrait004",
                grade: "C"
              }
            ]
          },
          {
            name: "District 9",
            candidates: [
              {
                name: "Richard Burr",
                img: "portrait005",
                grade: "B"
              },
              {
                name: "Pat Toomey",
                img: "portrait006",
                grade: "D"
              }
            ]
          }
        ]
      },
      {
        name: "US Senate",
        id: "usSenate",
        districts: [
          {
            name: "Statewide",
            candidates: [
              {
                name: "Lamar Alexander",
                img: "portrait007",
                grade: "B"
              },
              {
                name: "Shelley Moore Capito",
                img: "portrait008",
                grade: "?"
              }
            ]
          }
        ]
      },
      {
        name: "State Congress",
        id: "stateCongress",
        districts: [
          {
            name: "District 4",
            candidates: [
              {
                name: "Bob Corker",
                img: "portrait009",
                grade: "A"
              },
              {
                name: "Todd C. Young",
                img: "portrait010",
                grade: "B"
              }
            ]
          }
        ]
      },
      {
        name: "State Senate",
        id: "stateSenate",
        districts: [
          {
            name: "Statewide",
            candidates: [
              {
                name: "Pat Roberts",
                img: "portrait011",
                grade: "B"
              },
              {
                name: "Chris Coons",
                img: "portrait012",
                grade: "D"
              }
            ]
          }
        ]
      },
      {
        name: "Statewide",
        id: "stateWide",
        districts: [
          {
            name: "Governor",
            candidates: [
              {
                name: "Ben Sasse",
                img: "portrait013",
                grade: "B"
              },
              {
                name: "Bill Cassidy",
                img: "portrait014",
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "Gary Peters",
                img: "portrait015",
                grade: "B"
              },
              {
                name: "John Neely Kennedy",
                img: "portrait016",
                grade: "B"
              }
            ]
          }
        ]
      }
    ]
  },
  TX: {
    name: "Texas",
    legislatures: [
      {
        name: "US House",
        id: "usHouse",
        districts: [
          {
            name: "District 3",
            candidates: [
              {
                name: "Jody Hice",
                img: "portrait017",
                grade: "A"
              },
              {
                name: "Drew Ferguson",
                img: "portrait018",
                grade: "F"
              }
            ]
          },
          {
            name: "District 7",
            candidates: [
              {
                name: "Jim Inhofe",
                img: "portrait019",
                grade: "B"
              },
              {
                name: "Jerry Moran",
                img: "portrait020",
                grade: "C"
              }
            ]
          },
          {
            name: "District 9",
            candidates: [
              {
                name: "Jeanne Shaheen",
                img: "portrait005",
                grade: "B"
              },
              {
                name: "Rob Portman",
                img: "portrait006",
                grade: "D"
              }
            ]
          }
        ]
      },
      {
        name: "US Senate",
        id: "usSenate",
        districts: [
          {
            name: "Statewide",
            candidates: [
              {
                name: "Tammy Duckworth",
                img: "portrait007",
                grade: "B"
              },
              {
                name: "Chuck Schumer",
                img: "portrait008",
                grade: "?"
              }
            ]
          }
        ]
      },
      {
        name: "State Congress",
        id: "stateCongress",
        districts: [
          {
            name: "District 4",
            candidates: [
              {
                name: "Michael Bennet",
                img: "portrait009",
                grade: "A"
              },
              {
                name: "Patrick Jacobs",
                img: "portrait010",
                grade: "B"
              }
            ]
          }
        ]
      },
      {
        name: "State Senate",
        id: "stateSenate",
        districts: [
          {
            name: "Statewide",
            candidates: [
              {
                name: "SS One",
                img: "portrait011",
                grade: "B"
              },
              {
                name: "SS Two",
                img: "portrait012",
                grade: "D"
              }
            ]
          }
        ]
      },
      {
        name: "Statewide",
        id: "stateWide",
        districts: [
          {
            name: "Governor",
            candidates: [
              {
                name: "Govnr One",
                img: "portrait013",
                grade: "B"
              },
              {
                name: "Govnr Two",
                img: "portrait014",
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "Ltg One",
                img: "portrait015",
                grade: "B"
              },
              {
                name: "Ltg Two",
                img: "portrait016",
                grade: "B"
              }
            ]
          }
        ]
      }
    ]
  },
  CA: {
    name: "California",
    legislatures: [
      {
        name: "US Senate",
        id: "usSenate",
        districts: [
          {
            name: "Statewide",
            candidates: [
              {
                name: "Tammy Duckworth",
                img: "portrait007",
                grade: "B"
              },
              {
                name: "Chuck Schumer",
                img: "portrait008",
                grade: "?"
              }
            ]
          }
        ]
      },
      {
        name: "Statewide",
        id: "stateWide",
        districts: [
          {
            name: "Governor",
            candidates: [
              {
                name: "Mazie K. Hirono",
                img: "portrait013",
                grade: "B"
              },
              {
                name: "Angus King",
                img: "portrait014",
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "Dean Heller",
                img: "portrait015",
                grade: "B"
              },
              {
                name: "Bernie Sanders",
                img: "portrait016",
                grade: "B"
              }
            ]
          }
        ]
      }
    ]
  },
  AK: {
    name: "Alaska",
    legislatures: [
      {
        name: "US Senate",
        id: "usSenate",
        districts: [
          {
            name: "Statewide",
            candidates: [
              {
                name: "Tammy Duckworth",
                img: "portrait007",
                grade: "B"
              },
              {
                name: "Chuck Schumer",
                img: "portrait008",
                grade: "?"
              }
            ]
          }
        ]
      },
      {
        name: "State Senate",
        id: "stateSenate",
        districts: [
          {
            name: "Statewide",
            candidates: [
              {
                name: "Heidi Heitkamp",
                img: "portrait011",
                grade: "B"
              },
              {
                name: "Bob Casey Jr.",
                img: "portrait012",
                grade: "D"
              }
            ]
          }
        ]
      },
      {
        name: "Statewide",
        id: "stateWide",
        districts: [
          {
            name: "Governor",
            candidates: [
              {
                name: "Tammy Baldwin",
                img: "portrait013",
                grade: "B"
              },
              {
                name: "John Barrasso",
                img: "portrait014",
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "John McCain",
                img: "portrait015",
                grade: "B"
              },
              {
                name: "John Boozman",
                img: "portrait016",
                grade: "B"
              }
            ]
          }
        ]
      }
    ]
  }

};
