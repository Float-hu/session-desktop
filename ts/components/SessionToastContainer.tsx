import React from 'react';
import { Slide, ToastContainer, ToastContainerProps } from 'react-toastify';
import styled from 'styled-components';

const WrappedToastContainer = ({
  className,
  ...rest
}: ToastContainerProps & { className?: string }) => (
  <div className={className}>
    <ToastContainer {...rest} />
  </div>
);

const SessionToastContainerPrivate = () => {
  return (
    <WrappedToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={true}
      transition={Slide}
      limit={5}
    />
  );
};

// tslint:disable-next-line: no-default-export
export const SessionToastContainer = styled(SessionToastContainerPrivate).attrs({
  // custom props
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
