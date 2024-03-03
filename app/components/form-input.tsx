export interface IInputProps {
  label?: string;
  type: string;
  placeholder: string;
  required: boolean;
  errors?: string[];
}
export default function FormInput({
  label,
  type,
  placeholder,
  required,
  errors,
}: IInputProps) {
  return (
    <div>
      <p>{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-blue-500 border-none placeholder:text-neutral-400"
      />
      {errors?.map((err, index) => (
        <span key={index}>{err}</span>
      ))}
    </div>
  );
}
