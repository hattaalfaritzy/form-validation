import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Message } from '../../commons';

export default function InputText({
  className, classNameError, label, register, errors, 
  iconLeft, iconRight, ...props
}) {

  return (
    <div className={clsx('flex flex-col w-full', className)}>
      {label && (
        <div className='form-label'>{label}</div>
      )}
      <div className="relative flex justify-between items-center w-full">
        {iconLeft && (
          <div className="pr-4 z-10">
            {iconLeft}
          </div>
        )}
        <input
          className={clsx('form-control')}
          {...register}
          {...props}
        />
        {iconRight && (
          <div className="pl-4 z-10">
            {iconRight}
          </div>
        )}
      </div>
      <div className='bg-primary h-0.5 relative'>
        <div className={clsx('bg-special-danger absolute flex h-full', errors ? 'left-0 transition-[width] duration-1000 w-full' : 'right-0 transition-[width] duration-1000 w-0')} />
      </div>
      {errors && <Message className='mt-2'>{errors}</Message>}
    </div>
  );
}

InputText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.object.isRequired,
  errors: PropTypes.object,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
};
