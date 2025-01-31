import PropType from 'prop-types';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  Alert,
  Button,
  ChoiceList,
  TextField,
  Tooltip,
  TooltipIcon
} from '@cmsgov/design-system';
import {
  newApdSchema as schema,
  APD_TYPE,
  defaultAPDYearOptions,
  defaultAPDYears
} from '@cms-eapd/common';
import { joiResolver } from '@hookform/resolvers/joi';
import { useFlags } from 'launchdarkly-react-client-sdk';

import TextArea from '../../../components/TextArea';
import { createApd } from '../../../redux/actions/app';
import Loading from '../../../components/Loading';

const ApdNew = ({ createApd: create }) => {
  ApdNew.displayName = 'ApdNew';
  let value;
  const history = useHistory();
  const { enableMmis } = useFlags();

  const businessAreaOptions = {
    waiverSupportSystems: false,
    assetVerificationSystem: false,
    claimsProcessing: false,
    decisionSupportSystemDW: false,
    electronicVisitVerification: false,
    encounterProcessingSystemMCS: false,
    financialManagement: false,
    healthInformationExchange: false,
    longTermServicesSupports: false,
    memberManagement: false,
    pharmacyBenefitManagementPOS: false,
    programIntegrity: false,
    providerManagement: false,
    thirdPartyLiability: false,
    other: false
  };

  const updateTypes = {
    annualUpdate: false,
    asNeededUpdate: false
  };

  const yearOptions = defaultAPDYearOptions();
  const [years, setYears] = useState(defaultAPDYears());
  const [apdType, setApdType] = useState('');
  const [businessAreas, setBusinessAreas] = useState(businessAreaOptions);
  const [businessList, setBusinessList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [otherDetails, setOtherDetails] = useState('');
  const [typeStatus, setTypeStatus] = useState(updateTypes);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const apdTypeChoices = [
    {
      label: 'HITECH IAPD',
      labelClassName: 'label-extended',
      value: APD_TYPE.HITECH,
      hint: 'Health Information Techology for Economic and Clinical Health Implementation APD',
      checked: value
    },
    {
      label: 'MMIS IAPD',
      labelClassName: 'label-extended',
      value: APD_TYPE.MMIS,
      hint: 'Medicaid Management Information System Implementation APD',
      checked: value
    }
  ];
  const [apdChoices, setApdChoices] = useState(apdTypeChoices);

  const {
    control,
    setValue,
    getValues,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      years: years,
      businessList: businessList,
      updateStatus: {
        typeStatus
      }
    },
    mode: 'all',
    reValidateMode: 'all',
    resolver: joiResolver(schema)
  });

  useEffect(() => {
    if (!enableMmis) {
      apdChoices.pop();
      apdChoices[0].checked = true;
      setApdChoices(apdChoices);
      setApdType(APD_TYPE.HITECH);
      setValue('apdType', APD_TYPE.HITECH, { shouldValidate: true });
    }
  }, [apdChoices, enableMmis]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setSubmitDisabled(!isValid);
  }, [isValid]);

  if (isLoading) {
    return (
      <div id="start-main-content">
        <Loading>Loading your APD</Loading>
      </div>
    );
  }

  const yearChoices = yearOptions.map((year, index) => ({
    defaultChecked: years.includes(year),
    apdname: `years[${index}]`,
    label: year,
    value: year
  }));

  function updateArray(array, name, setAction, value) {
    let indexPrime = array.indexOf(value),
      newArray = array;
    if (indexPrime > -1) {
      newArray.splice(indexPrime, 1);
      setValue(name, newArray, { shouldValidate: true });
      setAction(newArray);
    } else if (indexPrime === -1) {
      newArray.push(value);
      setValue(name, newArray, { shouldValidate: true });
      setAction(newArray);
    }
  }

  const createNew = () => {
    const { years, name, mmisUpdate } = getValues();
    const apdValues = {
      years,
      name,
      apdType,
      apdOverview: {
        programOverview: '',
        updateStatus: {
          ...typeStatus
        }
      }
    };
    if (apdType === APD_TYPE.HITECH) {
      apdValues.apdOverview.updateStatus.isUpdateAPD = true;
    }
    if (apdType === APD_TYPE.MMIS) {
      apdValues.apdOverview.updateStatus.isUpdateAPD = mmisUpdate === 'yes';
      apdValues.apdOverview.medicaidBusinessAreas = businessAreas;
      apdValues.apdOverview.medicaidBusinessAreas.otherMedicaidBusinessAreas =
        otherDetails;
    }
    setIsLoading(true);
    create(apdValues);
  };

  return (
    <Fragment>
      <div className="site-body ds-l-container">
        <main id="start-main-content">
          <h1 className="ds-h2 ds-u-padding-top--3">
            Create a New Advanced Planning Document (APD)
          </h1>
          <div className="ds-u-padding-bottom--1 ds-u-border-bottom--2">
            Complete all the fields below to create your APD.
          </div>
          <Controller
            name="apdType"
            control={control}
            render={({ field: { onBlur, onChange, ...props } }) => (
              <ChoiceList
                {...props}
                label="What type of APD are you creating?"
                labelClassName="ds-h3 label-header label-extended"
                hint={
                  <Alert
                    variation="warn"
                    className="ds-u-margin-y--3 ds-u-margin-right--7"
                  >
                    <p className="ds-c-alert__text">
                      This selection cannot be changed after creating a new APD.
                    </p>
                  </Alert>
                }
                type="radio"
                choices={apdChoices}
                onChange={e => {
                  setApdType(e.target.value);

                  onChange(e);
                }}
                onBlur={onBlur}
                onComponentBlur={onBlur}
                errorMessage={errors?.apdType?.message}
                errorPlacement="bottom"
              />
            )}
          />
          {(apdType === APD_TYPE.MMIS || apdType === APD_TYPE.HITECH) && (
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field: { ...props } }) => (
                  <TextField
                    {...props}
                    label="APD Name"
                    className="remove-clearfix"
                    errorMessage={errors?.name?.message}
                    errorPlacement="bottom"
                  />
                )}
              />
              <Controller
                name="years"
                control={control}
                render={({ field: { onBlur, ...props } }) => (
                  <ChoiceList
                    {...props}
                    label="Federal Fiscal Year (FFY)"
                    choices={yearChoices}
                    labelClassName="ds-u-margin-bottom--1"
                    hint="Choose the federal fiscal year(s) this APD covers."
                    type="checkbox"
                    onChange={e => {
                      updateArray(years, 'years', setYears, e.target.value);
                    }}
                    onBlur={onBlur}
                    onComponentBlur={onBlur}
                    errorMessage={errors?.years?.message}
                    errorPlacement="bottom"
                  />
                )}
              />
            </div>
          )}
          {apdType === APD_TYPE.HITECH && (
            <div>
              <Controller
                name="updateStatus.typeStatus"
                control={control}
                render={({ field: { onBlur, onChange } }) => (
                  <ChoiceList
                    label="Update Type"
                    hint={
                      <div>
                        Indicate if this update is an annual APD and/or as need
                        APD update.
                        <br />
                        Keep in mind, an as needed update can serve as an annual
                        update.
                      </div>
                    }
                    choices={[
                      {
                        label: 'Annual update',
                        value: 'annualUpdate',
                        checked: typeStatus.annualUpdate
                      },
                      {
                        label: 'As-needed update',
                        value: 'asNeededUpdate',
                        checked: typeStatus.asNeededUpdate
                      }
                    ]}
                    labelClassName="ds-u-margin-bottom--1"
                    type="checkbox"
                    onChange={({ target: { value } }) => {
                      typeStatus[value] = !typeStatus[value];
                      setTypeStatus(typeStatus);
                      onChange(typeStatus);
                    }}
                    onBlur={onBlur}
                    onComponentBlur={onBlur}
                    errorMessage={errors?.updateStatus?.typeStatus?.message}
                    errorPlacement="bottom"
                  />
                )}
              />
            </div>
          )}
          {apdType === APD_TYPE.MMIS && (
            <div>
              <Controller
                name="mmisUpdate"
                control={control}
                render={({ field: { onBlur, onChange, value } }) => (
                  <ChoiceList
                    label="Is this an APD update?"
                    hint="Indicate if this APD is for a new project or if it is an update to an existing one."
                    type="radio"
                    choices={[
                      {
                        label: 'Yes, it is an update.',
                        value: 'yes',
                        checked: value === 'yes',
                        checkedChildren: (
                          <div className="ds-c-choice__checkedChild">
                            <Controller
                              name="updateStatus.typeStatus"
                              control={control}
                              render={({ field: { onBlur, onChange } }) => (
                                <ChoiceList
                                  label="Update Type"
                                  hint={
                                    <div>
                                      Indicate if this update is an annual APD
                                      and/or as need APD update.
                                      <br />
                                      Keep in mind, an as needed update can
                                      serve as an annual update.
                                    </div>
                                  }
                                  choices={[
                                    {
                                      label: 'Annual update',
                                      value: 'annualUpdate',
                                      checked: typeStatus.annualUpdate
                                    },
                                    {
                                      label: 'As-needed update',
                                      value: 'asNeededUpdate',
                                      checked: typeStatus.asNeededUpdate
                                    }
                                  ]}
                                  labelClassName="ds-u-margin-bottom--1"
                                  type="checkbox"
                                  onChange={({ target: { value } }) => {
                                    typeStatus[value] = !typeStatus[value];
                                    setTypeStatus(typeStatus);
                                    onChange(typeStatus);
                                  }}
                                  onBlur={onBlur}
                                  onComponentBlur={onBlur}
                                  errorMessage={
                                    errors?.updateStatus?.typeStatus?.message
                                  }
                                  errorPlacement="bottom"
                                />
                              )}
                            />
                          </div>
                        )
                      },
                      {
                        label: 'No, this is for a new project.',
                        value: 'no',
                        checked: value === 'no'
                      }
                    ]}
                    onChange={e => {
                      onChange(e);
                    }}
                    onBlur={onBlur}
                    onComponentBlur={onBlur}
                    errorMessage={errors?.mmisUpdate?.message}
                    errorPlacement="bottom"
                  />
                )}
              />

              <Controller
                name="businessList"
                control={control}
                render={({ field: { onBlur, onChange } }) => (
                  <ChoiceList
                    label="Medicaid Business Areas"
                    hint={
                      <div>
                        Select the Medicaid Enterprise Systems Business Area(s)
                        that cover the scope of this APD. A more detailed
                        description of these business areas, along with the
                        associated outcomes and metrics, are available at
                        the&nbsp;
                        <a
                          href="https://cmsgov.github.io/CMCS-DSG-DSS-Certification/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          MES Certification Repository
                        </a>
                        .
                      </div>
                    }
                    type="checkbox"
                    choices={[
                      {
                        label: '1115 or Waiver Support Systems',
                        value: 'waiverSupportSystems',
                        checked: businessAreas.waiverSupportSystems
                      },
                      {
                        label: 'Asset Verification System',
                        value: 'assetVerificationSystem',
                        checked: businessAreas.assetVerificationSystem
                      },
                      {
                        label: 'Claims Processing',
                        value: 'claimsProcessing',
                        checked: businessAreas.claimsProcessing
                      },
                      {
                        label: 'Decision Support System & Data Warehouse',
                        value: 'decisionSupportSystemDW',
                        checked: businessAreas.decisionSupportSystemDW
                      },
                      {
                        label: 'Electronic Visit Verification (EVV)',
                        value: 'electronicVisitVerification',
                        checked: businessAreas.electronicVisitVerification
                      },
                      {
                        label:
                          'Encounter Processing System (EPS) & Managed Care System',
                        value: 'encounterProcessingSystemMCS',
                        checked: businessAreas.encounterProcessingSystemMCS
                      },
                      {
                        label: 'Financial Management',
                        value: 'financialManagement',
                        checked: businessAreas.financialManagement
                      },
                      {
                        label: 'Health Information Exchange (HIE)',
                        value: 'healthInformationExchange',
                        checked: businessAreas.healthInformationExchange
                      },
                      {
                        label: 'Long Term Services & Suports (LTSS)',
                        value: 'longTermServicesSupports',
                        checked: businessAreas.longTermServicesSupports
                      },
                      {
                        label: 'Member Management',
                        value: 'memberManagement',
                        checked: businessAreas.memberManagement
                      },
                      {
                        label:
                          'Pharmacy Beefit Management (PBM) & Point of Sale (POS)',
                        value: 'pharmacyBenefitManagementPOS',
                        checked: businessAreas.pharmacyBenefitManagementPOS
                      },
                      {
                        label: 'Program Integrity',
                        value: 'programIntegrity',
                        checked: businessAreas.programIntegrity
                      },
                      {
                        label: 'Provider Management',
                        value: 'providerManagement',
                        checked: businessAreas.providerManagement
                      },
                      {
                        label: 'Third Party Liability (TPL)',
                        value: 'thirdPartyLiability',
                        checked: businessAreas.thirdPartyLiability
                      },
                      {
                        label: 'Other',
                        value: 'other',
                        checked: businessAreas.other,
                        checkedChildren: (
                          <div className="ds-c-choice__checkedChild">
                            <Controller
                              name="otherDetails"
                              control={control}
                              render={({ field: { onBlur, ...props } }) => (
                                <TextArea
                                  {...props}
                                  label="Other Medicaid Business Area(s)"
                                  name="other-mbas"
                                  data-cy="other_details"
                                  hint="Since the Medicaid Business is not listed above, provide the name of the Medicaid Business Area. If there are multiple, separate other business areas with a semi-colon."
                                  onBlur={onBlur}
                                  onChange={e => {
                                    setOtherDetails(e.target.value);
                                    setValue('otherDetails', e.target.value);
                                  }}
                                  onComponentBlur={onBlur}
                                  errorMessage={errors?.otherDetails?.message}
                                  errorPlacement="bottom"
                                />
                              )}
                            />
                          </div>
                        )
                      }
                    ]}
                    onChange={({ target: { value } }) => {
                      // Set boolean values for medicaid business areas
                      // For createApd
                      businessAreas[value] = !businessAreas[value];
                      setBusinessAreas(businessAreas);

                      // For validation
                      let keys = Object.keys(businessAreas).filter(
                        key => businessAreas[key]
                      );
                      onChange(keys);
                      setBusinessList(keys);
                    }}
                    onBlur={onBlur}
                    onComponentBlur={onBlur}
                    errorMessage={errors?.businessList?.message}
                    errorPlacement="bottom"
                  />
                )}
              />
            </div>
          )}

          <div className="ds-u-padding-y--3">
            <Button onClick={history.goBack}>Cancel</Button>

            {submitDisabled === true ? (
              <Tooltip
                className="ds-c-tooltip__trigger-link ds-u-float--right"
                component="a"
                onClose={function noRefCheck() {}}
                onOpen={function noRefCheck() {}}
                title="All fields are required to create an APD."
              >
                <TooltipIcon />
              </Tooltip>
            ) : null}

            <Button
              variation="primary"
              disabled={submitDisabled}
              className="ds-u-float--right"
              data-cy="create_apd_btn"
              onClick={createNew}
            >
              Create an APD
            </Button>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

ApdNew.propTypes = {
  createApd: PropType.func.isRequired
};

ApdNew.defaultProps = {
  route: '/apd'
};

const mapStateToProps = state => ({
  state: state.user.data.state || null,
  activities: state.user.data.activities
});

const mapDispatchToProps = {
  createApd
};

export default connect(mapStateToProps, mapDispatchToProps)(ApdNew);
