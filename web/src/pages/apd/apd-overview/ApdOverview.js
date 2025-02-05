import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  ChoiceList,
  TextField,
  Tooltip,
  TooltipIcon
} from '@cmsgov/design-system';
import { connect } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { sharedApdOverviewFields as schema, APD_TYPE } from '@cms-eapd/common';

import {
  addYear,
  removeYear,
  setApdName
} from '../../../redux/actions/editApd';
import { Section } from '../../../components/Section';
import { t } from '../../../i18n';

import TempAlert from '../../../components/TempAlert';

import {
  selectSummary,
  selectAdminCheckEnabled
} from '../../../redux/selectors/apd.selectors';
import { useFlags } from 'launchdarkly-react-client-sdk';

import ApdOverviewHITECHFields from './ApdOverviewHITECHFields';
import ApdOverviewMMISFields from './ApdOverviewMMISFields';
import ApdUpdate from '../../../components/ApdUpdate';
import DeleteModal from '../../../components/DeleteModal';
import Instruction from '../../../components/Instruction';

const renderApdTypeSpecificFields = apdType => {
  const apdTypeSpecificFieldsMapping = {
    [APD_TYPE.HITECH]: <ApdOverviewHITECHFields />,
    [APD_TYPE.MMIS]: <ApdOverviewMMISFields />
  };
  return apdTypeSpecificFieldsMapping[apdType];
};

const ApdOverview = ({
  addApdYear,
  apdType,
  name,
  removeApdYear,
  setName,
  years,
  yearOptions,
  adminCheck
}) => {
  const [elementDeleteFFY, setElementDeleteFFY] = useState(null);
  const { enableMmis } = useFlags();

  const {
    control,
    formState: { errors },
    setValue,
    trigger,
    clearErrors
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: joiResolver(schema),
    defaultValues: {
      name: name
    }
  });

  useEffect(() => {
    if (adminCheck) {
      trigger();
    } else {
      clearErrors();
    }
  }, [adminCheck]); // eslint-disable-line react-hooks/exhaustive-deps

  // Since name can be edited from outside the component (ApdHeader),
  // we need to set the value inside react hook form
  // so the error message correctly reflects name changes
  useEffect(() => {
    setValue('name', name);
    trigger('name');
  }, [name, setValue, trigger]);

  const onChangeName = ({ target: { value } }) => {
    setValue('name', value);
    setName(value);
  };

  const onBlurName = ({ target: { value } }) => {
    const apdNameInput = value;
    if (adminCheck) {
      trigger('name');
    }

    if (apdNameInput.trim() === '') {
      setName('Untitled APD');
    } else {
      setName(apdNameInput);
    }
  };

  const onRemove = () => {
    removeApdYear(elementDeleteFFY.value);
    setElementDeleteFFY(null);
  };

  const onCancel = () => {
    setElementDeleteFFY(null);
    elementDeleteFFY.checked = true;
  };

  const handleYears = e => {
    const year = e.target.value;

    if (e.target.checked === false) {
      setElementDeleteFFY(e.target);
    } else {
      addApdYear(year);
      e.target.checked = true;
    }
  };

  const yearChoices = yearOptions.map(year => ({
    defaultChecked: years.includes(year),
    label: year,
    value: year
  }));

  const getLabelElement = () => {
    if (years.length > 0) {
      return t('apd.overview.years.instruction.heading');
    }
    return (
      <React.Fragment>
        {t('apd.overview.years.instruction.heading')}
        <Alert variation="error">
          <div style={{ fontWeight: 400 }}>
            At least one FFY must be selected to continue with your APD. Select
            your FFY(s).
          </div>
        </Alert>
      </React.Fragment>
    );
  };

  return (
    <Section resource="apd">
      <hr className="custom-hr" />
      <TempAlert />
      <Instruction
        labelFor="apd-type-list"
        source="apd.overview.apdType"
        disableTitleCaseConversion
      />
      <div className="apd_type_choice-container" id="apd-type-list">
        <ChoiceList
          type="radio"
          className="apd_disabled_choice"
          name="HITECH choice"
          label="HITECH choice"
          labelClassName="hidden-display"
          choices={[
            {
              defaultChecked: !enableMmis || apdType === APD_TYPE.HITECH,
              disabled: true,
              label: 'HITECH IAPD'
            }
          ]}
        />
        <span className="tooltip-container">
          <Tooltip
            className="ds-c-tooltip__trigger-link"
            component="a"
            onClose={function noRefCheck() {}}
            onOpen={function noRefCheck() {}}
            title="Health Information Techology for Economic and Clinical Health"
          >
            <TooltipIcon />
          </Tooltip>
        </span>
      </div>
      {enableMmis == true && (
        <div className="apd_type_choice-container">
          <ChoiceList
            type="radio"
            className="apd_disabled_choice"
            name="MMIS choice"
            label="MMIS choice"
            labelClassName="hidden-display"
            choices={[
              {
                defaultChecked: apdType === APD_TYPE.MMIS,
                disabled: true,
                label: 'MMIS IAPD'
              }
            ]}
          />
          <span className="tooltip-container">
            <Tooltip
              className="ds-c-tooltip__trigger-link"
              component="a"
              onClose={function noRefCheck() {}}
              onOpen={function noRefCheck() {}}
              title="Medicaid Management Information System"
            >
              <TooltipIcon />
            </Tooltip>
          </span>
        </div>
      )}
      <Controller
        name="name"
        control={control}
        render={() => {
          return (
            <TextField
              id="apd-overview-name-field"
              label="APD Name"
              labelClassName="label-header"
              className="remove-clearfix"
              name="name"
              value={name}
              onBlur={onBlurName}
              onChange={onChangeName}
              errorMessage={adminCheck && errors?.name?.message}
              errorPlacement="bottom"
            />
          );
        }}
      />
      <div className="ds-u-margin-y--3" data-cy="yearList">
        <ChoiceList
          choices={yearChoices}
          label={getLabelElement()}
          labelClassName="ds-u-margin-bottom--1 label-header"
          hint={t('apd.overview.years.instruction.detail')}
          name="apd-years"
          onChange={handleYears}
          type="checkbox"
        />
      </div>
      <ApdUpdate />
      {renderApdTypeSpecificFields(apdType)}
      {elementDeleteFFY && (
        <DeleteModal objType="FFY" onCancel={onCancel} onDelete={onRemove} />
      )}
    </Section>
  );
};

ApdOverview.propTypes = {
  addApdYear: PropTypes.func.isRequired,
  apdType: PropTypes.string,
  removeApdYear: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
  yearOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  adminCheck: PropTypes.bool
};

ApdOverview.defaultProps = {
  adminCheck: false
};

const mapStateToProps = state => ({
  adminCheck: selectAdminCheckEnabled(state),
  apdType: state.apd.data.apdType,
  ...selectSummary(state)
});

const mapDispatchToProps = {
  addApdYear: addYear,
  removeApdYear: removeYear,
  setName: setApdName
};

export default connect(mapStateToProps, mapDispatchToProps)(ApdOverview);

export { ApdOverview as plain, mapStateToProps, mapDispatchToProps };
