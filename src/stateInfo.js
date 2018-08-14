// import { Server } from 'http';

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
// stateInfo.{stateId}.legislatures[i].districts[i].candidates[i].img === 'portrait014)
// stateInfo.{stateId}.legislatures[i]districts[i]candidates[i].grade === 'A'

// strings can not include commas

// candidates from new york times 2018 results
// images from Ballotpedia.org

// images to be filled in are named 'todo.jpg'
// results not yet counted are named TBD
// todos are marked TODO
export const stateInfo = {
  AL: {
    // https://www.nytimes.com/interactive/2018/06/05/us/elections/results-alabama-primary-elections.html
    name: 'Alabama',
    legislatures: [
      {
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Kay Ivey',
                img: require('./portraits/Kay_Ivey.jpg'),
                grade: '?'
              },
              {
                name: 'Walt Maddox',
                img: require('./portraits/Walt_Maddox.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Robert Kennedy',
                img: require('./portraits/Robert_Kennedy_Jr.jpg'),
                grade: '?'
              },
              {
                name: 'Bradley Byrne',
                img: require('./portraits/220px-Rep_Bradley_Byrne.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tabitha Isner',
                img: require('./portraits/tabithaisner.jpg'),
                grade: '?'
              },
              {
                name: 'Martha Roby',
                img: require('./portraits/Martha_Roby.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Mallory Hagan',
                img: require('./portraits/mallory-hagan_headshot.jpg'),
                grade: '?'
              },
              {
                name: 'Mike D. Rogers',
                img: require('./portraits/Mike_Rogers_AL.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Lee Auman',
                img: require('./portraits/Lee_Auman.jpg'),
                grade: '?'
              },
              {
                name: 'Robert B. Aderholt',
                img: require('./portraits/Robert_Aderholt.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Peter Joffrion',
                img: require('./portraits/Peter_Joffrion.png'),
                grade: '?'
              },
              {
                name: 'Mo Brooks',
                img: require('./portraits/Mo_Brooks.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Danner Kline',
                img: require('./portraits/Danner_Kline.jpg'),
                grade: '?'
              },
              {
                name: 'Gary Palmer',
                img: require('./portraits/Gary_Palmer_official_congressional_photo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Terri A. Sewell',
                img: require('./portraits/Terri_Sewell.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      {
        name: 'Lieutenant Governor',
        id: 'lieutenantGovernor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Will Boyd',
                img: require('./portraits/WillBoyd.jpg'),
                grade: '?'
              },
              {
                name: 'Will Ainsworth',
                img: require('./portraits/Will_Ainsworth.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Joseph Siegelman',
                img: require('./portraits/Joseph_Siegelman.jpg'),
                grade: '?'
              },
              {
                name: 'Steve Marshall',
                img: require('./portraits/Steve_MarshallAG.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Heather Milam',
                img: require('./portraits/HeatherMilam.jpg'),
                grade: '?'
              },
              {
                name: 'John Merril',
                img: require('./portraits/John_Merrill.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Auditor',
        id: 'auditor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Miranda Joseph',
                img: require('./portraits/Miranda_Joseph.png'),
                grade: '?'
              },
              {
                name: 'Jim Zeigler',
                img: require('./portraits/Jim_Zeigler.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Treasurer',
        id: 'treasurer',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'John McMillan',
                img: require('./portraits/John_McMillan.jpg'),
                grade: '?'
              },
              // TODO: Only one candidate!
            ]
          }
        ]
      },
      {
        name: 'Agriculture Commissioner',
        id: 'agricultureCommissioner',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Rick Pate',
                img: require('./portraits/Rick_pic_on_FB_page.jpg'),
                grade: '?'
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
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Jared Henderson',
                img: require('./portraits/C__Users_e5406014_Desktop_jared.png'),
                grade: '?'
              },
              {
                name: 'Asa Hutchinson',
                img: require('./portraits/AsaHutchinson2015.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Chintan Desai',
                img: require('./portraits/Chintan_Desai.jpg'),
                grade: '?'
              },
              {
                name: 'Rick Crawford',
                img: require('./portraits/Rick_Crawford_AR.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clarke Tucker',
                img: require('./portraits/Clarke_Tucker.jpg'),
                grade: '?'
              },
              {
                name: 'French Hill',
                img: require('./portraits/French_Hill_official_photo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Josh Mahony',
                img: require('./portraits/96580584_Joshua-Mahony_ORIG_t635.jpg'),
                grade: '?'
              },
              {
                name: 'Steve Womack',
                img: require('./portraits/Steve_Womack.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hayden Shamel',
                img: require('./portraits/Hayden_Shamel-7.jpg'),
                grade: '?'
              },
              {
                name: 'Brucer Westerman',
                img: require('./portraits/bruce-westerman.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Lieutenant Governor',
        id: 'lieutenantGovernor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Anthony Bland',
                img: require('./portraits/Anthony_Bland.jpg'),
                grade: '?'
              },
              {
                name: 'Tim Griffin',
                img: require('./portraits/Tim_Griffin.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Mike Lee',
                img: require('./portraits/mikelee.jpg'),
                grade: '?'
              },
              {
                name: 'Leslie Rutledge',
                img: require('./portraits/Leslie_Rutledge.png'),
                grade: '?'
              }
            ]
          },
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Susan Inman',
                img: require('./portraits/Susan_Inman.jpg'),
                grade: '?'
              },
              {
                name: 'John Thurston',
                img: require('./portraits/John_Thurston.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Auditor',
        id: 'auditor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Andrea Lea',
                img: require('./portraits/Lea-andrea.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      {
        name: 'Treasurer',
        id: 'treasurer',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Dennis Milligan',
                img: require('./portraits/Dennis_Milligan.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      {
        name: 'Land Commissioner',
        id: 'landCommissioner',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Larry Williams',
                img: require('./portraits/20091016-ASU-Dr-Larry-Williams-12384.jpg'),
                grade: '?'
              },
              {
                name: 'Tommy Land',
                img: require('./portraits/3daPJCOF_400x400.jpg'),
                grade: '?'
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
        name: 'US Senate',
        id: 'usSenate',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Dianne Feinstein',
                img: require('./portraits/DianneFeinsteinReplace.jpg'),
                grade: '?'
              },
              {
                name: 'Kevin de León',
                img: require('./portraits/Kevin_De_Leon.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Gavin Newsom',
                img: require('./portraits/399px-Gavin_Newsom_official_photo.jpg'),
                grade: '?'
              },
              {
                name: 'John Cox',
                img: require('./portraits/John_Cox_(California)-6.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Doug LaMalfa',
                img: require('./portraits/Doug_LaMalfa.jpg'),
                grade: '?'
              },
              {
                name: 'Audrey Denney',
                img: require('./portraits/DenneyHeadshot.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Huffman',
                img: require('./portraits/Jared_Huffman.jpg'),
                grade: '?'
              },
              {
                name: 'Dale Mensing',
                img: require('./portraits/Dale_Mensing.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Garamendi',
                img: require('./portraits/John_Garamendi.jpg'),
                grade: '?'
              },
              {
                name: 'Charlie Schaupp',
                img: require('./portraits/Charlie_Schaupp.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tom McClintock',
                img: require('./portraits/Tom_McClintock.jpg'),
                grade: '?'
              },
              {
                name: 'Jessica Morse',
                img: require('./portraits/Jessica_Morse.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Thompson',
                img: require('./portraits/Mike_Thompson.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jrmar Jefferson',
                img: require('./portraits/Jrmar_Jefferson.jpg'),
                grade: '?'
              },
              {
                name: 'Doris Matsui',
                img: require('./portraits/DorisMatsuiReplace.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ami Bera',
                img: require('./portraits/Ami_Bera.jpg'),
                grade: '?'
              },
              {
                name: 'Andrew Grant',
                img: require('./portraits/Andrew_Grant.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Paul Cook',
                img: require('./portraits/Paul_Cook.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jerry McNerney',
                img: require('./portraits/Jerry_McNerney.jpg'),
                grade: '?'
              },
              {
                name: 'Marla Livengood',
                img: require('./portraits/2018_Marla_Livengood_for_CA_U.S._Congress.png'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Jeff Denham',
                img: require('./portraits/Jeff_Denham.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Mark DeSaulnier',
                img: require('./portraits/Mark_DeSaulnier-1.jpg'),
                grade: '?'
              },
              {
                name: 'John Fitzgerald',
                img: require('./portraits/John_Fitzgerald.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Nancy Pelosi',
                img: require('./portraits/Nancy_Pelosi.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Barbara Lee',
                img: require('./portraits/Barbara_Lee.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Jackie Speier',
                img: require('./portraits/Jackie_Speier.jpg'),
                grade: '?'
              },
              {
                name: 'Cristina Osmeña',
                img: require('./portraits/XtgoNPfO_400x400.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Eric Swalwell',
                img: require('./portraits/Eric_Swalwell,_official_portrait,_113th_Congress-7.jpg'),
                grade: '?'
              },
              {
                name: 'Rudy Peters',
                img: require('./portraits/Rudy_Peters_Congress.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Jim Costa',
                img: require('./portraits/Jim_Costa.jpg'),
                grade: '?'
              },
              {
                name: 'Elizabeth Heng',
                img: require('./portraits/_MG_6860-Edit-min.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Ro Khanna',
                img: require('./portraits/1200px-Ro_Khanna,_official_portrait,_115th_Congress.jpg'),
                grade: '?'
              },
              {
                name: 'Ron Cohen',
                img: require('./portraits/Ron.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Anna G. Eshoo',
                img: require('./portraits/Anna_Eshoo.jpg'),
                grade: '?'
              },
              {
                name: 'Christine Russell',
                img: require('./portraits/none.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Zoe Lofgren',
                img: require('./portraits/Zoe_Lofgren.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Jimmy Panetta',
                img: require('./portraits/Jimmy_Panetta_115th_Congress_photo.jpg'),
                grade: '?'
              },
              {
                name: 'Ronald Paul Kabat',
                img: require('./portraits/Ronald_Paul_Kabat.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'T.J. Cox',
                img: require('./portraits/TJ_Cox.png'),
                grade: '?'
              },
              {
                name: 'David Valadao',
                img: require('./portraits/David_Valadao.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Devin Nunes',
                img: require('./portraits/Devin_Nunes.jpg'),
                grade: '?'
              },
              {
                name: 'Andrew Janz',
                img: require('./portraits/Andrew_Janz.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Kevin McCarthy',
                img: require('./portraits/Kevin_McCarthy_CA.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Salud Carbajal',
                img: require('./portraits/Salud_Carbajal_115th_Congress_photo.jpg'),
                grade: '?'
              },
              {
                name: 'Justin Fareed',
                img: require('./portraits/Justin_Fareed.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Steve Knight',
                img: require('./portraits/Steve_Knight_official_congressional_photo.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Julia Brownley',
                img: require('./portraits/Julia_Brownley.jpg'),
                grade: '?'
              },
              {
                name: 'Antonio Sabato Jr.',
                img: require('./portraits/Antonio_Headshot.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Judy Chu',
                img: require('./portraits/Judy_Chu.jpg'),
                grade: '?'
              },
              {
                name: 'Bryan Witt',
                img: require('./portraits/Bryan_Witt_Campaign_Pic.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Adam B. Schiff',
                img: require('./portraits/Adam_Schiff.jpg'),
                grade: '?'
              },
              {
                name: 'Johnny Nalbandian',
                img: require('./portraits/B4066CCF-EDC9-4A6B-8F40-CD96C8260802.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Tony Cardenas',
                img: require('./portraits/Tony_Cardenas.jpg'),
                grade: '?'
              },
              {
                name: 'Benny Bernal',
                img: require('./portraits/LOCAL1_160519571_AR_0_CFAQILXSPYJE.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'Brad Sherman',
                img: require('./portraits/Brad_Sherman.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Reed',
                img: require('./portraits/Mark_Reed.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'Pete Aguilar',
                img: require('./portraits/Pete_Aguilar_official_portrait_114th_Congress.jpg'),
                grade: '?'
              },
              {
                name: 'Sean Flynn',
                img: require('./portraits/Sean_Flynn.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Grace F. Napolitano',
                img: require('./portraits/Grace_Napolitano.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 33',
            candidates: [
              {
                name: 'Ted Lieu',
                img: require('./portraits/Rep_Ted_Lieu.jpg'),
                grade: '?'
              },
              {
                name: 'Kenneth Wright',
                img: require('./portraits/Kenneth_Wright.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Jimmy Gomez',
                img: require('./portraits/Jimmy_Gomez.jpg'),
                grade: '?'
              },
              {
                name: 'Kenneth Mejia',
                img: require('./portraits/Kenneth_Mejia-8.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Norma J. Torres',
                img: require('./portraits/Norma_Torres_official_portrait.jpg'),
                grade: '?'
              },
              {
                name: 'Christian Valiente',
                img: require('./portraits/headshotforGOP-1.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Raul Ruiz',
                img: require('./portraits/Raul_Ruiz.jpg'),
                grade: '?'
              },
              {
                name: 'Kimberlin Brown Pelzer',
                img: require('./portraits/220px-Kimberlin_Brown_Pelzer.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 37',
            candidates: [
              {
                name: 'Karen Bass',
                img: require('./portraits/Karen_Bass.jpg'),
                grade: '?'
              },
              {
                name: 'Ron Bassilian',
                img: require('./portraits/RonBassilian.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 38',
            candidates: [
              {
                name: 'Linda T. Sánchez',
                img: require('./portraits/LindaSanchezReplace.jpg'),
                grade: '?'
              },
              {
                name: 'Ryan Downing',
                img: require('./portraits/Ryan_Downing.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 39',
            candidates: [
              {
                name: 'Young Kim',
                img: require('./portraits/Youngkim.jpg'),
                grade: '?'
              },
              {
                name: 'Gil Cisneros',
                img: require('./portraits/fullsizeoutput_1215.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 40',
            candidates: [
              {
                name: 'Lucille Roybal-Allard',
                img: require('./portraits/LucilleRoybalAllardReplace.jpg'),
                grade: '?'
              },
              {
                name: 'Rodolfo Barragan',
                img: require('./portraits/Rodolfo_Cortes_Barragan.png'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 41',
            candidates: [
              {
                name: 'Mark Takano',
                img: require('./portraits/Mark_Takano.jpg'),
                grade: '?'
              },
              {
                name: 'Aja Smith',
                img: require('./portraits/FB0C14CE-CCBA-4F29-B621-9838FE8E68D1.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 42',
            candidates: [
              {
                name: 'Ken Calvert',
                img: require('./portraits/Ken_Calvert.jpg'),
                grade: '?'
              },
              {
                name: 'Julia Peacock',
                img: require('./portraits/Julia_Peacock.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 43',
            candidates: [
              {
                name: 'Maxine Waters',
                img: require('./portraits/Maxine_Waters.jpg'),
                grade: '?'
              },
              {
                name: 'Omar Navarro',
                img: require('./portraits/Omar_Navarro.png'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 44',
            candidates: [
              {
                name: 'Nanette Barragán',
                img: require('./portraits/Nanette_Barragan.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 45',
            candidates: [
              {
                name: 'Mimi Walters',
                img: require('./portraits/Mimi_Walters_official_congressional_photo.jpg'),
                grade: '?'
              },
              {
                name: 'Katie Porter',
                img: require('./portraits/Katie_Porter.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 46',
            candidates: [
              {
                name: 'J. Luis Correa',
                img: require('./portraits/Lou_Correa.jpg'),
                grade: '?'
              },
              {
                name: 'Russell Lambert',
                img: require('./portraits/Screenshot_2018-02-06-08-10-21.png'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 47',
            candidates: [
              {
                name: 'Alan Lowenthal',
                img: require('./portraits/Alan_Lowenthal.jpg'),
                grade: '?'
              },
              {
                name: 'John Briscoe',
                img: require('./portraits/john_Briscoe.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 48',
            candidates: [
              {
                name: 'Dana Rohrabacher',
                img: require('./portraits/Dana_Rohrabacher.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 49',
            candidates: [
              {
                name: 'Diane Harkey',
                img: require('./portraits/Diane_Harkey.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Levin',
                img: require('./portraits/Mike_Levin.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 50',
            candidates: [
              {
                name: 'Duncan Hunter',
                img: require('./portraits/Duncan_Hunter.jpg'),
                grade: '?'
              },
              {
                name: 'Ammar Campa-Najjar',
                img: require('./portraits/Ammar_Campa-Najjar.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 51',
            candidates: [
              {
                name: 'Juan C. Vargas',
                img: require('./portraits/Juan_Vargas_official_photo.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 52',
            candidates: [
              {
                name: 'Scott Peters',
                img: require('./portraits/Scott_Peters.jpg'),
                grade: '?'
              },
              {
                name: 'Omar Qudrat',
                img: require('./portraits/Omar-Qudrat.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 53',
            candidates: [
              {
                name: 'Susan A. Davis',
                img: require('./portraits/Susan_Davis.jpg'),
                grade: '?'
              }
            ]
          },
        ]
      },
      {
        name: 'Lieutenant Governor',
        id: 'lieutenantGovernor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Eleni Kounalakis',
                img: require("./portraits/3612660B-ED2A-43B5-9AA8-FB134D4CC650.jpg"),
                grade: "?"
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      // TODO: State Senate and State Assembly
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Xavier Becerra',
                img: require("./portraits/Xavier_Becerra.jpg"),
                grade: "?"
              },
              {
                name: 'Steven Bailey',
                img: require("./portraits/Headshot_2018-05-07.jpg"),
                grade: "?"
              }
            ]
          },
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Alex Padilla',
                img: require("./portraits/Alex_Padilla.jpg"),
                grade: "?"
              },
              {
                name: 'Mark Meuser',
                img: require("./portraits/Mark-Meuser.jpg"),
                grade: "?"
              }
            ]
          }
        ],
      },
      {
        name: 'Treasurer',
        id: 'treasurer',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Fiona Ma',
                img: require('./portraits/Fiona_Ma.jpg'),
                grade: '?'
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
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Jared Polis',
                img: require('./portraits/Jared_Polis.jpg'),
                grade: '?'
              },
              {
                name: 'Walker Stapleton',
                img: require('./portraits/Walker_Stapleton.jpg'),
                grade: '?'
              }
            ]
          },
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Diana DeGette',
                img: require('./portraits/Diana_Degette.jpg'),
                grade: '?'
              },
              {
                name: 'Casper Stockham',
                img: require('./portraits/Casper_Stockham.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Neguse',
                img: require('./portraits/Joe_Neguse.png'),
                grade: '?'
              },
              {
                name: 'Peter Yu',
                img: require('./portraits/Peter_Yu.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Diane Mitsch Bush',
                img: require('./portraits/Diane_Mitsch_Bush.jpg'),
                grade: '?'
              },
              {
                name: 'Scott Tipton',
                img: require('./portraits/Scott_Tipton.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Karen McCormick',
                img: require('./portraits/Karen_McCormick_.jpg'),
                grade: '?'
              },
              {
                name: 'Ken Buck',
                img: require('./portraits/Ken_Buck_official_congressional_photo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Stephany Rose Spaulding',
                img: require('./portraits/stephany-rose-spaulding.jpg'),
                grade: '?'
              },
              {
                name: 'Doug Lamborn',
                img: require('./portraits/Doug_Lamborn.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jason Crow',
                img: require('./portraits/Jason_Crow.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Coffman',
                img: require('./portraits/Mike_Coffman.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ed Perlmutter',
                img: require('./portraits/Ed_Perlmutter.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Barrington',
                img: require('./portraits/businessphotography-05.jpg'),
                grade: '?'
              }
            ]
          },
        ]
      },
      // TODO: State Senate and State House
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'George Brauchler',
                img: require('./portraits/george-brauchler-fullbody.jpg'),
                grade: '?'
              },
              {
                name: 'Phil Weiser',
                img: require('./portraits/Phil_Weiser_headshot.png'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Jena Griswold',
                img: require('./portraits/Jena_Griswold.jpg'),
                grade: '?'
              },
              {
                name: 'Wayne Williams',
                img: require('./portraits/Wayne_Williams.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Treasurer',
        id: 'treasurer',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Dave Young',
                img: require('./portraits/Dave_Young.jpg'),
                grade: '?'
              },
              {
                name: 'Brian Watson',
                img: require('./portraits/static1.squarespace.jpg'),
                grade: '?'
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
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Stacey Abrams',
                img: require('./portraits/Stacy-Abrams.jpg'),
                grade: '?'
              },
              {
                name: 'Brian Kemp',
                img: require('./portraits/Brian_Kemp.png'),
                grade: '?'
              }
            ]
          },
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Lisa Ring',
                img: require('./portraits/FB_IMG_1516162882344.jpg'),
                grade: '?'
              },
              {
                name: 'Earl L. "Buddy" Carter',
                img: require('./portraits/Buddy.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Sanford D. Bishop Jr',
                img: require('./portraits/Sanford_D._Bishop_Jr.jpg'),
                grade: '?'
              },
              {
                name: 'Herman West',
                img: require('./portraits/Herman_West_Jr.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Chuck Enderlin',
                img: require('./portraits/Chuck_Enderlin.jpg'),
                grade: '?'
              },
              {
                name: 'Drew Ferguson',
                img: require('./portraits/Drew_Ferguson_official_congressional_photo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hank Johnson',
                img: require('./portraits/Henry_C._Johnson-1.jpg'),
                grade: '?'
              },
              {
                name: 'Joe Profit',
                img: require('./portraits/joeprofit2.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'John Lewis',
                img: require('./portraits/John_Lewis.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Lucy McBath',
                img: require('./portraits/IMG_0565.jpg'),
                grade: '?'
              },
              {
                name: 'Karen Handel',
                img: require('./portraits/Handel.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Carolyn Bourdeaux',
                img: require('./portraits/Carolyn_Bourdeaux.jpg'),
                grade: '?'
              },
              {
                name: 'Rob Woodall',
                img: require('./portraits/Rob_Woodall.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Austin Scott',
                img: require('./portraits/Austin_Scott_113th_Congress.jpg'),
                grade: '?'
              }
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Josh McCall',
                img: require('./portraits/Josh_McCall.jpg'),
                grade: '?'
              },
              {
                name: 'Doug Collins',
                img: require('./portraits/DougCollins.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Tabitha Johnson-Green',
                img: require('./portraits/image1-4.jpg'),
                grade: '?'
              },
              {
                name: 'Jody B. Hice',
                img: require('./portraits/Jody_Hice_official_portrait.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Flynn Broady',
                img: require('./portraits/Flynn_Broady_Jr.jpg'),
                grade: '?'
              },
              {
                name: 'Barry Loudermilk',
                img: require('./portraits/CongLoudermilk.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Francys Johnson',
                img: require('./portraits/francysjohnson.jpg'),
                grade: '?'
              },
              {
                name: 'Rick W. Allen',
                img: require('./portraits/Rick_Allen_Official_Photo,_114th_Congress-7.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'David Scott',
                img: require('./portraits/David_Scott.jpg'),
                grade: '?'
              },
              {
                name: 'David Callahan',
                img: require('./portraits/5ad604ec11b6a.image.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Steven Foster',
                img: require('./portraits/download.jpg'),
                grade: '?'
              },
              {
                name: 'Tom Graves',
                img: require('./portraits/Tom_Graves.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Lieutenant Governor',
        id: 'lieutenantGovernor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Sarah Amico',
                img: require('./portraits/Sarah_Riggs_Amico.jpg'),
                grade: '?'
              },
              {
                name: 'Geoff Duncan',
                img: require('./portraits/Geoff_Duncan.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Charlie Bailey',
                img: require('./portraits/Charlie-Bailey-Article-201802082310.jpg'),
                grade: '?'
              },
              {
                name: 'Chris Carr',
                img: require('./portraits/Chris_Carr_Georgia.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'John Barrow',
                img: require('./portraits/John_Barrow.jpg'),
                grade: '?'
              },
              {
                name: 'Brad Raffensperger',
                img: require('./portraits/Brad_Raffensperger.jpg'),
                grade: '?'
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
            name: 'Statewide',
            candidates: [
              {
                name: 'Fred Swann',
                img: require('./portraits/Fred_Swann.jpg'),
                grade: '?'
              },
              {
                name: 'Gary Black',
                img: require('./portraits/commissioner-gary-w-black.jpg'),
                grade: '?'
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
        name: 'US Senate',
        id: 'usSenate',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Mazie Hirono',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ron Curtis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'David Ige',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Andria Tupola',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jim Brewer',
                img: require('./portraits/todo.jpg'),
                party: 'Green',
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Ed Case',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Cam Cavasso',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Zachary Burd',
                img: require('./portraits/todo.jpg'),
                party: 'Green',
                grade: '?'
              },
              {
                name: 'Michelle Tippens',
                img: require('./portraits/todo.jpg'),
                party: 'Libertarian',
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tulsi Gabbard',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brian Evans',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Lieutenant Governor',
        id: 'lieutenantGovernor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Josh Green',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'TBD',
                img: require('./portraits/todo.jpg'),
                grade: '?'
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
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Paulette Jordan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brad Little',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Cristina McNeil',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Russ Fulcher',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Aaron Swisher',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Simpson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Lieutenant Governor',
        id: 'lieutenantGovernor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Kristin Collumn',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Janice McGeachin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Bruce Bistline',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Lawrence Wasden',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Jim Humble',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Lawerence Denney',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Treasurer',
        id: 'treasurer',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Julie Ellsworth',
                img: require('./portraits/todo.jpg'),
                grade: '?'
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
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'J.B. Pritzker',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bruce Rauner',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Kwame Raoul',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Erika Harold',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Bobby Rush',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jimmy Lee Tillman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Robin Kelly',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'David Merkle',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Daniel Lipinski',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Arthur Jones',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jesús G. Garcia',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Lorch',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Quigley',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Tom Hanson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Sean Casten',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Peter Roskam',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Danny K. Davis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Craig Cameron',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Raja Krishnamoorthi',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'JD Diganvker',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jan Schakowsky',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Elleson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Brad Schneider',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Douglas Bennett',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Bill Foster',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Nick Stella',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Brendan Kelly',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Bost',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Betsy Dirksen Londrigan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rodney Davis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Lauren Underwood',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Randy Hultgren',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Kevin Gaither',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Shimkus',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Sara Dady',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Adam Kinzinger',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Cheri Bustos',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bill Fawell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Junius Rodriguez',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Darin LaHood',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
    ]
  },
  IN: {
    // https://www.nytimes.com/interactive/2018/05/08/us/elections/results-indiana-primary-elections.html
    name: 'Indiana',
    legislatures: [
      {
        name: 'US Senate',
        id: 'usSenate',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Joe Donnelly',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Braun',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Peter J. Visclosky',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Leyva',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Mel Hall',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jackie Walorski',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Courtney Tritch',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jim Banks',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tobi Beck',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jim Baird',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Dee Thornton',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Susan W. Brooks',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jeannine Lake',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Greg Pence',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'André Carson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Wayne Harmon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'William Tanoos',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Larry Bucshon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Liz Watson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Trey Hollingsworth',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
    ]
  },
  IA: {
    // https://www.nytimes.com/interactive/2018/06/05/us/elections/results-iowa-primary-elections.html
    name: 'Iowa',
    legislatures: [
      {
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Fred Hubbell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kim Reynolds',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Abby Finkenauer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rob Blum',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dave Loebsack',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Christopher Peters',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cindy Axne',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'David Young',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bryan Holder',
                img: require('./portraits/todo.jpg'),
                party: 'libertarian',
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'J.D. Scholten',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Steve King',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Charles Aldrich',
                img: require('./portraits/todo.jpg'),
                party: 'libertarian',
                grade: '?'
              }
            ]
          },
        ]
      },
      // TODO: State Senate and State House
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Tom Miller',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          }
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Deidre DeJear',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Paul Pate',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Auditor',
        id: 'auditor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Rob Sand',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mary Mosiman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Treasurer',
        id: 'treasurer',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Michael Fitzgerald',
                img: require('./portraits/todo.jpg'),
                grade: '?'
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
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Laura Kelly',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'TBD',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Alan LaPolice',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Roger Marshall',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Paul Davis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Steve Watkins',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Sharice Davids',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kevin Yoder',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'James Thompson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ron Estes',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
        ]
      },
      // TODO state house
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Sarah Swain',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Derek Schmidt',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Secretary of State',
        id: 'secretaryOfState',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Brian McClendon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Scott Schwab',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Treasurer',
        id: 'treasurer',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Marci Fransisco',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jake LaTurner',
                img: require('./portraits/todo.jpg'),
                grade: '?'
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
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Paul Walker',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'James Comer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Hank Linderman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brett Guthrie',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Yarmuth',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Vickie Glisson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Seth Hall',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Thomas Massie',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Kenneth Stepp',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Harold Rogers',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Amy McGrath',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Andy Barr',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
    ]
  },
  // LA: Louisana // primaries Nov. 6 | Dec. 8
  ME: {
    // https://www.nytimes.com/interactive/2018/06/12/us/elections/results-maine-primary-elections.html
    name: 'Maine',
    legislatures: [
      {
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Janet Mills',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Shawn Moody',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US Senate',
        id: 'usSenate',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Zak Ringelstein',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Eric Brakey',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Chellie Pingree',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Holbrook',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Golden',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bruce Poliquin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and State House
    ]
  },
  MD: {
    // https://www.nytimes.com/interactive/2018/06/26/us/elections/results-maryland-primary-elections.html
    name: 'Maryland',
    legislatures: [
      {
        name: 'US Senate',
        id: 'usSenate',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Ben Cardin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Tony Campbell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Ben Jealous',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Logan Hogan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Jesse Colvin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Andy Harris',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Dutch Ruppersberger',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Liz Matory',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Sarbanes',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Charles Anthony',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Anthony Brown',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'George McDermott',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Steny Hoyer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'William Devine',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'David Trone',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Amie Hoeber',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Elijah Cummings',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Richmond Davis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Jamie Raskin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Walsh',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO: State Senate and House of Delegates
      {
        name: 'Attorney General',
        id: 'attorneyGeneral',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Brian Frosh',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Craig Wolf',
                img: require('./portraits/todo.jpg'),
                grade: '?'
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
        name: 'Governor',
        id: 'governor',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Gretchen Whitmer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bill Schuette',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US Senate',
        id: 'usSenate',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Debbie Stabenow',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John James',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      {
        name: 'US House',
        id: 'usHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Jack Bergman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Rob Davidson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bill Huizenga',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Cathy Albro',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Justin Amash',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Jerry Hilliard',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Moolenaar',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Daniel Kildee',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Travis Wines',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Matt Longjohn',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Fred Upton',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Gretchen Driskell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Tim Walberg',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Elissa Slotkin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Bishop',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Andy Levin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Candius Stearns',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Kimberly Bizon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Paul Mitchell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Haley Stevens',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Lena Epstein',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Debbie Dingell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jeff Jones',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Rashida Tlaib',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'TBD',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 13 Special Election',
            candidates: [
              {
                name: 'TBD',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'TBD',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Brenda Lawrence',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Marc Herschfus',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
        ]
      },
      {
        name: 'State Senate',
        id: 'stateSenate',
        districts: [
          {
            name: 'Seat 1',
            candidates: [
              {
                name: 'Stephanie Chang',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Pauline Montie',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 2',
            candidates: [
              {
                name: 'Adam Hollier',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Lisa Papas',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 3',
            candidates: [
              {
                name: 'Sylvia Santana',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kathy Stecker',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 4',
            candidates: [
              {
                name: 'Marshall Bullock',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Angela Savino',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 5',
            candidates: [
              {
                name: 'Betty Jean Alexander',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'DeShawn Wilkins',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 6',
            candidates: [
              {
                name: 'Erika Geiss',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brenda Jones',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 7',
            candidates: [
              {
                name: 'Danya Polehanki',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Laura Cox',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Joseph LeBlanc',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 8',
            candidates: [
              {
                name: 'Paul Francis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Peter Lucido',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 9',
            candidates: [
              {
                name: 'Paul Wojno',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jeff Bonnell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 10',
            candidates: [
              {
                name: 'Henry Yanez',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Michael MacDonald',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Saliba',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 11',
            candidates: [
              {
                name: 'Jeremy Moss',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Boris Tuman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 12',
            candidates: [
              {
                name: 'Rosemary Bayer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Michael McCready',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jeff Pittel',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 13',
            candidates: [
              {
                name: 'Mallory McMorrow',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Marty Knollenberg',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 14',
            candidates: [
              {
                name: 'Renee Watson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ruth Johnson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 15',
            candidates: [
              {
                name: 'Julia Pulver',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jim Runestad',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 16',
            candidates: [
              {
                name: 'Val Cochran Toops',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Shirkey',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ronald Muszynski',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 17',
            candidates: [
              {
                name: 'Bill LaVoy',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Dale Zorn',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Chad McNamara',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 18',
            candidates: [
              {
                name: 'Jeff Irwin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Martin Church',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 19',
            candidates: [
              {
                name: 'Jason Noble',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Bizon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Joseph Gillotte',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 20',
            candidates: [
              {
                name: 'Sean McCann',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: "Margaret O'Brien",
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Lorence Wenke',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 21',
            candidates: [
              {
                name: 'Ian Haight',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kim LaSata',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 22',
            candidates: [
              {
                name: 'Adam Dreher',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Lana Theis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 23',
            candidates: [
              {
                name: 'Curtis Hertel',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Andrea Pollock',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 24',
            candidates: [
              {
                name: 'Kelly Rossman-McKinney',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Tom Barrett',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Katie Nepton',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 25',
            candidates: [
              {
                name: 'Debbie Bourgois',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Dan Lauwers',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 26',
            candidates: [
              {
                name: 'Garnet Lewis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Aric Nesbitt',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Erwin Haas',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 27',
            candidates: [
              {
                name: 'Jim Ananich',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Donna Kekesis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 28',
            candidates: [
              {
                name: 'Craig Beach',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Peter MacGregor',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Nathan Hewer',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 29',
            candidates: [
              {
                name: 'Winnie Brinks',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Chris Afendoulis',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Robert VanNoller',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 30',
            candidates: [
              {
                name: 'Jeanette Schipper',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Roger Victory',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mary Buzuma',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 31',
            candidates: [
              {
                name: 'Cynthia Luczak',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kevin Daley',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 32',
            candidates: [
              {
                name: 'Phil Phelps',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ken Horn',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 33',
            candidates: [
              {
                name: 'Mark Bignell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rick Outman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 34',
            candidates: [
              {
                name: 'Poppy Sias-Hernandez',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jon Bumstead',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Max Riekse',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 35',
            candidates: [
              {
                name: 'Mike Taillard',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Curt VanderWall',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Timothy Coon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 36',
            candidates: [
              {
                name: 'Joe Weir',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jim Stamas',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 37',
            candidates: [
              {
                name: 'Jim Page',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Wayne Schmidt',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'Seat 38',
            candidates: [
              {
                name: 'Scott Dianda',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ed McBroom',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
        ]
      },
      { // State House and State Senate TODO fix, check everything
        name: 'State House',
        id: 'stateHouse',
        districts: [
          {
            name: 'District 1',
            candidates: [
              {
                name: 'Tenisha Yancey',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Corcoran',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Gregory Creswell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Tate',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Palffy',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Wendell Byrd',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Dolores Brodersen',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Isaac Robinson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Howard Weathington',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Cynthia Johnson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Dorothy Patterson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Tyrone Carter',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Linda Sawyer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'LaTanya Garrett',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Marcelis Turner',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Sherry Gay-Dagnogo',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Valerie Parker',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Karen Whitsett',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'James Stephens',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Leslie Love',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'William Brang',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jeremy Morgan',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Jewell Jones',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'James Townsend',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Alex Garza',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Michelle Bailey',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'Frank Liberati',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Annie Spencer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Cara Clemente',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Darrell Stasik',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Abdullah Hammoud',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Doug Mitchell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Kevin Coleman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jody Rice-White',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Michelle LaVoy',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Joe Bellino',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Kevin Hertel',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kyle McKee',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Laurie Pohutsky',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brian Meakin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 20',
            candidates: [
              {
                name: 'Matt Koleszar',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jeff Noble',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'Kristy Pagan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Darian Moore',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'John Chirkun',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Art Blundell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Matt Kuehnel',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Darrin Camilleri',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Michael Frazier',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 24',
            candidates: [
              {
                name: 'Laura Winn',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Steve Marino',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Nate Shannon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jazmine Early',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Jim Ellison',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Al Gui',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Robert Wittenberg',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Janet Flessland',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Benjamin Carr',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Lori Stone',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Aaron Delikta',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ryan Manier',
                party: 'libertarian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Brenda Carter',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Timothy Carrier',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'John Spica',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Diana Farrington',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'William Sowerby',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Lisa Valerio-Nowc',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Paul Manley',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Pamela Hornberger',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 33',
            candidates: [
              {
                name: 'Andrea Geralds',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jeff Yaroch',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Sheldon Neeley',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Henry Swift',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Kyra Bolden',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Theodore Alfonsetti',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Robert Murphy',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Douglas Wozniak',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Benjamin Dryke',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 37',
            candidates: [
              {
                name: 'Christine Greig',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mitch Swoboda',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 38',
            candidates: [
              {
                name: 'Kelly Breen',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kathy Crawford',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brian Wright',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 39',
            candidates: [
              {
                name: 'Jennifer Suidan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ryan Berman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Anthony Croff',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 40',
            candidates: [
              {
                name: 'Mari Manoogian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'David Wolkinson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 41',
            candidates: [
              {
                name: 'Padma Kuppa',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Doug Tietz',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 42',
            candidates: [
              {
                name: 'Mona Shand',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ann Bollin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 43',
            candidates: [
              {
                name: 'Nicole Breadon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Andrea Schroeder',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 44',
            candidates: [
              {
                name: 'Laura Dodd',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Matt Maddock',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 45',
            candidates: [
              {
                name: 'Kyle Cooper',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Michael Webber',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 46',
            candidates: [
              {
                name: 'Mindy Denninger',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Reilly',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 47',
            candidates: [
              {
                name: 'Colleen Turk',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Hank Vaupel',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 48',
            candidates: [
              {
                name: 'Sheryl Kennedy',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Al Hardwick',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 49',
            candidates: [
              {
                name: 'John Cherry',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Patrick Duvendeck',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 50',
            candidates: [
              {
                name: 'Tim Sneller',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Trace Fisher',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 51',
            candidates: [
              {
                name: 'David Lossing',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Mueller',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 52',
            candidates: [
              {
                name: 'Donna Lasinski',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Teri Aiuto',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 53',
            candidates: [
              {
                name: 'Yousef Rabhi',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jean Holland',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 54',
            candidates: [
              {
                name: 'Ronnie Peterson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Colton Campbell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 55',
            candidates: [
              {
                name: 'Rebekah Warren',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bob Baird',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 56',
            candidates: [
              {
                name: 'Ernie Whiteside',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jason Sheppard',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 57',
            candidates: [
              {
                name: 'Amber Pedersen',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bronna Kahle',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 58',
            candidates: [
              {
                name: 'Tamara Barnes',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Eric Leutheuser',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 59',
            candidates: [
              {
                name: 'Dennis Smith',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Aaron Miller',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 60',
            candidates: [
              {
                name: 'Jon Hoadley',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'William Baker',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 61',
            candidates: [
              {
                name: 'Alberta Griffin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brandt Iden',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 62',
            candidates: [
              {
                name: 'Jim Haadsma',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Dave Morgan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 63',
            candidates: [
              {
                name: 'Jennifer Aniano',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Matt Hall',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ronald Hawkins',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 64',
            candidates: [
              {
                name: 'Sheila Troxel',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Julie Alexander',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Norman Peterson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 65',
            candidates: [
              {
                name: 'Terri McKinnon',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Sarah Lightner',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jason Rees',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 66',
            candidates: [
              {
                name: 'Dan Seibert',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Beth Griffin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 67',
            candidates: [
              {
                name: 'Kara Hope',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Leon Clark',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Zachary Moreau',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 68',
            candidates: [
              {
                name: 'Sarah Anthony',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rosalinda Hernandez',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 68 Unexpired Term Dem.',
            candidates: [
              {
                name: 'Sarah Anthony',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rosalinda Hernandez',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
        ]
      },
    ]
  },

  // TODO: rest of states

  WA: {
    // https://www.nytimes.com/interactive/2018/08/07/us/elections/results-washington-primary-elections.html
    name: 'Washington',
    legislatures: [
      {
        name: 'US Senate',
        id: 'usSenate',
        districts: [
          {
            name: 'Statewide',
            candidates: [
              {
                name: 'Maria Cantwell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Susan Hutchison',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      },
      // TODO rest of state
    ] // legislatures
  },
  // end of stateInfo object
}