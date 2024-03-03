interface IButtonProps {
  loading?: boolean;
  text: string;
}
export default function FormButton({ loading, text }: IButtonProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn 
    disabled:bg-neutral-300 
    disabled:text-neutral-100 
    disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
}
