import React, { useState } from 'react'
import { baseGraphValues } from '../../../constants/selectOptions.const';
import { I_GraphValues } from '../../../types/types';
import SelectInputAtom from './atoms/selectInput.atom';
import { TextInputAtom } from './atoms/textInput.atom';
import '../styles/searchInput.style.css'


interface I_Props {
  fetchCPUMetrics: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    graphValues: I_GraphValues
  ) => Promise<void>
}


const SearchInputFC: React.FC<I_Props> = ({ fetchCPUMetrics }) => {
  const [graphValues, setGraphValues] = useState<I_GraphValues>(baseGraphValues);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const update = {
      ...graphValues,
      [name]: value
    }
    setGraphValues(update);
  };

  return (
    <form className='search-input-form'>
      <SelectInputAtom 
        label={'Time Period'}
        name={'timePeriod'}
        value={graphValues.timePeriod}
        callback={onChangeHandler}
      />
      <TextInputAtom
        label={'Period (seconds)'}
        name={'interval'}
        value={graphValues.interval}
        callback={onChangeHandler}
      />
      <TextInputAtom
        label={'IP Address'}
        name={'IP'}
        value={graphValues.IP}
        callback={onChangeHandler}
      />
      <div className='search-input-submit-btn-container'>
        <button
          className='search-input-submit-btn'
          onClick={(event) => fetchCPUMetrics(event, graphValues)}
        >
          Submit
        </button>
      </div>
    </form>
  )
}


export default SearchInputFC
