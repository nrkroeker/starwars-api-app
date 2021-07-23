import React from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from '@material-ui/core';
import "./ManufacturerSelect.css";

interface ManufacturerSelectProps {
    value: string
    onChange: any
    options: string[]
}

function ManufacturerSelect({ value, onChange, options }: ManufacturerSelectProps) {
    const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        onChange(event.target.value);
    }

    return (
        <div className="select-container">
            <FormControl className="form-control">
                <InputLabel id="manufacturer-select-label">Manufacturer</InputLabel>
                <Select
                    value={value}
                    onChange={handleChange}
                    labelId="manufacturer-select-label"
                >
                    {options.map(option => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default ManufacturerSelect;