import React, { ChangeEvent } from "react";
import styled from "styled-components";

type ISearchFieldProps = {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder: string;
};

const StyledInputContainer = styled.div`
  position: relative;
`;
const StyledInput = styled.input`
  padding: 10px 30px 10px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  outline: none;
  color: #fff;

  &:focus {
    border-color: #007bff; /* Change border color on focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add box shadow on focus */
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
function SearchField({ onChange, value, placeholder }: ISearchFieldProps) {
  return (
    <StyledInputContainer>
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <SearchIcon>
        <span className="material-symbols-outlined">search</span>
      </SearchIcon>
    </StyledInputContainer>
  );
}

export default SearchField;
