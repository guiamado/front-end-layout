import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Filters from 'components/filters/Filters';

type Props = {
    isModalOpenProp: boolean;
    onCloseModal: (data?: any) => void;
}

const FloatingActionButton: React.FC<Props> = (props) => {
    const { isModalOpenProp, onCloseModal } = props;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    useEffect(() => {
        setIsModalOpen(isModalOpenProp);
    }, [isModalOpenProp]);

    function closeModal() {
        setIsModalOpen(false);
        onCloseModal();
    }

    return (<>
        <Modal
            size="lg"
            show={isModalOpen}
            onHide={() => closeModal()}
            className="modal-style"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Filters
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                < Filters/>
            </Modal.Body>
        </Modal>
</>);
}

export default FloatingActionButton;
