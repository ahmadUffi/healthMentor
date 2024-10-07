import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export function useFormData() {
    return useContext(FormContext);
}

export function FormHandler({ children }) {
    const [data, setData] = useState({});
    const updateData = (key, value) => {
        setData((prevData) => ({
            ...prevData,
            [key]: value
        }));
    };

    return (
        <FormContext.Provider value={{ data, updateData}}>
            {children}
        </FormContext.Provider>
    );
}