import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { APD_TYPE } from '@cms-eapd/common';

import Dollars from '../../../components/Dollars';
import { selectBudgetActivitiesByFundingSource } from '../../../redux/selectors/budget.selectors';

function DataRow({ category, data, title }) {
  return (
    <tr
      className={
        category === 'combined'
          ? 'budget-table--subtotal budget-table--row__highlight'
          : ''
      }
    >
      <th scope="row">{title}</th>
      <td className="budget-table--number">
        <Dollars>{data.state}</Dollars>
      </td>
      <td className="budget-table--number">
        <Dollars>{data.federal}</Dollars>
      </td>
      <td className="budget-table--number">
        <Dollars>{data.medicaid}</Dollars>
      </td>
    </tr>
  );
}

DataRow.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

const DataRowGroup = ({ data, year, apdType }) => {
  const categories = [
    { category: 'statePersonnel', title: 'State Staff' },
    { category: 'expenses', title: 'Other State Expenses' },
    { category: 'contractors', title: 'Private Contractor' },
    { category: 'combined', title: 'Subtotal' }
  ];
  apdType === APD_TYPE.MMIS
    ? categories.unshift({
        category: 'keyStatePersonnel',
        title: 'Key State Personnel'
      })
    : null;
  return (
    <Fragment>
      {categories.map(({ category, title }, i) => (
        <DataRow
          category={category}
          data={data[category][year]}
          key={i} // eslint-disable-line react/no-array-index-key
          title={title}
        />
      ))}
    </Fragment>
  );
};

DataRowGroup.propTypes = {
  data: PropTypes.object.isRequired,
  year: PropTypes.string.isRequired,
  apdType: PropTypes.string.isRequired
};

const HeaderRow = ({ yr, activity }) => {
  return (
    <tr>
      <th key={yr} id={`summary-budget-fy-${yr}-${activity}`}>
        {yr === 'total' ? 'Total' : `FFY ${yr}`}
      </th>
      <th className="ds-u-text-align--right" scope="col">
        State Total
      </th>
      <th className="ds-u-text-align--right" scope="col">
        Federal Total
      </th>
      <th className="ds-u-text-align--right" scope="col">
        Medicaid Total Computable
      </th>
    </tr>
  );
};

HeaderRow.propTypes = {
  yr: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired
};

const BudgetSummary = ({ activities, data, years, apdType }) => (
  <div>
    {apdType === APD_TYPE.HITECH && (
      <Fragment>
        <div>
          <h4 className="ds-h4 header-with-top-margin" aria-hidden="true">
            HIT Activities
          </h4>
          {[...years, 'total'].map(yr => (
            <table className="budget-table" key={yr} data-cy="summaryBudgetHIT">
              <caption className="ds-u-visibility--screen-reader">
                FFY {yr} HIT Activities
              </caption>
              <thead>
                <HeaderRow yr={yr} activity={'hit'} />
              </thead>
              <tbody>
                <DataRowGroup
                  data={data.hit}
                  entries={activities.hit}
                  year={yr}
                />
              </tbody>
            </table>
          ))}
        </div>

        <div>
          <h4 className="ds-h4 header-with-top-margin" aria-hidden="true">
            HIE Activities
          </h4>
          {[...years, 'total'].map(yr => (
            <table className="budget-table" key={yr} data-cy="summaryBudgetHIE">
              <caption className="ds-u-visibility--screen-reader">
                FFY {yr} HIE Activities
              </caption>
              <thead>
                <HeaderRow yr={yr} activity={'hie'} />
              </thead>
              <tbody>
                <DataRowGroup
                  data={data.hie}
                  entries={activities.hie}
                  year={yr}
                />
              </tbody>
            </table>
          ))}
        </div>
      </Fragment>
    )}

    <div>
      <h4 className="ds-h4 header-with-top-margin" aria-hidden="true">
        MMIS Activities
      </h4>
      {[...years, 'total'].map(yr => (
        <table className="budget-table" key={yr} data-cy="summaryBudgetMMIS">
          <caption className="ds-u-visibility--screen-reader">
            FFY {yr} MMIS Activities
          </caption>
          <thead>
            <HeaderRow yr={yr} activity={'mmis'} />
          </thead>
          <tbody>
            <DataRowGroup
              data={data.mmis}
              entries={activities.mmis}
              year={yr}
              apdType={apdType}
            />
          </tbody>
        </table>
      ))}
    </div>

    <table className="budget-table" data-cy="summaryBudgetTotals">
      <caption className="ds-h4">Activities Totals</caption>
      <thead>
        <tr>
          <td className="th" id="summary-budget-null1" />
          <th scope="col" className="ds-u-text-align--right">
            State Total
          </th>
          <th scope="col" className="ds-u-text-align--right">
            Federal Total
          </th>
          <th scope="col" className="ds-u-text-align--right">
            Medicaid Total Computable
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data.combined).map(ffy => {
          const combined = data.combined[ffy];
          return (
            <tr
              key={ffy}
              className={
                ffy === 'total'
                  ? 'budget-table--row__highlight budget-table--total'
                  : ''
              }
            >
              <th scope="row">{ffy === 'total' ? 'Total' : `FFY ${ffy}`}</th>
              <td className="budget-table--number">
                <Dollars>{combined.state}</Dollars>
              </td>
              <td className="budget-table--number">
                <Dollars>{combined.federal}</Dollars>
              </td>
              <td className="budget-table--number">
                <Dollars>{combined.medicaid}</Dollars>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

BudgetSummary.propTypes = {
  activities: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  years: PropTypes.array.isRequired,
  apdType: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    activities: selectBudgetActivitiesByFundingSource(state),
    data: state.budget,
    years: state.apd.data.years
  };
};

export default connect(mapStateToProps)(BudgetSummary);

export {
  BudgetSummary as plain,
  mapStateToProps,
  DataRow,
  DataRowGroup,
  HeaderRow
};
