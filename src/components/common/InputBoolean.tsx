import { twMerge } from "tailwind-merge";

type Props = {
  onChange: (bool: boolean) => void;
  label?: React.ReactNode;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  defaultValue?: boolean;
};
const InputBoolean: React.FC<Props> = ({
  onChange,
  label,
  placeholder,
  className,
  inputClassName,
  labelClassName,
  defaultValue,
}) => {
  return (
    <div className={twMerge("flex gap-1", className)}>
      {label && (
        <div
          className={twMerge(
            "flex items-center text-base font-medium leading-6 text-zinc-100",
            labelClassName
          )}
        >
          {label}
        </div>
      )}
      <input
        defaultChecked={defaultValue}
        type="checkbox"
        className={twMerge(
          "block w-[16px] rounded-md border-0 text-gray-900",
          inputClassName
        )}
        placeholder={placeholder || "Type here..."}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
    </div>
  );
};

export default InputBoolean;
