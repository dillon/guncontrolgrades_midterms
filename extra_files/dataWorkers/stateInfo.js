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

const stateInfo = {
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
                img: '../portraits/Kay_Ivey.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Walt Maddox',
                img: '../portraits/Walt_Maddox.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/Robert_Kennedy_Jr.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bradley Byrne',
                img: '../portraits/220px-Rep_Bradley_Byrne.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tabitha Isner',
                img: '../portraits/tabithaisner.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Martha Roby',
                img: '../portraits/Martha_Roby.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Mallory Hagan',
                img: '../portraits/mallory-hagan_headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike D. Rogers',
                img: '../portraits/Mike_Rogers_AL.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Lee Auman',
                img: '../portraits/Lee_Auman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Robert B. Aderholt',
                img: '../portraits/Robert_Aderholt.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Peter Joffrion',
                img: '../portraits/Peter_Joffrion.png',
                party: DEMOCRAT,
              },
              {
                name: 'Mo Brooks',
                img: '../portraits/Mo_Brooks.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Danner Kline',
                img: '../portraits/Danner_Kline.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Gary Palmer',
                img: '../portraits/Gary_Palmer_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Terri A. Sewell',
                img: '../portraits/Terri_Sewell.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/WillBoyd.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Will Ainsworth',
                img: '../portraits/Will_Ainsworth.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Joseph_Siegelman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Marshall',
                img: '../portraits/Steve_MarshallAG.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/HeatherMilam.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Merrill',
                img: '../portraits/John_Merrill.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Miranda_Joseph.png',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Zeigler',
                img: '../portraits/Jim_Zeigler.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/John_McMillan.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Rick_pic_on_FB_page.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Mark_Begich.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Dunleavy',
                img: '../portraits/Mike_Dunleavy.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'William S. "Billy" Toien',
                img: '../portraits/5b74ae016d97c.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/alyse_Galvin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Don Young',
                img: '../portraits/Don_Young.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/wfjlek.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kevin Meyer',
                img: '../portraits/Kevin_Meyer.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/David_Garcia_AZ.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Doug Ducey',
                img: '../portraits/DougDucey2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Kyrsten_Sinema.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Martha McSally',
                img: '../portraits/martha_mcsally.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Tom_OHalleran-7.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Wendy Rogers',
                img: '../portraits/Wendy_Rogers.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Ann Kirkpatrick',
                img: '../portraits/Ann_Kirkpatrick.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lea Marquez Peterson',
                img: '../portraits/Lea_Marquez_Peterson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Raul Grijalva',
                img: '../portraits/Raul_Grijalva.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Nicolas Pierson',
                img: '../portraits/182238_lg.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'David Brill',
                img: '../portraits/David_Brill.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Paul Gosar',
                img: '../portraits/Paul_Gosar.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Joan Greene',
                img: '../portraits/joan_greene.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Andy Biggs',
                img: '../portraits/andybiggs.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Anita Malik',
                img: '../portraits/Anita_Malik.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Schweikert',
                img: '../portraits/David_Schweikert.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ruben Gallego',
                img: '../portraits/Ruben_Gallego.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Hiral Tipirneni',
                img: '../portraits/Hiral.tipirneni.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Debbie Lesko',
                img: '../portraits/debbie.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Greg Stanton',
                img: '../portraits/Greg_Stanton1.png',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Ferrara',
                img: '../portraits/Steve_Ferrara_.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/5b3ea1877d098.image.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Brnovich',
                img: '../portraits/MarkBrnovich2015.png',
                party: REPUBLICAN,
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
                img: '../portraits/Katie_Hobbs.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Gaynor',
                img: '../portraits/Steve_Gaynor.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Mark_Manoil.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kimberly Yee',
                img: '../portraits/NvzE8x-W_400x400.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/C__Users_e5406014_Desktop_jared.png',
                party: DEMOCRAT,
              },
              {
                name: 'Asa Hutchinson',
                img: '../portraits/AsaHutchinson2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Chintan_Desai.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rick Crawford',
                img: '../portraits/Rick_Crawford_AR.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clarke Tucker',
                img: '../portraits/Clarke_Tucker.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'French Hill',
                img: '../portraits/French_Hill_official_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Josh Mahony',
                img: '../portraits/96580584_Joshua-Mahony_ORIG_t635.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Womack',
                img: '../portraits/Steve_Womack.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hayden Shamel',
                img: '../portraits/Hayden_Shamel-7.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bruce Westerman',
                img: '../portraits/bruce-westerman.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Anthony_Bland.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tim Griffin',
                img: '../portraits/Tim_Griffin.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/mikelee.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Leslie Rutledge',
                img: '../portraits/Leslie_Rutledge.png',
                party: REPUBLICAN,
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
                img: '../portraits/Susan_Inman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Thurston',
                img: '../portraits/John_Thurston.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Lea-andrea.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Dennis_Milligan.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/20091016-ASU-Dr-Larry-Williams-12384.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tommy Land',
                img: '../portraits/3daPJCOF_400x400.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/399px-Gavin_Newsom_official_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Cox',
                img: '../portraits/John_Cox_(California)-6.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/DianneFeinsteinReplace.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kevin de León',
                img: '../portraits/Kevin_De_Leon.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/Doug_LaMalfa.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Audrey Denney',
                img: '../portraits/DenneyHeadshot.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Huffman',
                img: '../portraits/Jared_Huffman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dale Mensing',
                img: '../portraits/Dale_Mensing.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Garamendi',
                img: '../portraits/John_Garamendi.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Charlie Schaupp',
                img: '../portraits/Charlie_Schaupp.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tom McClintock',
                img: '../portraits/Tom_McClintock.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jessica Morse',
                img: '../portraits/Jessica_Morse.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Thompson',
                img: '../portraits/Mike_Thompson.jpg',
                party: DEMOCRAT,
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jrmar Jefferson',
                img: '../portraits/Jrmar_Jefferson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Doris Matsui',
                img: '../portraits/DorisMatsuiReplace.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ami Bera',
                img: '../portraits/Ami_Bera.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Andrew Grant',
                img: '../portraits/Andrew_Grant.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Paul Cook',
                img: '../portraits/Paul_Cook.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jerry McNerney',
                img: '../portraits/Jerry_McNerney.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Marla Livengood',
                img: '../portraits/2018_Marla_Livengood_for_CA_U.S._Congress.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Jeff Denham',
                img: '../portraits/Jeff_Denham.jpg',
                party: REPUBLICAN,
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Mark DeSaulnier',
                img: '../portraits/Mark_DeSaulnier-1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Fitzgerald',
                img: '../portraits/John_Fitzgerald.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Nancy Pelosi',
                img: '../portraits/Nancy_Pelosi.jpg',
                party: DEMOCRAT,
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Barbara Lee',
                img: '../portraits/Barbara_Lee.jpg',
                party: DEMOCRAT,
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Jackie Speier',
                img: '../portraits/Jackie_Speier.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Cristina Osmeña',
                img: '../portraits/XtgoNPfO_400x400.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Eric Swalwell',
                img: '../portraits/esc.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rudy Peters',
                img: '../portraits/Rudy_Peters_Congress.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Jim Costa',
                img: '../portraits/Jim_Costa.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Elizabeth Heng',
                img: '../portraits/_MG_6860-Edit-min.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Ro Khanna',
                img: '../portraits/1200.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ron Cohen',
                img: '../portraits/Ron.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Anna G. Eshoo',
                img: '../portraits/Anna_Eshoo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Christine Russell',
                img: '../portraits/none.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Zoe Lofgren',
                img: '../portraits/Zoe_Lofgren.jpg',
                party: DEMOCRAT,
              },
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Jimmy Panetta',
                img: '../portraits/Jimmy_Panetta_115th_Congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ronald Paul Kabat',
                img: '../portraits/Ronald_Paul_Kabat.jpg',
                party: INDEPENDENT,
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'T.J. Cox',
                img: '../portraits/TJ_Cox.png',
                party: DEMOCRAT,
              },
              {
                name: 'David Valadao',
                img: '../portraits/David_Valadao.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Devin Nunes',
                img: '../portraits/Devin_Nunes.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Andrew Janz',
                img: '../portraits/Andrew_Janz.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Kevin McCarthy',
                img: '../portraits/Kevin_McCarthy_CA.jpg',
                party: REPUBLICAN,
              },
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Salud Carbajal',
                img: '../portraits/Salud_Carbajal_115th_Congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Justin Fareed',
                img: '../portraits/Justin_Fareed.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Steve Knight',
                img: '../portraits/Steve_Knight_official_congressional_photo.jpg',
                party: REPUBLICAN,
              },
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Julia Brownley',
                img: '../portraits/Julia_Brownley.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Antonio Sabato Jr.',
                img: '../portraits/Antonio_Headshot.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Judy Chu',
                img: '../portraits/Judy_Chu.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bryan Witt',
                img: '../portraits/Bryan_Witt_Campaign_Pic.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Adam B. Schiff',
                img: '../portraits/Adam_Schiff.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Johnny Nalbandian',
                img: '../portraits/B4066CCF-EDC9-4A6B-8F40-CD96C8260802.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Tony Cardenas',
                img: '../portraits/Tony_Cardenas.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Benny Bernal',
                img: '../portraits/LOCAL1_160519571_AR_0_CFAQILXSPYJE.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'Brad Sherman',
                img: '../portraits/Brad_Sherman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Reed',
                img: '../portraits/Mark_Reed.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'Pete Aguilar',
                img: '../portraits/Pete_Aguilar_official_portrait_114th_Congress.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Sean Flynn',
                img: '../portraits/Sean_Flynn.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Grace F. Napolitano',
                img: '../portraits/Grace_Napolitano.jpg',
                party: DEMOCRAT,
              },
            ]
          },
          {
            name: 'District 33',
            candidates: [
              {
                name: 'Ted Lieu',
                img: '../portraits/Rep_Ted_Lieu.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kenneth Wright',
                img: '../portraits/Kenneth_Wright.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Jimmy Gomez',
                img: '../portraits/Jimmy_Gomez.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kenneth Mejia',
                img: '../portraits/Kenneth_Mejia-8.jpg',
                party: GREEN,
              }
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Norma J. Torres',
                img: '../portraits/Norma_Torres_official_portrait.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Christian Valiente',
                img: '../portraits/headshotforGOP-1.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Raul Ruiz',
                img: '../portraits/Raul_Ruiz.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kimberlin Brown Pelzer',
                img: '../portraits/220px-Kimberlin_Brown_Pelzer.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 37',
            candidates: [
              {
                name: 'Karen Bass',
                img: '../portraits/Karen_Bass.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ron Bassilian',
                img: '../portraits/RonBassilian.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 38',
            candidates: [
              {
                name: 'Linda T. Sánchez',
                img: '../portraits/LindaSanchezReplace.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ryan Downing',
                img: '../portraits/Ryan_Downing.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 39',
            candidates: [
              {
                name: 'Young Kim',
                img: '../portraits/Youngkim.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Gil Cisneros',
                img: '../portraits/fullsizeoutput_1215.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 40',
            candidates: [
              {
                name: 'Lucille Roybal-Allard',
                img: '../portraits/LucilleRoybalAllardReplace.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rodolfo Barragan',
                img: '../portraits/Rodolfo_Cortes_Barragan.png',
                party: GREEN,
              }
            ]
          },
          {
            name: 'District 41',
            candidates: [
              {
                name: 'Mark Takano',
                img: '../portraits/Mark_Takano.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Aja Smith',
                img: '../portraits/FB0C14CE-CCBA-4F29-B621-9838FE8E68D1.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 42',
            candidates: [
              {
                name: 'Ken Calvert',
                img: '../portraits/Ken_Calvert.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Julia Peacock',
                img: '../portraits/Julia_Peacock.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 43',
            candidates: [
              {
                name: 'Maxine Waters',
                img: '../portraits/Maxine_Waters.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Omar Navarro',
                img: '../portraits/Omar_Navarro.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 44',
            candidates: [
              {
                name: 'Nanette Barragán',
                img: '../portraits/Nanette_Barragan.jpg',
                party: DEMOCRAT,
              },
            ]
          },
          {
            name: 'District 45',
            candidates: [
              {
                name: 'Mimi Walters',
                img: '../portraits/Mimi_Walters_official_congressional_photo.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Katie Porter',
                img: '../portraits/Katie_Porter.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 46',
            candidates: [
              {
                name: 'J. Luis Correa',
                img: '../portraits/Lou_Correa.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Russell Lambert',
                img: '../portraits/Screenshot_2018-02-06-08-10-21.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 47',
            candidates: [
              {
                name: 'Alan Lowenthal',
                img: '../portraits/Alan_Lowenthal.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Briscoe',
                img: '../portraits/john_Briscoe.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 48',
            candidates: [
              {
                name: 'Dana Rohrabacher',
                img: '../portraits/Dana_Rohrabacher.jpg',
                party: REPUBLICAN,
              },
            ]
          },
          {
            name: 'District 49',
            candidates: [
              {
                name: 'Diane Harkey',
                img: '../portraits/Diane_Harkey.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Mike Levin',
                img: '../portraits/Mike_Levin.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 50',
            candidates: [
              {
                name: 'Duncan Hunter',
                img: '../portraits/Duncan_Hunter.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Ammar Campa-Najjar',
                img: '../portraits/Ammar_Campa-Najjar.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 51',
            candidates: [
              {
                name: 'Juan C. Vargas',
                img: '../portraits/Juan_Vargas_official_photo.jpg',
                party: DEMOCRAT,
              },
            ]
          },
          {
            name: 'District 52',
            candidates: [
              {
                name: 'Scott Peters',
                img: '../portraits/Scott_Peters.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Omar Qudrat',
                img: '../portraits/Omar-Qudrat.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 53',
            candidates: [
              {
                name: 'Susan A. Davis',
                img: '../portraits/Susan_Davis.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/3612660B-ED2A-43B5-9AA8-FB134D4CC650.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/Xavier_Becerra.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steven Bailey',
                img: '../portraits/Headshot_2018-05-07.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Alex_Padilla.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Meuser',
                img: '../portraits/Mark-Meuser.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Fiona_Ma.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/Jared_Polis.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Walker Stapleton',
                img: '../portraits/Walker_Stapleton.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Diana_Degette.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Casper Stockham',
                img: '../portraits/Casper_Stockham.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Neguse',
                img: '../portraits/Joe_Neguse.png',
                party: DEMOCRAT,
              },
              {
                name: 'Peter Yu',
                img: '../portraits/Peter_Yu.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Diane Mitsch Bush',
                img: '../portraits/Diane_Mitsch_Bush.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Scott Tipton',
                img: '../portraits/Scott_Tipton.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Karen McCormick',
                img: '../portraits/Karen_McCormick_.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ken Buck',
                img: '../portraits/Ken_Buck_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Stephany Rose Spaulding',
                img: '../portraits/stephany-rose-spaulding.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Doug Lamborn',
                img: '../portraits/Doug_Lamborn.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jason Crow',
                img: '../portraits/Jason_Crow.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Coffman',
                img: '../portraits/Mike_Coffman.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ed Perlmutter',
                img: '../portraits/Ed_Perlmutter.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Barrington',
                img: '../portraits/businessphotography-05.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/george-brauchler-fullbody.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Phil Weiser',
                img: '../portraits/Phil_Weiser_headshot.png',
                party: REPUBLICAN,
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
                img: '../portraits/Jena_Griswold.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Wayne Williams',
                img: '../portraits/Wayne_Williams.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Dave_Young.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brian Watson',
                img: '../portraits/static1.squarespace.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/nedlamont.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bob Stefanowski',
                img: '../portraits/Bob_Stefanowski.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Christopher_S._Murphy.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Matthew Corey',
                img: '../portraits/Matthew_Corey.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/John_B._Larson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jennifer Nye',
                img: '../portraits/cm4LC9oe_400x400.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Courtney',
                img: '../portraits/Joe_Courtney.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dan Postemski',
                img: '../portraits/none.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Rosa DeLauro',
                img: '../portraits/Rosa_L._Delauro.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Angel Cadena',
                img: '../portraits/450px-Angel_Cadena.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jim Himes',
                img: '../portraits/James_A._Himes.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Harry Arora',
                img: '../portraits/Harry_Arora.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Jahana Hayes',
                img: '../portraits/Jahana_Hayes-1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Manny Santos',
                img: '../portraits/Manny_Santos.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/SusanBysiewiczPic.JPG.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Joe Markley',
                img: '../portraits/joemarkley.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/williamtong.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Sue Hatfield',
                img: '../portraits/SWH-HS-HR.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Denise_Merrill_2013.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Susan Chapman',
                img: '../portraits/Susan_Chapman_CT.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Shawn_Wooden.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Thad Gray',
                img: '../portraits/920x920.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Tom_Carper.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Robert Arlett',
                img: '../portraits/robarlett.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/scottwalker.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/jennings.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/38493483948.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/Andrew_Gillum.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ron DeSantis',
                img: '../portraits/ron_desantis.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Bill_Nelson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rick Scott',
                img: '../portraits/Rick_Scott.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/IMG_9964-min.png',
                party: DEMOCRAT,
              },
              {
                name: 'Matt Gaetz',
                img: '../portraits/Matt_Gaetz.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Bob Rackleff',
                img: '../portraits/Bob_Rackleff.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Neal Dunn',
                img: '../portraits/nealdunn.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Yvonne Hayes Hinson',
                img: '../portraits/Yvonne_Hayes_Hinson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ted Yoho',
                img: '../portraits/tedyoho.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Ges Selmont',
                img: '../portraits/George.Ges.Selmont.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Rutherford',
                img: '../portraits/John_Rutherford_115th_Congress_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Al Lawson',
                img: '../portraits/Al_Lawson_115th_Congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Virginia Fuller',
                img: '../portraits/Virginia_Fuller.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Nancy Soderberg',
                img: '../portraits/Nancy_Soderberg.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael Waltz',
                img: '../portraits/IV_fEXud_400x400.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Stephanie Murphy',
                img: '../portraits/Stephanie_Murphy.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Miller',
                img: '../portraits/State_Representative_Mike_Miller.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Sanjay Patel',
                img: '../portraits/20180316_115703.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bill Posey',
                img: '../portraits/Bill_Posey.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Darren Soto',
                img: '../portraits/Darren_Soto_115th_Congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Wayne Liebnitzky',
                img: '../portraits/Wayne_Liebnitzky.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Val Demings',
                img: '../portraits/Val_Demings.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Dana Cottrell',
                img: '../portraits/danapic1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Daniel Webster',
                img: '../portraits/Daniel_Webster_(Florida)-7.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Chris Hunter',
                img: '../portraits/Hunter_Headshot-min.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Gus Bilirakis',
                img: '../portraits/Gus_M._Bilirakis.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Charlie Crist',
                img: '../portraits/Charlie_Crist_115th_Congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'George Buck',
                img: '../portraits/George_Buck.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Kathy Castor',
                img: '../portraits/Kathy_Castor.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Kristen Carlson',
                img: '../portraits/carlson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ross Spano',
                img: '../portraits/Ross_Spano.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'David Shapiro',
                img: '../portraits/shapiro.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Vern Buchanan',
                img: '../portraits/Vern_Buchanan.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'April Freeman',
                img: '../portraits/April_Freeman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Greg Steube',
                img: '../portraits/Greg_Steube.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Lauren Baer',
                img: '../portraits/Baer2017h_0023.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brian Mast',
                img: '../portraits/Brian_Mast_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'David Holden',
                img: '../portraits/David_Holden.png',
                party: DEMOCRAT,
              },
              {
                name: 'Francis Rooney',
                img: '../portraits/francis_rooney.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Alcee Hastings',
                img: '../portraits/Alcee_Hastings.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'Lois Frankel',
                img: '../portraits/loisfrankel.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Ted Deutch',
                img: '../portraits/Theodore_E._Deutch.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Nicolas Kimaz',
                img: '../portraits/Nicolas_Kimaz.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Debbie Wasserman Schultz',
                img: '../portraits/debbiew.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Joe Kaufman',
                img: '../portraits/Joe_Kaufman.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Frederica Wilson',
                img: '../portraits/Frederica_S._Wilson.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Mary Barzee Flores',
                img: '../portraits/Mary_Barzee_Flores_Headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mario Diaz-Balart',
                img: '../portraits/Mario_Diaz_Balart.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Debbie Mucarsel-Powell',
                img: '../portraits/Debbie_Mucarsel-Powell.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Carlos Curbelo',
                img: '../portraits/CarlosCurbelo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Donna Shalala',
                img: '../portraits/Donna_Shalala.png',
                party: DEMOCRAT,
              },
              {
                name: 'Maria Salazar',
                img: '../portraits/23908.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/sean-shaw.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ashley B. Moody',
                img: '../portraits/0.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Nicole__Nikki__Fried.png',
                party: DEMOCRAT,
              },
              {
                name: 'Matt Caldwell',
                img: '../portraits/Matt_Caldwell.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Stacy-Abrams.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brian Kemp',
                img: '../portraits/Brian_Kemp.png',
                party: REPUBLICAN,
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
                img: '../portraits/FB_IMG_1516162882344.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Earl L. Carter',
                img: '../portraits/Buddy.jpg',
                party: REPUBLICAN,
              },
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Sanford D. Bishop Jr',
                img: '../portraits/Sanford_D._Bishop_Jr.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Herman West',
                img: '../portraits/Herman_West_Jr.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Chuck Enderlin',
                img: '../portraits/Chuck_Enderlin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Drew Ferguson',
                img: '../portraits/Drew_Ferguson_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hank Johnson',
                img: '../portraits/Henry_C._Johnson-1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Joe Profit',
                img: '../portraits/joeprofit2.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'John Lewis',
                img: '../portraits/John_Lewis.jpg',
                party: DEMOCRAT,
              },
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Lucy McBath',
                img: '../portraits/IMG_0565.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Karen Handel',
                img: '../portraits/Handel.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Carolyn Bourdeaux',
                img: '../portraits/Carolyn_Bourdeaux.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rob Woodall',
                img: '../portraits/Rob_Woodall.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Austin Scott',
                img: '../portraits/Austin_Scott_113th_Congress.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Josh McCall',
                img: '../portraits/Josh_McCall.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Doug Collins',
                img: '../portraits/DougCollins.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Tabitha Johnson-Green',
                img: '../portraits/image1-4.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jody B. Hice',
                img: '../portraits/Jody_Hice_official_portrait.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Flynn Broady',
                img: '../portraits/Flynn_Broady_Jr.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Barry Loudermilk',
                img: '../portraits/CongLoudermilk.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Francys Johnson',
                img: '../portraits/francysjohnson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rick W. Allen',
                img: '../portraits/rickallen.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'David Scott',
                img: '../portraits/David_Scott.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Callahan',
                img: '../portraits/5ad604ec11b6a.image.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Steven Foster',
                img: '../portraits/download.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tom Graves',
                img: '../portraits/Tom_Graves.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Sarah_Riggs_Amico.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Geoff Duncan',
                img: '../portraits/Geoff_Duncan.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Charlie-Bailey-Article-201802082310.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Chris Carr',
                img: '../portraits/Chris_Carr_Georgia.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/John_Barrow.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brad Raffensperger',
                img: '../portraits/Brad_Raffensperger.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Fred_Swann.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Gary Black',
                img: '../portraits/commissioner-gary-w-black.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/DavidIge2015.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Andria Tupola',
                img: '../portraits/Andria_Tupola.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jim Brewer',
                img: '../portraits/none.jpg',
                party: GREEN,
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
                img: '../portraits/Mazie_Hirono_official.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ron Curtis',
                img: '../portraits/Ron_Curtis_for_US_Senate.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Screen_Shot_2018-07-18_at_10.51.21_AM.png',
                party: DEMOCRAT,
              },
              {
                name: 'Cam Cavasso',
                img: '../portraits/Cam_Cavasso.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Zachary Burd',
                img: '../portraits/Zachary_Burd_1.jpg',
                party: GREEN,
              },
              {
                name: 'Michelle Tippens',
                img: '../portraits/Michelle_Rose_Tippens.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tulsi Gabbard',
                img: '../portraits/TulsiGabbardReplace.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brian Evans',
                img: '../portraits/Brian_Evans.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/green.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Marissa Kerns',
                img: '../portraits/web1_Republican-Convention_0041.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Paulette_E._Jordan.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brad Little',
                img: '../portraits/nlmya.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Cristina_McNeil.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Russ Fulcher',
                img: '../portraits/Russell_Fulcher.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Aaron Swisher',
                img: '../portraits/AaronSwisher-11617-4.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Simpson',
                img: '../portraits/Michael_K._Simpson.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/kcollum_2018-03-03_0214.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Janice McGeachin',
                img: '../portraits/McGeachin41.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/bistlinemug.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lawrence Wasden',
                img: '../portraits/Lawrence_Wasden.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/jillh-03989.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lawerence Denney',
                img: '../portraits/Denney22.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Julie_Ellsworth.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/JB_Pritzker.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bruce Rauner',
                img: '../portraits/BruceRauner2015a.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Kwame_Raoul.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Erika Harold',
                img: '../portraits/ErikaHarold-1.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Bobby_Rush.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jimmy Lee Tillman',
                img: '../portraits/Jimmy_Lee_Tillman_II.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Robin Kelly',
                img: '../portraits/Robin_Kelly.png',
                party: DEMOCRAT,
              },
              {
                name: 'David Merkle',
                img: '../portraits/David_Merkle.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Daniel Lipinski',
                img: '../portraits/Daniel_Lipinski.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Arthur Jones',
                img: '../portraits/Arthur_Jones.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jesús G. Garcia',
                img: '../portraits/Chuy_Garcia.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Lorch',
                img: '../portraits/Lorch_Headshot.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Quigley',
                img: '../portraits/Mike_Quigley.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tom Hanson',
                img: '../portraits/Image.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Sean Casten',
                img: '../portraits/Sean_Casten.png',
                party: DEMOCRAT,
              },
              {
                name: 'Peter Roskam',
                img: '../portraits/Peter_J._Roskam.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Danny K. Davis',
                img: '../portraits/Danny_K._Davis.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Craig Cameron',
                img: '../portraits/Screen_Shot_2018-03-20_at_7.45.49_PM_(2).png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Raja Krishnamoorthi',
                img: '../portraits/Raja_Krishnamoorthi.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jitendra "JD" Diganvker',
                img: '../portraits/JD.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jan Schakowsky',
                img: '../portraits/Janice_D._Schakowsky.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Elleson',
                img: '../portraits/John_Elleson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Brad Schneider',
                img: '../portraits/Brad_Schneider.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Douglas Bennett',
                img: '../portraits/400px-Douglas_Bennett.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Bill Foster',
                img: '../portraits/billfoster.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Nick Stella',
                img: '../portraits/Dominick_Stella.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Brendan Kelly',
                img: '../portraits/Brendan_Kelly2.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Bost',
                img: '../portraits/Mike_Bost_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Betsy Dirksen Londrigan',
                img: '../portraits/Betsy_Dirksen_Londrigan.png',
                party: DEMOCRAT,
              },
              {
                name: 'Rodney Davis',
                img: '../portraits/rodneydavis.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Lauren Underwood',
                img: '../portraits/Lauren_Underwood.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Randy Hultgren',
                img: '../portraits/Randy_Hultgren.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Kevin Gaither',
                img: '../portraits/Kevin_Gaither.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Shimkus',
                img: '../portraits/Rep._John_Shimkus.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Sara Dady',
                img: '../portraits/Sara_Dady.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Adam Kinzinger',
                img: '../portraits/Adam_Kinzinger.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Cheri Bustos',
                img: '../portraits/Cheri_Bustos_official_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bill Fawell',
                img: '../portraits/Fawell-Bill_crop_portrait.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Junius Rodriguez',
                img: '../portraits/Junius_Rodriguez.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Darin LaHood',
                img: '../portraits/Darin_LaHood.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Joe_Donnelly.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Braun',
                img: '../portraits/Mike_Braun.png',
                party: REPUBLICAN,
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
                img: '../portraits/Peter_J._Visclosky.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Leyva',
                img: '../portraits/Mark_Leyva.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Mel Hall',
                img: '../portraits/Mel-Hall.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jackie Walorski',
                img: '../portraits/jw.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Courtney Tritch',
                img: '../portraits/Courtney_Tritch.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Banks',
                img: '../portraits/Jim_Banks.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tobi Beck',
                img: '../portraits/Tobi_Beck2.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Baird',
                img: '../portraits/James_Baird.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Dee Thornton',
                img: '../portraits/80360E96-0F95-4680-B821-D09723DE1EF2.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Susan W. Brooks',
                img: '../portraits/Susan_Brooks.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jeannine Lee Lake',
                img: '../portraits/Jeannine_Lee_Lake2.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Greg Pence',
                img: '../portraits/GregPence.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'André Carson',
                img: '../portraits/Andre_Carson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Wayne Harmon',
                img: '../portraits/Wayne_Harmon.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'William Tanoos',
                img: '../portraits/William_Tanoos.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Larry Bucshon',
                img: '../portraits/Larry_Bucshon.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Liz Watson',
                img: '../portraits/Liz_Watson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Trey Hollingsworth',
                img: '../portraits/Trey_Hollingsworth.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Fred_Hubbell_Iowa.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kim Reynolds',
                img: '../portraits/Kim_Reynolds_2013.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Abby_Finkenauer.png',
                party: DEMOCRAT,
              },
              {
                name: 'Rod Blum',
                img: '../portraits/Rod_Blum_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dave Loebsack',
                img: '../portraits/David_Loebsack.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Christopher Peters',
                img: '../portraits/Christopher_Peters_2018.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cindy Axne',
                img: '../portraits/Cindy.Axne.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Young',
                img: '../portraits/David_Young_Iowa.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Bryan Holder',
                img: '../portraits/155344_lg.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'J.D. Scholten',
                img: '../portraits/180510_4.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve King',
                img: '../portraits/steve_king.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Charles Aldrich',
                img: '../portraits/Charles_Aldrich.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/TomMiller2015.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/Deidre_DeJear_Headshot-min.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Paul Pate',
                img: '../portraits/Paul_Pate.png',
                party: REPUBLICAN,
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
                img: '../portraits/AR-171119840.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mary Mosiman',
                img: '../portraits/MaryMosiman1.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Michael_Fitzgerald.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/Laura_Kelly.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kris Kobach',
                img: '../portraits/Kris_Kobach.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Alan_LaPolice.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Roger Marshall',
                img: '../portraits/Roger_Marshall.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Paul Davis',
                img: '../portraits/PaulDavis.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Watkins',
                img: '../portraits/Steve_Watkins.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Sharice Davids',
                img: '../portraits/ShariceDavids_ActBlue-1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kevin Yoder',
                img: '../portraits/Kevin_Yoder.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'James Thompson',
                img: '../portraits/James_Thompson.png',
                party: DEMOCRAT,
              },
              {
                name: 'Ron Estes',
                img: '../portraits/ronestes.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/maxresdefault.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Derek Schmidt',
                img: '../portraits/Derek_Schmidt.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Brian_McClendon_.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Scott Schwab',
                img: '../portraits/Scott_Schwab.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Marci_Francisco.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jake LaTurner',
                img: '../portraits/Jacob_LaTurner.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/oiwer.png',
                party: DEMOCRAT,
              },
              {
                name: 'James Comer',
                img: '../portraits/James_Comer.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Hank Linderman',
                img: '../portraits/hank_linderman_head_shot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brett Guthrie',
                img: '../portraits/Brett_Guthrie.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Yarmuth',
                img: '../portraits/John_Yarmuth_113th_Congress.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Vickie Glisson',
                img: '../portraits/glisson-vickie.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Seth Hall',
                img: '../portraits/Seth_Hall.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Thomas Massie',
                img: '../portraits/thomas_massie.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kenneth Stepp',
                img: '../portraits/56959_lg.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Harold Rogers',
                img: '../portraits/Hal_Rogers.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Amy McGrath',
                img: '../portraits/Amy_McGrath.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Andy Barr',
                img: '../portraits/andy_barr.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Janet_Mills.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Shawn Moody',
                img: '../portraits/portland-press-herald_3163774.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/image3.png',
                party: DEMOCRAT,
              },
              {
                name: 'Eric Brakey',
                img: '../portraits/Eric_Brakey.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Chellie_Pingree.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Holbrook',
                img: '../portraits/Mark_Holbrook.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Golden',
                img: '../portraits/JaredGolden.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bruce Poliquin',
                img: '../portraits/bruce_p.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Ben_Jealous.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Larry Hogan',
                img: '../portraits/lhogan2final.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Ben_Cardin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tony Campbell',
                img: '../portraits/tony_campell.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Jesse_Colvin-6.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Andy Harris',
                img: '../portraits/Andy_Harris.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dutch Ruppersberger',
                img: '../portraits/CA_Dutch_Rubbersberger.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Liz Matory',
                img: '../portraits/29034842.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Sarbanes',
                img: '../portraits/John_Sarbanes.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Charles Anthony',
                img: '../portraits/none.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Anthony Brown',
                img: '../portraits/anthonybbb.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'George McDermott',
                img: '../portraits/George_McDermott.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Steny Hoyer',
                img: '../portraits/Steny_Hoyer.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'William Devine',
                img: '../portraits/macky.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'David Trone',
                img: '../portraits/David_Trone.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Amie Hoeber',
                img: '../portraits/HOeber.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Elijah Cummings',
                img: '../portraits/Elijah_Cummings.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Richmond Davis',
                img: '../portraits/campaign_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Jamie Raskin',
                img: '../portraits/Jamie_Raskin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Walsh',
                img: '../portraits/img0524.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/BrianFrosh2015.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Craig Wolf',
                img: '../portraits/craigwolfat.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/JayGonzalez.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Charlie Baker',
                img: '../portraits/CharlesBaker2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Elizabeth_Warren--Official_113th_Congressional_Portrait--.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Geoff Diehl',
                img: '../portraits/1130113diehl.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Richard_Neal.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jim McGovern',
                img: '../portraits/James_P_McGovern.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tracy Lovvorn',
                img: '../portraits/profile.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Lori Trahan',
                img: '../portraits/LTHeadshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rick Green',
                img: '../portraits/20170110__BREAKINGNEWSRick_p1_200.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Joseph P. Kennedy III',
                img: '../portraits/joekennedy.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Katherine Clark',
                img: '../portraits/Katherine_Clark_2013.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Hugo',
                img: '../portraits/John_Hugo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Seth Moulton',
                img: '../portraits/Seth_Moulton.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Joseph Schneider',
                img: '../portraits/joseph-schneider-049-1.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ayanna Pressley',
                img: '../portraits/AyannaPressley.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Stephen Lynch',
                img: '../portraits/Stephen_Lynch.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Bill Keating',
                img: '../portraits/William_Keating.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Peter Tedeschi',
                img: '../portraits/Tedeschi_Peter_alternate.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Quentin_Palfrey.png',
                party: DEMOCRAT,
              },
              {
                name: 'Karyn Polito',
                img: '../portraits/G2qztDnO_400x400.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/MauraHealy2015.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'James McMahon',
                img: '../portraits/static1.squarespace-2.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/William_f_galvin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Anthony Amore',
                img: '../portraits/anthony_amore.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Suzanne_Bump.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Helen Brady',
                img: '../portraits/download-3.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Deb_Goldberg.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Keiko Orrall',
                img: '../portraits/KMO1.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Whitmer.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bill Schuette',
                img: '../portraits/Bill_Schuette.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Debbie_Stabenow.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John James',
                img: '../portraits/wijer.png',
                party: REPUBLICAN,
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
                img: '../portraits/Jack_Bergman.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Rob Davidson',
                img: '../portraits/Rob_Davidson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bill Huizenga',
                img: '../portraits/Bill_Huizenga.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cathy Albro',
                img: '../portraits/Cathy_Albro.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Justin Amash',
                img: '../portraits/Justin_Amash.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jerry Hilliard',
                img: '../portraits/HILLIARD-jerry.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Moolenaar',
                img: '../portraits/John_Moolenaar.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Daniel Kildee',
                img: '../portraits/Dan_Kildee.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Travis Wines',
                img: '../portraits/wines.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Matt Longjohn',
                img: '../portraits/Matt_Longjohn_photo-7.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Fred Upton',
                img: '../portraits/Fred_Upton.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Gretchen Driskell',
                img: '../portraits/Gretchen_Driskell.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tim Walberg',
                img: '../portraits/Tim_Walberg.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Elissa Slotkin',
                img: '../portraits/Elissa_Slotkin2.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Bishop',
                img: '../portraits/Mike_Bishop_Official.png',
                party: REPUBLICAN,
              },
              {
                name: 'Brian Ellison',
                img: '../portraits/none.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Andy Levin',
                img: '../portraits/Andy_Levin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Candius Stearns',
                img: '../portraits/54e99.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Kimberly Bizon',
                img: '../portraits/lwerinfm.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Paul Mitchell',
                img: '../portraits/paulmitchell.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Haley Stevens',
                img: '../portraits/HaleyStevens.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lena Epstein',
                img: '../portraits/Headshot_1.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Debbie Dingell',
                img: '../portraits/debbieding.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jeff Jones',
                img: '../portraits/Jeff_Jones_MI.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Rashida Tlaib',
                img: '../portraits/Rashida_Tlaib.jpg',
                party: DEMOCRAT,
              },
            ]
          },
          // {
          //   name: 'District 13 Special Election',
          //   candidates: [
          //     { // TODO: Double-check that this is correct
          //       name: 'Brenda Jones',
                // img: '../portraits/Brenda_Jones.png',
          //     },
          //   ]
          // },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Brenda Lawrence',
                img: '../portraits/Brenda_Lawrence.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Marc Herschfus',
                img: '../portraits/none.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Tim_Walz.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jeff Johnson',
                img: '../portraits/Jeff_Johnson_(Minnesota)-7.png',
                party: REPUBLICAN,
              },
              {
                name: 'Chris Wright',
                img: '../portraits/Chris_Wright_400x600.jpg',
                party: GRASSROOTS,
              },
              {
                name: 'Josh Welter',
                img: '../portraits/download-4.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Amy_Klobuchar.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Newberger',
                img: '../portraits/Jim_Newberger.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Paula Overby',
                img: '../portraits/Paula_Overby_4X4_web.jpg',
                party: GREEN,
              },
              {
                name: 'Dennis Schuller',
                img: '../portraits/Dennis_Schuller.jpg',
                party: INDEPENDENT,
              }
            ]
          },
          {
            name: 'Special Election',
            candidates: [
              {
                name: 'Tina Smith',
                img: '../portraits/Tina_Smith-1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Karin Housley',
                img: '../portraits/KarinHousley.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jerry Trooien',
                img: '../portraits/Cxg_RBrJ_400x400.jpg',
                party: UNAFFILIATED,
              },
              {
                name: 'Sarah Wellington',
                img: '../portraits/SarahWellington2.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/Dan_Feehan_-_Headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Hagedorn',
                img: '../portraits/HagedornMN.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Angie Craig',
                img: '../portraits/Angie_Craig_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jason Lewis',
                img: '../portraits/Jason_Lewis.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Dean Phillips',
                img: '../portraits/Dean_Phillips.png',
                party: DEMOCRAT,
              },
              {
                name: 'Erik Paulsen',
                img: '../portraits/Erik_Paulsen.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Betty McCollum',
                img: '../portraits/Betty_McCollum.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Greg Ryan',
                img: '../portraits/RyanMN.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Susan Pendergast Sindt',
                img: '../portraits/none.jpg',
                party: INDEPENDENT,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Ilhan Omar',
                img: '../portraits/Ilhan_Omar_portrait.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jennifer Zielinski',
                img: '../portraits/Jennifer_Zielinski.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Ian Todd',
                img: '../portraits/Ian_Todd.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tom Emmer',
                img: '../portraits/Tom_Emmer.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Collin C. Peterson',
                img: '../portraits/Collin_Peterson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dave Hughes',
                img: '../portraits/Dave_Hughes.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Joe Radinovich',
                img: '../portraits/Joe_Radinovich.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Pete Stauber',
                img: '../portraits/Pete-Stauber2017.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Ray Sandman',
                img: '../portraits/Ray_Skip_Sandman.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/Keith_Ellison.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Doug Wardlow',
                img: '../portraits/Doug_Wardlow.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Noah Johnson',
                img: '../portraits/Noah_M._Johnson.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/SSimon.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Howe',
                img: '../portraits/John_Howe.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/8493489.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Pam Myhra',
                img: '../portraits/Pam_Myhra.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Chris Dock',
                img: '../portraits/none.jpg',
                party: LIBERTARIAN,
              },
              {
                name: 'Michael Ford',
                img: '../portraits/none.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/David_Baria.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Roger Wicker',
                img: '../portraits/Roger_Wicker.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Wadkins-headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Trent Kelly',
                img: '../portraits/Trent_Kelly.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Bennie Thompson',
                img: '../portraits/Bennie_Thompson.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Michael Evans',
                img: '../portraits/Michael_Evans.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael Guest',
                img: '../portraits/Michael_Guest-photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jeramey Anderson',
                img: '../portraits/Jeramey_Anderson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steven M. Palazzo',
                img: '../portraits/Steven_Palazzo.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Claire_McCaskill.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Josh Hawley',
                img: '../portraits/Josh_Hawley.png',
                party: REPUBLICAN,
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
                img: '../portraits/William_Lacy_Clay.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Robert Vroman',
                img: '../portraits/Robert_Vroman.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Robb Cunningham',
                img: '../portraits/Robb_E_Cunningham.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Cort VanOstran',
                img: '../portraits/CortVanOstran.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ann Wagner',
                img: '../portraits/Ann_Wagner.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'David Arnold',
                img: '../portraits/none.jpg',
                party: GREEN,
              },
              {
                name: 'Larry Kirk',
                img: '../portraits/none.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Katy Geppert',
                img: '../portraits/Geppert_Professional_Picture.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Blaine Luetkemeyer',
                img: '../portraits/Blaine_Luetkemeyer.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Donald Stolle',
                img: '../portraits/none.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Renee Hoagenson',
                img: '../portraits/Renee_Hoagenson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Vicky Hartzler',
                img: '../portraits/Vicky_Hartzler.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Mark Bliss',
                img: '../portraits/Mark_Bliss.png',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Emanuel Cleaver II',
                img: '../portraits/Emanuel_Cleaver.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jacob Turk',
                img: '../portraits/Jacob_Turk.png',
                party: REPUBLICAN,
              },
              {
                name: 'E.C. Fredland',
                img: '../portraits/none.jpg',
                party: CONSTITUTION,
              },
              {
                name: 'Maurice Copeland',
                img: '../portraits/none.jpg',
                party: GREEN,
              },
              {
                name: 'Alexander Howell',
                img: '../portraits/none.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Henry Martin',
                img: '../portraits/Henry_Martin2.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Sam Graves',
                img: '../portraits/Sam_Graves.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Dan Hogan',
                img: '../portraits/Dan_Hogan.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Jamie Schoolcraft',
                img: '../portraits/Jamie_Schoolcraft.png',
                party: DEMOCRAT,
              },
              {
                name: 'Billy Long',
                img: '../portraits/Billy_Long.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Benjamin Brixey',
                img: '../portraits/benbrix.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Kathy Ellis',
                img: '../portraits/Kathy_Ellis_for_Congress.png',
                party: DEMOCRAT,
              },
              {
                name: 'Jason Smith',
                img: '../portraits/jasont.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jonathan Shell',
                img: '../portraits/none.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Nicole_Galloway.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Saundra McDowell',
                img: '../portraits/vlqRjnoC_400x400.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jacob Luetkemeyer',
                img: '../portraits/jaluetkSmall.jpg',
                party: CONSTITUTION,
              },
              {
                name: 'Don Fitz',
                img: '../portraits/Don_Fitz.jpg',
                party: GREEN,
              },
              {
                name: 'Sean O\'Toole',
                img: '../portraits/toole.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Jon_Tester.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Matt Rosendale',
                img: '../portraits/Matt_Rosendale.png',
                party: REPUBLICAN,
              },
              {
                name: 'Rick Breckenridge',
                img: '../portraits/Rick_Breckenridge.jpg',
                party: LIBERTARIAN,
              },
              {
                name: 'Steve Kelly',
                img: '../portraits/ewiorweiorj.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/KathleenWilliams.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Greg Gianforte',
                img: '../portraits/greg.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Elinor Swanson',
                img: '../portraits/Elinor_Swanson.jpg',
                party: LIBERTARIAN,
              },
              {
                name: 'Doug Campbell',
                img: '../portraits/doug_campbell.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/Krist.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Pete Ricketts',
                img: '../portraits/PeteRicketts2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/JaneRaybould.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Deb Fischer',
                img: '../portraits/DFischer.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jim Schultz',
                img: '../portraits/JimSchultzForSenate.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/jessicamcclure.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jeff Fortenberry',
                img: '../portraits/jefffortenberry.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Kara Eastman',
                img: '../portraits/Kara_Eastman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Don Bacon',
                img: '../portraits/Don_Bacon_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Paul Theobald',
                img: '../portraits/Paul_Theobald.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Adrian Smith',
                img: '../portraits/Adrian_Smith1.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/DougPeterson.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/5a70fbeb6cf5c.image.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bob Evnen',
                img: '../portraits/bobevnen.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/JaneSkinner.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Charlie Janssen',
                img: '../portraits/Janssen.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/John_Murante.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Sisolak.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Adam Laxalt',
                img: '../portraits/AdamLaxalt2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Jacky_Rosen.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dean Heller',
                img: '../portraits/Dean_Heller.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Dina_Titus_113th_Congress.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Joyce Bentley',
                img: '../portraits/joyce_bentley1.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clint Koble',
                img: '../portraits/Clint_Koble.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Amodei',
                img: '../portraits/Mark_armodei.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Susie Lee',
                img: '../portraits/Susie_Lee.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Danny Tarkanian',
                img: '../portraits/Danny_Tarkanian.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Steven Horsford',
                img: '../portraits/Steven_Horsford.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Cresent Hardy',
                img: '../portraits/cresenthardy.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Kate_Marshall.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael Roberson',
                img: '../portraits/121938_lg.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Ford_headshot_in_classroom_heads_and_shoulder.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Wes Duncan',
                img: '../portraits/Wesley_Duncan.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Barbara_Cegavske.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Bob_Beers.png',
                party: REPUBLICAN,
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
                img: '../portraits/Molly_Kelly.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Chris Sununu',
                img: '../portraits/Chris_Sununu.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jilletta Jarvis',
                img: '../portraits/Jilletta-Jarvis.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Chris_Pappas.png',
                party: DEMOCRAT,
              },
              {
                name: 'Eddie Edwards',
                img: '../portraits/fF26b40.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Dan Belforti',
                img: '../portraits/d_belforti.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Ann McLane Kuster',
                img: '../portraits/Ann_McLane_Kuster.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Negron',
                img: '../portraits/Steve_Negron.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Justin O\'Donnell',
                img: '../portraits/Justin_ODonnell-6.png',
                party: LIBERTARIAN,
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
                img: '../portraits/bobmenendez.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bob Hugin',
                img: '../portraits/BobHugin.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/donaldnorcross.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Paul Dilks',
                img: '../portraits/pauldilk.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jeff Van Drew',
                img: '../portraits/vandrew_color.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Seth Grossman',
                img: '../portraits/Sethgrossman.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Andrew Kim',
                img: '../portraits/Andrew_Kim.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tom MacArthur',
                img: '../portraits/Tom_MacArthur_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Joshua Welle',
                img: '../portraits/joshwelle.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Christopher H. Smith',
                img: '../portraits/Chris_Smith.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Josh Gottheimer',
                img: '../portraits/Josh_Gottheimer.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John McCann',
                img: '../portraits/mccann.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Frank Pallone Jr.',
                img: '../portraits/Frank_Pallone.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Richard Pezzullo',
                img: '../portraits/Rich_Pezzullo.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/michellelujangrisham.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Pearce',
                img: '../portraits/Steve_Pearce.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Martin_Heinrich.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mick Rich',
                img: '../portraits/MickRich.png',
                party: REPUBLICAN,
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
                img: '../portraits/Debra_Haaland.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Janice Arnold-Jones',
                img: '../portraits/arnoldjones.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Xochitl Torres Small',
                img: '../portraits/09E724B7-7935-48B5-88E8-42C85C674F6C.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Yvette Herrell',
                img: '../portraits/Yvette_Herrell.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Ben Ray Luján',
                img: '../portraits/Ben_Ray_Lujan.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jerald Steve McFall',
                img: '../portraits/Steve-McFall.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/HMorales.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michelle Garcia Holmes',
                img: '../portraits/MichelleGarciaHolmes.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/HectorBalderas.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael Hendricks',
                img: '../portraits/Michaelhendrickprofile.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Maggie_Toulouse_Oliver.png',
                party: DEMOCRAT,
              },
              {
                name: 'JoHanna Cox',
                img: '../portraits/JoHanna-C-Cox-Law-Headshot-683x1024.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/BrianColon.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Wayne Johnson',
                img: '../portraits/WayneJohnson.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/TEichenberg.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Arthur Castillo',
                img: '../portraits/ALC_head_shot.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Stephanie_Richard.jpg',
              },
              {
                name: 'Patrick Lyons',
                img: '../portraits/Patrick_Lyons.jpg',
                party: REPUBLICAN,
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
               img: '../portraits/AndrewCuomo2015.png',
               party: DEMOCRAT,
             },
             {
               name: 'Marc Molinaro',
               img: '../portraits/Marcus_Molinaro.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Howie Hawkins',
               img: '../portraits/HowieHawkins.jpg',
               party: GREEN,
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
               img: '../portraits/Kirsten_Gillibrand.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Chele Farley',
               img: '../portraits/239u4u.jpg',
               party: REPUBLICAN,
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
               img: '../portraits/Perry_Gershon.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Lee Zeldin',
               img: '../portraits/Lee_Zeldin_new_official_portrait.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Patricia Latzman',
               img: '../portraits/none.jpg',
               party: WORKING_FAMILIES,
             }
           ]
         },
         {
           name: 'District 2',
           candidates: [
             {
               name: 'Liuba Grechen Shirley',
               img: '../portraits/Liuba_Grechen_Shirley.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Peter King',
               img: '../portraits/Peter_T._King.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 3',
           candidates: [
             {
               name: 'Tom Suozzi',
               img: '../portraits/Tom_Suozzi.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Dan DeBono',
               img: '../portraits/image1-2.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 4',
           candidates: [
             {
               name: 'Kathleen Rice',
               img: '../portraits/Kathleen_M._Rice.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Ameer Benno',
               img: '../portraits/AB_Lo_Res_Cropped.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 5',
           candidates: [
             {
               name: 'Gregory Meeks',
               img: '../portraits/Gregory_W._Meeks.jpg',
               party: DEMOCRAT,
             }
           ]
         },
         {
           name: 'District 6',
           candidates: [
             {
               name: 'Grace Meng',
               img: '../portraits/Grace_Meng_Official_Congressional_Photo.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Tom Hillgardner',
               img: '../portraits/none.jpg',
               party: GREEN,
             }
           ]
         },
         {
           name: 'District 7',
           candidates: [
             {
               name: 'Nydia Velazquez',
               img: '../portraits/Nydia_Velazquez.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Joseph Lieberman',
               img: '../portraits/none.jpg',
               party: CONSERVATIVE,
             }
           ]
         },
         {
           name: 'District 8',
           candidates: [
             {
               name: 'Hakeem Jeffries',
               img: '../portraits/HakeemJeffries.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Ernest Johnson',
               img: '../portraits/none.jpg',
               party: CONSERVATIVE,
             },
             {
               name: 'Jessica White',
               img: '../portraits/none.jpg',
               party: REFORM,
             }
           ]
         },
         {
           name: 'District 9',
           candidates: [
             {
               name: 'Yvette Clarke',
               img: '../portraits/Yvette_Clark.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Lutchi Gayot',
               img: '../portraits/Lutchi_Gayot.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Joel Anabilah-Azumah',
               img: '../portraits/none.jpg',
               party: REFORM,
             }
           ]
         },
         {
           name: 'District 10',
           candidates: [
             {
               name: 'Jerrold Nadler',
               img: '../portraits/Jerrold_Nadler.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Naomi Levin',
               img: '../portraits/naomilevin-min.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 11',
           candidates: [
             {
               name: 'Max Rose',
               img: '../portraits/Max_Rose.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Dan Donovan',
               img: '../portraits/Dan_Donovan.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Henry Bardel',
               img: '../portraits/Henry_Bardel.png',
               party: GREEN,
             }
           ]
         },
         {
           name: 'District 12',
           candidates: [
             {
               name: 'Carolyn Maloney',
               img: '../portraits/Carolyn_Maloney.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Eliot Rabin',
               img: '../portraits/Elliot-Rabin-1.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Scott Hutchins',
               img: '../portraits/Scottandrewhutchins.jpg',
               party: GREEN,
             }
           ]
         },
         {
           name: 'District 13',
           candidates: [
             {
               name: 'Adriano Espaillat',
               img: '../portraits/Adriano_Espaillat_115th_Congress_photo.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Jineea Butler',
               img: '../portraits/jineeabutlerheadshot.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 14',
           candidates: [
             {
               name: 'Alexandria Ocasio-Cortez',
               img: '../portraits/Alexandria_Ocasio-Cortez.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Anthony Pappas',
               img: '../portraits/Anthony_Pappas.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Elizabeth Perri',
               img: '../portraits/none.jpg',
               party: CONSERVATIVE,
             }
           ]
         },
         {
           name: 'District 15',
           candidates: [
             {
               name: 'Jose E. Serrano',
               img: '../portraits/Jose_E._Serrano.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Jason Gonzalez',
               img: '../portraits/none.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 16',
           candidates: [
             {
               name: 'Eliot Engel',
               img: '../portraits/Eliot_Engel.jpg',
               party: DEMOCRAT,
             }
           ]
         },
         {
           name: 'District 17',
           candidates: [
             {
               name: 'Nita Lowey',
               img: '../portraits/Nita_Lowey.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Joseph Ciardullo',
               img: '../portraits/JosephCiardullo-1.jpg',
               party: REFORM,
             }
           ]
         },
         {
           name: 'District 18',
           candidates: [
             {
               name: 'Sean Patrick Maloney',
               img: '../portraits/Sean_Patrick_Maloney_113th_Congress.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'James O\'Donnell',
               img: '../portraits/James_ODonnell-min.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 19',
           candidates: [
             {
               name: 'Antonio Delgado',
               img: '../portraits/Web-Pic.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'John Faso',
               img: '../portraits/John_Faso_official_congressional_photo.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Steven Greenfield',
               img: '../portraits/stevengreenfield.jpg',
               party: GREEN,
             },
             {
               name: 'Bob Cohen',
               img: '../portraits/none.jpg',
               party: WORKING_FAMILIES,
             }
           ]
         },
         {
           name: 'District 20',
           candidates: [
             {
               name: 'Paul Tonko',
               img: '../portraits/Paul_Tonko.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Francis Vitollo',
               img: '../portraits/Joe_Vitollo.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 21',
           candidates: [
             {
               name: 'Tedra Cobb',
               img: '../portraits/Tedra_Cobb.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Elise Stefanik',
               img: '../portraits/Elise_Stefanik_official_congressional_photo.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Lynn Kahn',
               img: '../portraits/Lynn_Kahn_Presidential_Candidate_2016.jpg',
               party: GREEN,
             }
           ]
         },
         {
           name: 'District 22',
           candidates: [
             {
               name: 'Anthony Brindisi',
               img: '../portraits/Anthony_Brindisi.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Claudia Tenney',
               img: '../portraits/claudia_tenney.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 23',
           candidates: [
             {
               name: 'Tracy Mitrano',
               img: '../portraits/2304832487784923.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Thomas Reed',
               img: '../portraits/Tom_Reed-min.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 24',
           candidates: [
             {
               name: 'Dana Balter',
               img: '../portraits/danabalter.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'John Katko',
               img: '../portraits/John_Katko.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 25',
           candidates: [
             {
               name: 'Joseph Morelle',
               img: '../portraits/Joseph_Morelle.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'James Maxwell',
               img: '../portraits/28340234789.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 26',
           candidates: [
             {
               name: 'Brian Higgins',
               img: '../portraits/Brian_Higgins.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Renee Zeno',
               img: '../portraits/none.jpg',
               party: REPUBLICAN,
             }
           ]
         },
         {
           name: 'District 27',
           candidates: [
             {
               name: 'Nate McMurray',
               img: '../portraits/McMurray.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Chris Collins',
               img: '../portraits/Chris_Collins.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Larry Piegza',
               img: '../portraits/Larry_Piegza.jpg',
               party: REFORM,
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
               img: '../portraits/ad05paDl_400x400.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Julie Killian',
               img: '../portraits/jpk_headshot.png',
               party: REPUBLICAN,
             },
             {
               name: 'Jia Lee',
               img: '../portraits/kjlsf.jpg',
               party: GREEN,
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
               img: '../portraits/letitia.jpg',
               party: DEMOCRAT,
             },
             {
               name: 'Keith Wofford',
               img: '../portraits/keith.jpg',
               party: REPUBLICAN,
             },
             {
               name: 'Michael Sussman',
               img: '../portraits/sussman_headshot.jpg',
               party: GREEN,
             },
             {
               name: 'Vincent Messina',
               img: '../portraits/none.jpg',
               party: INDEPENDENCE,
             },
             {
               name: 'Nancy Sliwa',
               img: '../portraits/animal-pic.jpg',
               party: REFORM,
             },
             {
               name: 'Kenneth Schaeffer',
               img: '../portraits/none.jpg',
               party: WORKING_FAMILIES,
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
                img: '../portraits/GKButterfield.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Roger Allison',
                img: '../portraits/178270_lg.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Linda Coleman',
                img: '../portraits/lindacoleman.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'George Holding',
                img: '../portraits/GeorgeHoldingReplace.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jeff Matemu',
                img: '../portraits/1934893284.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Walter B. Jones',
                img: '../portraits/WalterBJones.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'David E. Price',
                img: '../portraits/David_Price.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Loor',
                img: '../portraits/80F89488-3389-4321-B789-1FF25A86074B.png',
                party: REPUBLICAN,
              },
              {
                name: 'Barbara Howe',
                img: '../portraits/Barbara_Howe.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Denise D. Adams',
                img: '../portraits/Denise_Adams.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Virginia Foxx',
                img: '../portraits/Virginia_Foxx.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Ryan Watts',
                img: '../portraits/RyanWatts.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Walker',
                img: '../portraits/Mark_Walker_NC.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Kyle Horton',
                img: '../portraits/Kyle_Horton.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Rouzer',
                img: '../portraits/David_Rouzer_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Frank McNeill',
                img: '../portraits/FrankMcNeillHeadShot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Richard Hudson',
                img: '../portraits/Richard_Hudson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Dan McCready',
                img: '../portraits/veytey.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Harris',
                img: '../portraits/Mark_Harris.png',
                party: REPUBLICAN,
              },
              {
                name: 'Jeff Scott',
                img: '../portraits/Jeff_Scott.jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'David Wilson Brown',
                img: '../portraits/David_Wilson_Brown.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Patrick T. McHenry',
                img: '../portraits/PatrickTMH.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Phillip Price',
                img: '../portraits/Phillip_Price.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Meadows',
                img: '../portraits/Mark_meadows_nc.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Clifton Ingram',
                img: '../portraits/CIJ.png',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Alma Adams',
                img: '../portraits/AlmaAdams.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Paul Wright',
                img: '../portraits/Paul_Wright.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Kathy Manning',
                img: '../portraits/kathymanning.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ted Budd',
                img: '../portraits/Ted_Budd_official_congressional_photo.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Tom Bailey',
                img: '../portraits/tombailey.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Heidi_heitkamp.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kevin Cramer',
                img: '../portraits/Kevin_Cramer.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/MSchneider.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kelly Armstrong',
                img: '../portraits/Kelly_Armstrong.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/David_Thompson_NC.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Wayne Stenehjem',
                img: '../portraits/WayneStenehjem2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Joshua_Boschee.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Will Gardner',
                img: '../portraits/Will_Gardner.png',
                party: REPUBLICAN,
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
                img: '../portraits/JDotzenrod.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Doug Goehring',
                img: '../portraits/Doug_Goehring.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Sherrod_Brown.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'James B. Renacci',
                img: '../portraits/James_Renacci.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Richard_Cordray.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike DeWine',
                img: '../portraits/MikeDeWine2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Aftab_Pureval.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Chabot',
                img: '../portraits/Steve_Chabot.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jill Schiller',
                img: '../portraits/JillSchillerHeadshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brad Wenstrup',
                img: '../portraits/Brad_Wenstrup.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Joyce Beatty',
                img: '../portraits/Joyce_Beatty.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Burgess',
                img: '../portraits/Jim_Burgess.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Janet Garrett',
                img: '../portraits/Janet_Garrett.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Jordan',
                img: '../portraits/JimjordanReplace.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Michael Galbraith',
                img: '../portraits/John_Michael_Galbraith.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bob Latta',
                img: '../portraits/Bob_Latta.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Shawna Roberts',
                img: '../portraits/ShawnaRoberts.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bill Johnson',
                img: '../portraits/Bill_Johnson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ken Harbaugh',
                img: '../portraits/Ken_Harbaugh.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bob Gibbs',
                img: '../portraits/Bob_Gibbs.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Vanessa Enoch',
                img: '../portraits/Headshot.png',
                party: DEMOCRAT,
              },
              {
                name: 'Warren Davidson',
                img: '../portraits/Warren_Davidson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Marcy Kaptur',
                img: '../portraits/Marcy_Kaptur.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steven Kraus',
                img: '../portraits/Steven_Kraus.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Theresa Gasper',
                img: '../portraits/TG_in_UD_shirt_on_Oak_St.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael R. Turner',
                img: '../portraits/MIKETURNER.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Marcia L. Fudge',
                img: '../portraits/Marcia_Fudge-1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Beverly Goldstein',
                img: '../portraits/Beverly_Goldstein.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Danny O\'Connor',
                img: '../portraits/Danny-OConnor-2.png',
                party: DEMOCRAT,
              },
              {
                name: 'Troy Balderson',
                img: '../portraits/troy-bald.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Tim Ryan',
                img: '../portraits/Tim_Ryan_OH.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Chris DePizzo',
                img: '../portraits/1-1.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Betsy Rader',
                img: '../portraits/Betsy_Rader.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Joyce',
                img: '../portraits/David_Joyce.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Rick Neal',
                img: '../portraits/Rick_Neal.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Stivers',
                img: '../portraits/steve-stivers.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Susan Moran Palmer',
                img: '../portraits/Susan_Moran_Palmer_Headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Anthony Gonzalez',
                img: '../portraits/Anthony_Gonzalez.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/steven-tet.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dave Yost',
                img: '../portraits/Dave_Yost.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Kathleen_Clyde.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Frank LaRose',
                img: '../portraits/1640.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Zack_Space.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Keith Faber',
                img: '../portraits/faberphoto.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/RobRichardson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Robert Sprague',
                img: '../portraits/Robert_Sprague.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Drew.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mick Cornett',
                img: '../portraits/Mick_Cornett.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Chris Powell',
                img: '../portraits/chris-powell-2-1-771x578.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Tim_Gilpin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tim Harris',
                img: '../portraits/Tim_Harris.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jason Nichols',
                img: '../portraits/Jason_Nichols.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Markwayne Mullin',
                img: '../portraits/Markwayne_Mullin.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Richard Castaldo',
                img: '../portraits/unnamed_(1).jpg',
                party: LIBERTARIAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Frankie Robbins',
                img: '../portraits/robbins.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Frank Lucas',
                img: '../portraits/Frank_Lucas.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Mary Brannon',
                img: '../portraits/MARY_BRANNON.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tom Cole',
                img: '../portraits/Tom_Cole.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kendra Horn',
                img: '../portraits/Kendra_Horn.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Russell',
                img: '../portraits/Steve_Russell_official_congressional_photo.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/PittmanAnastasia.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dana Murphy',
                img: '../portraits/Dana_Murphy.png',
                party: REPUBLICAN,
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
                img: '../portraits/WalkCardSide1-min.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Hunter',
                img: '../portraits/Mike_Hunter.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/McDanielRandy.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/KateBrown2015.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Knute Buehler',
                img: '../portraits/Knute_Buehler.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Patrick Starnes',
                img: '../portraits/PatrickStarnes.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/Suzanne_Bonamici.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Verbeek',
                img: '../portraits/AR-180429752.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jamie McLeod-Skinner',
                img: '../portraits/jamie_mc.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Greg Walden',
                img: '../portraits/Greg_Walden.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Earl Blumenauer',
                img: '../portraits/Earl_Blumenauer.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Peter A. DeFazio',
                img: '../portraits/Peter_Defazio.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Arthur Robinson',
                img: '../portraits/art-robinson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kurt Schrader',
                img: '../portraits/Kurt_Schrader.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Callahan',
                img: '../portraits/09234234089.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/TomWolf.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Scott Wagner',
                img: '../portraits/Scott_Wagner.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/bob_casey.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lou Barletta',
                img: '../portraits/Lou_Barletta.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Sccott_headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brian Fitzpatrick',
                img: '../portraits/brian_fitzpatrick.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Brendan F. Boyle',
                img: '../portraits/BrendanBoyle.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Torres',
                img: '../portraits/torres_headshot_small.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Dwight Evans',
                img: '../portraits/220px-Dwight_Evans_official_portrait.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bryan Leib',
                img: '../portraits/leib_2.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Madeleine Dean',
                img: '../portraits/MadeleineDean.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dan David',
                img: '../portraits/_hFJfB4V_400x400.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mary Gay Scanlon',
                img: '../portraits/scanlon_mary_gay_065_crop.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Pearl Kim',
                img: '../portraits/download27.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Chrissy Houlahan',
                img: '../portraits/Chrissy_Houlahan.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Greg McCauley',
                img: '../portraits/Greg_McCauley-min.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Susan Wild',
                img: '../portraits/Susan_Ellis_Wild.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Marty Nothstein',
                img: '../portraits/Marty_Nothstein.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Matt Cartwright',
                img: '../portraits/matt_cartwright.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Chrin',
                img: '../portraits/johnchrin.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Denny Wolff',
                img: '../portraits/Denny_Wolff.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dan Meuser',
                img: '../portraits/Dan_Meuser.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'George Scott',
                img: '../portraits/george_scott.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Scott Perry',
                img: '../portraits/ScottPerry.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Jessica King',
                img: '../portraits/Jess_King.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lloyd K. Smucker',
                img: '../portraits/lloyd_smucker.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Marc Friedenberg',
                img: '../portraits/Marc_Friedenberg.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tom Marino',
                img: '../portraits/Tom_Marino.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Brent Ottaway',
                img: '../portraits/brent_ottaway.png',
                party: DEMOCRAT,
              },
              {
                name: 'John Joyce',
                img: '../portraits/7561-036_preview.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Bibiana Boerio',
                img: '../portraits/Bibie_headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Guy Reschenthaler',
                img: '../portraits/GuyReschenthaler.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Susan Boser',
                img: '../portraits/IMG_3270.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Glenn Thompson',
                img: '../portraits/Glenn_Thompson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Ron DiNicola',
                img: '../portraits/rdincola.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Kelly',
                img: '../portraits/mike_kelly.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Conor Lamb',
                img: '../portraits/Conor_Lamb.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Keith Rothfus',
                img: '../portraits/Keith_Rothfus_portrait.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Mike Doyle',
                img: '../portraits/Mike_Doyle.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/John_Fetterman_photo_2016.png',
                party: DEMOCRAT,
              },
              {
                name: 'Jeff Bartos',
                img: '../portraits/JeffBartos.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/GinaRaimondo2015.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Allan Fung',
                img: '../portraits/Allan_Fung.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Sheldon_Whitehouse_113th_Congress.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Robert Flanders',
                img: '../portraits/Bob_Flanders.png',
                party: REPUBLICAN,
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
                img: '../portraits/David_Cicilline.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Patrick Donovan',
                img: '../portraits/none.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jim Langevin',
                img: '../portraits/James_Langevin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Salvatore Caiozzo',
                img: '../portraits/Sal_stand_together.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/danielmckee.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Paul Pence',
                img: '../portraits/PAUL_PENCE.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/220px-Neronha3.jpg',
                party: DEMOCRAT,
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
                img: '../portraits/5d0c64da1dae47e9ad736efb844f64f7.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Pat Cortellessa',
                img: '../portraits/98349834.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Seth_Magaziner.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael Riley',
                img: '../portraits/AR-180629379.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/James_Smith.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Henry McMaster',
                img: '../portraits/Mcmaster.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Martin Barry',
                img: '../portraits/none.jpg',
                party: AMERICAN,
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
                img: '../portraits/Joe_Cunningham.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Katie Arrington',
                img: '../portraits/Katie_Arrington.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Sean Carrigan',
                img: '../portraits/Sean_Carrigan.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Joe Wilson',
                img: '../portraits/Joe_Wilson.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Sonny Narang',
                img: '../portraits/snarang.jpg',
                party: INDEPENDENT,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Brandon Brown',
                img: '../portraits/erjk.png',
                party: DEMOCRAT,
              },
              {
                name: 'William Timmons',
                img: '../portraits/William_Timmons.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Guy Furay',
                img: '../portraits/ad05.png',
                party: AMERICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Archie Parnell',
                img: '../portraits/Archie_Parnell.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ralph Norman',
                img: '../portraits/ralphwnorman.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Michael Chandler',
                img: '../portraits/none.jpg',
                party: CONSTITUTION,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'James E. Clyburn',
                img: '../portraits/James_Clyburn.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Gerhard Gressmann',
                img: '../portraits/Gerhard_Gressmann1.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Bryan Pugh',
                img: '../portraits/Bryan_Pugh.jpg',
                party: GREEN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Robert Williams',
                img: '../portraits/Robert_Williams.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tom Rice',
                img: '../portraits/tom_rice.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Constance_Anastopoulos.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Alan Wilson',
                img: '../portraits/AlanWilson2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/melvinwhittenburg.png',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Hammond',
                img: '../portraits/Mark_Hammond.png',
                party: REPUBLICAN,
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
                img: '../portraits/rosalyn-glenn.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Curtis M. Loftis Jr.',
                img: '../portraits/Curtis_Loftis.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Sarah Work',
                img: '../portraits/Sarah_Work.jpg',
                party: AMERICAN,
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
                img: '../portraits/Hugh_Weathers.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'David Edmond',
                img: '../portraits/none.jpg',
                party: GREEN,
              },
              {
                name: 'Chris Nelums',
                img: '../portraits/none.jpg',
                party: UNITED_CITIZENS,
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
                img: '../portraits/Billie_Sutton.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kristi Noem',
                img: '../portraits/Kristi_Noem.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Tim-Bjorkman-071317.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dusty Johnson',
                img: '../portraits/Dusty_Johnson.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Karl_Dean1.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bill Lee',
                img: '../portraits/5947.jpg',
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
                img: '../portraits/Phil_Bredesen.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Marsha Blackburn',
                img: '../portraits/Marsha_Blackburn.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/marty_olsen.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Phil Roe',
                img: '../portraits/Phil_Roe.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Renee Hoyos',
                img: '../portraits/Renee_Hoyos.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tim Burchett',
                img: '../portraits/Tim_Burchett.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Danielle Mitchell',
                img: '../portraits/danielle.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Chuck Fleischmann',
                img: '../portraits/Charles_Fleischmann.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Mariah Phillips',
                img: '../portraits/Mariah_Phillips_TN04.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Scott DesJarlais',
                img: '../portraits/Scott_DesJarlais.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Jim Cooper',
                img: '../portraits/Jim_Cooper.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jody Ball',
                img: '../portraits/Jody_Ball.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Dawn Barlow',
                img: '../portraits/Dawn_Barlow.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Rose',
                img: '../portraits/unnamed-9.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Justin Kanew',
                img: '../portraits/JustinKanew.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Green',
                img: '../portraits/mark_green.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Erika Pearson',
                img: '../portraits/Erika_Pearson_Headshots-5-2-min.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Kustoff',
                img: '../portraits/David_Kustoff.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Steve Cohen',
                img: '../portraits/Steve_Cohen.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Charlotte Bergmann',
                img: '../portraits/CharlotteBergmann.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/LV_Convention_Profile_Pic.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Greg Abbott',
                img: '../portraits/GregAbbott2015.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/beto_orourke.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ted Cruz',
                img: '../portraits/Ted_Cruz.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Shirley_McKellar.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Louie Gohmert',
                img: '../portraits/5924.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Todd Litton',
                img: '../portraits/Todd_Litton_Headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dan Crenshaw',
                img: '../portraits/Dan_Crenshaw.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Lorie Burch',
                img: '../portraits/Lorie_Burch.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Van Taylor',
                img: '../portraits/Van_Taylor.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Catherine Krantz',
                img: '../portraits/Catherine_Krantz.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Ratcliffe',
                img: '../portraits/John_Ratcliffe_official_congressional_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Dan Wood',
                img: '../portraits/Dan_Wood.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lance Gooden',
                img: '../portraits/Lance_Gooden_portrait.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jana Lynne Sanchez',
                img: '../portraits/Jana_Sanchez_Headshot_2018.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ron Wright',
                img: '../portraits/Ron_Wright.png',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Lizzie Pannill Fletcher',
                img: '../portraits/elizab.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Culberson',
                img: '../portraits/John_Culberson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Steven David',
                img: '../portraits/Steven_David.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kevin Brady',
                img: '../portraits/Kevin_Brady.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Al Green',
                img: '../portraits/Al_Green.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Mike Siegel',
                img: '../portraits/MikeSiegelTX10.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Jennie Lou Leeder',
                img: '../portraits/jennielou.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Conaway',
                img: '../portraits/Mike_Conaway.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Vanessa Adia',
                img: '../portraits/Vanessa_Adia.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kay Granger',
                img: '../portraits/Kay_Granger.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Greg Sagan',
                img: '../portraits/download1.png',
                party: DEMOCRAT,
              },
              {
                name: 'Mac Thornberry',
                img: '../portraits/Mac_Thornberry.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Adrienne Bell',
                img: '../portraits/Adrienne_Bell.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Randy Weber',
                img: '../portraits/Randy_Weber.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Vicente González',
                img: '../portraits/Vicente_Gonzalez_115th_congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tim Westley',
                img: '../portraits/Tim_Westley.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Veronica Escobar',
                img: '../portraits/veronica_escobar.png',
                party: DEMOCRAT,
              },
              {
                name: 'Rick Seeberger',
                img: '../portraits/177038_lg.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Rick Kennedy',
                img: '../portraits/Rick-Kennedy-Tx-17.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bill Flores',
                img: '../portraits/Bill_Flores.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Sheila Jackson Lee',
                img: '../portraits/Sheila_Jackson-Lee.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ava Pate',
                img: '../portraits/Ava_Pate.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Miguel Levario',
                img: '../portraits/Campaign_Headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jodey Arrington',
                img: '../portraits/Jodey_Arrington_115th_congress_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Joaquin Castro',
                img: '../portraits/Joaquin_Castro.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'Joseph Kopser',
                img: '../portraits/Joseph_kopser.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Chip Roy',
                img: '../portraits/Chip_Roy.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Sri Kulkarni',
                img: '../portraits/Sri_Preston_Kulkarni.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Pete Olson',
                img: '../portraits/Pete_Olson.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Gina Ortiz Jones',
                img: '../portraits/Gina_Ortiz_Jones-May_2017-0084.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Will Hurd',
                img: '../portraits/Congressman_Will_Hurd_official_photo.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Jan McDowell',
                img: '../portraits/Jan_McDowell.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kenny Marchant',
                img: '../portraits/Kenny_Marchant.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Julie Oliver',
                img: '../portraits/Julie_Oliver.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Roger Williams',
                img: '../portraits/rogerwilliams.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Linsey Fagan',
                img: '../portraits/Linsey_Fagan.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael Burgess',
                img: '../portraits/Michael_Burgess.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Eric Holguin',
                img: '../portraits/ericholguin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Michael Cloud',
                img: '../portraits/Michael_Cloud.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Henry Cuellar',
                img: '../portraits/Henry_Cuellar.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Sylvia R. Garcia',
                img: '../portraits/Sylvia_Garcia.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Phillip Aronoff',
                img: '../portraits/Phillip_Aronoff.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'Eddie Bernice Johnson',
                img: '../portraits/Eddie_Bernice_Johnson.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'Mary Hegar',
                img: '../portraits/LT5MJGH6DD3ZAZ3BSIHMAQU7HI.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Carter',
                img: '../portraits/John_Carter.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Colin Allred',
                img: '../portraits/Colin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Pete Sessions',
                img: '../portraits/Pete_Sessions.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 33',
            candidates: [
              {
                name: 'Marc Veasey',
                img: '../portraits/Marc_Veasey.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Willie Billups',
                img: '../portraits/Willie_headshot.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Filemon Vela',
                img: '../portraits/Filemon_Vela.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rey Gonzalez',
                img: '../portraits/drreygon.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Lloyd Doggett',
                img: '../portraits/Lloyd_Doggett.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David Smalling',
                img: '../portraits/ywzHltSl_400x400.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Dayna Steele',
                img: '../portraits/Dayna_Steele.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brian Babin',
                img: '../portraits/Brian_Babin_official_congressional_photo.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Mike_Collier.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dan Patrick',
                img: '../portraits/Dan_Patrick.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Kim_Olson.png',
                party: DEMOCRAT,
              },
              {
                name: 'Sid Miller',
                img: '../portraits/Sid_Miller.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/miguel_suazo_reading_lion.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'George P. Bush',
                img: '../portraits/georgepbush.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Jenny_Wilson.png',
                party: DEMOCRAT,
              },
              {
                name: 'Mitt Romney',
                img: '../portraits/Mitt_Romney.png',
                party: REPUBLICAN,
              },
              {
                name: 'Tim Aalders',
                img: '../portraits/TimAalders.jpg',
                party: CONSTITUTION,
              },
              {
                name: 'Reed McCandless',
                img: '../portraits/images.jpg',
                party: INDEPENDENT,
              },
              {
                name: 'Craig Bowden',
                img: '../portraits/Craig_Bowden.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Lee_Castillo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rob Bishop',
                img: '../portraits/Rob_Bishop.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Adam Davis',
                img: '../portraits/5b50f070e0c9a.image.jpg',
                party: GREEN,
              },
              {
                name: 'Eric Eliason',
                img: '../portraits/hamburger.jpg',
                party: UNITED_UTAH,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Shireen Ghorbani',
                img: '../portraits/Shireen_Ghorbani.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Chris Stewart',
                img: '../portraits/Chris_Stewart.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Jeffrey Whipple',
                img: '../portraits/download-2.jpg',
                party: LIBERTARIAN,
              },
              {
                name: 'Jan Garbett',
                img: '../portraits/static1.squarespace-1.jpg',
                party: UNITED_UTAH,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'James Singer',
                img: '../portraits/james_singer.png',
                party: DEMOCRAT,
              },
              {
                name: 'John Curtis',
                img: '../portraits/CurtisUtah.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Gregory Duerden',
                img: '../portraits/Gregory_Duerden.jpg',
                party: INDEPENDENT,
              },
              {
                name: 'Melanie McCoard',
                img: '../portraits/none.jpg',
                party: INDEPENDENT,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Ben McAdams',
                img: '../portraits/Ben_McAdams.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mia Love',
                img: '../portraits/mialove.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/23948.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Phil Scott',
                img: '../portraits/Phil_Scott.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Cris Ericson',
                img: '../portraits/Cris_Ericson.jpg',
                party: INDEPENDENT,
              },
              {
                name: 'Stephen Marx',
                img: '../portraits/7p1.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/Bernie_Sanders.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brooke Paige',
                img: '../portraits/Brooke_Paige.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Peter_Welch.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brooke Paige',
                img: '../portraits/Brooke_Paige.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Cris Ericson',
                img: '../portraits/Cris_Ericson-1.jpg',
                party: INDEPENDENT,
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
                img: '../portraits/zuckerman1.png',
                party: DEMOCRAT,
              },
              {
                name: 'Don Turner',
                img: '../portraits/donaldnorcross.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/T.J._Donovan.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brooke Paige',
                img: '../portraits/Brooke_Paige.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Jim_Condos.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brooke Paige',
                img: '../portraits/Brooke_Paige.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Doug_Hoffer.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brooke Paige',
                img: '../portraits/Brooke_Paige.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Elizabeth_Pearce.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brooke Paige',
                img: '../portraits/Brooke_Paige.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/tim_kaine.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Corey Stewart',
                img: '../portraits/Corey_Stewart.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/VangieWilliams.png',
                party: DEMOCRAT,
              },
              {
                name: 'Rob Wittman',
                img: '../portraits/Rob_Wittman.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Elaine Luria',
                img: '../portraits/Elaine_Luria.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Scott Taylor',
                img: '../portraits/Scott_Taylor.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Robert C. Scott',
                img: '../portraits/Bobby_Scott.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'A. Donald McEachin',
                img: '../portraits/Donald_McEachin_115th_congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Ryan McAdams',
                img: '../portraits/Ryan_McAdams_Candidate_US_Representative_VA_4th.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jennifer Lewis',
                img: '../portraits/039489834.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Abigail Spanberger',
                img: '../portraits/Spanberger_Abigail.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Don Beyer',
                img: '../portraits/don-beyer.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Anthony Flaccavento',
                img: '../portraits/Anthony_Flaccavento.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Morgan Griffith',
                img: '../portraits/Morgan_Griffith.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Jennifer Wexton',
                img: '../portraits/WextonHS_1b-crop.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Barbara Comstock',
                img: '../portraits/orwejoiewjio.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Gerald E. Connolly',
                img: '../portraits/Gerry_Connolly.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jeff Dove',
                img: '../portraits/Jeff-Dove-1144x763.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Maria_Cantwell.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Susan Hutchison',
                img: '../portraits/Susan_Hutchison_Washington.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/jlkdfs.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jeffrey Beeler',
                img: '../portraits/Jeffrey-Beeler-Candidate-Photo-2018.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Rick Larsen',
                img: '../portraits/Rick_Larsen.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Jaime Herrera Beutler',
                img: '../portraits/Jaime_Herrera_Beutler.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Carolyn Long',
                img: '../portraits/CarolynLong.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Christine Brown',
                img: '../portraits/Christine_Brown.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Dan Newhouse',
                img: '../portraits/dan_newhouse.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Cathy McMorris Rodgers',
                img: '../portraits/Cathy_McMorris_Rodgers.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Lisa Brown',
                img: '../portraits/Brown_lisa.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Derek Kilmer',
                img: '../portraits/Derek_Kilmer_113th_Congress.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Douglas Dightman',
                img: '../portraits/Screenshot_20180525-165712.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Pramila Jayapal',
                img: '../portraits/Pramila_Jayapal_115th_Congress_photo.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Craig Keller',
                img: '../portraits/CraigKeller.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Dino Rossi',
                img: '../portraits/175px-Rossi.jpg',
                party: REPUBLICAN,
              },
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Adam Smith',
                img: '../portraits/Adam_Smith.jpg',
                party: DEMOCRAT,
              },
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Denny Heck',
                img: '../portraits/denny_heck.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Joseph Brumbles',
                img: '../portraits/181132_lg.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Joe_Manchin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Patrick Morrisey',
                img: '../portraits/Patrick_J_Morrisey.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/KFershee-min.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'David B. McKinley',
                img: '../portraits/David_McKinley.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Talley Sergent',
                img: '../portraits/Sergent_Headshot.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Alex X. Mooney',
                img: '../portraits/3mooney.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Richard Ojeda',
                img: '../portraits/Richard_Ojeda.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Carol Miller',
                img: '../portraits/Miller_carol.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Tony-Evers.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Scott Walker',
                img: '../portraits/Scott_Walker_2.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Michael White',
                img: '../portraits/Screenshot_20180523-164314.png',
                party: GREEN,
              },
              {
                name: 'Phil Anderson',
                img: '../portraits/57b5f5c4c9708.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Tammy_Baldwin.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Leah Vukmir',
                img: '../portraits/Leah_Vuk.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Randy_bryce_0.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Bryan Steil',
                img: '../portraits/Bryan_Steil_Headshot-min.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Mark Pocan',
                img: '../portraits/Pocan_mark.jpg',
                party: DEMOCRAT,
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Ron Kind',
                img: '../portraits/Ron_Kind.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Steve Toft',
                img: '../portraits/Steve_Toft_Osseo_WI3D.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Gwen Moore',
                img: '../portraits/Gwen_Moore.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Tim Rogers',
                img: '../portraits/none.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Tom Palzewicz',
                img: '../portraits/Tom_Palzewicz.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jim Sensenbrenner',
                img: '../portraits/Jim_Sensenbrenner.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Dan Kohl',
                img: '../portraits/Dan_Kohl.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Glenn Grothman',
                img: '../portraits/glenn_groth.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Margaret Engebretson',
                img: '../portraits/MargaretEngebretson.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Sean P. Duffy',
                img: '../portraits/Sean_Duffy.jpg',
                party: REPUBLICAN,
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Beau Liegeois',
                img: '../portraits/Beau_Legois.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mike Gallagher',
                img: '../portraits/Mike_Gallagher.png',
                party: REPUBLICAN,
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
                img: '../portraits/News1_MandelaBarnes.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Rebecca Kleefisch',
                img: '../portraits/tteYNSsD_400x400.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Tiffany Anderson',
                img: '../portraits/Tiffany Anderson.jpg',
                party: GREEN,
              },
              {
                name: 'Patrick Baird',
                img: '../portraits/Baird_Patrick.jpg',
                party: LIBERTARIAN,
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
                img: '../portraits/Josh_Kaul_for_Attorney_General.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Brad Schimel',
                img: '../portraits/Josh_Kaul_for_Attorney_General.jpg',
              },
              {
                name: 'Terry Larson',
                img: '../portraits/Terry_Larson.jpg',
                party: CONSTITUTION,
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
                img: '../portraits/Doug_LaFollette.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Jay Schroeder',
                img: '../portraits/JaySchroeder.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/29595448_546771229039507_6639885822438538560_n.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Travis Hartwig',
                img: '../portraits/unnamed-19.jpg',
                party: REPUBLICAN,
              },
              {
                name: 'Andrew Zuelke',
                img: '../portraits/unnamed-1.png',
                party: CONSTITUTION,
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
                img: '../portraits/Throne.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Mark Gordon',
                img: '../portraits/Mark_Gordon.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Gary_Trauner.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'John Barrasso',
                img: '../portraits/John_Barrasso.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Greg_Hunter.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Liz Cheney',
                img: '../portraits/Liz_Cheney_2.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Byrd.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Edward Buchanan',
                img: '../portraits/Buchanan.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/Jeff_Dockter_Filing_Day.jpg',
                party: DEMOCRAT,
              },
              {
                name: 'Kristi Racines',
                img: '../portraits/KristiRacines.jpg',
                party: REPUBLICAN,
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
                img: '../portraits/MeierCS03.jpg',
                party: REPUBLICAN,
              }
            ]
          }
        ]
      }
    ]
  },
  // end of stateInfo object
}

exports.stateInfo = stateInfo