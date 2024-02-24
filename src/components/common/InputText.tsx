import { ChangeEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: React.ReactNode;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};
const InputText: React.FC<Props> = ({
  onChange,
  label,
  placeholder,
  className,
  inputClassName,
  labelClassName,
}) => {
  return (
    <div className={twMerge("pb-2", className)}>
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
        maxLength={60}
        type="text"
        className={twMerge(
          "h-[40px] block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300",
          "placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
          inputClassName
        )}
        placeholder={placeholder || "Type here..."}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
