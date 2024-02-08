import React, { useState } from 'react';

const countries = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '233', name: 'Ghana'}
];

const AppointmentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        {/* Populate with your time options */}
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        {/* Add more options as needed */}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
