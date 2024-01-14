type ISearchFieldProps = {
  onChange: (value: any) => void;
  value: any;
  placeholder: string;
};
function SearchField({ onChange, value, placeholder }: ISearchFieldProps) {
  return <input value={value} placeholder={placeholder} onChange={onChange} />;
}

export default SearchField;
