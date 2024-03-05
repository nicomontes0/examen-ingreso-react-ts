import React, { useState } from 'react';
import './App.css';

interface CheckboxProps{
  checked: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
  label: string,
};

const Checkbox = ({checked, onChange, label}: CheckboxProps ) => (
    <label className='countries__input'>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
);

interface Country {
  id: number;
  name: string;
}

const COUNTRIES: Country[] = [
  { id: 1, name: 'India' },
  { id: 2, name: 'USA' },
  { id: 3, name: 'France' },
];

const INITIAL_STATE_COUNTRIES: number[] = [];

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<number[]>(INITIAL_STATE_COUNTRIES);
  const areAllSelected = selectedCountries.length === COUNTRIES.length;

  const handleCountryChange = (countryId: number) => {
    if (selectedCountries.includes(countryId)) {
      setSelectedCountries(selectedCountries.filter(id => id !== countryId));
    } else {
      setSelectedCountries([...selectedCountries, countryId]);
    }
  };

  const handleSelectAll = () => {
    setSelectedCountries(areAllSelected ? INITIAL_STATE_COUNTRIES : COUNTRIES.map(country => country.id));
  };

  return (
    <div className='countries'>
        <Checkbox 
          checked={areAllSelected}
          onChange={handleSelectAll}
          label='Select All'
        />
      {COUNTRIES.map(({id, name}) => (
        <Checkbox
          key={id}
          checked={selectedCountries.includes(id)}
          onChange={() => handleCountryChange(id)}
          label={name}
        />
      ))}
    </div>
  );
}

export default App;
