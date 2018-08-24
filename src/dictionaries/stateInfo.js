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

const NO_GRADE = '?'
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
                grade: NO_GRADE
              },
              {
                name: 'Walt Maddox',
                img: require('../portraits/Walt_Maddox.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Bradley Byrne',
                img: require('../portraits/220px-Rep_Bradley_Byrne.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tabitha Isner',
                img: require('../portraits/tabithaisner.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Martha Roby',
                img: require('../portraits/Martha_Roby.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Mallory Hagan',
                img: require('../portraits/mallory-hagan_headshot.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mike D. Rogers',
                img: require('../portraits/Mike_Rogers_AL.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Lee Auman',
                img: require('../portraits/Lee_Auman.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Robert B. Aderholt',
                img: require('../portraits/Robert_Aderholt.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Peter Joffrion',
                img: require('../portraits/Peter_Joffrion.png'),
                grade: NO_GRADE
              },
              {
                name: 'Mo Brooks',
                img: require('../portraits/Mo_Brooks.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Danner Kline',
                img: require('../portraits/Danner_Kline.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Gary Palmer',
                img: require('../portraits/Gary_Palmer_official_congressional_photo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Terri A. Sewell',
                img: require('../portraits/Terri_Sewell.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
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
                grade: NO_GRADE
              },
              {
                name: 'Will Ainsworth',
                img: require('../portraits/Will_Ainsworth.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Steve Marshall',
                img: require('../portraits/Steve_MarshallAG.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'John Merril',
                img: require('../portraits/John_Merrill.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Jim Zeigler',
                img: require('../portraits/Jim_Zeigler.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              // TODO: Only one candidate!
            ]
          }
        ]
      }
    ] // legislatures
  },
  // AK: Alaska // primaries Aug. 21
  // AZ: Arizona // primaries Aug. 28
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
                grade: NO_GRADE
              },
              {
                name: 'Asa Hutchinson',
                img: require('../portraits/AsaHutchinson2015.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Rick Crawford',
                img: require('../portraits/Rick_Crawford_AR.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clarke Tucker',
                img: require('../portraits/Clarke_Tucker.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'French Hill',
                img: require('../portraits/French_Hill_official_photo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Josh Mahony',
                img: require('../portraits/96580584_Joshua-Mahony_ORIG_t635.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Steve Womack',
                img: require('../portraits/Steve_Womack.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hayden Shamel',
                img: require('../portraits/Hayden_Shamel-7.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Brucer Westerman',
                img: require('../portraits/bruce-westerman.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Tim Griffin',
                img: require('../portraits/Tim_Griffin.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Leslie Rutledge',
                img: require('../portraits/Leslie_Rutledge.png'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'John Thurston',
                img: require('../portraits/John_Thurston.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
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
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Tommy Land',
                img: require('../portraits/3daPJCOF_400x400.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'John Cox',
                img: require('../portraits/John_Cox_(California)-6.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Kevin de León',
                img: require('../portraits/Kevin_De_Leon.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Audrey Denney',
                img: require('../portraits/DenneyHeadshot.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Huffman',
                img: require('../portraits/Jared_Huffman.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Dale Mensing',
                img: require('../portraits/Dale_Mensing.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Garamendi',
                img: require('../portraits/John_Garamendi.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Charlie Schaupp',
                img: require('../portraits/Charlie_Schaupp.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tom McClintock',
                img: require('../portraits/Tom_McClintock.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jessica Morse',
                img: require('../portraits/Jessica_Morse.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Thompson',
                img: require('../portraits/Mike_Thompson.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Doris Matsui',
                img: require('../portraits/DorisMatsuiReplace.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ami Bera',
                img: require('../portraits/Ami_Bera.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Andrew Grant',
                img: require('../portraits/Andrew_Grant.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Paul Cook',
                img: require('../portraits/Paul_Cook.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jerry McNerney',
                img: require('../portraits/Jerry_McNerney.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Marla Livengood',
                img: require('../portraits/2018_Marla_Livengood_for_CA_U.S._Congress.png'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Jeff Denham',
                img: require('../portraits/Jeff_Denham.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'John Fitzgerald',
                img: require('../portraits/John_Fitzgerald.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Nancy Pelosi',
                img: require('../portraits/Nancy_Pelosi.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Cristina Osmeña',
                img: require('../portraits/XtgoNPfO_400x400.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Eric Swalwell',
                img: require('../portraits/esc.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Rudy Peters',
                img: require('../portraits/Rudy_Peters_Congress.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Jim Costa',
                img: require('../portraits/Jim_Costa.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Elizabeth Heng',
                img: require('../portraits/_MG_6860-Edit-min.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Ro Khanna',
                img: require('../portraits/1200.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ron Cohen',
                img: require('../portraits/Ron.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Anna G. Eshoo',
                img: require('../portraits/Anna_Eshoo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Christine Russell',
                img: require('../portraits/none.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Zoe Lofgren',
                img: require('../portraits/Zoe_Lofgren.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Jimmy Panetta',
                img: require('../portraits/Jimmy_Panetta_115th_Congress_photo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ronald Paul Kabat',
                img: require('../portraits/Ronald_Paul_Kabat.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'T.J. Cox',
                img: require('../portraits/TJ_Cox.png'),
                grade: NO_GRADE
              },
              {
                name: 'David Valadao',
                img: require('../portraits/David_Valadao.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Devin Nunes',
                img: require('../portraits/Devin_Nunes.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Andrew Janz',
                img: require('../portraits/Andrew_Janz.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Kevin McCarthy',
                img: require('../portraits/Kevin_McCarthy_CA.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Salud Carbajal',
                img: require('../portraits/Salud_Carbajal_115th_Congress_photo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Justin Fareed',
                img: require('../portraits/Justin_Fareed.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Steve Knight',
                img: require('../portraits/Steve_Knight_official_congressional_photo.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Julia Brownley',
                img: require('../portraits/Julia_Brownley.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Antonio Sabato Jr.',
                img: require('../portraits/Antonio_Headshot.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Judy Chu',
                img: require('../portraits/Judy_Chu.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Bryan Witt',
                img: require('../portraits/Bryan_Witt_Campaign_Pic.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Adam B. Schiff',
                img: require('../portraits/Adam_Schiff.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Johnny Nalbandian',
                img: require('../portraits/B4066CCF-EDC9-4A6B-8F40-CD96C8260802.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Tony Cardenas',
                img: require('../portraits/Tony_Cardenas.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Benny Bernal',
                img: require('../portraits/LOCAL1_160519571_AR_0_CFAQILXSPYJE.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'Brad Sherman',
                img: require('../portraits/Brad_Sherman.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mark Reed',
                img: require('../portraits/Mark_Reed.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'Pete Aguilar',
                img: require('../portraits/Pete_Aguilar_official_portrait_114th_Congress.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Sean Flynn',
                img: require('../portraits/Sean_Flynn.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Grace F. Napolitano',
                img: require('../portraits/Grace_Napolitano.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 33',
            candidates: [
              {
                name: 'Ted Lieu',
                img: require('../portraits/Rep_Ted_Lieu.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Kenneth Wright',
                img: require('../portraits/Kenneth_Wright.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Jimmy Gomez',
                img: require('../portraits/Jimmy_Gomez.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Kenneth Mejia',
                img: require('../portraits/Kenneth_Mejia-8.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Norma J. Torres',
                img: require('../portraits/Norma_Torres_official_portrait.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Christian Valiente',
                img: require('../portraits/headshotforGOP-1.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Raul Ruiz',
                img: require('../portraits/Raul_Ruiz.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Kimberlin Brown Pelzer',
                img: require('../portraits/220px-Kimberlin_Brown_Pelzer.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 37',
            candidates: [
              {
                name: 'Karen Bass',
                img: require('../portraits/Karen_Bass.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ron Bassilian',
                img: require('../portraits/RonBassilian.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 38',
            candidates: [
              {
                name: 'Linda T. Sánchez',
                img: require('../portraits/LindaSanchezReplace.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ryan Downing',
                img: require('../portraits/Ryan_Downing.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 39',
            candidates: [
              {
                name: 'Young Kim',
                img: require('../portraits/Youngkim.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Gil Cisneros',
                img: require('../portraits/fullsizeoutput_1215.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 40',
            candidates: [
              {
                name: 'Lucille Roybal-Allard',
                img: require('../portraits/LucilleRoybalAllardReplace.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Rodolfo Barragan',
                img: require('../portraits/Rodolfo_Cortes_Barragan.png'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 41',
            candidates: [
              {
                name: 'Mark Takano',
                img: require('../portraits/Mark_Takano.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Aja Smith',
                img: require('../portraits/FB0C14CE-CCBA-4F29-B621-9838FE8E68D1.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 42',
            candidates: [
              {
                name: 'Ken Calvert',
                img: require('../portraits/Ken_Calvert.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Julia Peacock',
                img: require('../portraits/Julia_Peacock.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 43',
            candidates: [
              {
                name: 'Maxine Waters',
                img: require('../portraits/Maxine_Waters.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Omar Navarro',
                img: require('../portraits/Omar_Navarro.png'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 44',
            candidates: [
              {
                name: 'Nanette Barragán',
                img: require('../portraits/Nanette_Barragan.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 45',
            candidates: [
              {
                name: 'Mimi Walters',
                img: require('../portraits/Mimi_Walters_official_congressional_photo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Katie Porter',
                img: require('../portraits/Katie_Porter.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 46',
            candidates: [
              {
                name: 'J. Luis Correa',
                img: require('../portraits/Lou_Correa.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Russell Lambert',
                img: require('../portraits/Screenshot_2018-02-06-08-10-21.png'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 47',
            candidates: [
              {
                name: 'Alan Lowenthal',
                img: require('../portraits/Alan_Lowenthal.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'John Briscoe',
                img: require('../portraits/john_Briscoe.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 48',
            candidates: [
              {
                name: 'Dana Rohrabacher',
                img: require('../portraits/Dana_Rohrabacher.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 49',
            candidates: [
              {
                name: 'Diane Harkey',
                img: require('../portraits/Diane_Harkey.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mike Levin',
                img: require('../portraits/Mike_Levin.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 50',
            candidates: [
              {
                name: 'Duncan Hunter',
                img: require('../portraits/Duncan_Hunter.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ammar Campa-Najjar',
                img: require('../portraits/Ammar_Campa-Najjar.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 51',
            candidates: [
              {
                name: 'Juan C. Vargas',
                img: require('../portraits/Juan_Vargas_official_photo.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 52',
            candidates: [
              {
                name: 'Scott Peters',
                img: require('../portraits/Scott_Peters.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Omar Qudrat',
                img: require('../portraits/Omar-Qudrat.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 53',
            candidates: [
              {
                name: 'Susan A. Davis',
                img: require('../portraits/Susan_Davis.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      // TODO: State Senate and State Assembly
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
                grade: NO_GRADE
              },
              {
                name: 'Steven Bailey',
                img: require('../portraits/Headshot_2018-05-07.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Mark Meuser',
                img: require('../portraits/Mark-Meuser.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              // TODO: only one candidate!
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
                grade: NO_GRADE
              },
              {
                name: 'Walker Stapleton',
                img: require('../portraits/Walker_Stapleton.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Casper Stockham',
                img: require('../portraits/Casper_Stockham.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Neguse',
                img: require('../portraits/Joe_Neguse.png'),
                grade: NO_GRADE
              },
              {
                name: 'Peter Yu',
                img: require('../portraits/Peter_Yu.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Diane Mitsch Bush',
                img: require('../portraits/Diane_Mitsch_Bush.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Scott Tipton',
                img: require('../portraits/Scott_Tipton.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Karen McCormick',
                img: require('../portraits/Karen_McCormick_.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ken Buck',
                img: require('../portraits/Ken_Buck_official_congressional_photo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Stephany Rose Spaulding',
                img: require('../portraits/stephany-rose-spaulding.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Doug Lamborn',
                img: require('../portraits/Doug_Lamborn.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jason Crow',
                img: require('../portraits/Jason_Crow.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mike Coffman',
                img: require('../portraits/Mike_Coffman.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ed Perlmutter',
                img: require('../portraits/Ed_Perlmutter.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mark Barrington',
                img: require('../portraits/businessphotography-05.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Phil Weiser',
                img: require('../portraits/Phil_Weiser_headshot.png'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Wayne Williams',
                img: require('../portraits/Wayne_Williams.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Brian Watson',
                img: require('../portraits/static1.squarespace.jpg'),
                grade: NO_GRADE
              }
            ]
          }
        ]
      }
    ]
  },
  // CT: Connecticut // primaries Aug. 14
  // DE: Deleware // primaries Sept. 6
  // FL: Florida // primaries Aug. 28
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
                grade: NO_GRADE
              },
              {
                name: 'Brian Kemp',
                img: require('../portraits/Brian_Kemp.png'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Earl L. "Buddy" Carter',
                img: require('../portraits/Buddy.jpg'),
                grade: NO_GRADE
              },
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Sanford D. Bishop Jr',
                img: require('../portraits/Sanford_D._Bishop_Jr.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Herman West',
                img: require('../portraits/Herman_West_Jr.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Chuck Enderlin',
                img: require('../portraits/Chuck_Enderlin.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Drew Ferguson',
                img: require('../portraits/Drew_Ferguson_official_congressional_photo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hank Johnson',
                img: require('../portraits/Henry_C._Johnson-1.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Joe Profit',
                img: require('../portraits/joeprofit2.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'John Lewis',
                img: require('../portraits/John_Lewis.jpg'),
                grade: NO_GRADE
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Lucy McBath',
                img: require('../portraits/IMG_0565.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Karen Handel',
                img: require('../portraits/Handel.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Carolyn Bourdeaux',
                img: require('../portraits/Carolyn_Bourdeaux.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Rob Woodall',
                img: require('../portraits/Rob_Woodall.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Austin Scott',
                img: require('../portraits/Austin_Scott_113th_Congress.jpg'),
                grade: NO_GRADE
              }
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Josh McCall',
                img: require('../portraits/Josh_McCall.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Doug Collins',
                img: require('../portraits/DougCollins.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Tabitha Johnson-Green',
                img: require('../portraits/image1-4.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jody B. Hice',
                img: require('../portraits/Jody_Hice_official_portrait.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Flynn Broady',
                img: require('../portraits/Flynn_Broady_Jr.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Barry Loudermilk',
                img: require('../portraits/CongLoudermilk.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Francys Johnson',
                img: require('../portraits/francysjohnson.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Rick W. Allen',
                img: require('../portraits/rickallen.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'David Scott',
                img: require('../portraits/David_Scott.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'David Callahan',
                img: require('../portraits/5ad604ec11b6a.image.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Steven Foster',
                img: require('../portraits/download.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Tom Graves',
                img: require('../portraits/Tom_Graves.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Geoff Duncan',
                img: require('../portraits/Geoff_Duncan.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Chris Carr',
                img: require('../portraits/Chris_Carr_Georgia.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Brad Raffensperger',
                img: require('../portraits/Brad_Raffensperger.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Gary Black',
                img: require('../portraits/commissioner-gary-w-black.jpg'),
                grade: NO_GRADE
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
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Mazie Hirono',
                img: require('../portraits/Mazie_Hirono_official.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ron Curtis',
                img: require('../portraits/Ron_Curtis_for_US_Senate.jpg'),
                grade: NO_GRADE
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
                name: 'David Ige',
                img: require('../portraits/DavidIge2015.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Andria Tupola',
                img: require('../portraits/Andria_Tupola.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jim Brewer',
                img: require('../portraits/none.jpg'),
                party: 'Green',
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Cam Cavasso',
                img: require('../portraits/Cam_Cavasso.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Zachary Burd',
                img: require('../portraits/Zachary_Burd_1.jpg'),
                party: 'Green',
                grade: NO_GRADE
              },
              {
                name: 'Michelle Tippens',
                img: require('../portraits/Michelle_Rose_Tippens.jpg'),
                party: 'Libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tulsi Gabbard',
                img: require('../portraits/TulsiGabbardReplace.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Brian Evans',
                img: require('../portraits/Brian_Evans.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Marissa Kerns',
                img: require('../portraits/web1_Republican-Convention_0041.jpg'),
                grade: NO_GRADE
              },
            ]
          },
        ]
      },
      // State Senate and House Senate TODO
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
                grade: NO_GRADE
              },
              {
                name: 'Brad Little',
                img: require('../portraits/nlmya.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/nLmyuaDA_400x400.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Russ Fulcher',
                img: require('../portraits/Russell_Fulcher.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Aaron Swisher',
                img: require('../portraits/AaronSwisher-11617-4.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mike Simpson',
                img: require('../portraits/Michael_K._Simpson.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Janice McGeachin',
                img: require('../portraits/McGeachin41.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Lawrence Wasden',
                img: require('../portraits/Lawrence_Wasden.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Lawerence Denney',
                img: require('../portraits/Denney22.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              // TODO: only one candidate!
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
                grade: NO_GRADE
              },
              {
                name: 'Bruce Rauner',
                img: require('../portraits/BruceRauner2015a.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Erika Harold',
                img: require('../portraits/ErikaHarold-1.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Jimmy Lee Tillman',
                img: require('../portraits/Jimmy_Lee_Tillman_II.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Robin Kelly',
                img: require('../portraits/Robin_Kelly.png'),
                grade: NO_GRADE
              },
              {
                name: 'David Merkle',
                img: require('../portraits/David_Merkle.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Daniel Lipinski',
                img: require('../portraits/Daniel_Lipinski.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Arthur Jones',
                img: require('../portraits/Arthur_Jones.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jesús G. Garcia',
                img: require('../portraits/Chuy_Garcia.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mark Lorch',
                img: require('../portraits/Lorch_Headshot.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Quigley',
                img: require('../portraits/Mike_Quigley.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Tom Hanson',
                img: require('../portraits/Image.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Sean Casten',
                img: require('../portraits/Sean_Casten.png'),
                grade: NO_GRADE
              },
              {
                name: 'Peter Roskam',
                img: require('../portraits/Peter_J._Roskam.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Danny K. Davis',
                img: require('../portraits/Danny_K._Davis.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Craig Cameron',
                img: require('../portraits/Screen_Shot_2018-03-20_at_7.45.49_PM_(2).png'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Raja Krishnamoorthi',
                img: require('../portraits/Raja_Krishnamoorthi.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jitendra "JD" Diganvker',
                img: require('../portraits/JD.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jan Schakowsky',
                img: require('../portraits/Janice_D._Schakowsky.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'John Elleson',
                img: require('../portraits/John_Elleson.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Brad Schneider',
                img: require('../portraits/Brad_Schneider.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Douglas Bennett',
                img: require('../portraits/400px-Douglas_Bennett.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Bill Foster',
                img: require('../portraits/billfoster.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Nick Stella',
                img: require('../portraits/Dominick_Stella.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Brendan Kelly',
                img: require('../portraits/Brendan_Kelly2.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mike Bost',
                img: require('../portraits/Mike_Bost_official_congressional_photo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Betsy Dirksen Londrigan',
                img: require('../portraits/Betsy_Dirksen_Londrigan.png'),
                grade: NO_GRADE
              },
              {
                name: 'Rodney Davis',
                img: require('../portraits/rodneydavis.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Lauren Underwood',
                img: require('../portraits/Lauren_Underwood.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Randy Hultgren',
                img: require('../portraits/Randy_Hultgren.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Kevin Gaither',
                img: require('../portraits/Kevin_Gaither.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'John Shimkus',
                img: require('../portraits/Rep._John_Shimkus.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Sara Dady',
                img: require('../portraits/Sara_Dady.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Adam Kinzinger',
                img: require('../portraits/Adam_Kinzinger.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Cheri Bustos',
                img: require('../portraits/Cheri_Bustos_official_photo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Bill Fawell',
                img: require('../portraits/Fawell-Bill_crop_portrait.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Junius Rodriguez',
                img: require('../portraits/Junius_Rodriguez.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Darin LaHood',
                img: require('../portraits/Darin_LaHood.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Mike Braun',
                img: require('../portraits/Mike_Braun.png'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Mark Leyva',
                img: require('../portraits/Mark_Leyva.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Mel Hall',
                img: require('../portraits/Mel-Hall.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jackie Walorski',
                img: require('../portraits/jw.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Courtney Tritch',
                img: require('../portraits/Courtney_Tritch.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jim Banks',
                img: require('../portraits/Jim_Banks.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tobi Beck',
                img: require('../portraits/Tobi_Beck2.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jim Baird',
                img: require('../portraits/James_Baird.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Dee Thornton',
                img: require('../portraits/80360E96-0F95-4680-B821-D09723DE1EF2.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Susan W. Brooks',
                img: require('../portraits/Susan_Brooks.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jeannine Lee Lake',
                img: require('../portraits/Jeannine_Lee_Lake2.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Greg Pence',
                img: require('../portraits/GregPence.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'André Carson',
                img: require('../portraits/Andre_Carson.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Wayne Harmon',
                img: require('../portraits/Wayne_Harmon.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'William Tanoos',
                img: require('../portraits/William_Tanoos.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Larry Bucshon',
                img: require('../portraits/Larry_Bucshon.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Liz Watson',
                img: require('../portraits/Liz_Watson.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Trey Hollingsworth',
                img: require('../portraits/Trey_Hollingsworth.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Kim Reynolds',
                img: require('../portraits/Kim_Reynolds_2013.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Rod Blum',
                img: require('../portraits/Rod_Blum_official_congressional_photo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dave Loebsack',
                img: require('../portraits/David_Loebsack.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Christopher Peters',
                img: require('../portraits/Christopher_Peters_2018.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cindy Axne',
                img: require('../portraits/Cindy.Axne.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'David Young',
                img: require('../portraits/David_Young_Iowa.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Bryan Holder',
                img: require('../portraits/155344_lg.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'J.D. Scholten',
                img: require('../portraits/180510_4.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Steve King',
                img: require('../portraits/steve_king.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Charles Aldrich',
                img: require('../portraits/Charles_Aldrich.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              // TODO: only one candidate!
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
                grade: NO_GRADE
              },
              {
                name: 'Paul Pate',
                img: require('../portraits/Paul_Pate.png'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Mary Mosiman',
                img: require('../portraits/MaryMosiman1.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              // TODO: only one candidate!
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
                grade: NO_GRADE
              },
              {
                name: 'Kris Kobach',
                img: require('../portraits/Kris_Kobach.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Roger Marshall',
                img: require('../portraits/Roger_Marshall.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Paul Davis',
                img: require('../portraits/PaulDavis.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Steve Watkins',
                img: require('../portraits/Steve_Watkins.png'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Sharice Davids',
                img: require('../portraits/ShariceDavids_ActBlue-1.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Kevin Yoder',
                img: require('../portraits/Kevin_Yoder.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'James Thompson',
                img: require('../portraits/James_Thompson.png'),
                grade: NO_GRADE
              },
              {
                name: 'Ron Estes',
                img: require('../portraits/Ron_Estes,_115th_official_photo-7.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Derek Schmidt',
                img: require('../portraits/Derek_Schmidt.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Scott Schwab',
                img: require('../portraits/Scott_Schwab.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Jake LaTurner',
                img: require('../portraits/Jacob_LaTurner.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'James Comer',
                img: require('../portraits/James_Comer.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Hank Linderman',
                img: require('../portraits/hank_linderman_head_shot.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Brett Guthrie',
                img: require('../portraits/Brett_Guthrie.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Yarmuth',
                img: require('../portraits/John_Yarmuth_113th_Congress.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Vickie Glisson',
                img: require('../portraits/glisson-vickie.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Seth Hall',
                img: require('../portraits/Seth_Hall.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Thomas Massie',
                img: require('../portraits/thomas_massie.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kenneth Stepp',
                img: require('../portraits/56959_lg.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Harold Rogers',
                img: require('../portraits/Hal_Rogers.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Amy McGrath',
                img: require('../portraits/Amy_McGrath.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Andy Barr',
                img: require('../portraits/andy_barr.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Shawn Moody',
                img: require('../portraits/portland-press-herald_3163774.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Eric Brakey',
                img: require('../portraits/Eric_Brakey.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Mark Holbrook',
                img: require('../portraits/Mark_Holbrook.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Golden',
                img: require('../portraits/JaredGolden.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Bruce Poliquin',
                img: require('../portraits/bruce_p.jpg'),
                grade: NO_GRADE
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
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Ben Cardin',
                img: require('../portraits/Ben_Cardin.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Tony Campbell',
                img: require('../portraits/tony_campell.jpg'),
                grade: NO_GRADE
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
                name: 'Ben Jealous',
                img: require('../portraits/Ben_Jealous.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Larry Hogan',
                img: require('../portraits/lhogan2final.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Andy Harris',
                img: require('../portraits/Andy_Harris.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dutch Ruppersberger',
                img: require('../portraits/CA_Dutch_Rubbersberger.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Liz Matory',
                img: require('../portraits/29034842.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Sarbanes',
                img: require('../portraits/John_Sarbanes.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Charles Anthony',
                img: require('../portraits/none.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Anthony Brown',
                img: require('../portraits/anthonybbb.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'George McDermott',
                img: require('../portraits/George_McDermott.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Steny Hoyer',
                img: require('../portraits/Steny_Hoyer.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'William Devine',
                img: require('../portraits/macky.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'David Trone',
                img: require('../portraits/David_Trone.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Amie Hoeber',
                img: require('../portraits/HOeber.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Elijah Cummings',
                img: require('../portraits/Elijah_Cummings.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Richmond Davis',
                img: require('../portraits/campaign_photo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Jamie Raskin',
                img: require('../portraits/Jamie_Raskin.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'John Walsh',
                img: require('../portraits/img0524.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Craig Wolf',
                img: require('../portraits/craigwolfat.jpg'),
                grade: NO_GRADE
              }
            ]
          }
        ]
      }
    ]
  },
  // MA: Massachusetts // primaries Sept. 4
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
                grade: NO_GRADE
              },
              {
                name: 'Bill Schuette',
                img: require('../portraits/Bill_Schuette.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'John James',
                img: require('../portraits/wijer.png'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Rob Davidson',
                img: require('../portraits/Rob_Davidson.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Bill Huizenga',
                img: require('../portraits/Bill_Huizenga.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cathy Albro',
                img: require('../portraits/Cathy_Albro.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Justin Amash',
                img: require('../portraits/Justin_Amash.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jerry Hilliard',
                img: require('../portraits/HILLIARD-jerry.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'John Moolenaar',
                img: require('../portraits/John_Moolenaar.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Daniel Kildee',
                img: require('../portraits/Dan_Kildee.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Travis Wines',
                img: require('../portraits/wines.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Matt Longjohn',
                img: require('../portraits/Matt_Longjohn_photo-7.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Fred Upton',
                img: require('../portraits/Fred_Upton.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Gretchen Driskell',
                img: require('../portraits/Gretchen_Driskell.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Tim Walberg',
                img: require('../portraits/Tim_Walberg.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Elissa Slotkin',
                img: require('../portraits/Elissa_Slotkin2.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mike Bishop',
                img: require('../portraits/Mike_Bishop_Official.png'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Andy Levin',
                img: require('../portraits/Andy_Levin.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Candius Stearns',
                img: require('../portraits/54e99.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Kimberly Bizon',
                img: require('../portraits/lwerinfm.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Paul Mitchell',
                img: require('../portraits/paulmitchell.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Haley Stevens',
                img: require('../portraits/HaleyStevens.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Lena Epstein',
                img: require('../portraits/Headshot_1.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Debbie Dingell',
                img: require('../portraits/debbieding.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jeff Jones',
                img: require('../portraits/Jeff_Jones_MI.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              { // TODO: Double-check that this is correct
                name: 'Rashida Tlaib',
                img: require('../portraits/Rashida_Tlaib.jpg'),
                grade: NO_GRADE
              },
            ]
          },
          {
            name: 'District 13 Special Election',
            candidates: [
              { // TODO: Double-check that this is correct
                name: 'Brenda Jones',
                img: require('../portraits/Brenda_Jones.png'),
                grade: NO_GRADE
              },
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Brenda Lawrence',
                img: require('../portraits/Brenda_Lawrence.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Marc Herschfus',
                img: require('../portraits/none.jpg'),
                grade: NO_GRADE
              }
            ]
          },
        ]
      },
    ]
  },
  // MN: Minnesota // primaries Aug. 14
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
                grade: NO_GRADE
              },
              {
                name: 'Roger Wicker',
                img: require('../portraits/Roger_Wicker.jpg'),
                grade: NO_GRADE
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
                grade: NO_GRADE
              },
              {
                name: 'Trent Kelly',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Benie Thompson',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              [
                {
                  name: 'Michael Evans',
                  img: require('../portraits/todo.jpg'),
                  grade: NO_GRADE
                },
                {
                  name: 'Michael Guest',
                  img: require('../portraits/todo.jpg'),
                  grade: NO_GRADE
                }
              ]
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jeramey Anderson',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Steven M. Palazzo',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Josh Hawley',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Robert Vroman',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Robb Cunningham',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Cort VanOstran',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Ann Wagner',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'David Arnold',
                img: require('../portraits/todo.jpg'),
                party: 'Green',
                grade: NO_GRADE
              },
              {
                name: 'Larry Kirk',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Katy Geppert',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Blaine Luetkemeyer',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Donald Stolle',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Renee Hoagenson',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Vicky Hartzler',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mark Bliss',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Emanuel Cleaver II',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jacob Turk',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'E.C. Fredland',
                img: require('../portraits/todo.jpg'),
                party: 'constitution',
                grade: NO_GRADE
              },
              {
                name: 'Maurice Copeland',
                img: require('../portraits/todo.jpg'),
                party: 'green',
                grade: NO_GRADE
              },
              {
                name: 'Alexander Howell',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Henry Martin',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Sam Graves',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Dan Hogan',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Jamie Schoolcraft',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Billy Long',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Benjamin Brixey',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Kathy Ellis',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jason Smith',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jonathan Shell',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Saundra McDowell',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jacob Luetkemeyer',
                img: require('../portraits/todo.jpg'),
                party: 'constitution',
                grade: NO_GRADE
              },
              {
                name: 'Don Fitz',
                img: require('../portraits/todo.jpg'),
                party: 'green',
                grade: NO_GRADE
              },
              {
                name: 'Sean O\'Toole',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Matt Rosendale',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Rick Breckenridge',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
              },
              {
                name: 'Steve Kelly',
                img: require('../portraits/todo.jpg'),
                party: 'independent',
                grade: NO_GRADE
              }
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
                    img: require('../portraits/todo.jpg'),
                    grade: NO_GRADE
                  },
                  {
                    name: 'Greg Ianforte',
                    img: require('../portraits/todo.jpg'),
                    grade: NO_GRADE
                  },
                  {
                    name: 'Elinor Swanson',
                    img: require('../portraits/todo.jpg'),
                    party: 'libertarian',
                    grade: NO_GRADE
                  },
                  {
                    name: 'Doug Campbell',
                    img: require('../portraits/todo.jpg'),
                    party: 'independent',
                    grade: NO_GRADE
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: ''
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Pete Ricketts',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jeff Fortenberry',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Kara Eastman',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Don Bacon',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Paul Theobald',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Adrian Smith',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Deb Fischer',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jim Schultz',
                img: require('../portraits/todo.jpg'),
                party: 'libertarian',
                grade: NO_GRADE
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
                name: 'Evangelos Argyrakis',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Doug Peterson',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Bob Evnen',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Charlie Janssen',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Adam Laxalt',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Dean Heller',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Joyce Bentley',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clint Koble',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mark Amodei',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Susie Lee',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Danny Tarkanian',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Steven Horsford',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Cresent Hardy',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Michael Roberson',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Wes Duncan',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          }
        ]
      }
    ]
  },
  // NH: New Hampshire // Sept. 11
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Bob Hugin',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Paul Dilks',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jeff Van Drew',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Seth Grossman',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Andy Kim',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Tom MacArthur',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Joshua Welle',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Christopher H. Smith',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Josh Gottheimer',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'John McCann',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Frank Pallone Jr.',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Richard Pezzullo',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
        name: US_SENATE,
        id: 'usSenate',
        districts: [
          {
            name: STATEWIDE,
            candidates: [
              {
                name: 'Martin Heinrich',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Mick Rich',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
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
            name: STATEWIDE
          }
        ]
      },
    ]
  }, // TODO: rest of this state!!!!!
  // TODO: rest of states

  WA: { // TODO rest of state
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
                grade: NO_GRADE
              },
              {
                name: 'Susan Hutchison',
                img: require('../portraits/Susan_Hutchison_Washington.jpg'),
                grade: NO_GRADE
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
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Jeffrey Beeler',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Rick Larsen',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              // TBD: second candidate
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Jaime Herrera Beutler',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Carolyn Long',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Christine Brown',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Dan Newhouse',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Cathy McMorris Rodgers',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Lisa Brown',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Derek Kilmer',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Douglas Dightman',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Pramila Jayapal',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Craig Keller',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Dino Rossi',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }, // TBD: second candidate
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Adam Smith',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }, // TBD: second candidate
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Denny Heck',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              },
              {
                name: 'Joseph Brumbles',
                img: require('../portraits/todo.jpg'),
                grade: NO_GRADE
              }
            ]
          }
        ]
      }
    ] // legislatures
  },
  // end of stateInfo object
}