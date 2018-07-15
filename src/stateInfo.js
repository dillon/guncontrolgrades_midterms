// import { Server } from "http";

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

// can not include commas
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
                img: require("./portraits/Portrait_001.jpg"),
                grade: "A"
              },
              {
                name: "Drew Ferguson",
                img: require("./portraits/Portrait_002.jpg"),
                grade: "F"
              }
            ]
          },
          {
            name: "District 7",
            candidates: [
              {
                name: "Jacob Reed",
                img: require("./portraits/Portrait_003.jpg"),
                grade: "B"
              },
              {
                name: "Lindsey Graham",
                img: require("./portraits/Portrait_004.jpg"),
                grade: "C"
              }
            ]
          },
          {
            name: "District 9",
            candidates: [
              {
                name: "Richard Burr",
                img: require("./portraits/Portrait_005.jpg"),
                grade: "B"
              },
              {
                name: "Pat Toomey",
                img: require("./portraits/Portrait_006.jpg"),
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
                img: require("./portraits/Portrait_007.jpg"),
                grade: "B"
              },
              {
                name: "Shelley Moore Capito",
                img: require("./portraits/Portrait_008.jpg"),
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
                img: require("./portraits/Portrait_009.jpg"),
                grade: "A"
              },
              {
                name: "Todd C. Young",
                img: require("./portraits/Portrait_010.jpg"),
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
                img: require("./portraits/Portrait_011.jpg"),
                grade: "B"
              },
              {
                name: "Chris Coons",
                img: require("./portraits/Portrait_012.jpg"),
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
                img: require("./portraits/Portrait_013.jpg"),
                grade: "B"
              },
              {
                name: "Bill Cassidy",
                img: require("./portraits/Portrait_014.jpg"),
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "Gary Peters",
                img: require("./portraits/Portrait_015.jpg"),
                grade: "B"
              },
              {
                name: "John Neely Kennedy",
                img: require("./portraits/Portrait_016.jpg"),
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
                img: require("./portraits/Portrait_017.jpg"),
                grade: "A"
              },
              {
                name: "Drew Ferguson",
                img: require("./portraits/Portrait_018.jpg"),
                grade: "F"
              }
            ]
          },
          {
            name: "District 7",
            candidates: [
              {
                name: "Jim Inhofe",
                img: require("./portraits/Portrait_019.jpg"),
                grade: "B"
              },
              {
                name: "Jerry Moran",
                img: require("./portraits/Portrait_020.jpg"),
                grade: "C"
              }
            ]
          },
          {
            name: "District 9",
            candidates: [
              {
                name: "Jeanne Shaheen",
                img: require("./portraits/Portrait_005.jpg"),
                grade: "B"
              },
              {
                name: "Rob Portman",
                img: require("./portraits/Portrait_006.jpg"),
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
                img: require("./portraits/Portrait_007.jpg"),
                grade: "B"
              },
              {
                name: "Chuck Schumer",
                img: require("./portraits/Portrait_008.jpg"),
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
                img: require("./portraits/Portrait_009.jpg"),
                grade: "A"
              },
              {
                name: "Patrick Jacobs",
                img: require("./portraits/Portrait_010.jpg"),
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
                img: require("./portraits/Portrait_011.jpg"),
                grade: "B"
              },
              {
                name: "SS Two",
                img: require("./portraits/Portrait_012.jpg"),
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
                img: require("./portraits/Portrait_013.jpg"),
                grade: "B"
              },
              {
                name: "Govnr Two",
                img: require("./portraits/Portrait_014.jpg"),
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "Ltg One",
                img: require("./portraits/Portrait_015.jpg"),
                grade: "B"
              },
              {
                name: "Ltg Two",
                img: require("./portraits/Portrait_016.jpg"),
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
                img: require("./portraits/Portrait_007.jpg"),
                grade: "B"
              },
              {
                name: "Chuck Schumer",
                img: require("./portraits/Portrait_008.jpg"),
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
                img: require("./portraits/Portrait_013.jpg"),
                grade: "B"
              },
              {
                name: "Angus King",
                img: require("./portraits/Portrait_014.jpg"),
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "Dean Heller",
                img: require("./portraits/Portrait_015.jpg"),
                grade: "B"
              },
              {
                name: "Bernie Sanders",
                img: require("./portraits/Portrait_016.jpg"),
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
                img: require("./portraits/Portrait_007.jpg"),
                grade: "B"
              },
              {
                name: "Chuck Schumer",
                img: require("./portraits/Portrait_008.jpg"),
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
                img: require("./portraits/Portrait_011.jpg"),
                grade: "B"
              },
              {
                name: "Bob Casey Jr.",
                img: require("./portraits/Portrait_012.jpg"),
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
                img: require("./portraits/Portrait_013.jpg"),
                grade: "B"
              },
              {
                name: "John Barrasso",
                img: require("./portraits/Portrait_014.jpg"),
                grade: "F"
              }
            ]
          },
          {
            name: "Lieutenant Governor",
            candidates: [
              {
                name: "John McCain",
                img: require("./portraits/Portrait_015.jpg"),
                grade: "B"
              },
              {
                name: "John Boozman",
                img: require("./portraits/Portrait_016.jpg"),
                grade: "B"
              }
            ]
          }
        ]
      }
    ]
  }

};
