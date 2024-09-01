import React, { createContext, useContext, useState } from 'react';
import { fetchCep } from '../services/cepService';
import Endereco from '../types/Endereco';

interface CepContextType {
    endereco: Endereco | null;
    buscarCep: (cep: string) => void;
    error: string | null;
}

const CepContext = createContext<CepContextType | undefined>(undefined);

export const CepProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [error, setError] = useState<string | null>(null);

    const buscarCep = async (cep: string) => {
        setError(null);
        try {
            const data = await fetchCep(cep);
            setEndereco(data);
        } catch (err) {
            setError('Erro ao buscar o CEP');
        }
    };

    return (
        <CepContext.Provider value={{ endereco, buscarCep, error }}>
            {children}
        </CepContext.Provider>
    );
};

export const useCep = () => {
    const context = useContext(CepContext);
    if (!context) {
        throw new Error('useCep must be used within a CepProvider');
    }
    return context;
};
