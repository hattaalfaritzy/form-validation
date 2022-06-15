import clsx from 'clsx';
import PropTypes from 'prop-types';

function InputCheckbox({
  id, register, checked, onChange,
  defaultChecked, disabled,
  classNameWrapper, label, labelClassName, iconLabelRight, ...props
}) {
  return (
    <div className={clsx('flex items-center', classNameWrapper)}>
      <label
        htmlFor={id}
        className={clsx('inline-flex items-center', disabled ? 'opacity-80' : 'cursor-pointer')}
      >
        <input
          type="checkbox"
          id={id}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          {...register}
          {...props}
        />
        <div className={clsx('form-label px-2', labelClassName)}>{label}</div>
      </label>
      {iconLabelRight && iconLabelRight}
    </div>
  );
}

InputCheckbox.propTypes = {
  register: PropTypes.object.isRequired,
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  classNameWrapper: PropTypes.string,
  label: PropTypes.node.isRequired,
  labelClassName: PropTypes.string,
  iconLabelRight: PropTypes.node,
};

export default InputCheckbox;