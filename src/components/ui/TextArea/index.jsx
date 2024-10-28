import { twMerge } from "tailwind-merge";

export default function TextArea({
  className,
  startIcon,
  endIcon,
  startIconClassess,
  endIconClassess,
  ...props
}) {
  return (
    <div>
      <div className="relative w-full mb-1">
        {startIcon && (
          <div
            className={twMerge(
              `absolute top-1/2 -translate-y-1/2 start-2`,
              startIconClassess
            )}
          >
            {startIcon}
          </div>
        )}
        <textarea
          style={{ resize: "none" }}
          {...props}
          {...(props.register || {})}
          className={twMerge(
            `block duration-150 font-sans w-full px-3 rounded-lg border-0 py-2 text-gray-900 shadow-sm ring-[1px] ring-inset ring-[#E0E0E0] placeholder:text-gray-400  focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 ${
              props.error && "ring-warning-500"
            }`,
            endIcon && "pe-10",
            startIcon && "ps-10",
            className
          )}
        />

        {endIcon && (
          <div className="absolute top-1/2 -translate-y-1/2 end-2">
            {endIcon}
          </div>
        )}
      </div>
    </div>
  );
}
