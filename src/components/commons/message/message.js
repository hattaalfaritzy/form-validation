import clsx from 'clsx';
import PropTypes from 'prop-types';
import { MdCheckCircle, MdError, MdInfo, MdInfoOutline } from 'react-icons/md';

export default function Message({
  type = 'error', children, className,
}) {
  if (!children) return null;

  const Icon = {
    success: MdCheckCircle,
    info: MdInfo,
    warning: MdError,
    error: MdError,
    alert: MdInfoOutline,
  }[type];

  const style = {
    success: 'bg-special-success text-special-success',
    info: 'bg-special-info text-special-info',
    warning: 'bg-special-warning text-special-warning',
    error: 'bg-special-danger text-special-danger',
    alert: 'bg-special-success text-white',
  }[type];

  return (
    <div className={clsx('flex justify-start items-center rounded-lg px-3 py-1.5 bg-opacity-5 w-full', style, className)}>
      <Icon className="text-xs" />
      <div className="flex-1 px-1 text-xs">{children}</div>
    </div>
  );
}

Message.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'alert']),
  children: PropTypes.node,
  className: PropTypes.string,
};
