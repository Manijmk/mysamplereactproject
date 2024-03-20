import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import '../App.css'
import ModalComponent from "./ModalComponent";


function LandingPage() {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(true)
    }

    const handleClose = () => setShowModal(false)


    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#c1eef4', height: '100vh' }}>
                    <Button variant="outlined" className="buttoninlandingpage" onClick={handleModal}>Save Segment</Button>
                </Box>
            </Container>

           <ModalComponent showModal={showModal} handleClose={handleClose} />
        </>
    )

}

export default LandingPage;