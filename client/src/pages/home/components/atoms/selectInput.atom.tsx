import { SELECT_OPTIONS } from '../../../../constants/selectOptions.const';
import { I_SelectProps, I_SelectOptions } from '../../../../types/types';
import '../../styles/searchInput.style.css';

const SelectInputAtom = ({label, name, value, callback}: I_SelectProps) => {
  const displayOptions = () => {
    return SELECT_OPTIONS.map((option: I_SelectOptions) => {
      return <option key={option.text} value={option.value}>
        {option.text}
      </option>
    })
  }

  return (
    <div className='search-input-inputs-container'>
      <label>
        {label}:
      </label>
      <select
        className='search-input-input-element'
        name={name}
        value={value}
        onChange={(e) => callback(e)}
      >
        {displayOptions()}
      </select>
    </div>
  )
}

export default SelectInputAtom
