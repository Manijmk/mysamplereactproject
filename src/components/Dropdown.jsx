import { Button, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function Dropdown() {

    const data = [
        {
            "id": 1,
            "value": "First Name"
        }, {
            "id": 2,
            "value": "Last Name"
        }, {
            "id": 3,
            "value": "Gender"
        }, {
            "id": 4,
            "value": "Age"
        }, {
            "id": 5,
            "value": "Account Name"
        }, {
            "id": 6,
            "value": "City Name"
        }, {
            "id": 7,
            "value": "State Name"
        }]

    const [dropdownValue, setDropdownValue] = useState('');
    const [addedSchemaValue, setAddedSchemaValue] = useState([]);

    function handleChange(event) {
        setDropdownValue(event.target.value)
    }

    function handleAddSchema() {

    }


    return (
        <>

            <Select
                value={dropdownValue}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                fullWidth
                placeholder='Add Schema to segment'
            >

                {data.map((x) => (
                    <MenuItem key={x.id} value={x.value}>
                        {x.value}
                    </MenuItem>
                ))}
                <Button onClick={handleAddSchema}>Add New Schema</Button>

            </Select>


            <Select
                value={dropdownValue}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                fullWidth
                placeholder='Add Schema to segment'
            >

                {data.map((x) => (
                    <MenuItem key={x.id} value={x.value}>
                        {x.value}
                    </MenuItem>
                ))}
                <Button onClick={handleAddSchema}>Add New Schema</Button>

            </Select>
        </>
    )
}

export default Dropdown
