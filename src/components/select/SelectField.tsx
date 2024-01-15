import React, { ChangeEvent } from "react";
import styled from "styled-components";
type Option = {
  label: string;
  value: string;
};

type ISelectFieldProps = {
  name: string;
  id: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
};

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;

  &:focus {
    border-color: #007bff; /* Change border color on focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add box shadow on focus */
  }
`;

const StyledOption = styled.option`
  background-color: rgba(0, 0, 0, 1);
`;

function SelectField({
  name,
  id,
  value,
  onChange,
  options,
}: ISelectFieldProps) {
  return (
    <StyledSelect name={name} id={id} value={value} onChange={onChange}>
      <StyledOption value={""}>{`Select ${name}`}</StyledOption>
      {options.map(({ label, value }) => {
        return (
          <StyledOption key={value} value={value}>
            {label}
          </StyledOption>
        );
      })}
    </StyledSelect>
  );
}

export default SelectField;
