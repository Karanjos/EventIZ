export interface InputProps {
  type?: string;
  placeholder: string;
  label: string;
  name: string;
  id: string;
  required: boolean;
  disabled: boolean;
}

const Input = ({
  type,
  placeholder,
  label,
  name,
  id,
  disabled,
  required,
}: InputProps) => {
  return (
    <div className="">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        className=""
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
    </div>
  );
};
export default Input;
