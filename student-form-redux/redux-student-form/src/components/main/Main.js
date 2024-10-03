import React, { useState } from 'react';
import Form from '../form/Form';
import Search from '../search/Search';
import Table from '../table/Table';
import Error from '../error/Error';
import { useSelector } from 'react-redux';

function Main() {
  const [submittedDataList, setSubmittedDataList] = useState([]);
  const [filter, setFilter] = useState('');
  const formError = useSelector((state) => state.form.error);

  const handleFormSubmit = (formData) => {
    const newSerialNumber = submittedDataList.length + 1;
    const newData = { ...formData, serial: newSerialNumber };
    setSubmittedDataList([...submittedDataList, newData]);
  };

  const handleInputChange = (value) => {
    setFilter(value);
  };

  const filteredData = submittedDataList.filter((item) =>
    item.RegNumber.includes(filter)
  );

  return (
    <div>
      <h2>Student Form</h2>
      <Form onFormSubmit={handleFormSubmit} />
      
      {formError && <Error errors={formError} />}

      <h3>Search</h3>
      <Search filter={filter} onInputChange={handleInputChange} />

      <h3>Submitted Data</h3>
      <Table data={filteredData} />
    </div>
  );
}

export default Main;
