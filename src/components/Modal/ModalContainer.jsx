/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';

const ModalContainer = ({children, ...props}) => {
  return (
    <>
        <Modal
          animation={true}
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="false"
        >
            <Modal.Header closeButton/>
            {children}
        </Modal>
    </>
  )
}

export default ModalContainer