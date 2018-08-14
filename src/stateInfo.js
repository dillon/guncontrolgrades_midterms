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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Walt Maddox',
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
                name: 'Robert Kennedy',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bradley Byrne',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Tabitha Isner',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Martha Roby',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Mallory Hagan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike D. Rogers',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Lee Auman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Robert B. Aderholt',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Peter Joffrion',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mo Brooks',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Danner Kline',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Gary Palmer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Terri A. Sewell',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Will Ainsworth',
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
                name: 'Joseph Siegelman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Steve Marshall',
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
                name: 'Heather Milam',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Merril',
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
                name: 'Miranda Joseph',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jim Zeigler',
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
                name: 'John McMillan',
                img: require('./portraits/todo.jpg'),
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
            name: 'Rick Pate',
            img: require('./portraits/todo.jpg'),
            grade: '?'
          },
          // TODO: Only one candidate!
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Asa Hutchinson',
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
                name: 'Chintan Desai',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rick Crawford',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Clarke Tucker',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'French Hill',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Josh Mahony',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Steve Womack',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hayden Shamel',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brucer Westerman',
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
                name: 'Anthony Bland',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Tim Griffin',
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
                name: 'Mike Lee',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Leslie Rutledge',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Thurston',
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
                name: 'Andrea Lea',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Tommy Land',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kevin de León',
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
                name: 'Gavin Newsom',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Cox',
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
                name: 'Doug LaMalfa',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Audrey Denney',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Jared Huffman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Dale Mensing',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'John Garamendi',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Charlie Schaupp',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Tom McClintock',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jessica Morse',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Mike Thompson',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Doris Matsui',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ami Bera',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Andrew Grant',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Paul Cook',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 9',
            candidates: [
              {
                name: 'Jerry McNerney',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Maria Livengood',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Jeff Denham',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Fitzgerald',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Nancy Pelosi',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Cristina Osmena',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 15',
            candidates: [
              {
                name: 'Eric Swalwell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rudy Peters',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 16',
            candidates: [
              {
                name: 'Jim Costa',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Elizabeth Heng',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 17',
            candidates: [
              {
                name: 'Ro Khanna',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ron Cohen',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 18',
            candidates: [
              {
                name: 'Anna G. Eshoo',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Christine Russell',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 19',
            candidates: [
              {
                name: 'Zoe Lofgren',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ronald Kabat',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 21',
            candidates: [
              {
                name: 'T.J. Cox',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'David Valadao',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 22',
            candidates: [
              {
                name: 'Devin Nunes',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Andrew Janz',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 23',
            candidates: [
              {
                name: 'Kevin McCarthy',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Justin Fareed',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 25',
            candidates: [
              {
                name: 'Steve Knight',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 26',
            candidates: [
              {
                name: 'Julie Brownley',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Antonio Sabato',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 27',
            candidates: [
              {
                name: 'Judy Chu',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Bryan Witt',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 28',
            candidates: [
              {
                name: 'Adam B. Schiff',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Johnny Nalbandian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 29',
            candidates: [
              {
                name: 'Tony Cardenas',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Benny Bernal',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 30',
            candidates: [
              {
                name: 'Brad Sherman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Reed',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 31',
            candidates: [
              {
                name: 'Pete Aguilar',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Sean Flynn',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 32',
            candidates: [
              {
                name: 'Grace F. Napolitano',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kenneth Wright',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 34',
            candidates: [
              {
                name: 'Jimmy Gomez',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kenneth Mejia',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 35',
            candidates: [
              {
                name: 'Norma J. Torres',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Christian Valiente',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 36',
            candidates: [
              {
                name: 'Raul Ruiz',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Kimberlin Pelzer',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 37',
            candidates: [
              {
                name: 'Karen Bass',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ron Bassilian',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 38',
            candidates: [
              {
                name: 'Linda T. Sánchez',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ryan Downing',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 39',
            candidates: [
              {
                name: 'Young King',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Gil Cisneros',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 40',
            candidates: [
              {
                name: 'Lucille Roybal-Allard',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rodolfo Barragan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 41',
            candidates: [
              {
                name: 'Mark Takano',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Aja Smith',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 42',
            candidates: [
              {
                name: 'Ken Calvert',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Julia Peacock',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 43',
            candidates: [
              {
                name: 'Maxine Waters',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Omar Navarro',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 44',
            candidates: [
              {
                name: 'Nanette Barragan',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Katie Porter',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 46',
            candidates: [
              {
                name: 'J. Luis Correa',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Russel Lambert',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 47',
            candidates: [
              {
                name: 'Alan Lowenthal',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'John Briscoe',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 48',
            candidates: [
              {
                name: 'Dana Rohrabacher',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              // TODO: only one candidate!
            ]
          },
          {
            name: 'District 49',
            candidates: [
              {
                name: 'Diana Harkey',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Levin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 50',
            candidates: [
              {
                name: 'Duncan Hunter',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ammar Campa-Najjar',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 51',
            candidates: [
              {
                name: 'Juan C. Vargas',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Omar Qudrat',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 53',
            candidates: [
              {
                name: 'Susan A. Davis',
                img: require('./portraits/todo.jpg'),
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
                img: require("./portraits/todo.jpg"),
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
                img: require("./portraits/todo.jpg"),
                grade: "?"
              },
              {
                name: 'Steven Bailey',
                img: require("./portraits/todo.jpg"),
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
                img: require("./portraits/todo.jpg"),
                grade: "?"
              },
              {
                name: 'Mark Meuser',
                img: require("./portraits/todo.jpg"),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Walker Stapleton',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Casper Stockham',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Joe Neguse',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Peter Yu',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Diane Mitsch Bush',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Scott Tipton',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Karen McCormick',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Ken Buck',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'Stephany Spaulding',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Doug Lamborn',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 6',
            candidates: [
              {
                name: 'Jason Crow',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mike Coffman',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Ed Perlmutter',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Mark Barrington',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Phil Weiser',
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
                name: 'Jena Griswold',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Wayne Williams',
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
                name: 'Dave Young',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brian Watson',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Brian Kemp',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Earl L. \"Buddy\" Carter',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
            ]
          },
          {
            name: 'District 2',
            candidates: [
              {
                name: 'Sanford D. Bishop Jr',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Herman West',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 3',
            candidates: [
              {
                name: 'Chuck Enderlin',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Drew Ferguson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 4',
            candidates: [
              {
                name: 'Hank Johnson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Joe Profit',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 5',
            candidates: [
              {
                name: 'John Lewis',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Karen Handel',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 7',
            candidates: [
              {
                name: 'Carolyn Bourdeaux',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rob Woodall',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 8',
            candidates: [
              {
                name: 'Austin Scott',
                img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Doug Collins',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 10',
            candidates: [
              {
                name: 'Tabitha Johnson-Green',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Jody B. Hice',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 11',
            candidates: [
              {
                name: 'Flynn Broady',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Barry Loudermilk',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 12',
            candidates: [
              {
                name: 'Francys Johnson',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Rick W. Allen',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 13',
            candidates: [
              {
                name: 'David Scott',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'David Callahan',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          },
          {
            name: 'District 14',
            candidates: [
              {
                name: 'Steven Foster',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Tom Graves',
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
                name: 'Sarah Amico',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Geoff Duncan',
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
                name: 'Charlie Bailey',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Chris Carr',
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
                  name: 'John Barrow',
                  img: require('./portraits/todo.jpg'),
                  grade: '?'
                },
                {
                  name: 'Brad Raffensperger',
                  img: require('./portraits/todo.jpg'),
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
                img: require('./portraits/todo.jpg'),
                grade: '?'
              },
              {
                name: 'Gary Black',
                img: require('./portraits/todo.jpg'),
                grade: '?'
              }
            ]
          }
        ]
      }
    ]
  },

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



  // end of stateInfo object
}