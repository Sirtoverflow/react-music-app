import { createContext, useContext, useState } from 'react';
const DataContext = createContext();

export const useDataFromChild = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataFromChild must be used within a DataProvider');
    }
    return context;
};

export const DataProvider = ({ children }) => {
    var [dataFromChild, setDataFromChild] = useState('');
    if(!dataFromChild) dataFromChild = ' ';
    return (
        <DataContext.Provider value={{ dataFromChild, setDataFromChild }}>
            {children}
        </DataContext.Provider>
    );
};
