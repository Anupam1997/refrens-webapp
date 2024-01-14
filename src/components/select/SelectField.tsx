import React from "react";
type Option = {
  label: string;
  value: string;
};

type ISelectFieldProps = {
  name: string;
  id: string;
  value: string;
  onChange: (value: any) => void;
  options: Option[];
};

function SelectField({
  name,
  id,
  value,
  onChange,
  options,
}: ISelectFieldProps) {
  return (
    <select name={name} id={id} value={value} onChange={onChange}>
      <option value={""}>{`Select ${name}`}</option>
      {options.map(({ label, value }) => {
        return <option value={value}>{label}</option>;
      })}
    </select>
  );
}

export default SelectField;
