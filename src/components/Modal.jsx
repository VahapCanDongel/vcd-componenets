import clsx from 'clsx';

export default function Modal({ children, openstate, className }) {
  const modalContentClasses = clsx(
    'bg-white',
    'w-full md:w-[500px] h-full md:h-[500px]',
    'rounded-md',
    'z-50',
    'shadow-lg',
    className
  );

  const modalOverlayClasses = clsx(
    'fixed inset-0 flex justify-center items-center'
  );

  if(openstate == true){
    return (
        <div className={modalOverlayClasses}>
          <div className={modalContentClasses}>{children}</div>
        </div>
      );
  }
  
}
