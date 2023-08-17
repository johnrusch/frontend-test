import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  idPrefix: string;
  name: string;
  options: CheckboxOption[];
  className?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  idPrefix,
  name,
  options,
  className,
}) => (
  <div className={className}>
    <h6>{name}</h6>
    <div className="checkbox mt-0 smallish">
      {options.map(({ value, label }) => (
        <label key={value} className="d-inline-block mr-3 pl-35">
          <input
            id={`${idPrefix}-${value}`}
            value={value}
            name={name}
            type="checkbox"
          />
          <i className="helper"></i>
          {label}
        </label>
      ))}
    </div>
  </div>
);

export default CheckboxGroup;
