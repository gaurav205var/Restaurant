import React, { useState } from 'react';
import successimg from "../img/success.png";
import "../styles/CheckOutModal.css";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
} from 'mdb-react-ui-kit';

export default function CheckOutModal() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

    const stylingModal = {
        width: '23rem',
        height: '28rem',
        position: 'relative',
        top: '4rem',
        background: '#191919',
    };

    return (
        <>
            <MDBBtn onClick={toggleOpen} className="btn btn-success btn-lg btn-flex " style={{ width: '300px' }} >GO TO CHECKOUT</MDBBtn>
            <MDBModal open={basicModal} setopen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent style={stylingModal}>
                        <MDBModalHeader style={{ border: 'none' }}>
                            <MDBModalTitle className='title'>
                                <img src={successimg} alt='' className='simg' />
                            </MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody className='mdlbdy'>
                            <h3>Order Completed</h3>
                            <hr />
                        </MDBModalBody>
                        <button className='cbtn' onClick={() => setBasicModal(false)}>
                            Continue Shopping
                        </button>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
