import PropTypes from 'prop-types';
import React, { useMemo, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useAsyncDebounce
} from 'react-table';

import {
  Button,
  Dropdown,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField
} from '@cmsgov/design-system';

import axios from '../../util/api';

import { PDFFileBlue } from '../../components/Icons';

const certificationRow = record => {
  const calculateStatus = (affiliationId, potentialMatches) => {
    if (affiliationId) {
      return 'Matched';
    }
    if (!affiliationId && Number(potentialMatches) > 0) {
      return 'Pending Match';
    }
    if (!affiliationId && Number(potentialMatches) === 0) {
      return 'No Match';
    }
    return '';
  };

  return {
    name: record.name,
    email: record.email,
    state: record.state.toUpperCase(),
    ffy: record.ffy,
    file: record.fileUrl,
    status: calculateStatus(record.affiliationId, record.potentialMatches),
    actions: record.affiliationId
  };
};

const makeData = payload => {
  return payload.map(record => {
    return {
      ...certificationRow(record)
    };
  });
};

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = React.useState(globalFilter);

  const onChange = useAsyncDebounce(val => {
    setGlobalFilter(val || undefined);
  }, 200);

  return (
    <span>
      <TextField
        name="globalFilter"
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        label="Search All"
      />
    </span>
  );
};

GlobalFilter.propTypes = {
  globalFilter: PropTypes.func.isRequired,
  setGlobalFilter: PropTypes.func.isRequired
};

const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id, Header }
}) => {
  const options = React.useMemo(() => {
    const opts = new Set();
    preFilteredRows.forEach(row => {
      opts.add(row.values[id]);
    });
    return [...opts.values()];
  }, [id, preFilteredRows]);

  return (
    <Dropdown
      name="dropdownFilter"
      label={Header}
      value={filterValue}
      options={[]}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Dropdown>
  );
};

SelectColumnFilter.propTypes = {
  column: PropTypes.array
};

SelectColumnFilter.defaultProps = {
  column: []
};

const SortIndicator = ({ canSort, isSorted, isSortedDesc }) => {
  if (canSort) {
    if (isSorted) {
      if (isSortedDesc) {
        return ' ▾';
      }
      return ' ▴';
    }
    return ' ⬍';
  }
  return '';
};

const StateAdminLetters = () => {
  const history = useHistory();

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const certificationLetters = await axios.get('/auth/certifications');
      setTableData(certificationLetters.data);
    }
    fetchData();
  }, []);

  const handleAddStateButton = () => {
    history.push('/delegate-state-admin');
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'FFY',
        accessor: 'ffy',
        disableSortBy: true
      },
      {
        Header: 'State',
        accessor: 'state',
        Filter: SelectColumnFilter,
        filter: 'includes'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectColumnFilter,
        filter: 'includes'
      },
      {
        Header: 'View',
        accessor: 'file',
        disableSortBy: true
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        disableSortBy: true
      }
    ],
    []
  );

  const data = useMemo(() => makeData(tableData), [tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state: { globalFilter, pageIndex, pageSize },
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div id="state-admin-letters">
      <Button onClick={handleAddStateButton} variation="primary">
        Add State Admin Letter
      </Button>

      <div
        className="ds-u-display--flex ds-u-justify-content--between"
        style={{ maxWidth: '30rem' }}
      >
        {headerGroups[0].headers
          .find(item => item.Header === 'Status')
          .render('Filter')}
        {headerGroups[0].headers
          .find(item => item.Header === 'State')
          .render('Filter')}
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <Table {...getTableProps()} className="ds-u-margin-top--1" borderless>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <SortIndicator
                    canSort={column.canSort}
                    isSorted={column.isSorted}
                    isSortedDesc={column.isSortedDesc}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if (cell.column.id === 'file') {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        <a href={`${cell.value}`}>
                          <PDFFileBlue />
                        </a>
                      </TableCell>
                    );
                  }
                  if (cell.column.id === 'actions') {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {/* Todo: Add actions here */}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="ds-u-display--flex ds-u-justify-content--end ds-u-padding-y--2">
        <label htmlFor="rowSizeSelect">Rows per page:</label>
        <select
          id="rowSizeSelect"
          value={pageSize}
          className="ds-u-margin-left--1 ds-u-margin-right--2"
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span className="ds-u-padding-x--1">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button
          type="button"
          style={{ border: 'none', background: 'transparent' }}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>{' '}
        <button
          type="button"
          style={{ border: 'none', background: 'transparent' }}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>{' '}
      </div>
    </div>
  );
};

StateAdminLetters.propTypes = {
  globalFilter: PropTypes.object,
  setGlobalFilter: PropTypes.object,
  column: PropTypes.array
};

StateAdminLetters.defaultProps = {
  globalFilter: {},
  setGlobalFilter: {},
  column: []
};

export default StateAdminLetters;