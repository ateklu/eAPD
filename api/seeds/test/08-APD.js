import { APD_TYPE, FUNDING_CATEGORY_TYPE } from '@cms-eapd/common';

export default {
  _id: '62a76c5310a0f01aaa73788b',
  status: 'draft',
  stateId: 'ak',
  apdType: APD_TYPE.HITECH,
  name: 'HITECH IAPD Dio 4',
  years: ['2022', '2023', '2024'],
  yearOptions: ['2022', '2023', '2024'],
  apdOverview: {
    updateStatus: {
      isUpdateAPD: false,
      annualUpdate: false,
      asNeededUpdate: false
    },
    narrativeHIE:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Enim neque volutpat ac tincidunt vitae. Non odio euismod lacinia at.</p>',
    narrativeHIT:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies lacus sed. Mattis nunc sed blandit libero volutpat sed cras ornare.</p>',
    narrativeMMIS:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in tellus. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.</p>',
    programOverview:
      '<p><span style="font-weight:400">APD 4; This </span><span style="font-weight:400">APD is administratively complete</span></p>\n<ul>\n<li><span style="font-weight:400">FFY 2022-2024</span></li>\n<li><span style="font-weight:400">1 Key State Personnel</span></li>\n<li><span style="font-weight:400">2 Activities</span></li>\n<ul>\n<li><span style="font-weight:400">Activity 1</span></li>\n<ul>\n<li><span style="font-weight:400">Funding Source: HIT</span></li>\n<li><span style="font-weight:400">Standards and Conditions</span></li>\n<li><span style="font-weight:400">2 Outcome</span></li>\n<li><span style="font-weight:400">2 Milestone</span></li>\n<li><span style="font-weight:400">2 State Staff</span></li>\n<li><span style="font-weight:400">2 State Expenses</span></li>\n<li><span style="font-weight:400">2 Private Contractor Costs</span></li>\n<li><span style="font-weight:400">Include other funding</span></li>\n</ul>\n</ul>\n</ul>'
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
        name: 'Rowan Wilks',
        position: 'Consul of Food',
        email: 'RW@testing.ai',
        isPrimary: true,
        fte: {
          2022: 2,
          2023: 2,
          2024: 2
        },
        hasCosts: true,
        costs: {
          2022: 134090,
          2023: 292000,
          2024: 340000
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
            federal: 50,
            state: 50,
            fundingCategory: FUNDING_CATEGORY_TYPE.DDI
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
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat odio facilisis mauris sit amet massa vitae tortor. At imperdiet dui accumsan sit amet nulla facilisi. Dictum varius duis at consectetur.</p>',
    actualExpenditures: {
      2020: {
        hithie: {
          federalActual: 0,
          totalApproved: 132490
        },
        mmis: {
          50: {
            federalActual: 0,
            totalApproved: 0
          },
          75: {
            federalActual: 0,
            totalApproved: 0
          },
          90: {
            federalActual: 0,
            totalApproved: 123400
          }
        }
      },
      2021: {
        hithie: {
          federalActual: 0,
          totalApproved: 180500
        },
        mmis: {
          50: {
            federalActual: 0,
            totalApproved: 0
          },
          75: {
            federalActual: 0,
            totalApproved: 0
          },
          90: {
            federalActual: 0,
            totalApproved: 258000
          }
        }
      },
      2022: {
        hithie: {
          federalActual: 0,
          totalApproved: 276900
        },
        mmis: {
          50: {
            federalActual: 0,
            totalApproved: 0
          },
          75: {
            federalActual: 0,
            totalApproved: 0
          },
          90: {
            federalActual: 0,
            totalApproved: 459000
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
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis nunc sed id semper. Fermentum iaculis eu non diam phasellus vestibulum lorem sed.</p>',
        description:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras. Netus et malesuada fames ac turpis egestas integer eget.</p>',
        alternatives: '',
        standardsAndConditions: {
          doesNotSupport:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Egestas integer eget aliquet nibh praesent.',
          supports:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Elementum sagittis vitae et leo duis ut diam.</p>'
        }
      },
      activitySchedule: {
        plannedStartDate: '2020-08-12T04:00:00.000+0000',
        plannedEndDate: '2022-10-23T00:00:00.000+0000'
      },
      milestones: [
        {
          milestone: 'Complete test',
          endDate: '2021-03-12T00:00:00.000+0000'
        },
        {
          milestone: 'Complete test 2',
          endDate: '2022-06-21T00:00:00.000+0000'
        }
      ],
      outcomes: [
        {
          outcome:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam quisque id diam vel quam elementum pulvinar etiam. In arcu cursus euismod quis. Enim neque volutpat ac tincidunt vitae semper. Tincidunt arcu non sodales neque sodales.',
          metrics: []
        },
        {
          outcome:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Scelerisque eleifend donec pretium vulputate sapien. Enim nunc faucibus a pellentesque sit. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.',
          metrics: []
        }
      ],
      statePersonnel: [
        {
          title: 'Patriarch of Bows',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing. Blandit massa enim nec dui nunc mattis enim. Ullamcorper morbi tincidunt ornare massa eget egestas. Non nisi est sit amet facilisis magna etiam tempor.',
          years: {
            2022: {
              amt: 78500,
              perc: 5
            },
            2023: {
              amt: 85000,
              perc: 6
            },
            2024: {
              amt: 91000,
              perc: 8
            }
          }
        },
        {
          title: 'Reverend of the Sea',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis nunc eget lorem dolor. Pulvinar proin gravida hendrerit lectus a. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed.',
          years: {
            2022: {
              amt: 68000,
              perc: 4
            },
            2023: {
              amt: 75000,
              perc: 4
            },
            2024: {
              amt: 75000,
              perc: 6
            }
          }
        }
      ],
      expenses: [
        {
          category: 'Hardware, software, and licensing',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Duis tristique sollicitudin nibh sit. Vitae justo eget magna fermentum iaculis eu non diam phasellus.',
          years: {
            2022: 5000,
            2023: 5000,
            2024: 7600
          }
        },
        {
          category: 'Hardware, software, and licensing',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate mi sit amet mauris commodo quis imperdiet. Egestas maecenas pharetra convallis posuere.',
          years: {
            2022: 6500,
            2023: 6500,
            2024: 8000
          }
        }
      ],
      contractorResources: [
        {
          name: 'Headman of Natural Resources',
          description:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie nunc non. Eu ultrices vitae auctor eu augue ut lectus. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Lacus laoreet non curabitur gravida arcu ac tortor. Nunc mattis enim ut tellus elementum sagittis vitae.</p>',
          start: '2020-04-07T00:00:00.000+0000',
          end: '2022-12-08T00:00:00.000+0000',
          totalCost: 1200000,
          years: {
            2022: 155840,
            2023: 227815,
            2024: 321600
          },
          useHourly: true,
          hourly: {
            2022: {
              hours: 4870,
              rate: 32
            },
            2023: {
              hours: 6509,
              rate: 35
            },
            2024: {
              hours: 6700,
              rate: 48
            }
          }
        },
        {
          name: 'General of Justice',
          description:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Sollicitudin aliquam ultrices sagittis orci. Tellus rutrum tellus pellentesque eu. Nam aliquam sem et tortor consequat id porta nibh venenatis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vestibulum sed arcu non odio. Pulvinar mattis nunc sed blandit libero. Sapien et ligula ullamcorper malesuada proin libero.</p>',
          start: '2020-02-17T00:00:00.000+0000',
          end: '2023-11-09T00:00:00.000+0000',
          totalCost: 1600000,
          years: {
            2022: 500000,
            2023: 500000,
            2024: 600000
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
          other: 30000
        },
        2023: {
          ffp: {
            federal: 0,
            state: 100,
            fundingCategory: null
          },
          other: 26000
        },
        2024: {
          ffp: {
            federal: 0,
            state: 100,
            fundingCategory: null
          },
          other: 320000
        }
      },
      costAllocationNarrative: {
        methodology:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis varius quam quisque id diam. Integer eget aliquet nibh praesent tristique. Aliquam malesuada bibendum arcu vitae elementum curabitur. Nunc non blandit massa enim nec dui nunc mattis enim. Egestas integer eget aliquet nibh praesent tristique magna. Integer vitae justo eget magna fermentum iaculis eu. Viverra adipiscing at in tellus integer feugiat. Maecenas sed enim ut sem.</p>',
        years: {
          2022: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum. Ut ornare lectus sit amet. Diam vulputate ut pharetra sit.</p>'
          },
          2023: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at. Scelerisque eu ultrices vitae auctor eu. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.</p>'
          },
          2024: {
            otherSources:
              '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Purus faucibus ornare suspendisse sed nisi lacus sed viverra.</p>'
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
        title: '42 CFR 433.112(b)',
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
  createdAt: '2022-06-13T16:56:51.109+0000',
  updatedAt: '2022-06-29T16:06:36.927+0000',
  __v: 0
};
