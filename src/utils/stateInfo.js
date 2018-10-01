// strings can not include commas

// candidates from new york times 2018 results
// images from Ballotpedia.org

// images to be filled in are named 'todo.jpg'
// results not yet counted are named TBD
// todos are marked TODO

const GOVERNOR = 'Governor'
const LIEUTENANT_GOVERNOR = 'Lieutenant Governor'
const ATTORNEY_GENERAL = 'Attorney General'
const AGRICULTURE_COMMISSIONER = 'Agriculture Commissioner'
const TREASURER = 'Treasurer'
const AUDITOR = 'Auditor'
const LAND_COMMISSIONER = 'Land Commissioner'
const US_SENATE = 'U.S. Senate'
const US_HOUSE = 'U.S. House'
const SECRETARY_OF_STATE = 'Secretary of State'

const REPUBLICAN = 'Republican'
const DEMOCRAT = 'Democrat'
const LIBERTARIAN = 'Libertarian'
const GREEN = 'Green'
const UNITED_UTAH = 'United Utah'
const INDEPENDENT = 'Independent'
const CONSTITUTION = 'Constitution'
const AMERICAN = 'American'
const UNITED_CITIZENS = 'United Citizens'
const GRASSROOTS = 'Grassroots'
const INDEPENDENCE = 'Independence'
const REFORM = 'Reform'
const WORKING_FAMILIES = 'Working Families'
const CONSERVATIVE = 'Conservative'
const UNAFFILIATED = 'Unaffiliated'

const gradesArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
const NO_GRADE = () => {return gradesArray[Math.floor(Math.random() * (12 - 0)) + 0]}
const STATEWIDE = 'Statewide'

export const stateInfo = {
  AL: {
    // https://www.nytimes.com/interactive/2018/06/05/us/elections/results-alabama-primary-elections.html
    name: 'Alabama',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kay Ivey',
                img: require('../portraits/Kay_Ivey.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Walt Maddox',
                img: require('../portraits/Walt_Maddox.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Robert Kennedy',
                img: require('../portraits/Robert_Kennedy_Jr.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bradley Byrne',
                img: require('../portraits/220px-Rep_Bradley_Byrne.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tabitha Isner',
                img: require('../portraits/tabithaisner.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Martha Roby',
                img: require('../portraits/Martha_Roby.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Mallory Hagan',
                img: require('../portraits/mallory-hagan_headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike D. Rogers',
                img: require('../portraits/Mike_Rogers_AL.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Lee Auman',
                img: require('../portraits/Lee_Auman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Robert B. Aderholt',
                img: require('../portraits/Robert_Aderholt.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Peter Joffrion',
                img: require('../portraits/Peter_Joffrion.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mo Brooks',
                img: require('../portraits/Mo_Brooks.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Danner Kline',
                img: require('../portraits/Danner_Kline.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Gary Palmer',
                img: require('../portraits/Gary_Palmer_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Terri A. Sewell',
                img: require('../portraits/Terri_Sewell.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Will Boyd',
                img: require('../portraits/WillBoyd.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Will Ainsworth',
                img: require('../portraits/Will_Ainsworth.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Joseph Siegelman',
                img: require('../portraits/Joseph_Siegelman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Marshall',
                img: require('../portraits/Steve_MarshallAG.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Heather Milam',
                img: require('../portraits/HeatherMilam.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Merrill',
                img: require('../portraits/John_Merrill.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Miranda Joseph',
                img: require('../portraits/Miranda_Joseph.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Zeigler',
                img: require('../portraits/Jim_Zeigler.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'John McMillan',
                img: require('../portraits/John_McMillan.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              // TODO: Only one candidate!
            ]
          }
        ]
      },
      {
        name: AGRICULTURE_COMMISSIONER,
        id: 'agricultureCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Rick Pate',
                img: require('../portraits/Rick_pic_on_FB_page.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              // TODO: Only one candidate!
            ]
          }
        ]
      }
    ] // legislatures
  },
  AK: {
    // https://www.nytimes.com/interactive/2018/08/21/us/elections/results-alaska-primary-elections.html
    name: 'Alaska',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mark Begich',
                img: require('../portraits/Mark_Begich.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Dunleavy',
                img: require('../portraits/Mike_Dunleavy.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'William S. "Billy" Toien',
                img: require('../portraits/5b74ae016d97c.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Alyse Galvin',
                img: require('../portraits/alyse_Galvin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Don Young',
                img: require('../portraits/Don_Young.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Debra Call',
                img: require('../portraits/wfjlek.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kevin Meyer',
                img: require('../portraits/Kevin_Meyer.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  AZ: {
    name: 'Arizona',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'David Garcia',
                img: require('../portraits/David_Garcia_AZ.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Doug Ducey',
                img: require('../portraits/DougDucey2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Krysten Sinema',
                img: require('../portraits/Kyrsten_Sinema.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Martha McSally',
                img: require('../portraits/martha_mcsally.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Tom O\'Halleran',
                img: require('../portraits/Tom_OHalleran-7.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Wendy Rogers',
                img: require('../portraits/Wendy_Rogers.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Ann Kirkpatrick',
                img: require('../portraits/Ann_Kirkpatrick.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lea Marquez Peterson',
                img: require('../portraits/Lea_Marquez_Peterson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Raul Grijalva',
                img: require('../portraits/Raul_Grijalva.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Nicolas Pierson',
                img: require('../portraits/182238_lg.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'David Brill',
                img: require('../portraits/David_Brill.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Paul Gosar',
                img: require('../portraits/Paul_Gosar.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Joan Greene',
                img: require('../portraits/joan_greene.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Andy Biggs',
                img: require('../portraits/andybiggs.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Anita Malik',
                img: require('../portraits/Anita_Malik.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Schweikert',
                img: require('../portraits/David_Schweikert.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ruben Gallego',
                img: require('../portraits/Ruben_Gallego.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Hiral Tipirneni',
                img: require('../portraits/Hiral.tipirneni.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Debbie Lesko',
                img: require('../portraits/debbie.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Greg Stanton',
                img: require('../portraits/Greg_Stanton1.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Ferrara',
                img: require('../portraits/Steve_Ferrara_.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'January Contreras',
                img: require('../portraits/5b3ea1877d098.image.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Brnovich',
                img: require('../portraits/MarkBrnovich2015.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Katie Hobbs',
                img: require('../portraits/Katie_Hobbs.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Gaynor',
                img: require('../portraits/Steve_Gaynor.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mark Manoil',
                img: require('../portraits/Mark_Manoil.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kimberly Yee',
                img: require('../portraits/NvzE8x-W_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  AR: {
    name: 'Arkansas',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jared Henderson',
                img: require('../portraits/C__Users_e5406014_Desktop_jared.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Asa Hutchinson',
                img: require('../portraits/AsaHutchinson2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Chintan Desai',
                img: require('../portraits/Chintan_Desai.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rick Crawford',
                img: require('../portraits/Rick_Crawford_AR.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clarke Tucker',
                img: require('../portraits/Clarke_Tucker.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'French Hill',
                img: require('../portraits/French_Hill_official_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Josh Mahony',
                img: require('../portraits/96580584_Joshua-Mahony_ORIG_t635.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Womack',
                img: require('../portraits/Steve_Womack.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hayden Shamel',
                img: require('../portraits/Hayden_Shamel-7.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bruce Westerman',
                img: require('../portraits/bruce-westerman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Anthony Bland',
                img: require('../portraits/Anthony_Bland.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tim Griffin',
                img: require('../portraits/Tim_Griffin.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mike Lee',
                img: require('../portraits/mikelee.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Leslie Rutledge',
                img: require('../portraits/Leslie_Rutledge.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Susan Inman',
                img: require('../portraits/Susan_Inman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Thurston',
                img: require('../portraits/John_Thurston.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Andrea Lea',
                img: require('../portraits/Lea-andrea.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Dennis Milligan',
                img: require('../portraits/Dennis_Milligan.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      {
        name: LAND_COMMISSIONER,
        id: 'landCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Larry Williams',
                img: require('../portraits/20091016-ASU-Dr-Larry-Williams-12384.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tommy Land',
                img: require('../portraits/3daPJCOF_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  CA: {
    // https://www.nytimes.com/interactive/2018/06/05/us/elections/results-california-primary-elections.html
    name: 'California',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Gavin Newsom',
                img: require('../portraits/399px-Gavin_Newsom_official_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Cox',
                img: require('../portraits/John_Cox_(California)-6.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Dianne Feinstein',
                img: require('../portraits/DianneFeinsteinReplace.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kevin de León',
                img: require('../portraits/Kevin_De_Leon.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Doug LaMalfa',
                img: require('../portraits/Doug_LaMalfa.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Audrey Denney',
                img: require('../portraits/DenneyHeadshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Huffman',
                img: require('../portraits/Jared_Huffman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dale Mensing',
                img: require('../portraits/Dale_Mensing.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Garamendi',
                img: require('../portraits/John_Garamendi.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Charlie Schaupp',
                img: require('../portraits/Charlie_Schaupp.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tom McClintock',
                img: require('../portraits/Tom_McClintock.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jessica Morse',
                img: require('../portraits/Jessica_Morse.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Thompson',
                img: require('../portraits/Mike_Thompson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jrmar Jefferson',
                img: require('../portraits/Jrmar_Jefferson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Doris Matsui',
                img: require('../portraits/DorisMatsuiReplace.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ami Bera',
                img: require('../portraits/Ami_Bera.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Andrew Grant',
                img: require('../portraits/Andrew_Grant.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Paul Cook',
                img: require('../portraits/Paul_Cook.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jerry McNerney',
                img: require('../portraits/Jerry_McNerney.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Marla Livengood',
                img: require('../portraits/2018_Marla_Livengood_for_CA_U.S._Congress.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Jeff Denham',
                img: require('../portraits/Jeff_Denham.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Mark DeSaulnier',
                img: require('../portraits/Mark_DeSaulnier-1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Fitzgerald',
                img: require('../portraits/John_Fitzgerald.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Nancy Pelosi',
                img: require('../portraits/Nancy_Pelosi.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Barbara Lee',
                img: require('../portraits/Barbara_Lee.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Jackie Speier',
                img: require('../portraits/Jackie_Speier.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Cristina Osmeña',
                img: require('../portraits/XtgoNPfO_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Eric Swalwell',
                img: require('../portraits/esc.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rudy Peters',
                img: require('../portraits/Rudy_Peters_Congress.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Jim Costa',
                img: require('../portraits/Jim_Costa.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Elizabeth Heng',
                img: require('../portraits/_MG_6860-Edit-min.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Ro Khanna',
                img: require('../portraits/1200.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ron Cohen',
                img: require('../portraits/Ron.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Anna G. Eshoo',
                img: require('../portraits/Anna_Eshoo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Christine Russell',
                img: require('../portraits/none.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Zoe Lofgren',
                img: require('../portraits/Zoe_Lofgren.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Jimmy Panetta',
                img: require('../portraits/Jimmy_Panetta_115th_Congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ronald Paul Kabat',
                img: require('../portraits/Ronald_Paul_Kabat.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'T.J. Cox',
                img: require('../portraits/TJ_Cox.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Valadao',
                img: require('../portraits/David_Valadao.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Devin Nunes',
                img: require('../portraits/Devin_Nunes.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Andrew Janz',
                img: require('../portraits/Andrew_Janz.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Kevin McCarthy',
                img: require('../portraits/Kevin_McCarthy_CA.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Salud Carbajal',
                img: require('../portraits/Salud_Carbajal_115th_Congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Justin Fareed',
                img: require('../portraits/Justin_Fareed.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Steve Knight',
                img: require('../portraits/Steve_Knight_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Julia Brownley',
                img: require('../portraits/Julia_Brownley.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Antonio Sabato Jr.',
                img: require('../portraits/Antonio_Headshot.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Judy Chu',
                img: require('../portraits/Judy_Chu.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bryan Witt',
                img: require('../portraits/Bryan_Witt_Campaign_Pic.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Adam B. Schiff',
                img: require('../portraits/Adam_Schiff.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Johnny Nalbandian',
                img: require('../portraits/B4066CCF-EDC9-4A6B-8F40-CD96C8260802.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Tony Cardenas',
                img: require('../portraits/Tony_Cardenas.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Benny Bernal',
                img: require('../portraits/LOCAL1_160519571_AR_0_CFAQILXSPYJE.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'Brad Sherman',
                img: require('../portraits/Brad_Sherman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Reed',
                img: require('../portraits/Mark_Reed.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'Pete Aguilar',
                img: require('../portraits/Pete_Aguilar_official_portrait_114th_Congress.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Sean Flynn',
                img: require('../portraits/Sean_Flynn.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Grace F. Napolitano',
                img: require('../portraits/Grace_Napolitano.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 33',
            candidates: [
              {
                name: 'Ted Lieu',
                img: require('../portraits/Rep_Ted_Lieu.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kenneth Wright',
                img: require('../portraits/Kenneth_Wright.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Jimmy Gomez',
                img: require('../portraits/Jimmy_Gomez.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kenneth Mejia',
                img: require('../portraits/Kenneth_Mejia-8.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Norma J. Torres',
                img: require('../portraits/Norma_Torres_official_portrait.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Christian Valiente',
                img: require('../portraits/headshotforGOP-1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Raul Ruiz',
                img: require('../portraits/Raul_Ruiz.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kimberlin Brown Pelzer',
                img: require('../portraits/220px-Kimberlin_Brown_Pelzer.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 37',
            candidates: [
              {
                name: 'Karen Bass',
                img: require('../portraits/Karen_Bass.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ron Bassilian',
                img: require('../portraits/RonBassilian.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 38',
            candidates: [
              {
                name: 'Linda T. Sánchez',
                img: require('../portraits/LindaSanchezReplace.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ryan Downing',
                img: require('../portraits/Ryan_Downing.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 39',
            candidates: [
              {
                name: 'Young Kim',
                img: require('../portraits/Youngkim.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Gil Cisneros',
                img: require('../portraits/fullsizeoutput_1215.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 40',
            candidates: [
              {
                name: 'Lucille Roybal-Allard',
                img: require('../portraits/LucilleRoybalAllardReplace.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rodolfo Barragan',
                img: require('../portraits/Rodolfo_Cortes_Barragan.png'),
                party: GREEN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 41',
            candidates: [
              {
                name: 'Mark Takano',
                img: require('../portraits/Mark_Takano.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Aja Smith',
                img: require('../portraits/FB0C14CE-CCBA-4F29-B621-9838FE8E68D1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 42',
            candidates: [
              {
                name: 'Ken Calvert',
                img: require('../portraits/Ken_Calvert.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Julia Peacock',
                img: require('../portraits/Julia_Peacock.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 43',
            candidates: [
              {
                name: 'Maxine Waters',
                img: require('../portraits/Maxine_Waters.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Omar Navarro',
                img: require('../portraits/Omar_Navarro.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 44',
            candidates: [
              {
                name: 'Nanette Barragán',
                img: require('../portraits/Nanette_Barragan.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 45',
            candidates: [
              {
                name: 'Mimi Walters',
                img: require('../portraits/Mimi_Walters_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Katie Porter',
                img: require('../portraits/Katie_Porter.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 46',
            candidates: [
              {
                name: 'J. Luis Correa',
                img: require('../portraits/Lou_Correa.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Russell Lambert',
                img: require('../portraits/Screenshot_2018-02-06-08-10-21.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 47',
            candidates: [
              {
                name: 'Alan Lowenthal',
                img: require('../portraits/Alan_Lowenthal.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Briscoe',
                img: require('../portraits/john_Briscoe.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 48',
            candidates: [
              {
                name: 'Dana Rohrabacher',
                img: require('../portraits/Dana_Rohrabacher.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 49',
            candidates: [
              {
                name: 'Diane Harkey',
                img: require('../portraits/Diane_Harkey.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Levin',
                img: require('../portraits/Mike_Levin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 50',
            candidates: [
              {
                name: 'Duncan Hunter',
                img: require('../portraits/Duncan_Hunter.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Ammar Campa-Najjar',
                img: require('../portraits/Ammar_Campa-Najjar.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 51',
            candidates: [
              {
                name: 'Juan C. Vargas',
                img: require('../portraits/Juan_Vargas_official_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 52',
            candidates: [
              {
                name: 'Scott Peters',
                img: require('../portraits/Scott_Peters.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Omar Qudrat',
                img: require('../portraits/Omar-Qudrat.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 53',
            candidates: [
              {
                name: 'Susan A. Davis',
                img: require('../portraits/Susan_Davis.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Eleni Kounalakis',
                img: require('../portraits/3612660B-ED2A-43B5-9AA8-FB134D4CC650.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Xavier Becerra',
                img: require('../portraits/Xavier_Becerra.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steven Bailey',
                img: require('../portraits/Headshot_2018-05-07.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Alex Padilla',
                img: require('../portraits/Alex_Padilla.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Meuser',
                img: require('../portraits/Mark-Meuser.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ],
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Fiona Ma',
                img: require('../portraits/Fiona_Ma.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          }
        ]
      }
    ]
  },
  CO: {
    // https://www.nytimes.com/interactive/2018/06/26/us/elections/results-colorado-primary-elections.html
    name: 'Colorado',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jared Polis',
                img: require('../portraits/Jared_Polis.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Walker Stapleton',
                img: require('../portraits/Walker_Stapleton.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Diana DeGette',
                img: require('../portraits/Diana_Degette.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Casper Stockham',
                img: require('../portraits/Casper_Stockham.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Neguse',
                img: require('../portraits/Joe_Neguse.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Peter Yu',
                img: require('../portraits/Peter_Yu.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Diane Mitsch Bush',
                img: require('../portraits/Diane_Mitsch_Bush.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Scott Tipton',
                img: require('../portraits/Scott_Tipton.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Karen McCormick',
                img: require('../portraits/Karen_McCormick_.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ken Buck',
                img: require('../portraits/Ken_Buck_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Stephany Rose Spaulding',
                img: require('../portraits/stephany-rose-spaulding.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Doug Lamborn',
                img: require('../portraits/Doug_Lamborn.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jason Crow',
                img: require('../portraits/Jason_Crow.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Coffman',
                img: require('../portraits/Mike_Coffman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ed Perlmutter',
                img: require('../portraits/Ed_Perlmutter.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Barrington',
                img: require('../portraits/businessphotography-05.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'George Brauchler',
                img: require('../portraits/george-brauchler-fullbody.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Phil Weiser',
                img: require('../portraits/Phil_Weiser_headshot.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jena Griswold',
                img: require('../portraits/Jena_Griswold.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Wayne Williams',
                img: require('../portraits/Wayne_Williams.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Dave Young',
                img: require('../portraits/Dave_Young.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brian Watson',
                img: require('../portraits/static1.squarespace.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  CT: {
    name: 'Connecticut',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Ned Lamont',
                img: require('../portraits/nedlamont.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bob Stefanowski',
                img: require('../portraits/Bob_Stefanowski.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Christopher S. Murphy',
                img: require('../portraits/Christopher_S._Murphy.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Matthew Corey',
                img: require('../portraits/Matthew_Corey.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'John B. Larson',
                img: require('../portraits/John_B._Larson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jennifer Nye',
                img: require('../portraits/cm4LC9oe_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Courtney',
                img: require('../portraits/Joe_Courtney.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dan Postemski',
                img: require('../portraits/none.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Rosa DeLauro',
                img: require('../portraits/Rosa_L._Delauro.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Angel Cadena',
                img: require('../portraits/450px-Angel_Cadena.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jim Himes',
                img: require('../portraits/James_A._Himes.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Harry Arora',
                img: require('../portraits/Harry_Arora.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Jahana Hayes',
                img: require('../portraits/Jahana_Hayes-1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Manny Santos',
                img: require('../portraits/Manny_Santos.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Susan Bysiewicz',
                img: require('../portraits/SusanBysiewiczPic.JPG.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Joe Markley',
                img: require('../portraits/joemarkley.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'William Tong',
                img: require('../portraits/williamtong.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Sue Hatfield',
                img: require('../portraits/SWH-HS-HR.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Denise W. Merrill',
                img: require('../portraits/Denise_Merrill_2013.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Susan Chapman',
                img: require('../portraits/Susan_Chapman_CT.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Shawn Wooden',
                img: require('../portraits/Shawn_Wooden.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Thad Gray',
                img: require('../portraits/920x920.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  DE: {
    name: 'Delaware',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Thomas R. Carper',
                img: require('../portraits/Tom_Carper.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Robert Arlett',
                img: require('../portraits/robarlett.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Scott Walker',
                img: require('../portraits/scottwalker.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kathy Jennings',
                img: require('../portraits/jennings.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kathy McGuiness',
                img: require('../portraits/38493483948.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  FL: {
    name: 'Florida',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Andrew Gillum',
                img: require('../portraits/Andrew_Gillum.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ron DeSantis',
                img: require('../portraits/ron_desantis.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Bill Nelson',
                img: require('../portraits/Bill_Nelson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rick Scott',
                img: require('../portraits/Rick_Scott.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Jennifer Zimmerman',
                img: require('../portraits/IMG_9964-min.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Matt Gaetz',
                img: require('../portraits/Matt_Gaetz.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Bob Rackleff',
                img: require('../portraits/Bob_Rackleff.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Neal Dunn',
                img: require('../portraits/nealdunn.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Yvonne Hayes Hinson',
                img: require('../portraits/Yvonne_Hayes_Hinson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ted Yoho',
                img: require('../portraits/tedyoho.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Ges Selmont',
                img: require('../portraits/George.Ges.Selmont.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Rutherford',
                img: require('../portraits/John_Rutherford_115th_Congress_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Al Lawson',
                img: require('../portraits/Al_Lawson_115th_Congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Virginia Fuller',
                img: require('../portraits/Virginia_Fuller.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Nancy Soderberg',
                img: require('../portraits/Nancy_Soderberg.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Waltz',
                img: require('../portraits/IV_fEXud_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Stephanie Murphy',
                img: require('../portraits/Stephanie_Murphy.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Miller',
                img: require('../portraits/State_Representative_Mike_Miller.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Sanjay Patel',
                img: require('../portraits/20180316_115703.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bill Posey',
                img: require('../portraits/Bill_Posey.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Darren Soto',
                img: require('../portraits/Darren_Soto_115th_Congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Wayne Liebnitzky',
                img: require('../portraits/Wayne_Liebnitzky.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Val Demings',
                img: require('../portraits/Val_Demings.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Dana Cottrell',
                img: require('../portraits/danapic1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Daniel Webster',
                img: require('../portraits/Daniel_Webster_(Florida)-7.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Chris Hunter',
                img: require('../portraits/Hunter_Headshot-min.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Gus Bilirakis',
                img: require('../portraits/Gus_M._Bilirakis.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Charlie Crist',
                img: require('../portraits/Charlie_Crist_115th_Congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'George Buck',
                img: require('../portraits/George_Buck.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Kathy Castor',
                img: require('../portraits/Kathy_Castor.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Kristen Carlson',
                img: require('../portraits/carlson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ross Spano',
                img: require('../portraits/Ross_Spano.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'David Shapiro',
                img: require('../portraits/shapiro.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Vern Buchanan',
                img: require('../portraits/Vern_Buchanan.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'April Freeman',
                img: require('../portraits/April_Freeman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Greg Steube',
                img: require('../portraits/Greg_Steube.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Lauren Baer',
                img: require('../portraits/Baer2017h_0023.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brian Mast',
                img: require('../portraits/Brian_Mast_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'David Holden',
                img: require('../portraits/David_Holden.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Francis Rooney',
                img: require('../portraits/francis_rooney.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Alcee Hastings',
                img: require('../portraits/Alcee_Hastings.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'Lois Frankel',
                img: require('../portraits/loisfrankel.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Ted Deutch',
                img: require('../portraits/Theodore_E._Deutch.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Nicolas Kimaz',
                img: require('../portraits/Nicolas_Kimaz.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Debbie Wasserman Schultz',
                img: require('../portraits/debbiew.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Joe Kaufman',
                img: require('../portraits/Joe_Kaufman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Frederica Wilson',
                img: require('../portraits/Frederica_S._Wilson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Mary Barzee Flores',
                img: require('../portraits/Mary_Barzee_Flores_Headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mario Diaz-Balart',
                img: require('../portraits/Mario_Diaz_Balart.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Debbie Mucarsel-Powell',
                img: require('../portraits/Debbie_Mucarsel-Powell.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Carlos Curbelo',
                img: require('../portraits/CarlosCurbelo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Donna Shalala',
                img: require('../portraits/Donna_Shalala.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Maria Salazar',
                img: require('../portraits/23908.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Sean Shaw',
                img: require('../portraits/sean-shaw.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ashley B. Moody',
                img: require('../portraits/0.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AGRICULTURE_COMMISSIONER,
        id: 'agricultureCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Nikki Fried',
                img: require('../portraits/Nicole__Nikki__Fried.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Matt Caldwell',
                img: require('../portraits/Matt_Caldwell.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  GA: {
    // https://www.nytimes.com/interactive/2018/05/22/us/elections/results-georgia-primary-elections.html
    // https://www.nytimes.com/interactive/2018/07/24/us/elections/results-georgia-primary-runoff-elections.html
    name: 'Georgia',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Stacey Abrams',
                img: require('../portraits/Stacy-Abrams.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brian Kemp',
                img: require('../portraits/Brian_Kemp.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Lisa Ring',
                img: require('../portraits/FB_IMG_1516162882344.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Earl L. Carter',
                img: require('../portraits/Buddy.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Sanford D. Bishop Jr',
                img: require('../portraits/Sanford_D._Bishop_Jr.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Herman West',
                img: require('../portraits/Herman_West_Jr.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Chuck Enderlin',
                img: require('../portraits/Chuck_Enderlin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Drew Ferguson',
                img: require('../portraits/Drew_Ferguson_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hank Johnson',
                img: require('../portraits/Henry_C._Johnson-1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Joe Profit',
                img: require('../portraits/joeprofit2.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'John Lewis',
                img: require('../portraits/John_Lewis.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Lucy McBath',
                img: require('../portraits/IMG_0565.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Karen Handel',
                img: require('../portraits/Handel.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Carolyn Bourdeaux',
                img: require('../portraits/Carolyn_Bourdeaux.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rob Woodall',
                img: require('../portraits/Rob_Woodall.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Austin Scott',
                img: require('../portraits/Austin_Scott_113th_Congress.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Josh McCall',
                img: require('../portraits/Josh_McCall.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Doug Collins',
                img: require('../portraits/DougCollins.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Tabitha Johnson-Green',
                img: require('../portraits/image1-4.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jody B. Hice',
                img: require('../portraits/Jody_Hice_official_portrait.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Flynn Broady',
                img: require('../portraits/Flynn_Broady_Jr.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Barry Loudermilk',
                img: require('../portraits/CongLoudermilk.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Francys Johnson',
                img: require('../portraits/francysjohnson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rick W. Allen',
                img: require('../portraits/rickallen.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'David Scott',
                img: require('../portraits/David_Scott.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Callahan',
                img: require('../portraits/5ad604ec11b6a.image.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Steven Foster',
                img: require('../portraits/download.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tom Graves',
                img: require('../portraits/Tom_Graves.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Sarah Amico',
                img: require('../portraits/Sarah_Riggs_Amico.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Geoff Duncan',
                img: require('../portraits/Geoff_Duncan.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Charlie Bailey',
                img: require('../portraits/Charlie-Bailey-Article-201802082310.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Chris Carr',
                img: require('../portraits/Chris_Carr_Georgia.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'John Barrow',
                img: require('../portraits/John_Barrow.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brad Raffensperger',
                img: require('../portraits/Brad_Raffensperger.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: 'Agriculture Commisioner',
        id: 'agricultureCommisioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Fred Swann',
                img: require('../portraits/Fred_Swann.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Gary Black',
                img: require('../portraits/commissioner-gary-w-black.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  HI: {
    // https://www.nytimes.com/interactive/2018/08/11/us/elections/results-hawaii-primary-elections.html
    name: 'Hawaii',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'David Ige',
                img: require('../portraits/DavidIge2015.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Andria Tupola',
                img: require('../portraits/Andria_Tupola.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Brewer',
                img: require('../portraits/none.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mazie Hirono',
                img: require('../portraits/Mazie_Hirono_official.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ron Curtis',
                img: require('../portraits/Ron_Curtis_for_US_Senate.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Ed Case',
                img: require('../portraits/Screen_Shot_2018-07-18_at_10.51.21_AM.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Cam Cavasso',
                img: require('../portraits/Cam_Cavasso.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Zachary Burd',
                img: require('../portraits/Zachary_Burd_1.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Michelle Tippens',
                img: require('../portraits/Michelle_Rose_Tippens.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tulsi Gabbard',
                img: require('../portraits/TulsiGabbardReplace.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brian Evans',
                img: require('../portraits/Brian_Evans.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Josh Green',
                img: require('../portraits/green.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Marissa Kerns',
                img: require('../portraits/web1_Republican-Convention_0041.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          },
        ]
      },
    ]
  },
  ID: {
    // https://www.nytimes.com/interactive/2018/05/15/us/elections/results-idaho-primary-elections.html
    name: 'Idaho',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Paulette Jordan',
                img: require('../portraits/Paulette_E._Jordan.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brad Little',
                img: require('../portraits/nlmya.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Cristina McNeil',
                img: require('../portraits/Cristina_McNeil.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Russ Fulcher',
                img: require('../portraits/Russell_Fulcher.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Aaron Swisher',
                img: require('../portraits/AaronSwisher-11617-4.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Simpson',
                img: require('../portraits/Michael_K._Simpson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kristin Collum',
                img: require('../portraits/kcollum_2018-03-03_0214.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Janice McGeachin',
                img: require('../portraits/McGeachin41.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Bruce Bistline',
                img: require('../portraits/bistlinemug.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lawrence Wasden',
                img: require('../portraits/Lawrence_Wasden.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jill Humble',
                img: require('../portraits/jillh-03989.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lawerence Denney',
                img: require('../portraits/Denney22.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Julie Ellsworth',
                img: require('../portraits/Julie_Ellsworth.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          }
        ]
      }
    ]
  },
  IL: {
    // https://www.nytimes.com/interactive/2018/03/20/us/elections/results-illinois-primary-elections.html
    name: 'Illinois',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'J.B. Pritzker',
                img: require('../portraits/JB_Pritzker.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bruce Rauner',
                img: require('../portraits/BruceRauner2015a.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kwame Raoul',
                img: require('../portraits/Kwame_Raoul.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Erika Harold',
                img: require('../portraits/ErikaHarold-1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Bobby Rush',
                img: require('../portraits/Bobby_Rush.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jimmy Lee Tillman',
                img: require('../portraits/Jimmy_Lee_Tillman_II.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Robin Kelly',
                img: require('../portraits/Robin_Kelly.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Merkle',
                img: require('../portraits/David_Merkle.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Daniel Lipinski',
                img: require('../portraits/Daniel_Lipinski.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Arthur Jones',
                img: require('../portraits/Arthur_Jones.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jesús G. Garcia',
                img: require('../portraits/Chuy_Garcia.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Lorch',
                img: require('../portraits/Lorch_Headshot.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Quigley',
                img: require('../portraits/Mike_Quigley.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tom Hanson',
                img: require('../portraits/Image.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Sean Casten',
                img: require('../portraits/Sean_Casten.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Peter Roskam',
                img: require('../portraits/Peter_J._Roskam.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Danny K. Davis',
                img: require('../portraits/Danny_K._Davis.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Craig Cameron',
                img: require('../portraits/Screen_Shot_2018-03-20_at_7.45.49_PM_(2).png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Raja Krishnamoorthi',
                img: require('../portraits/Raja_Krishnamoorthi.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jitendra "JD" Diganvker',
                img: require('../portraits/JD.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jan Schakowsky',
                img: require('../portraits/Janice_D._Schakowsky.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Elleson',
                img: require('../portraits/John_Elleson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Brad Schneider',
                img: require('../portraits/Brad_Schneider.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Douglas Bennett',
                img: require('../portraits/400px-Douglas_Bennett.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Bill Foster',
                img: require('../portraits/billfoster.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Nick Stella',
                img: require('../portraits/Dominick_Stella.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Brendan Kelly',
                img: require('../portraits/Brendan_Kelly2.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Bost',
                img: require('../portraits/Mike_Bost_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Betsy Dirksen Londrigan',
                img: require('../portraits/Betsy_Dirksen_Londrigan.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rodney Davis',
                img: require('../portraits/rodneydavis.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Lauren Underwood',
                img: require('../portraits/Lauren_Underwood.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Randy Hultgren',
                img: require('../portraits/Randy_Hultgren.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Kevin Gaither',
                img: require('../portraits/Kevin_Gaither.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Shimkus',
                img: require('../portraits/Rep._John_Shimkus.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Sara Dady',
                img: require('../portraits/Sara_Dady.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Adam Kinzinger',
                img: require('../portraits/Adam_Kinzinger.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Cheri Bustos',
                img: require('../portraits/Cheri_Bustos_official_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bill Fawell',
                img: require('../portraits/Fawell-Bill_crop_portrait.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Junius Rodriguez',
                img: require('../portraits/Junius_Rodriguez.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Darin LaHood',
                img: require('../portraits/Darin_LaHood.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
    ]
  },
  IN: {
    // https://www.nytimes.com/interactive/2018/05/08/us/elections/results-indiana-primary-elections.html
    name: 'Indiana',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Joe Donnelly',
                img: require('../portraits/Joe_Donnelly.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Braun',
                img: require('../portraits/Mike_Braun.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Peter J. Visclosky',
                img: require('../portraits/Peter_J._Visclosky.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Leyva',
                img: require('../portraits/Mark_Leyva.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Mel Hall',
                img: require('../portraits/Mel-Hall.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jackie Walorski',
                img: require('../portraits/jw.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Courtney Tritch',
                img: require('../portraits/Courtney_Tritch.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Banks',
                img: require('../portraits/Jim_Banks.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tobi Beck',
                img: require('../portraits/Tobi_Beck2.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Baird',
                img: require('../portraits/James_Baird.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Dee Thornton',
                img: require('../portraits/80360E96-0F95-4680-B821-D09723DE1EF2.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Susan W. Brooks',
                img: require('../portraits/Susan_Brooks.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jeannine Lee Lake',
                img: require('../portraits/Jeannine_Lee_Lake2.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Greg Pence',
                img: require('../portraits/GregPence.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'André Carson',
                img: require('../portraits/Andre_Carson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Wayne Harmon',
                img: require('../portraits/Wayne_Harmon.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'William Tanoos',
                img: require('../portraits/William_Tanoos.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Larry Bucshon',
                img: require('../portraits/Larry_Bucshon.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Liz Watson',
                img: require('../portraits/Liz_Watson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Trey Hollingsworth',
                img: require('../portraits/Trey_Hollingsworth.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
    ]
  },
  IA: {
    // https://www.nytimes.com/interactive/2018/06/05/us/elections/results-iowa-primary-elections.html
    name: 'Iowa',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Fred Hubbell',
                img: require('../portraits/Fred_Hubbell_Iowa.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kim Reynolds',
                img: require('../portraits/Kim_Reynolds_2013.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Abby Finkenauer',
                img: require('../portraits/Abby_Finkenauer.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rod Blum',
                img: require('../portraits/Rod_Blum_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dave Loebsack',
                img: require('../portraits/David_Loebsack.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Christopher Peters',
                img: require('../portraits/Christopher_Peters_2018.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cindy Axne',
                img: require('../portraits/Cindy.Axne.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Young',
                img: require('../portraits/David_Young_Iowa.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Bryan Holder',
                img: require('../portraits/155344_lg.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'J.D. Scholten',
                img: require('../portraits/180510_4.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve King',
                img: require('../portraits/steve_king.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Charles Aldrich',
                img: require('../portraits/Charles_Aldrich.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tom Miller',
                img: require('../portraits/TomMiller2015.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Deidre DeJear',
                img: require('../portraits/Deidre_DeJear_Headshot-min.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Paul Pate',
                img: require('../portraits/Paul_Pate.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Rob Sand',
                img: require('../portraits/AR-171119840.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mary Mosiman',
                img: require('../portraits/MaryMosiman1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Michael Fitzgerald',
                img: require('../portraits/Michael_Fitzgerald.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          }
        ]
      }
    ]
  },
  KS: {
    // https://www.nytimes.com/interactive/2018/08/07/us/elections/results-kansas-primary-elections.html
    name: 'Kansas',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Laura Kelly',
                img: require('../portraits/Laura_Kelly.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kris Kobach',
                img: require('../portraits/Kris_Kobach.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Alan LaPolice',
                img: require('../portraits/Alan_LaPolice.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Roger Marshall',
                img: require('../portraits/Roger_Marshall.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Paul Davis',
                img: require('../portraits/PaulDavis.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Watkins',
                img: require('../portraits/Steve_Watkins.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Sharice Davids',
                img: require('../portraits/ShariceDavids_ActBlue-1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kevin Yoder',
                img: require('../portraits/Kevin_Yoder.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'James Thompson',
                img: require('../portraits/James_Thompson.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ron Estes',
                img: require('../portraits/ronestes.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Sarah Swain',
                img: require('../portraits/maxresdefault.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Derek Schmidt',
                img: require('../portraits/Derek_Schmidt.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Brian McClendon',
                img: require('../portraits/Brian_McClendon_.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Scott Schwab',
                img: require('../portraits/Scott_Schwab.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Marci Francisco',
                img: require('../portraits/Marci_Francisco.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jake LaTurner',
                img: require('../portraits/Jacob_LaTurner.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  KY: {
    name: 'Kentucky',
    legislatures: [
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Paul Walker',
                img: require('../portraits/oiwer.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'James Comer',
                img: require('../portraits/James_Comer.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Hank Linderman',
                img: require('../portraits/hank_linderman_head_shot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brett Guthrie',
                img: require('../portraits/Brett_Guthrie.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Yarmuth',
                img: require('../portraits/John_Yarmuth_113th_Congress.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Vickie Glisson',
                img: require('../portraits/glisson-vickie.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Seth Hall',
                img: require('../portraits/Seth_Hall.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Thomas Massie',
                img: require('../portraits/thomas_massie.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kenneth Stepp',
                img: require('../portraits/56959_lg.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Harold Rogers',
                img: require('../portraits/Hal_Rogers.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Amy McGrath',
                img: require('../portraits/Amy_McGrath.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Andy Barr',
                img: require('../portraits/andy_barr.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
    ]
  },
  // LA: Louisana // primaries Nov. 6 | Dec. 8
  ME: {
    // https://www.nytimes.com/interactive/2018/06/12/us/elections/results-maine-primary-elections.html
    name: 'Maine',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Janet Mills',
                img: require('../portraits/Janet_Mills.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Shawn Moody',
                img: require('../portraits/portland-press-herald_3163774.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Zak Ringelstein',
                img: require('../portraits/image3.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Eric Brakey',
                img: require('../portraits/Eric_Brakey.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Chellie Pingree',
                img: require('../portraits/Chellie_Pingree.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Holbrook',
                img: require('../portraits/Mark_Holbrook.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Golden',
                img: require('../portraits/JaredGolden.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bruce Poliquin',
                img: require('../portraits/bruce_p.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
    ]
  },
  MD: {
    // https://www.nytimes.com/interactive/2018/06/26/us/elections/results-maryland-primary-elections.html
    name: 'Maryland',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Ben Jealous',
                img: require('../portraits/Ben_Jealous.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Larry Hogan',
                img: require('../portraits/lhogan2final.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Ben Cardin',
                img: require('../portraits/Ben_Cardin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tony Campbell',
                img: require('../portraits/tony_campell.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Jesse Colvin',
                img: require('../portraits/Jesse_Colvin-6.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Andy Harris',
                img: require('../portraits/Andy_Harris.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dutch Ruppersberger',
                img: require('../portraits/CA_Dutch_Rubbersberger.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Liz Matory',
                img: require('../portraits/29034842.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Sarbanes',
                img: require('../portraits/John_Sarbanes.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Charles Anthony',
                img: require('../portraits/none.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Anthony Brown',
                img: require('../portraits/anthonybbb.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'George McDermott',
                img: require('../portraits/George_McDermott.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Steny Hoyer',
                img: require('../portraits/Steny_Hoyer.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'William Devine',
                img: require('../portraits/macky.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'David Trone',
                img: require('../portraits/David_Trone.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Amie Hoeber',
                img: require('../portraits/HOeber.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Elijah Cummings',
                img: require('../portraits/Elijah_Cummings.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Richmond Davis',
                img: require('../portraits/campaign_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Jamie Raskin',
                img: require('../portraits/Jamie_Raskin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Walsh',
                img: require('../portraits/img0524.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Brian Frosh',
                img: require('../portraits/BrianFrosh2015.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Craig Wolf',
                img: require('../portraits/craigwolfat.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  MA: {
    name: 'Massachusetts',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'govenror',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jay Gonzalez',
                img: require('../portraits/JayGonzalez.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Charlie Baker',
                img: require('../portraits/CharlesBaker2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Elizabeth Warren',
                img: require('../portraits/Elizabeth_Warren--Official_113th_Congressional_Portrait--.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Geoff Diehl',
                img: require('../portraits/1130113diehl.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Richard E. Neal',
                img: require('../portraits/Richard_Neal.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jim McGovern',
                img: require('../portraits/James_P_McGovern.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tracy Lovvorn',
                img: require('../portraits/profile.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Lori Trahan',
                img: require('../portraits/LTHeadshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rick Green',
                img: require('../portraits/20170110__BREAKINGNEWSRick_p1_200.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Joseph P. Kennedy III',
                img: require('../portraits/joekennedy.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Katherine Clark',
                img: require('../portraits/Katherine_Clark_2013.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Hugo',
                img: require('../portraits/John_Hugo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Seth Moulton',
                img: require('../portraits/Seth_Moulton.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Joseph Schneider',
                img: require('../portraits/joseph-schneider-049-1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ayanna Pressley',
                img: require('../portraits/AyannaPressley.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Stephen Lynch',
                img: require('../portraits/Stephen_Lynch.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Bill Keating',
                img: require('../portraits/William_Keating.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Peter Tedeschi',
                img: require('../portraits/Tedeschi_Peter_alternate.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Quentin Palfrey',
                img: require('../portraits/Quentin_Palfrey.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Karyn Polito',
                img: require('../portraits/G2qztDnO_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Maura Healey',
                img: require('../portraits/MauraHealy2015.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'James McMahon',
                img: require('../portraits/static1.squarespace-2.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'William F. Galvin',
                img: require('../portraits/William_f_galvin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Anthony Amore',
                img: require('../portraits/anthony_amore.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Suzanne Bump',
                img: require('../portraits/Suzanne_Bump.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Helen Brady',
                img: require('../portraits/download-3.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Deborah Goldberg',
                img: require('../portraits/Deb_Goldberg.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Keiko Orrall',
                img: require('../portraits/KMO1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
    ]
  },
  MI: {
    // https://www.nytimes.com/interactive/2018/08/07/us/elections/results-michigan-primary-elections.html
    name: 'Michigan',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Gretchen Whitmer',
                img: require('../portraits/Whitmer.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bill Schuette',
                img: require('../portraits/Bill_Schuette.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Debbie Stabenow',
                img: require('../portraits/Debbie_Stabenow.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John James',
                img: require('../portraits/wijer.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Jack Bergman',
                img: require('../portraits/Jack_Bergman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Rob Davidson',
                img: require('../portraits/Rob_Davidson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bill Huizenga',
                img: require('../portraits/Bill_Huizenga.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cathy Albro',
                img: require('../portraits/Cathy_Albro.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Justin Amash',
                img: require('../portraits/Justin_Amash.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jerry Hilliard',
                img: require('../portraits/HILLIARD-jerry.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Moolenaar',
                img: require('../portraits/John_Moolenaar.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Daniel Kildee',
                img: require('../portraits/Dan_Kildee.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Travis Wines',
                img: require('../portraits/wines.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Matt Longjohn',
                img: require('../portraits/Matt_Longjohn_photo-7.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Fred Upton',
                img: require('../portraits/Fred_Upton.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Gretchen Driskell',
                img: require('../portraits/Gretchen_Driskell.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tim Walberg',
                img: require('../portraits/Tim_Walberg.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Elissa Slotkin',
                img: require('../portraits/Elissa_Slotkin2.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Bishop',
                img: require('../portraits/Mike_Bishop_Official.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Brian Ellison',
                img: require('../portraits/none.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Andy Levin',
                img: require('../portraits/Andy_Levin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Candius Stearns',
                img: require('../portraits/54e99.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Kimberly Bizon',
                img: require('../portraits/lwerinfm.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Paul Mitchell',
                img: require('../portraits/paulmitchell.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Haley Stevens',
                img: require('../portraits/HaleyStevens.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lena Epstein',
                img: require('../portraits/Headshot_1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Debbie Dingell',
                img: require('../portraits/debbieding.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jeff Jones',
                img: require('../portraits/Jeff_Jones_MI.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Rashida Tlaib',
                img: require('../portraits/Rashida_Tlaib.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          },
          // {
          //   name: 'District 13 Special Election',
          //   candidates: [
          //     { // TODO: Double-check that this is correct
          //       name: 'Brenda Jones',
          //       img: require('../portraits/Brenda_Jones.png'),
          //       grade: NO_GRADE()
          //     },
          //   ]
          // },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Brenda Lawrence',
                img: require('../portraits/Brenda_Lawrence.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Marc Herschfus',
                img: require('../portraits/none.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
    ]
  },
  MN: {
    name: 'Minnesota',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tim Walz',
                img: require('../portraits/Tim_Walz.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jeff Johnson',
                img: require('../portraits/Jeff_Johnson_(Minnesota)-7.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Chris Wright',
                img: require('../portraits/Chris_Wright_400x600.jpg'),
                party: GRASSROOTS,
                grade: NO_GRADE()
              },
              {
                name: 'Josh Welter',
                img: require('../portraits/download-4.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Amy Klobuchar',
                img: require('../portraits/Amy_Klobuchar.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Newberger',
                img: require('../portraits/Jim_Newberger.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Paula Overby',
                img: require('../portraits/Paula_Overby_4X4_web.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Dennis Schuller',
                img: require('../portraits/Dennis_Schuller.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'Special Election',
            candidates: [
              {
                name: 'Tina Smith',
                img: require('../portraits/Tina_Smith-1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Karin Housley',
                img: require('../portraits/KarinHousley.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jerry Trooien',
                img: require('../portraits/Cxg_RBrJ_400x400.jpg'),
                party: UNAFFILIATED,
                grade: NO_GRADE()
              },
              {
                name: 'Sarah Wellington',
                img: require('../portraits/SarahWellington2.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Dan Feehan',
                img: require('../portraits/Dan_Feehan_-_Headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Hagedorn',
                img: require('../portraits/HagedornMN.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Angie Craig',
                img: require('../portraits/Angie_Craig_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jason Lewis',
                img: require('../portraits/Jason_Lewis.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Dean Phillips',
                img: require('../portraits/Dean_Phillips.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Erik Paulsen',
                img: require('../portraits/Erik_Paulsen.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Betty McCollum',
                img: require('../portraits/Betty_McCollum.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Greg Ryan',
                img: require('../portraits/RyanMN.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Susan Pendergast Sindt',
                img: require('../portraits/none.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Ilhan Omar',
                img: require('../portraits/Ilhan_Omar_portrait.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jennifer Zielinski',
                img: require('../portraits/Jennifer_Zielinski.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Ian Todd',
                img: require('../portraits/Ian_Todd.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tom Emmer',
                img: require('../portraits/Tom_Emmer.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Collin C. Peterson',
                img: require('../portraits/Collin_Peterson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dave Hughes',
                img: require('../portraits/Dave_Hughes.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Joe Radinovich',
                img: require('../portraits/Joe_Radinovich.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Pete Stauber',
                img: require('../portraits/Pete-Stauber2017.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Ray Sandman',
                img: require('../portraits/Ray_Skip_Sandman.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Keith Ellison',
                img: require('../portraits/Keith_Ellison.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Doug Wardlow',
                img: require('../portraits/Doug_Wardlow.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Noah Johnson',
                img: require('../portraits/Noah_M._Johnson.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Steve Simon',
                img: require('../portraits/SSimon.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Howe',
                img: require('../portraits/John_Howe.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Julie Blaha',
                img: require('../portraits/8493489.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Pam Myhra',
                img: require('../portraits/Pam_Myhra.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Chris Dock',
                img: require('../portraits/none.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Ford',
                img: require('../portraits/none.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  MS: {
    // https://www.nytimes.com/interactive/2018/06/05/us/elections/results-mississippi-primary-elections.html
    // https://www.nytimes.com/interactive/2018/06/26/us/elections/results-mississippi-primary-runoff-elections.html
    name: 'Mississippi',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'David Baria',
                img: require('../portraits/David_Baria.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Roger Wicker',
                img: require('../portraits/Roger_Wicker.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Randy Wadkins',
                img: require('../portraits/Wadkins-headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Trent Kelly',
                img: require('../portraits/Trent_Kelly.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Bennie Thompson',
                img: require('../portraits/Bennie_Thompson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Michael Evans',
                img: require('../portraits/Michael_Evans.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Guest',
                img: require('../portraits/Michael_Guest-photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jeramey Anderson',
                img: require('../portraits/Jeramey_Anderson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steven M. Palazzo',
                img: require('../portraits/Steven_Palazzo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  MO: {
    name: 'Missouri',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Claire McCaskill',
                img: require('../portraits/Claire_McCaskill.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Josh Hawley',
                img: require('../portraits/Josh_Hawley.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'William Lacy Clay',
                img: require('../portraits/William_Lacy_Clay.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Robert Vroman',
                img: require('../portraits/Robert_Vroman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Robb Cunningham',
                img: require('../portraits/Robb_E_Cunningham.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Cort VanOstran',
                img: require('../portraits/CortVanOstran.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ann Wagner',
                img: require('../portraits/Ann_Wagner.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'David Arnold',
                img: require('../portraits/none.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Larry Kirk',
                img: require('../portraits/none.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Katy Geppert',
                img: require('../portraits/Geppert_Professional_Picture.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Blaine Luetkemeyer',
                img: require('../portraits/Blaine_Luetkemeyer.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Donald Stolle',
                img: require('../portraits/none.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Renee Hoagenson',
                img: require('../portraits/Renee_Hoagenson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Vicky Hartzler',
                img: require('../portraits/Vicky_Hartzler.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Bliss',
                img: require('../portraits/Mark_Bliss.png'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Emanuel Cleaver II',
                img: require('../portraits/Emanuel_Cleaver.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jacob Turk',
                img: require('../portraits/Jacob_Turk.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'E.C. Fredland',
                img: require('../portraits/none.jpg'),
                party: CONSTITUTION,
                grade: NO_GRADE()
              },
              {
                name: 'Maurice Copeland',
                img: require('../portraits/none.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Alexander Howell',
                img: require('../portraits/none.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Henry Martin',
                img: require('../portraits/Henry_Martin2.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Sam Graves',
                img: require('../portraits/Sam_Graves.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Dan Hogan',
                img: require('../portraits/Dan_Hogan.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Jamie Schoolcraft',
                img: require('../portraits/Jamie_Schoolcraft.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Billy Long',
                img: require('../portraits/Billy_Long.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Benjamin Brixey',
                img: require('../portraits/benbrix.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Kathy Ellis',
                img: require('../portraits/Kathy_Ellis_for_Congress.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jason Smith',
                img: require('../portraits/jasont.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jonathan Shell',
                img: require('../portraits/none.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Nicole Galloway',
                img: require('../portraits/Nicole_Galloway.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Saundra McDowell',
                img: require('../portraits/vlqRjnoC_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jacob Luetkemeyer',
                img: require('../portraits/jaluetkSmall.jpg'),
                party: CONSTITUTION,
                grade: NO_GRADE()
              },
              {
                name: 'Don Fitz',
                img: require('../portraits/Don_Fitz.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Sean O\'Toole',
                img: require('../portraits/toole.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  MT: {
    // https://www.nytimes.com/interactive/2018/06/05/us/elections/results-montana-primary-elections.html
    name: 'Montana',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jon Tester',
                img: require('../portraits/Jon_Tester.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Matt Rosendale',
                img: require('../portraits/Matt_Rosendale.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Rick Breckenridge',
                img: require('../portraits/Rick_Breckenridge.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Kelly',
                img: require('../portraits/ewiorweiorj.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: US_HOUSE,
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kathleen Williams',
                img: require('../portraits/KathleenWilliams.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Greg Gianforte',
                img: require('../portraits/greg.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Elinor Swanson',
                img: require('../portraits/Elinor_Swanson.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              },
              {
                name: 'Doug Campbell',
                img: require('../portraits/doug_campbell.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  NE: {
    name: 'Nebraska',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Bob Krist',
                img: require('../portraits/Krist.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Pete Ricketts',
                img: require('../portraits/PeteRicketts2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jane Raybould',
                img: require('../portraits/JaneRaybould.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Deb Fischer',
                img: require('../portraits/DFischer.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Schultz',
                img: require('../portraits/JimSchultzForSenate.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Jessica McClure',
                img: require('../portraits/jessicamcclure.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jeff Fortenberry',
                img: require('../portraits/jefffortenberry.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Kara Eastman',
                img: require('../portraits/Kara_Eastman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Don Bacon',
                img: require('../portraits/Don_Bacon_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Paul Theobald',
                img: require('../portraits/Paul_Theobald.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Adrian Smith',
                img: require('../portraits/Adrian_Smith1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Doug Peterson',
                img: require('../portraits/DougPeterson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Spencer Danner',
                img: require('../portraits/5a70fbeb6cf5c.image.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bob Evnen',
                img: require('../portraits/bobevnen.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jane Skinner',
                img: require('../portraits/JaneSkinner.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Charlie Janssen',
                img: require('../portraits/Janssen.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'John Murante',
                img: require('../portraits/John_Murante.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  NV: {
    name: 'Nevada',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Steve Sisolak',
                img: require('../portraits/Sisolak.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Adam Laxalt',
                img: require('../portraits/AdamLaxalt2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jacky Rosen',
                img: require('../portraits/Jacky_Rosen.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dean Heller',
                img: require('../portraits/Dean_Heller.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Dina Titus',
                img: require('../portraits/Dina_Titus_113th_Congress.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Joyce Bentley',
                img: require('../portraits/joyce_bentley1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clint Koble',
                img: require('../portraits/Clint_Koble.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Amodei',
                img: require('../portraits/Mark_armodei.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Susie Lee',
                img: require('../portraits/Susie_Lee.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Danny Tarkanian',
                img: require('../portraits/Danny_Tarkanian.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Steven Horsford',
                img: require('../portraits/Steven_Horsford.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Cresent Hardy',
                img: require('../portraits/cresenthardy.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kate Marshall',
                img: require('../portraits/Kate_Marshall.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Roberson',
                img: require('../portraits/121938_lg.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Aaron Ford',
                img: require('../portraits/Ford_headshot_in_classroom_heads_and_shoulder.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Wes Duncan',
                img: require('../portraits/Wesley_Duncan.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Barbara Cegavske',
                img: require('../portraits/Barbara_Cegavske.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Bob Beers',
                img: require('../portraits/Bob_Beers.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  NH: {
    name: 'New Hampshire',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Molly Kelly',
                img: require('../portraits/Molly_Kelly.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Chris Sununu',
                img: require('../portraits/Chris_Sununu.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jilletta Jarvis',
                img: require('../portraits/Jilletta-Jarvis.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Chris Pappas',
                img: require('../portraits/Chris_Pappas.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Eddie Edwards',
                img: require('../portraits/fF26b40.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Dan Belforti',
                img: require('../portraits/d_belforti.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Ann McLane Kuster',
                img: require('../portraits/Ann_McLane_Kuster.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Negron',
                img: require('../portraits/Steve_Negron.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Justin O\'Donnell',
                img: require('../portraits/Justin_ODonnell-6.png'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  NJ: {
    name: 'New Jersey',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Robert Menendez',
                img: require('../portraits/bobmenendez.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bob Hugin',
                img: require('../portraits/BobHugin.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Donald Norcross',
                img: require('../portraits/donaldnorcross.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Paul Dilks',
                img: require('../portraits/pauldilk.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jeff Van Drew',
                img: require('../portraits/vandrew_color.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Seth Grossman',
                img: require('../portraits/Sethgrossman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Andrew Kim',
                img: require('../portraits/Andrew_Kim.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tom MacArthur',
                img: require('../portraits/Tom_MacArthur_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Joshua Welle',
                img: require('../portraits/joshwelle.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Christopher H. Smith',
                img: require('../portraits/Chris_Smith.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Josh Gottheimer',
                img: require('../portraits/Josh_Gottheimer.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John McCann',
                img: require('../portraits/mccann.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Frank Pallone Jr.',
                img: require('../portraits/Frank_Pallone.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Richard Pezzullo',
                img: require('../portraits/Rich_Pezzullo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  NM: {
    name: 'New Mexico',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Michelle Lujan Grisham',
                img: require('../portraits/michellelujangrisham.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Pearce',
                img: require('../portraits/Steve_Pearce.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Martin Heinrich',
                img: require('../portraits/Martin_Heinrich.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mick Rich',
                img: require('../portraits/MickRich.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Debra Haaland',
                img: require('../portraits/Debra_Haaland.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Janice Arnold-Jones',
                img: require('../portraits/arnoldjones.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Xochitl Torres Small',
                img: require('../portraits/09E724B7-7935-48B5-88E8-42C85C674F6C.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Yvette Herrell',
                img: require('../portraits/Yvette_Herrell.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Ben Ray Luján',
                img: require('../portraits/Ben_Ray_Lujan.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jerald Steve McFall',
                img: require('../portraits/Steve-McFall.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Howie Morales',
                img: require('../portraits/HMorales.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michelle Garcia Holmes',
                img: require('../portraits/MichelleGarciaHolmes.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Hector Balderas',
                img: require('../portraits/HectorBalderas.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Hendricks',
                img: require('../portraits/Michaelhendrickprofile.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Maggie Toulouse Oliver',
                img: require('../portraits/Maggie_Toulouse_Oliver.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'JoHanna Cox',
                img: require('../portraits/JoHanna-C-Cox-Law-Headshot-683x1024.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Brian S. Colón',
                img: require('../portraits/BrianColon.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Wayne Johnson',
                img: require('../portraits/WayneJohnson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tim Eichenberg',
                img: require('../portraits/TEichenberg.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Arthur Castillo',
                img: require('../portraits/ALC_head_shot.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LAND_COMMISSIONER,
        id: 'landCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Stephanie Garcia Richard',
                party: DEMOCRAT,
                img: require('../portraits/Stephanie_Richard.jpg'),
                grade: NO_GRADE()
              },
              {
                name: 'Patrick Lyons',
                img: require('../portraits/Patrick_Lyons.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  NY: {
   name: 'New York',
   legislatures: [
     {
       name: GOVERNOR,
       id: 'governor',
       districts: [
         {
           name: STATEWIDE,
           candidates: [
             {
               name: 'Andrew M. Cuomo',
               img: require('../portraits/AndrewCuomo2015.png'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Marc Molinaro',
               img: require('../portraits/Marcus_Molinaro.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Howie Hawkins',
               img: require('../portraits/HowieHawkins.jpg'),
               party: GREEN,
               grade: NO_GRADE()
             }
           ]
         }
       ]
     },
     {
       name: US_SENATE,
       id: 'senate',
       districts: [
         {
           name: STATEWIDE,
           candidates: [
             {
               name: 'Kirsten Gillibrand',
               img: require('../portraits/Kirsten_Gillibrand.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Chele Farley',
               img: require('../portraits/239u4u.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         }
       ]
     },
     {
       name: US_HOUSE,
       id: 'usHouse',
       districts: [
         {
           name: 'District 1',
           candidates: [
             {
               name: 'Perry Gershon',
               img: require('../portraits/Perry_Gershon.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Lee Zeldin',
               img: require('../portraits/Lee_Zeldin_new_official_portrait.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Patricia Latzman',
               img: require('../portraits/none.jpg'),
               party: WORKING_FAMILIES,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 2',
           candidates: [
             {
               name: 'Liuba Grechen Shirley',
               img: require('../portraits/Liuba_Grechen_Shirley.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Peter King',
               img: require('../portraits/Peter_T._King.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 3',
           candidates: [
             {
               name: 'Tom Suozzi',
               img: require('../portraits/Tom_Suozzi.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Dan DeBono',
               img: require('../portraits/image1-2.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 4',
           candidates: [
             {
               name: 'Kathleen Rice',
               img: require('../portraits/Kathleen_M._Rice.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Ameer Benno',
               img: require('../portraits/AB_Lo_Res_Cropped.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 5',
           candidates: [
             {
               name: 'Gregory Meeks',
               img: require('../portraits/Gregory_W._Meeks.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 6',
           candidates: [
             {
               name: 'Grace Meng',
               img: require('../portraits/Grace_Meng_Official_Congressional_Photo.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Tom Hillgardner',
               img: require('../portraits/none.jpg'),
               party: GREEN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 7',
           candidates: [
             {
               name: 'Nydia Velazquez',
               img: require('../portraits/Nydia_Velazquez.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Joseph Lieberman',
               img: require('../portraits/none.jpg'),
               party: CONSERVATIVE,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 8',
           candidates: [
             {
               name: 'Hakeem Jeffries',
               img: require('../portraits/HakeemJeffries.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Ernest Johnson',
               img: require('../portraits/none.jpg'),
               party: CONSERVATIVE,
               grade: NO_GRADE()
             },
             {
               name: 'Jessica White',
               img: require('../portraits/none.jpg'),
               party: REFORM,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 9',
           candidates: [
             {
               name: 'Yvette Clarke',
               img: require('../portraits/Yvette_Clark.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Lutchi Gayot',
               img: require('../portraits/Lutchi_Gayot.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Joel Anabilah-Azumah',
               img: require('../portraits/none.jpg'),
               party: REFORM,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 10',
           candidates: [
             {
               name: 'Jerrold Nadler',
               img: require('../portraits/Jerrold_Nadler.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Naomi Levin',
               img: require('../portraits/naomilevin-min.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 11',
           candidates: [
             {
               name: 'Max Rose',
               img: require('../portraits/Max_Rose.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Dan Donovan',
               img: require('../portraits/Dan_Donovan.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Henry Bardel',
               img: require('../portraits/Henry_Bardel.png'),
               party: GREEN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 12',
           candidates: [
             {
               name: 'Carolyn Maloney',
               img: require('../portraits/Carolyn_Maloney.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Eliot Rabin',
               img: require('../portraits/Elliot-Rabin-1.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Scott Hutchins',
               img: require('../portraits/Scottandrewhutchins.jpg'),
               party: GREEN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 13',
           candidates: [
             {
               name: 'Adriano Espaillat',
               img: require('../portraits/Adriano_Espaillat_115th_Congress_photo.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Jineea Butler',
               img: require('../portraits/jineeabutlerheadshot.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 14',
           candidates: [
             {
               name: 'Alexandria Ocasio-Cortez',
               img: require('../portraits/Alexandria_Ocasio-Cortez.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Anthony Pappas',
               img: require('../portraits/Anthony_Pappas.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Elizabeth Perri',
               img: require('../portraits/none.jpg'),
               party: CONSERVATIVE,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 15',
           candidates: [
             {
               name: 'Jose E. Serrano',
               img: require('../portraits/Jose_E._Serrano.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Jason Gonzalez',
               img: require('../portraits/none.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 16',
           candidates: [
             {
               name: 'Eliot Engel',
               img: require('../portraits/Eliot_Engel.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 17',
           candidates: [
             {
               name: 'Nita Lowey',
               img: require('../portraits/Nita_Lowey.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Joseph Ciardullo',
               img: require('../portraits/JosephCiardullo-1.jpg'),
               party: REFORM,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 18',
           candidates: [
             {
               name: 'Sean Patrick Maloney',
               img: require('../portraits/Sean_Patrick_Maloney_113th_Congress.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'James O\'Donnell',
               img: require('../portraits/James_ODonnell-min.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 19',
           candidates: [
             {
               name: 'Antonio Delgado',
               img: require('../portraits/Web-Pic.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'John Faso',
               img: require('../portraits/John_Faso_official_congressional_photo.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Steven Greenfield',
               img: require('../portraits/stevengreenfield.jpg'),
               party: GREEN,
               grade: NO_GRADE()
             },
             {
               name: 'Bob Cohen',
               img: require('../portraits/none.jpg'),
               party: WORKING_FAMILIES,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 20',
           candidates: [
             {
               name: 'Paul Tonko',
               img: require('../portraits/Paul_Tonko.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Francis Vitollo',
               img: require('../portraits/Joe_Vitollo.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 21',
           candidates: [
             {
               name: 'Tedra Cobb',
               img: require('../portraits/Tedra_Cobb.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Elise Stefanik',
               img: require('../portraits/Elise_Stefanik_official_congressional_photo.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Lynn Kahn',
               img: require('../portraits/Lynn_Kahn_Presidential_Candidate_2016.jpg'),
               party: GREEN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 22',
           candidates: [
             {
               name: 'Anthony Brindisi',
               img: require('../portraits/Anthony_Brindisi.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Claudia Tenney',
               img: require('../portraits/claudia_tenney.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 23',
           candidates: [
             {
               name: 'Tracy Mitrano',
               img: require('../portraits/2304832487784923.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Thomas Reed',
               img: require('../portraits/Tom_Reed-min.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 24',
           candidates: [
             {
               name: 'Dana Balter',
               img: require('../portraits/danabalter.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'John Katko',
               img: require('../portraits/John_Katko.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 25',
           candidates: [
             {
               name: 'Joseph Morelle',
               img: require('../portraits/Joseph_Morelle.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'James Maxwell',
               img: require('../portraits/28340234789.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 26',
           candidates: [
             {
               name: 'Brian Higgins',
               img: require('../portraits/Brian_Higgins.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Renee Zeno',
               img: require('../portraits/none.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             }
           ]
         },
         {
           name: 'District 27',
           candidates: [
             {
               name: 'Nate McMurray',
               img: require('../portraits/McMurray.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Chris Collins',
               img: require('../portraits/Chris_Collins.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Larry Piegza',
               img: require('../portraits/Larry_Piegza.jpg'),
               party: REFORM,
               grade: NO_GRADE()
             }
           ]
         }
       ]
     },
     {
       name: LIEUTENANT_GOVERNOR,
       id: 'lieutenantGovernor',
       districts: [
         {
           name: STATEWIDE,
           candidates: [
             {
               name: 'Kathy Hochul',
               img: require('../portraits/ad05paDl_400x400.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Julie Killian',
               img: require('../portraits/jpk_headshot.png'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Jia Lee',
               img: require('../portraits/kjlsf.jpg'),
               party: GREEN,
               grade: NO_GRADE()
             }
           ]
         }
       ]
     },
     {
       name: ATTORNEY_GENERAL,
       id: 'attorneyGeneral',
       districts: [
         {
           name: STATEWIDE,
           candidates: [
             {
               name: 'Letitia James',
               img: require('../portraits/letitia.jpg'),
               party: DEMOCRAT,
               grade: NO_GRADE()
             },
             {
               name: 'Keith Wofford',
               img: require('../portraits/keith.jpg'),
               party: REPUBLICAN,
               grade: NO_GRADE()
             },
             {
               name: 'Michael Sussman',
               img: require('../portraits/sussman_headshot.jpg'),
               party: GREEN,
               grade: NO_GRADE()
             },
             {
               name: 'Vincent Messina',
               img: require('../portraits/none.jpg'),
               party: INDEPENDENCE,
               grade: NO_GRADE()
             },
             {
               name: 'Nancy Sliwa',
               img: require('../portraits/animal-pic.jpg'),
               party: REFORM,
               grade: NO_GRADE()
             },
             {
               name: 'Kenneth Schaeffer',
               img: require('../portraits/none.jpg'),
               party: WORKING_FAMILIES,
               grade: NO_GRADE()
             }
           ]
         }
       ]
     }
   ]
  },
  NC: {
    name: 'North Carolina',
    legislatures: [
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'G.K. Butterfield',
                img: require('../portraits/GKButterfield.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Roger Allison',
                img: require('../portraits/178270_lg.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Linda Coleman',
                img: require('../portraits/lindacoleman.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'George Holding',
                img: require('../portraits/GeorgeHoldingReplace.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jeff Matemu',
                img: require('../portraits/1934893284.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Walter B. Jones',
                img: require('../portraits/WalterBJones.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'David E. Price',
                img: require('../portraits/David_Price.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Loor',
                img: require('../portraits/80F89488-3389-4321-B789-1FF25A86074B.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Barbara Howe',
                img: require('../portraits/Barbara_Howe.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Denise D. Adams',
                img: require('../portraits/Denise_Adams.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Virginia Foxx',
                img: require('../portraits/Virginia_Foxx.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Ryan Watts',
                img: require('../portraits/RyanWatts.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Walker',
                img: require('../portraits/Mark_Walker_NC.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Kyle Horton',
                img: require('../portraits/Kyle_Horton.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Rouzer',
                img: require('../portraits/David_Rouzer_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Frank McNeill',
                img: require('../portraits/FrankMcNeillHeadShot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Richard Hudson',
                img: require('../portraits/Richard_Hudson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Dan McCready',
                img: require('../portraits/veytey.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Harris',
                img: require('../portraits/Mark_Harris.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jeff Scott',
                img: require('../portraits/Jeff_Scott.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'David Wilson Brown',
                img: require('../portraits/David_Wilson_Brown.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Patrick T. McHenry',
                img: require('../portraits/PatrickTMH.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Phillip Price',
                img: require('../portraits/Phillip_Price.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Meadows',
                img: require('../portraits/Mark_meadows_nc.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Clifton Ingram',
                img: require('../portraits/CIJ.png'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Alma Adams',
                img: require('../portraits/AlmaAdams.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Paul Wright',
                img: require('../portraits/Paul_Wright.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Kathy Manning',
                img: require('../portraits/kathymanning.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ted Budd',
                img: require('../portraits/Ted_Budd_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Tom Bailey',
                img: require('../portraits/tombailey.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  ND: {
    name: 'North Dakota',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Heidi Heitkamp',
                img: require('../portraits/Heidi_heitkamp.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kevin Cramer',
                img: require('../portraits/Kevin_Cramer.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mac Schneider',
                img: require('../portraits/MSchneider.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kelly Armstrong',
                img: require('../portraits/Kelly_Armstrong.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'David Thompson',
                img: require('../portraits/David_Thompson_NC.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Wayne Stenehjem',
                img: require('../portraits/WayneStenehjem2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Joshua Boschee',
                img: require('../portraits/Joshua_Boschee.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Will Gardner',
                img: require('../portraits/Will_Gardner.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AGRICULTURE_COMMISSIONER,
        id: 'agricultureCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jim Dotzenrod',
                img: require('../portraits/JDotzenrod.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Doug Goehring',
                img: require('../portraits/Doug_Goehring.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  OH: {
    name: 'Ohio',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Sherrod Brown',
                img: require('../portraits/Sherrod_Brown.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'James B. Renacci',
                img: require('../portraits/James_Renacci.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Richard Cordray',
                img: require('../portraits/Richard_Cordray.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike DeWine',
                img: require('../portraits/MikeDeWine2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Aftab Pureval',
                img: require('../portraits/Aftab_Pureval.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Chabot',
                img: require('../portraits/Steve_Chabot.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jill Schiller',
                img: require('../portraits/JillSchillerHeadshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brad Wenstrup',
                img: require('../portraits/Brad_Wenstrup.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Joyce Beatty',
                img: require('../portraits/Joyce_Beatty.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Burgess',
                img: require('../portraits/Jim_Burgess.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Janet Garrett',
                img: require('../portraits/Janet_Garrett.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Jordan',
                img: require('../portraits/JimjordanReplace.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Michael Galbraith',
                img: require('../portraits/John_Michael_Galbraith.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bob Latta',
                img: require('../portraits/Bob_Latta.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Shawna Roberts',
                img: require('../portraits/ShawnaRoberts.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bill Johnson',
                img: require('../portraits/Bill_Johnson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ken Harbaugh',
                img: require('../portraits/Ken_Harbaugh.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bob Gibbs',
                img: require('../portraits/Bob_Gibbs.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Vanessa Enoch',
                img: require('../portraits/Headshot.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Warren Davidson',
                img: require('../portraits/Warren_Davidson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Marcy Kaptur',
                img: require('../portraits/Marcy_Kaptur.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steven Kraus',
                img: require('../portraits/Steven_Kraus.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Theresa Gasper',
                img: require('../portraits/TG_in_UD_shirt_on_Oak_St.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael R. Turner',
                img: require('../portraits/MIKETURNER.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Marcia L. Fudge',
                img: require('../portraits/Marcia_Fudge-1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Beverly Goldstein',
                img: require('../portraits/Beverly_Goldstein.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Danny O\'Connor',
                img: require('../portraits/Danny-OConnor-2.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Troy Balderson',
                img: require('../portraits/troy-bald.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Tim Ryan',
                img: require('../portraits/Tim_Ryan_OH.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Chris DePizzo',
                img: require('../portraits/1-1.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Betsy Rader',
                img: require('../portraits/Betsy_Rader.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Joyce',
                img: require('../portraits/David_Joyce.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Rick Neal',
                img: require('../portraits/Rick_Neal.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Stivers',
                img: require('../portraits/steve-stivers.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Susan Moran Palmer',
                img: require('../portraits/Susan_Moran_Palmer_Headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Anthony Gonzalez',
                img: require('../portraits/Anthony_Gonzalez.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Steven Dettelbach',
                img: require('../portraits/steven-tet.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dave Yost',
                img: require('../portraits/Dave_Yost.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kathleen Clyde',
                img: require('../portraits/Kathleen_Clyde.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Frank LaRose',
                img: require('../portraits/1640.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Zack Space',
                img: require('../portraits/Zack_Space.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Keith Faber',
                img: require('../portraits/faberphoto.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Rob Richardson',
                img: require('../portraits/RobRichardson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Robert Sprague',
                img: require('../portraits/Robert_Sprague.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  OK: {
    name: 'Oklahoma',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Drew Edmondson',
                img: require('../portraits/Drew.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mick Cornett',
                img: require('../portraits/Mick_Cornett.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Chris Powell',
                img: require('../portraits/chris-powell-2-1-771x578.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Tim Gilpin',
                img: require('../portraits/Tim_Gilpin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tim Harris',
                img: require('../portraits/Tim_Harris.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jason Nichols',
                img: require('../portraits/Jason_Nichols.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Markwayne Mullin',
                img: require('../portraits/Markwayne_Mullin.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Richard Castaldo',
                img: require('../portraits/unnamed_(1).jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Frankie Robbins',
                img: require('../portraits/robbins.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Frank Lucas',
                img: require('../portraits/Frank_Lucas.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Mary Brannon',
                img: require('../portraits/MARY_BRANNON.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tom Cole',
                img: require('../portraits/Tom_Cole.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kendra Horn',
                img: require('../portraits/Kendra_Horn.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Russell',
                img: require('../portraits/Steve_Russell_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Anastasia Pittman',
                img: require('../portraits/PittmanAnastasia.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dana Murphy',
                img: require('../portraits/Dana_Murphy.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mark Myles',
                img: require('../portraits/WalkCardSide1-min.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Hunter',
                img: require('../portraits/Mike_Hunter.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Randy McDaniel',
                img: require('../portraits/McDanielRandy.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  OR: {
    name: 'Oregon',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kate Brown',
                img: require('../portraits/KateBrown2015.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Knute Buehler',
                img: require('../portraits/Knute_Buehler.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Patrick Starnes',
                img: require('../portraits/PatrickStarnes.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Suzanne Bonamici',
                img: require('../portraits/Suzanne_Bonamici.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Verbeek',
                img: require('../portraits/AR-180429752.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jamie McLeod-Skinner',
                img: require('../portraits/jamie_mc.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Greg Walden',
                img: require('../portraits/Greg_Walden.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Earl Blumenauer',
                img: require('../portraits/Earl_Blumenauer.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Peter A. DeFazio',
                img: require('../portraits/Peter_Defazio.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Arthur Robinson',
                img: require('../portraits/art-robinson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kurt Schrader',
                img: require('../portraits/Kurt_Schrader.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Callahan',
                img: require('../portraits/09234234089.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
    ]
  },
  PA: {
    name: 'Pennsylvania',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tom Wolf',
                img: require('../portraits/TomWolf.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Scott Wagner',
                img: require('../portraits/Scott_Wagner.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Bob Casey',
                img: require('../portraits/bob_casey.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lou Barletta',
                img: require('../portraits/Lou_Barletta.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Scott Wallace',
                img: require('../portraits/Sccott_headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brian Fitzpatrick',
                img: require('../portraits/brian_fitzpatrick.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Brendan F. Boyle',
                img: require('../portraits/BrendanBoyle.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Torres',
                img: require('../portraits/torres_headshot_small.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Dwight Evans',
                img: require('../portraits/220px-Dwight_Evans_official_portrait.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bryan Leib',
                img: require('../portraits/leib_2.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Madeleine Dean',
                img: require('../portraits/MadeleineDean.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dan David',
                img: require('../portraits/_hFJfB4V_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mary Gay Scanlon',
                img: require('../portraits/scanlon_mary_gay_065_crop.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Pearl Kim',
                img: require('../portraits/download27.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Chrissy Houlahan',
                img: require('../portraits/Chrissy_Houlahan.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Greg McCauley',
                img: require('../portraits/Greg_McCauley-min.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Susan Wild',
                img: require('../portraits/Susan_Ellis_Wild.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Marty Nothstein',
                img: require('../portraits/Marty_Nothstein.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Matt Cartwright',
                img: require('../portraits/matt_cartwright.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Chrin',
                img: require('../portraits/johnchrin.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Denny Wolff',
                img: require('../portraits/Denny_Wolff.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dan Meuser',
                img: require('../portraits/Dan_Meuser.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'George Scott',
                img: require('../portraits/george_scott.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Scott Perry',
                img: require('../portraits/ScottPerry.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Jessica King',
                img: require('../portraits/Jess_King.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lloyd K. Smucker',
                img: require('../portraits/lloyd_smucker.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Marc Friedenberg',
                img: require('../portraits/Marc_Friedenberg.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tom Marino',
                img: require('../portraits/Tom_Marino.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Brent Ottaway',
                img: require('../portraits/brent_ottaway.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Joyce',
                img: require('../portraits/7561-036_preview.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Bibiana Boerio',
                img: require('../portraits/Bibie_headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Guy Reschenthaler',
                img: require('../portraits/GuyReschenthaler.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Susan Boser',
                img: require('../portraits/IMG_3270.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Glenn Thompson',
                img: require('../portraits/Glenn_Thompson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Ron DiNicola',
                img: require('../portraits/rdincola.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Kelly',
                img: require('../portraits/mike_kelly.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Conor Lamb',
                img: require('../portraits/Conor_Lamb.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Keith Rothfus',
                img: require('../portraits/Keith_Rothfus_portrait.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Mike Doyle',
                img: require('../portraits/Mike_Doyle.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          },
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'John Fetterman',
                img: require('../portraits/John_Fetterman_photo_2016.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jeff Bartos',
                img: require('../portraits/JeffBartos.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
        ]
      }
    ]
  },
  RI: {
    name: 'Rhode Island',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Gina Raimondo',
                img: require('../portraits/GinaRaimondo2015.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Allan Fung',
                img: require('../portraits/Allan_Fung.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Sheldon Whitehouse',
                img: require('../portraits/Sheldon_Whitehouse_113th_Congress.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Robert Flanders',
                img: require('../portraits/Bob_Flanders.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'David Cicilline',
                img: require('../portraits/David_Cicilline.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Patrick Donovan',
                img: require('../portraits/none.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jim Langevin',
                img: require('../portraits/James_Langevin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Salvatore Caiozzo',
                img: require('../portraits/Sal_stand_together.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Daniel McKee',
                img: require('../portraits/danielmckee.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Paul Pence',
                img: require('../portraits/PAUL_PENCE.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Peter Neronha',
                img: require('../portraits/220px-Neronha3.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Nellie Gorbea',
                img: require('../portraits/5d0c64da1dae47e9ad736efb844f64f7.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Pat Cortellessa',
                img: require('../portraits/98349834.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Seth Magaziner',
                img: require('../portraits/Seth_Magaziner.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Riley',
                img: require('../portraits/AR-180629379.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  SC: {
    name: 'South Carolina',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'James Smith',
                img: require('../portraits/James_Smith.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Henry McMaster',
                img: require('../portraits/Mcmaster.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Martin Barry',
                img: require('../portraits/none.jpg'),
                party: AMERICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Joe Cunningham',
                img: require('../portraits/Joe_Cunningham.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Katie Arrington',
                img: require('../portraits/Katie_Arrington.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Sean Carrigan',
                img: require('../portraits/Sean_Carrigan.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Joe Wilson',
                img: require('../portraits/Joe_Wilson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Sonny Narang',
                img: require('../portraits/snarang.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Brandon Brown',
                img: require('../portraits/erjk.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'William Timmons',
                img: require('../portraits/William_Timmons.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Guy Furay',
                img: require('../portraits/ad05.png'),
                party: AMERICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Archie Parnell',
                img: require('../portraits/Archie_Parnell.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ralph Norman',
                img: require('../portraits/ralphwnorman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Chandler',
                img: require('../portraits/none.jpg'),
                party: CONSTITUTION,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'James E. Clyburn',
                img: require('../portraits/James_Clyburn.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Gerhard Gressmann',
                img: require('../portraits/Gerhard_Gressmann1.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Bryan Pugh',
                img: require('../portraits/Bryan_Pugh.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Robert Williams',
                img: require('../portraits/Robert_Williams.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tom Rice',
                img: require('../portraits/tom_rice.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Constance Anastopoulo',
                img: require('../portraits/Constance_Anastopoulos.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Alan Wilson',
                img: require('../portraits/AlanWilson2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Melvin Whittenburg',
                img: require('../portraits/melvinwhittenburg.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Hammond',
                img: require('../portraits/Mark_Hammond.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Rosalyn Glenn',
                img: require('../portraits/rosalyn-glenn.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Curtis M. Loftis Jr.',
                img: require('../portraits/Curtis_Loftis.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Sarah Work',
                img: require('../portraits/Sarah_Work.jpg'),
                party: AMERICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AGRICULTURE_COMMISSIONER,
        id: 'agricultureCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Hugh Weathers',
                img: require('../portraits/Hugh_Weathers.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'David Edmond',
                img: require('../portraits/none.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Chris Nelums',
                img: require('../portraits/none.jpg'),
                party: UNITED_CITIZENS,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  SD: {
    name: 'South Dakota',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Billie Sutton',
                img: require('../portraits/Billie_Sutton.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kristi Noem',
                img: require('../portraits/Kristi_Noem.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tim Bjorkman',
                img: require('../portraits/Tim-Bjorkman-071317.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dusty Johnson',
                img: require('../portraits/Dusty_Johnson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  TN: {
    name: 'Tennessee',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Karl Dean',
                img: require('../portraits/Karl_Dean1.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bill Lee',
                img: require('../portraits/5947.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Phil Bredesen',
                img: require('../portraits/Phil_Bredesen.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Marsha Blackburn',
                img: require('../portraits/Marsha_Blackburn.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Marty Olsen',
                img: require('../portraits/marty_olsen.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Phil Roe',
                img: require('../portraits/Phil_Roe.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Renee Hoyos',
                img: require('../portraits/Renee_Hoyos.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tim Burchett',
                img: require('../portraits/Tim_Burchett.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Danielle Mitchell',
                img: require('../portraits/danielle.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Chuck Fleischmann',
                img: require('../portraits/Charles_Fleischmann.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Mariah Phillips',
                img: require('../portraits/Mariah_Phillips_TN04.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Scott DesJarlais',
                img: require('../portraits/Scott_DesJarlais.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Jim Cooper',
                img: require('../portraits/Jim_Cooper.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jody Ball',
                img: require('../portraits/Jody_Ball.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Dawn Barlow',
                img: require('../portraits/Dawn_Barlow.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Rose',
                img: require('../portraits/unnamed-9.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Justin Kanew',
                img: require('../portraits/JustinKanew.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Green',
                img: require('../portraits/mark_green.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Erika Pearson',
                img: require('../portraits/Erika_Pearson_Headshots-5-2-min.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Kustoff',
                img: require('../portraits/David_Kustoff.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Steve Cohen',
                img: require('../portraits/Steve_Cohen.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Charlotte Bergmann',
                img: require('../portraits/CharlotteBergmann.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  TX: {
    name: 'Texas',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Lupe Valdez',
                img: require('../portraits/LV_Convention_Profile_Pic.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Greg Abbott',
                img: require('../portraits/GregAbbott2015.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Beto O\'Rourke',
                img: require('../portraits/beto_orourke.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ted Cruz',
                img: require('../portraits/Ted_Cruz.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Shirley McKellar',
                img: require('../portraits/Shirley_McKellar.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Louie Gohmert',
                img: require('../portraits/5924.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Todd Litton',
                img: require('../portraits/Todd_Litton_Headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dan Crenshaw',
                img: require('../portraits/Dan_Crenshaw.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Lorie Burch',
                img: require('../portraits/Lorie_Burch.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Van Taylor',
                img: require('../portraits/Van_Taylor.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Catherine Krantz',
                img: require('../portraits/Catherine_Krantz.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Ratcliffe',
                img: require('../portraits/John_Ratcliffe_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Dan Wood',
                img: require('../portraits/Dan_Wood.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lance Gooden',
                img: require('../portraits/Lance_Gooden_portrait.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jana Lynne Sanchez',
                img: require('../portraits/Jana_Sanchez_Headshot_2018.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ron Wright',
                img: require('../portraits/Ron_Wright.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Lizzie Pannill Fletcher',
                img: require('../portraits/elizab.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Culberson',
                img: require('../portraits/John_Culberson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Steven David',
                img: require('../portraits/Steven_David.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kevin Brady',
                img: require('../portraits/Kevin_Brady.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Al Green',
                img: require('../portraits/Al_Green.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Mike Siegel',
                img: require('../portraits/MikeSiegelTX10.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Jennie Lou Leeder',
                img: require('../portraits/jennielou.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Conaway',
                img: require('../portraits/Mike_Conaway.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Vanessa Adia',
                img: require('../portraits/Vanessa_Adia.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kay Granger',
                img: require('../portraits/Kay_Granger.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Greg Sagan',
                img: require('../portraits/download1.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mac Thornberry',
                img: require('../portraits/Mac_Thornberry.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Adrienne Bell',
                img: require('../portraits/Adrienne_Bell.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Randy Weber',
                img: require('../portraits/Randy_Weber.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Vicente González',
                img: require('../portraits/Vicente_Gonzalez_115th_congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tim Westley',
                img: require('../portraits/Tim_Westley.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Veronica Escobar',
                img: require('../portraits/veronica_escobar.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rick Seeberger',
                img: require('../portraits/177038_lg.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Rick Kennedy',
                img: require('../portraits/Rick-Kennedy-Tx-17.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bill Flores',
                img: require('../portraits/Bill_Flores.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Sheila Jackson Lee',
                img: require('../portraits/Sheila_Jackson-Lee.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ava Pate',
                img: require('../portraits/Ava_Pate.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Miguel Levario',
                img: require('../portraits/Campaign_Headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jodey Arrington',
                img: require('../portraits/Jodey_Arrington_115th_congress_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Joaquin Castro',
                img: require('../portraits/Joaquin_Castro.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'Joseph Kopser',
                img: require('../portraits/Joseph_kopser.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Chip Roy',
                img: require('../portraits/Chip_Roy.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Sri Kulkarni',
                img: require('../portraits/Sri_Preston_Kulkarni.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Pete Olson',
                img: require('../portraits/Pete_Olson.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Gina Ortiz Jones',
                img: require('../portraits/Gina_Ortiz_Jones-May_2017-0084.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Will Hurd',
                img: require('../portraits/Congressman_Will_Hurd_official_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Jan McDowell',
                img: require('../portraits/Jan_McDowell.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kenny Marchant',
                img: require('../portraits/Kenny_Marchant.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Julie Oliver',
                img: require('../portraits/Julie_Oliver.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Roger Williams',
                img: require('../portraits/rogerwilliams.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Linsey Fagan',
                img: require('../portraits/Linsey_Fagan.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Burgess',
                img: require('../portraits/Michael_Burgess.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Eric Holguin',
                img: require('../portraits/ericholguin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Michael Cloud',
                img: require('../portraits/Michael_Cloud.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Henry Cuellar',
                img: require('../portraits/Henry_Cuellar.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Sylvia R. Garcia',
                img: require('../portraits/Sylvia_Garcia.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Phillip Aronoff',
                img: require('../portraits/Phillip_Aronoff.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'Eddie Bernice Johnson',
                img: require('../portraits/Eddie_Bernice_Johnson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'Mary Hegar',
                img: require('../portraits/LT5MJGH6DD3ZAZ3BSIHMAQU7HI.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Carter',
                img: require('../portraits/John_Carter.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Colin Allred',
                img: require('../portraits/Colin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Pete Sessions',
                img: require('../portraits/Pete_Sessions.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 33',
            candidates: [
              {
                name: 'Marc Veasey',
                img: require('../portraits/Marc_Veasey.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Willie Billups',
                img: require('../portraits/Willie_headshot.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Filemon Vela',
                img: require('../portraits/Filemon_Vela.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rey Gonzalez',
                img: require('../portraits/drreygon.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Lloyd Doggett',
                img: require('../portraits/Lloyd_Doggett.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David Smalling',
                img: require('../portraits/ywzHltSl_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Dayna Steele',
                img: require('../portraits/Dayna_Steele.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brian Babin',
                img: require('../portraits/Brian_Babin_official_congressional_photo.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mike Collier',
                img: require('../portraits/Mike_Collier.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dan Patrick',
                img: require('../portraits/Dan_Patrick.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AGRICULTURE_COMMISSIONER,
        id: 'agricultureCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Kim Olson',
                img: require('../portraits/Kim_Olson.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Sid Miller',
                img: require('../portraits/Sid_Miller.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LAND_COMMISSIONER,
        id: 'landCommissioner',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Miguel Suazo',
                img: require('../portraits/miguel_suazo_reading_lion.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'George P. Bush',
                img: require('../portraits/georgepbush.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  UT: {
    name: 'Utah',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jenny Wilson',
                img: require('../portraits/Jenny_Wilson.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mitt Romney',
                img: require('../portraits/Mitt_Romney.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Tim Aalders',
                img: require('../portraits/TimAalders.jpg'),
                party: CONSTITUTION,
                grade: NO_GRADE()
              },
              {
                name: 'Reed McCandless',
                img: require('../portraits/images.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              },
              {
                name: 'Craig Bowden',
                img: require('../portraits/Craig_Bowden.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Lee Castillo',
                img: require('../portraits/Lee_Castillo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rob Bishop',
                img: require('../portraits/Rob_Bishop.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Adam Davis',
                img: require('../portraits/5b50f070e0c9a.image.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Eric Eliason',
                img: require('../portraits/hamburger.jpg'),
                party: UNITED_UTAH,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Shireen Ghorbani',
                img: require('../portraits/Shireen_Ghorbani.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Chris Stewart',
                img: require('../portraits/Chris_Stewart.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jeffrey Whipple',
                img: require('../portraits/download-2.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              },
              {
                name: 'Jan Garbett',
                img: require('../portraits/static1.squarespace-1.jpg'),
                party: UNITED_UTAH,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'James Singer',
                img: require('../portraits/james_singer.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Curtis',
                img: require('../portraits/CurtisUtah.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Gregory Duerden',
                img: require('../portraits/Gregory_Duerden.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              },
              {
                name: 'Melanie McCoard',
                img: require('../portraits/none.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Ben McAdams',
                img: require('../portraits/Ben_McAdams.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mia Love',
                img: require('../portraits/mialove.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  VT: {
    name: 'Vermont',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Christine Hallquist',
                img: require('../portraits/23948.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Phil Scott',
                img: require('../portraits/Phil_Scott.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Cris Ericson',
                img: require('../portraits/Cris_Ericson.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              },
              {
                name: 'Stephen Marx',
                img: require('../portraits/7p1.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Bernie Sanders',
                img: require('../portraits/Bernie_Sanders.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brooke Paige',
                img: require('../portraits/Brooke_Paige.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Peter Welch',
                img: require('../portraits/Peter_Welch.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brooke Paige',
                img: require('../portraits/Brooke_Paige.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Cris Ericson',
                img: require('../portraits/Cris_Ericson-1.jpg'),
                party: INDEPENDENT,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lietenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'David Zuckerman',
                img: require('../portraits/zuckerman1.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Don Turner',
                img: require('../portraits/donaldnorcross.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'T.J. Donovan',
                img: require('../portraits/T.J._Donovan.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brooke Paige',
                img: require('../portraits/Brooke_Paige.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jim Condos',
                img: require('../portraits/Jim_Condos.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brooke Paige',
                img: require('../portraits/Brooke_Paige.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Doug Hoffer',
                img: require('../portraits/Doug_Hoffer.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brooke Paige',
                img: require('../portraits/Brooke_Paige.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Beth Pearce',
                img: require('../portraits/Elizabeth_Pearce.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brooke Paige',
                img: require('../portraits/Brooke_Paige.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
    ]
  },
  VA: {
    name: 'Virginia',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tim Kaine',
                img: require('../portraits/tim_kaine.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Corey Stewart',
                img: require('../portraits/Corey_Stewart.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Vangie Williams',
                img: require('../portraits/VangieWilliams.png'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rob Wittman',
                img: require('../portraits/Rob_Wittman.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Elaine Luria',
                img: require('../portraits/Elaine_Luria.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Scott Taylor',
                img: require('../portraits/Scott_Taylor.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Robert C. Scott',
                img: require('../portraits/Bobby_Scott.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'A. Donald McEachin',
                img: require('../portraits/Donald_McEachin_115th_congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Ryan McAdams',
                img: require('../portraits/Ryan_McAdams_Candidate_US_Representative_VA_4th.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jennifer Lewis',
                img: require('../portraits/039489834.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Abigail Spanberger',
                img: require('../portraits/Spanberger_Abigail.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Don Beyer',
                img: require('../portraits/don-beyer.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Anthony Flaccavento',
                img: require('../portraits/Anthony_Flaccavento.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Morgan Griffith',
                img: require('../portraits/Morgan_Griffith.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Jennifer Wexton',
                img: require('../portraits/WextonHS_1b-crop.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Barbara Comstock',
                img: require('../portraits/orwejoiewjio.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Gerald E. Connolly',
                img: require('../portraits/Gerry_Connolly.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jeff Dove',
                img: require('../portraits/Jeff-Dove-1144x763.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  WA: {
    // https://www.nytimes.com/interactive/2018/08/07/us/elections/results-washington-primary-elections.html
    name: 'Washington',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Maria Cantwell',
                img: require('../portraits/Maria_Cantwell.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Susan Hutchison',
                img: require('../portraits/Susan_Hutchison_Washington.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Suzan DelBene',
                img: require('../portraits/jlkdfs.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jeffrey Beeler',
                img: require('../portraits/Jeffrey-Beeler-Candidate-Photo-2018.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Rick Larsen',
                img: require('../portraits/Rick_Larsen.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Jaime Herrera Beutler',
                img: require('../portraits/Jaime_Herrera_Beutler.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Carolyn Long',
                img: require('../portraits/CarolynLong.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Christine Brown',
                img: require('../portraits/Christine_Brown.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Dan Newhouse',
                img: require('../portraits/dan_newhouse.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Cathy McMorris Rodgers',
                img: require('../portraits/Cathy_McMorris_Rodgers.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Lisa Brown',
                img: require('../portraits/Brown_lisa.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Derek Kilmer',
                img: require('../portraits/Derek_Kilmer_113th_Congress.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Douglas Dightman',
                img: require('../portraits/Screenshot_20180525-165712.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Pramila Jayapal',
                img: require('../portraits/Pramila_Jayapal_115th_Congress_photo.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Craig Keller',
                img: require('../portraits/CraigKeller.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Dino Rossi',
                img: require('../portraits/175px-Rossi.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Adam Smith',
                img: require('../portraits/Adam_Smith.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Denny Heck',
                img: require('../portraits/denny_heck.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Joseph Brumbles',
                img: require('../portraits/181132_lg.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  WV: {
    name: 'West Virginia',
    legislatures: [
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Joe Manchin',
                img: require('../portraits/Joe_Manchin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Patrick Morrisey',
                img: require('../portraits/Patrick_J_Morrisey.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Kendra Fershee',
                img: require('../portraits/KFershee-min.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'David B. McKinley',
                img: require('../portraits/David_McKinley.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Talley Sergent',
                img: require('../portraits/Sergent_Headshot.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Alex X. Mooney',
                img: require('../portraits/3mooney.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Richard Ojeda',
                img: require('../portraits/Richard_Ojeda.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Carol Miller',
                img: require('../portraits/Miller_carol.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  WI: {
    name: 'Wisconsin',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tony Evers',
                img: require('../portraits/Tony-Evers.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Scott Walker',
                img: require('../portraits/Scott_Walker_2.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Michael White',
                img: require('../portraits/Screenshot_20180523-164314.png'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Phil Anderson',
                img: require('../portraits/57b5f5c4c9708.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Tammy Baldwin',
                img: require('../portraits/Tammy_Baldwin.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Leah Vukmir',
                img: require('../portraits/Leah_Vuk.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Randy Bryce',
                img: require('../portraits/Randy_bryce_0.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Bryan Steil',
                img: require('../portraits/Bryan_Steil_Headshot-min.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Mark Pocan',
                img: require('../portraits/Pocan_mark.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Ron Kind',
                img: require('../portraits/Ron_Kind.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Steve Toft',
                img: require('../portraits/Steve_Toft_Osseo_WI3D.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Gwen Moore',
                img: require('../portraits/Gwen_Moore.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Tim Rogers',
                img: require('../portraits/none.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Tom Palzewicz',
                img: require('../portraits/Tom_Palzewicz.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jim Sensenbrenner',
                img: require('../portraits/Jim_Sensenbrenner.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Dan Kohl',
                img: require('../portraits/Dan_Kohl.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Glenn Grothman',
                img: require('../portraits/glenn_groth.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Margaret Engebretson',
                img: require('../portraits/MargaretEngebretson.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Sean P. Duffy',
                img: require('../portraits/Sean_Duffy.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Beau Liegeois',
                img: require('../portraits/Beau_Legois.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mike Gallagher',
                img: require('../portraits/Mike_Gallagher.png'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: LIEUTENANT_GOVERNOR,
        id: 'lieutenantGovernor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mandela Barnes',
                img: require('../portraits/News1_MandelaBarnes.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Rebecca Kleefisch',
                img: require('../portraits/tteYNSsD_400x400.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Tiffany Anderson',
                img: require('../portraits/Tiffany Anderson.jpg'),
                party: GREEN,
                grade: NO_GRADE()
              },
              {
                name: 'Patrick Baird',
                img: require('../portraits/Baird_Patrick.jpg'),
                party: LIBERTARIAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: ATTORNEY_GENERAL,
        id: 'attorneyGeneral',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Josh Kaul',
                img: require('../portraits/Josh_Kaul_for_Attorney_General.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Brad Schimel',
                img: require('../portraits/Josh_Kaul_for_Attorney_General.jpg'),
                grade: NO_GRADE()
              },
              {
                name: 'Terry Larson',
                img: require('../portraits/Terry_Larson.jpg'),
                party: CONSTITUTION,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Doug La Follette',
                img: require('../portraits/Doug_LaFollette.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Jay Schroeder',
                img: require('../portraits/JaySchroeder.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Sarah Godlewski',
                img: require('../portraits/29595448_546771229039507_6639885822438538560_n.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Travis Hartwig',
                img: require('../portraits/unnamed-19.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              },
              {
                name: 'Andrew Zuelke',
                img: require('../portraits/unnamed-1.png'),
                party: CONSTITUTION,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  WY: {
    name: 'Wyoming',
    legislatures: [
      {
        name: GOVERNOR,
        id: 'governor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mary Throne',
                img: require('../portraits/Throne.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Mark Gordon',
                img: require('../portraits/Mark_Gordon.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Gary Trauner',
                img: require('../portraits/Gary_Trauner.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'John Barrasso',
                img: require('../portraits/John_Barrasso.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: US_HOUSE,
        id: 'usHouse',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Greg Hunter',
                img: require('../portraits/Greg_Hunter.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Liz Cheney',
                img: require('../portraits/Liz_Cheney_2.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: SECRETARY_OF_STATE,
        id: 'secretaryOfState',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'James Byrd',
                img: require('../portraits/Byrd.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Edward Buchanan',
                img: require('../portraits/Buchanan.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: AUDITOR,
        id: 'auditor',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Jeff Dockter',
                img: require('../portraits/Jeff_Dockter_Filing_Day.jpg'),
                party: DEMOCRAT,
                grade: NO_GRADE()
              },
              {
                name: 'Kristi Racines',
                img: require('../portraits/KristiRacines.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      },
      {
        name: TREASURER,
        id: 'treasurer',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Curt Meier',
                img: require('../portraits/MeierCS03.jpg'),
                party: REPUBLICAN,
                grade: NO_GRADE()
              }
            ]
          }
        ]
      }
    ]
  },
  // end of stateInfo object
}