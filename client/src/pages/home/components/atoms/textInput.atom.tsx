import { I_TextProps } from '../../../../types/types'
import '../../styles/searchInput.style.css';

export const TextInputAtom = ({label, name, value, callback}: I_TextProps) => {
  return (
    <div className='search-input-inputs-container'>
      <label>
        {label}:
      </label>
      <input
        className='search-input-input-element'
        name={name}
        value={value}
        onChange={(e) => callback(e)}
      />
    </div>
  )
}


