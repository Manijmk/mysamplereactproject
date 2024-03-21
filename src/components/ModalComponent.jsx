import React, { useState } from "react";

import { Alert, Modal, Snackbar, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import { InputLabel, TextField } from "@mui/material";
import { Button, MenuItem, Select } from '@mui/material'
import {SaveSchema} from '../services/SaveService.js'


function ModalComponent({ showModal, handleClose }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const initialData = [
        {
            "id": 1,
            "value": "First Name",
            "key": "first_name"
        }, {
            "id": 2,
            "value": "Last Name",
            "key": "last_name"
        }, {
            "id": 3,
            "value": "Gender",
            "key": "gender"
        }, {
            "id": 4,
            "value": "Age",
            "key": "age"
        }, {
            "id": 5,
            "value": "Account Name",
            "key": "account_name"
        }, {
            "id": 6,
            "value": "City Name",
            "key": "city_name"
        }, {
            "id": 7,
            "value": "State Name",
            "key": "state_name"
        }]

    const [dropdownValue, setDropdownValue] = useState('');
    const [segmentName, setSegmentName] = useState('');
    const [addedSchemaValue, setAddedSchemaValue] = useState([]);
    const [data, setData] = useState(initialData);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    function handleChange(event) {
        setDropdownValue(event.target.value)
    }

    const handleAddSchema = () => {
        if (dropdownValue) {
            const selectedSchema = data.find(schema => schema.value === dropdownValue)
            setAddedSchemaValue([...addedSchemaValue, selectedSchema])
            setData(data.filter(schema => schema.value !== dropdownValue))
            setDropdownValue('')
        }
    };

    const handleRemoveSchema = (schemaId) => {
        const removedSchema = addedSchemaValue.find(schema => schema.id === schemaId);
        setAddedSchemaValue(addedSchemaValue.filter(schema => schema.id !== schemaId));
        setData([...data, removedSchema]);
    };

    const handleSave = async () => {

        const obj = {
            segment_name: segmentName,
            schema: addedSchemaValue.reduce((acc, schema) => {
                acc.push({ [schema.key]: schema.value });
                return acc;
            }, [])
        };

        console.log('obj', obj);

        try {
            const res = await SaveSchema(obj);
            if (res.status === 200) {
                <Snackbar open={open} autoHideDuration={4000} onClose={handleToastClose}>
                    <Alert
                        onClose={handleToastClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Saved Successfully !
                    </Alert>
                </Snackbar>
                // toast.success("Profile upload successfully");
            } else {
                // toast.error("Profile upload failed");
                console.error("Error:", error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, width: 500, height: 700 }}>

                <InputLabel>Enter the Name of the Segment</InputLabel>
                <TextField id="outlined-basic" placeholder="Name of the Segment" value={segmentName} onChange={(e) => setSegmentName(e.target.value)} fullWidth size="small" variant="outlined" />

                <Typography variant="body1" gutterBottom marginTop={3}>
                    To Save your segment, you need to add the schemas to build query.
                </Typography>

                {addedSchemaValue.map((x) => (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: "3%" }}>

                        <Select
                            value={x.value}
                            inputProps={{ 'aria-label': 'Without label' }}
                            placeholder='Add Schema to segment'
                            readOnly
                            style={{ width: '80%', marginRight: '10px', height: "40px" }}
                        >
                            <MenuItem value={x.value}>{x.value}</MenuItem>
                        </Select>

                        <Button variant="outlined" onClick={() => handleRemoveSchema(x.id)}>Remove</Button>
                    </div>
                ))}


                {data.length !== 0 &&
                    <Select
                        value={dropdownValue}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        fullWidth
                        placeholder='Add Schema to segment'
                        style={{ marginBottom: '4%', height: "40px" }}
                    >

                        {data.sort((a, b) => a.id - b.id).map((x) => (
                            <MenuItem key={x.id} value={x.value}>
                                {x.value}
                            </MenuItem>
                        ))}
                    </Select>}

                <Button variant="outlined" onClick={handleAddSchema}>Add New Schema</Button>

                <div style={{ position: 'fixed', bottom: 0, left: 0, padding: '10px' }}>
                    <Button variant="contained" style={{ color: "#c1eef4" }} onClick={handleSave}>Save the Segment</Button>
                    <Button variant="outlined" style={{ marginLeft: '10px' }} >Cancel</Button>
                </div>

            </Box>
        </Modal>
    )
}

export default ModalComponent;