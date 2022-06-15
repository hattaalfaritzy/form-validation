import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../components/commons/button/button';
import Modal from '../components/commons/modal/modal';

export default function useAlert(initialIsOpen, { initialData, onRequestClose } = {}) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [modalData, setModalData] = useState(initialData || {});

  const open = (data) => {
    setModalData(data);
    setTimeout(() => {
      setIsOpen((prevStateIsOpen) => {
        if (prevStateIsOpen) { // If modal is already opened, close first then open it again
          setTimeout(() => {
            setIsOpen(true);
          }, 200);
          return false;
        }
        return true;
      });
    }, 300);
  };

  const close = () => {
    if (onRequestClose) onRequestClose();
    setIsOpen(false);
  };

  const props = {
    isOpen,
    onRequestClose: close,
  };

  return {
    open,
    close,
    props,
    data: modalData,
  };
}

export function Alert({
  type = 'success', title, description, labelPrimaryButton, onClickPrimaryButton, chidlren, ...props
}) {
  const alertIcon = {
    success: '/icons/check-circle.svg',
  }[type];

  return (
    <Modal {...props} className="max-w-lg">
      <div className="flex flex-col items-center ">
        {!!alertIcon && (
          <div className="mb-7">
            <Image src={alertIcon} height={66} width={66} />
          </div>
        )}

        {!!title && (<div className="h3 font-serif">{title}</div>)}
        {!!description && (
          <div className="text-base text-dark-secondary py-8">{description}</div>
        )}

        {!!labelPrimaryButton && (
          <Button label={labelPrimaryButton} size="lg" className="w-full" onClick={onClickPrimaryButton || props.onRequestClose} />
        )}

      </div>
    </Modal>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success']),
  title: PropTypes.string,
  description: PropTypes.string,
  labelPrimaryButton: PropTypes.string,
  onClickPrimaryButton: PropTypes.func,
  chidlren: PropTypes.node,
  onRequestClose: PropTypes.func,
};
