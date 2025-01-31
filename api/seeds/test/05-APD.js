import { APD_TYPE, FUNDING_CATEGORY_TYPE } from '@cms-eapd/common';

export default {
  _id: '62a76c3510a0f01aaa737864',
  status: 'draft',
  stateId: 'ak',
  apdType: APD_TYPE.HITECH,
  name: 'HITECH IAPD Dio 1',
  years: ['2022', '2023', '2024'],
  yearOptions: ['2022', '2023', '2024'],
  apdOverview: {
    updateStatus: {
      isUpdateAPD: false,
      annualUpdate: false,
      asNeededUpdate: false
    },
    narrativeHIE:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue mauris rhoncus aenean vel elit scelerisque. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Sagittis purus sit amet volutpat.</p>',
    narrativeHIT:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus luctus accumsan tortor posuere ac ut consequat. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.</p>',
    narrativeMMIS:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus. At elementum eu facilisis sed odio. Lectus proin nibh nisl condimentum. A pellentesque sit amet porttitor eget dolor morbi non. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Ac odio tempor orci dapibus.</p>',
    programOverview:
      '<p><span style="font-weight:400">APD 1; This APD has missing fields for Admin check, the missing fields are in the State Expenses and Other Funding of the First activity.</span></p>\n<ul>\n<li><span style="font-weight:400">FFY 2022-2024</span></li>\n<li><span style="font-weight:400">2 Key State Personnel</span></li>\n<li><span style="font-weight:400">3 Activities</span></li>\n<ul>\n<li><span style="font-weight:400">Activity 1</span></li>\n<ul>\n<li><span style="font-weight:400">Funding Source: HIT</span></li>\n<li><span style="font-weight:400">NO Standards and Conditions</span></li>\n<li><span style="font-weight:400">1 Outcome</span></li>\n<li><span style="font-weight:400">1 Milestone</span></li>\n<li><span style="font-weight:400">1 State Staff</span></li>\n<li><span style="font-weight:400">NO State Expenses</span></li>\n<li><span style="font-weight:400">1 Private Contractor Costs</span></li>\n<li><span style="font-weight:400">NO other funding</span></li>\n</ul>\n<li><span style="font-weight:400">Activity 2</span></li>\n<ul>\n<li><span style="font-weight:400">Funding Source: HIE</span></li>\n<li><span style="font-weight:400">1 Outcome</span></li>\n<li><span style="font-weight:400">1 Milestone</span></li>\n<li><span style="font-weight:400">1 State Staff</span></li>\n<li><span style="font-weight:400">3 State Expenses</span></li>\n<li><span style="font-weight:400">1 Private Contractor Costs</span></li>\n<li><span style="font-weight:400">Include other funding</span></li>\n</ul>\n<li><span style="font-weight:400">Activity 3</span></li>\n<ul>\n<li><span style="font-weight:400">Funding Source: HIT</span></li>\n<li><span style="font-weight:400">1 Outcome</span></li>\n<li><span style="font-weight:400">1 Milestone</span></li>\n<li><span style="font-weight:400">1 State Staff</span></li>\n<li><span style="font-weight:400">2 State Expenses</span></li>\n<li><span style="font-weight:400">1 Private Contractor Costs</span></li>\n<li><span style="font-weight:400">Include other funding</span></li>\n</ul>\n</ul>\n</ul>'
  },
  keyStatePersonnel: {
    medicaidDirector: {
      email: 'c.fudge@ministry.magic',
      name: 'Cornelius Fudge',
      phone: '5551234567'
    },
    medicaidOffice: {
      address1: '100 Round Sq',
      address2: '',
      city: 'Cityville',
      state: 'AK',
      zip: '12345'
    },
    keyPersonnel: [
      {
        name: 'Sample',
        position: 'Director',
        email: 'sample@testing.com',
        isPrimary: true,
        fte: {
          2022: 1,
          2023: 1,
          2024: 2
        },
        hasCosts: true,
        costs: {
          2022: 78000,
          2023: 78000,
          2024: 98000
        },
        split: {
          2022: {
            federal: 90,
            state: 10,
            fundingCategory: FUNDING_CATEGORY_TYPE.DDI
          },
          2023: {
            federal: 90,
            state: 10,
            fundingCategory: FUNDING_CATEGORY_TYPE.DDI
          },
          2024: {
            federal: 75,
            state: 25,
            fundingCategory: FUNDING_CATEGORY_TYPE.MANDO
          }
        },
        medicaidShare: {
          2022: 100,
          2023: 100,
          2024: 100
        }
      },
      {
        name: 'Marius Garcia',
        position: 'Warlock of Bliss',
        email: 'sample@testing.com',
        isPrimary: false,
        fte: {
          2022: 4,
          2023: 4,
          2024: 4
        },
        hasCosts: true,
        costs: {
          2022: 52800,
          2023: 65000,
          2024: 65000
        },
        split: {
          2022: {
            federal: 75,
            state: 25,
            fundingCategory: FUNDING_CATEGORY_TYPE.MANDO
          },
          2023: {
            federal: 75,
            state: 25,
            fundingCategory: FUNDING_CATEGORY_TYPE.MANDO
          },
          2024: {
            federal: 75,
            state: 25,
            fundingCategory: FUNDING_CATEGORY_TYPE.MANDO
          }
        },
        medicaidShare: {
          2022: 100,
          2023: 100,
          2024: 100
        }
      }
    ]
  },
  previousActivities: {
    previousActivitySummary:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet suspendisse. Eget arcu dictum varius duis at consectetur lorem donec massa. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Sit amet massa vitae tortor condimentum lacinia quis vel.</p>',
    actualExpenditures: {
      2020: {
        hithie: {
          federalActual: 402000,
          totalApproved: 406000
        },
        mmis: {
          50: {
            federalActual: 1200000,
            totalApproved: 1500000
          },
          75: {
            federalActual: 1390000,
            totalApproved: 1500000
          },
          90: {
            federalActual: 1100000,
            totalApproved: 1200000
          }
        }
      },
      2021: {
        hithie: {
          federalActual: 400000,
          totalApproved: 430000
        },
        mmis: {
          50: {
            federalActual: 1200000,
            totalApproved: 1500000
          },
          75: {
            federalActual: 1400000,
            totalApproved: 1500000
          },
          90: {
            federalActual: 1259000,
            totalApproved: 1200000
          }
        }
      },
      2022: {
        hithie: {
          federalActual: 478000,
          totalApproved: 450000
        },
        mmis: {
          50: {
            federalActual: 1400000,
            totalApproved: 1500000
          },
          75: {
            federalActual: 1440000,
            totalApproved: 1500000
          },
          90: {
            federalActual: 1592000,
            totalApproved: 1200000
          }
        }
      }
    }
  },
  activities: [
    {
      fundingSource: 'HIT',
      name: 'Program Administration',
      activityOverview: {
        summary:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere lorem. Sapien et ligula ullamcorper malesuada.</p>',
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo sed. Non curabitur gravida arcu ac tortor dignissim convallis aenean.</p>',
        alternatives: '',
        standardsAndConditions: {
          doesNotSupport: '',
          supports: ''
        }
      },
      activitySchedule: {
        plannedStartDate: '2020-10-13T00:00:00.000+0000',
        plannedEndDate: '2022-02-15T05:00:00.000+0000'
      },
      milestones: [
        {
          milestone: 'test 1',
          endDate: '2022-08-12T00:00:00.000+0000'
        }
      ],
      outcomes: [
        {
          outcome:
            'Develop and implement an MES Module to coordinate and improve public health and environmental services for children exposed to unfiltered water.',
          metrics: []
        }
      ],
      statePersonnel: [
        {
          title: 'Infrastructure liaison ',
          description:
            'Someone responsible with communicating with the community',
          years: {
            2022: {
              amt: 78000,
              perc: 12
            },
            2023: {
              amt: 80000,
              perc: 10
            },
            2024: {
              amt: 80000,
              perc: 11
            }
          }
        }
      ],
      expenses: [],
      contractorResources: [
        {
          name: 'Water company',
          description: '<p>provide expertise in the matter</p>',
          start: '2020-02-15T00:00:00.000+0000',
          end: '2022-02-23T00:00:00.000+0000',
          totalCost: 1500000,
          years: {
            2022: 500000,
            2023: 500000,
            2024: 500000
          },
          useHourly: false,
          hourly: {
            2022: {
              hours: null,
              rate: null
            },
            2023: {
              hours: null,
              rate: null
            },
            2024: {
              hours: null,
              rate: null
            }
          }
        }
      ],
      costAllocation: {
        2022: {
          ffp: {
            federal: 0,
            state: 100,
            fundingCategory: null
          },
          other: 0
        },
        2023: {
          ffp: {
            federal: 0,
            state: 100,
            fundingCategory: null
          },
          other: 0
        },
        2024: {
          ffp: {
            federal: 0,
            state: 100,
            fundingCategory: null
          },
          other: 0
        }
      },
      costAllocationNarrative: {
        methodology:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra. Leo vel fringilla est ullamcorper.</p>',
        years: {
          2022: {
            otherSources: ''
          },
          2023: {
            otherSources: ''
          },
          2024: {
            otherSources: ''
          }
        }
      },
      quarterlyFFP: {
        2022: {
          1: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          },
          2: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          },
          3: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          },
          4: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          }
        },
        2023: {
          1: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          },
          2: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          },
          3: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          },
          4: {
            combined: 0,
            contractors: 0,
            inHouse: 0
          }
        },
        2024: {
          1: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          2: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          3: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          4: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          }
        }
      }
    },
    {
      fundingSource: 'HIE',
      name: 'Wheelbarrow ',
      activityOverview: {
        summary:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tristique risus nec feugiat in. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque.</p>',
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra diam sit amet nisl suscipit. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Risus feugiat in ante metus dictum at. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices.</p>',
        alternatives:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus viverra. Facilisis mauris sit amet massa.</p>',
        standardsAndConditions: {
          doesNotSupport:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod.',
          supports:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit. Ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Vivamus at augue eget arcu dictum varius duis at. Ullamcorper velit sed ullamcorper morbi. Ut etiam sit amet nisl purus in mollis. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.</p>'
        }
      },
      activitySchedule: {
        plannedStartDate: '2020-01-06T05:00:00.000+0000',
        plannedEndDate: '2020-06-12T04:00:00.000+0000'
      },
      milestones: [
        {
          milestone: 'Complete test',
          endDate: '2022-06-12T00:00:00.000+0000'
        }
      ],
      outcomes: [
        {
          outcome:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          metrics: [
            {
              metric:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl. Laoreet id donec ultrices tincidunt. Egestas tellus rutrum tellus pellentesque. Varius morbi enim nunc faucibus a pellentesque sit.'
            }
          ]
        }
      ],
      statePersonnel: [
        {
          title: 'Earl of the Fields',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          years: {
            2022: {
              amt: 63000,
              perc: 4
            },
            2023: {
              amt: 80000,
              perc: 4
            },
            2024: {
              amt: 80000,
              perc: 4
            }
          }
        }
      ],
      expenses: [
        {
          category: 'Hardware, software, and licensing',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Arcu bibendum at varius vel pharetra vel.',
          years: {
            2022: 34000,
            2023: 34000,
            2024: 21000
          }
        },
        {
          category: 'Training and outreach',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Tincidunt dui ut ornare lectus sit amet est placerat in. Libero enim sed faucibus turpis in eu mi bibendum.',
          years: {
            2022: 110000,
            2023: 103000,
            2024: 69300
          }
        },
        {
          category: 'Travel',
          description: 'Corporate events across the country',
          years: {
            2022: 65000,
            2023: 78000,
            2024: 12000
          }
        }
      ],
      contractorResources: [
        {
          name: 'High Priest of Gold',
          description:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus. Libero volutpat sed cras ornare arcu. Id interdum velit laoreet id donec ultrices tincidunt arcu.</p>',
          start: '2021-03-02T00:00:00.000+0000',
          end: '2022-01-24T00:00:00.000+0000',
          totalCost: 550000,
          years: {
            2022: 550000,
            2023: 0,
            2024: 0
          },
          useHourly: false,
          hourly: {
            2022: {
              hours: null,
              rate: null
            },
            2023: {
              hours: null,
              rate: null
            },
            2024: {
              hours: null,
              rate: null
            }
          }
        }
      ],
      costAllocation: {
        2022: {
          ffp: {
            federal: 90,
            state: 10,
            fundingCategory: FUNDING_CATEGORY_TYPE.DDI
          },
          other: 398700
        },
        2023: {
          ffp: {
            federal: 75,
            state: 25,
            fundingCategory: FUNDING_CATEGORY_TYPE.MANDO
          },
          other: 170000
        },
        2024: {
          ffp: {
            federal: 50,
            state: 50,
            fundingCategory: FUNDING_CATEGORY_TYPE.DDI
          },
          other: 89000
        }
      },
      costAllocationNarrative: {
        methodology:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Dui accumsan sit amet nulla facilisi morbi tempus.</p>',
        years: {
          2022: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Porttitor leo a diam sollicitudin tempor id eu. Suspendisse in est ante in nibh mauris. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Et malesuada fames ac turpis egestas.</p>'
          },
          2023: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper. Id velit ut tortor pretium. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Quis risus sed vulputate odio. Urna porttitor rhoncus dolor purus non enim praesent.</p>'
          },
          2024: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis. Sed felis eget velit aliquet. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Vitae congue mauris rhoncus aenean vel elit. Mattis aliquam faucibus purus in massa tempor.</p>'
          }
        }
      },
      quarterlyFFP: {
        2022: {
          1: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          2: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          3: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          4: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          }
        },
        2023: {
          1: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          2: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          3: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          4: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          }
        },
        2024: {
          1: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          2: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          3: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          4: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          }
        }
      }
    },
    {
      fundingSource: 'HIT',
      name: 'Toolbox',
      activityOverview: {
        summary:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ultricies mi eget mauris pharetra et ultrices. In iaculis nunc sed augue lacus viverra vitae congue eu. Porta lorem mollis aliquam ut porttitor leo. Ut sem viverra aliquet eget sit amet tellus cras adipiscing.</p>',
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis. Dictum non consectetur a erat nam at lectus urna duis. Arcu cursus euismod quis viverra nibh cras pulvinar. In nisl nisi scelerisque eu ultrices vitae auctor. Commodo quis imperdiet massa tincidunt.</p>',
        alternatives:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum. Turpis cursus in hac habitasse platea dictumst quisque. Ultrices tincidunt arcu non sodales neque. Malesuada fames ac turpis egestas integer eget aliquet nibh. Elementum curabitur vitae nunc sed.</p>',
        standardsAndConditions: {
          doesNotSupport:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo duis ut.',
          supports:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam sit amet nisl purus.</p>'
        }
      },
      activitySchedule: {
        plannedStartDate: '2020-08-29T00:00:00.000+0000',
        plannedEndDate: '2021-04-01T00:00:00.000+0000'
      },
      milestones: [
        {
          milestone: 'Complete the T',
          endDate: '2021-04-10T00:00:00.000+0000'
        }
      ],
      outcomes: [
        {
          outcome:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus cras. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Purus sit amet luctus venenatis lectus magna.',
          metrics: []
        }
      ],
      statePersonnel: [
        {
          title: 'Mage of Nature',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          years: {
            2022: {
              amt: 87000,
              perc: 17
            },
            2023: {
              amt: 0,
              perc: 1
            },
            2024: {
              amt: 0,
              perc: 1
            }
          }
        }
      ],
      expenses: [
        {
          category: 'Administrative operations',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          years: {
            2022: 2200,
            2023: 0,
            2024: 0
          }
        },
        {
          category: 'Training and outreach',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          years: {
            2022: 7800,
            2023: 0,
            2024: 0
          }
        }
      ],
      contractorResources: [
        {
          name: 'Father of the South',
          description:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc. Sem nulla pharetra diam sit amet. Proin nibh nisl condimentum id venenatis a condimentum.</p>',
          start: '2020-01-15T00:00:00.000+0000',
          end: '2020-11-25T00:00:00.000+0000',
          totalCost: 76000,
          years: {
            2022: 76000,
            2023: 0,
            2024: 0
          },
          useHourly: false,
          hourly: {
            2022: {
              hours: null,
              rate: null
            },
            2023: {
              hours: null,
              rate: null
            },
            2024: {
              hours: null,
              rate: null
            }
          }
        }
      ],
      costAllocation: {
        2022: {
          ffp: {
            federal: 90,
            state: 10,
            fundingCategory: FUNDING_CATEGORY_TYPE.DDI
          },
          other: 390000
        },
        2023: {
          ffp: {
            federal: 50,
            state: 50,
            fundingCategory: FUNDING_CATEGORY_TYPE.DDI
          },
          other: 0
        },
        2024: {
          ffp: {
            federal: 50,
            state: 50,
            fundingCategory: FUNDING_CATEGORY_TYPE.MANDO
          },
          other: 0
        }
      },
      costAllocationNarrative: {
        methodology:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Cras ornare arcu dui vivamus arcu felis.</p>',
        years: {
          2022: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Congue nisi vitae suscipit tellus mauris. Lacus suspendisse faucibus interdum posuere lorem ipsum.</p>'
          },
          2023: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Consectetur libero id faucibus nisl tincidunt.</p>'
          },
          2024: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget mi. Bibendum est ultricies integer quis auctor elit sed. A erat nam at lectus.</p>'
          }
        }
      },
      quarterlyFFP: {
        2022: {
          1: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          2: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          3: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          4: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          }
        },
        2023: {
          1: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          2: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          3: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          4: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          }
        },
        2024: {
          1: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          2: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          3: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          },
          4: {
            combined: 25,
            contractors: 25,
            inHouse: 25
          }
        }
      }
    }
  ],
  proposedBudget: {
    incentivePayments: {
      ehAmt: {
        2022: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2023: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2024: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        }
      },
      ehCt: {
        2022: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2023: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2024: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        }
      },
      epAmt: {
        2022: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2023: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2024: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        }
      },
      epCt: {
        2022: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2023: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        },
        2024: {
          1: 0,
          2: 0,
          3: 0,
          4: 0
        }
      }
    }
  },
  assurancesAndCompliances: {
    procurement: [
      {
        checked: true,
        title: '42 CFR Part 495.348',
        explanation: ''
      },
      {
        checked: true,
        title: 'SMM Section 11267',
        explanation: ''
      },
      {
        checked: true,
        title: '45 CFR 95.613',
        explanation: ''
      },
      {
        checked: true,
        title: '45 CFR 75.326',
        explanation: ''
      }
    ],
    recordsAccess: [
      {
        checked: true,
        title: '42 CFR Part 495.350',
        explanation: ''
      },
      {
        checked: true,
        title: '42 CFR Part 495.352',
        explanation: ''
      },
      {
        checked: true,
        title: '42 CFR Part 495.346',
        explanation: ''
      },
      {
        checked: true,
        title: '42 CFR 433.112(b',
        explanation: ''
      },
      {
        checked: true,
        title: '45 CFR Part 95.615',
        explanation: ''
      },
      {
        checked: true,
        title: 'SMM Section 11267',
        explanation: ''
      }
    ],
    softwareRights: [
      {
        checked: true,
        title: '42 CFR 495.360',
        explanation: ''
      },
      {
        checked: true,
        title: '45 CFR 95.617',
        explanation: ''
      },
      {
        checked: true,
        title: '42 CFR Part 431.300',
        explanation: ''
      },
      {
        checked: true,
        title: '42 CFR Part 433.112',
        explanation: ''
      }
    ],
    security: [
      {
        checked: true,
        title: '45 CFR 164 Security and Privacy',
        explanation: ''
      }
    ]
  },
  createdAt: '2022-06-13T16:56:21.835+0000',
  updatedAt: '2022-06-30T17:12:01.158+0000',
  __v: 0
};
