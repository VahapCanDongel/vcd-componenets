import clsx from 'clsx';

export default function Button({ children, className, disabled, success, rounded, error, small, large, onClick}) {
  return (
    <button
      className={clsx(
        'shadow-md bg-gray-400 py-2 px-8  leading-6 rounded-md text-white cursor-pointer inline justify-center items-center hover:bg-gray-500 transition focus-visible:ring-2 focus:scale-[0.98] ring-gray-400 outline-none ring-offset-1 max-w-[100px]',
        disabled && 'disabled:bg-indigo-200 cursor',
        success && 'bg-green-400',
        error && 'bg-red-400',
        rounded && 'rounded-2xl',
        className
      )}
        onClick={onClick}
    >
      {children}
    </button>
  );
}
