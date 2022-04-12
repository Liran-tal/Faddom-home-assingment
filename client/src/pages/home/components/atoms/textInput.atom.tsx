import { I_TextProps } from '../../../../types/types'

export const TextInputAtom = ({label, name, value, callback}: I_TextProps) => {
  return (
    <div className='graph-info-inputs-container'>
      <label>
        {label}:
      </label>
      <input
        className='graph-info-input-element'
        name={name}
        value={value}
        onChange={(e) => callback(e)}
      />
    </div>
  )
}


