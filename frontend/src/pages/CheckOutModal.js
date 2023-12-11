import React, { useState, useEffect } from 'react';
import successimg from '../img/success.png';
import '../styles/CheckOutModal.css';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
} from 'mdb-react-ui-kit';

export default function CheckOutModal({ open, onClose }) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handlePostCart = async () => {
            try {
                setIsLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                // Replace the following line with your actual dispatch
                // await dispatch(postCartData(cart));
                setIsSuccess(true);
            } catch (error) {
                setIsSuccess(false);
            } finally {
                setIsLoading(false);
            }
        };

        if (open) {
            handlePostCart();
        }
    }, [open]);

    const stylingModal = {
        width: '23rem',
        height: '28rem',
        position: 'relative',
        top: '4rem',
        background: '#191919',
    };

    return (
        <MDBModal open={open} setopen={onClose} tabIndex="-1">
            <MDBModalDialog>
                <MDBModalContent style={stylingModal}>
                    {isSuccess ? (
                        <>
                            <MDBModalHeader style={{ border: 'none' }}>
                                <MDBModalTitle className='title'>
                                    <img src={successimg} alt='' className='simg' />
                                </MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody className='mdlbdy'>
                                <h3>Order Completed</h3>
                                <hr />
                                <button className='cbtn' onClick={onClose}>
                                    Continue Shopping
                                </button>
                            </MDBModalBody>
                        </>
                    ) : isLoading ? (
                        <MDBModalBody className='mdlbdy'>
                            <h3>Processing order...</h3>
                        </MDBModalBody>
                    ) : (
                        <MDBModalBody className='mdlbdy'>
                            <MDBBtn
                                onClick={onClose}
                                className='btn btn-success btn-lg btn-flex'
                            >
                                GO TO CHECKOUT
                            </MDBBtn>
                        </MDBModalBody>
                    )}
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}

