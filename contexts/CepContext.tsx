import React, { createContext, useContext, useState } from 'react';
import { fetchCep } from '../services/cepService';
import Endereco from '../types/Endereco';

interface CepContextType {
    endereco: Endereco | null;
    buscarCep: (cep: string) => void;
    error: string | null;
    cepsConsultados: Endereco[];
}

const CepContext = createContext<CepContextType | undefined>(undefined);

export const CepProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [cepsConsultados, setCepsConsultados] = useState<Endereco[]>([]);
    const [error, setError] = useState<string | null>(null);

    const buscarCep = async (cep: string) => {
        setError(null);
        setEndereco(null);
        try {
            const data = await fetchCep(cep);
            if (data.erro === "true") {
                setError('CEP Inválido');
                return;
            }
            setEndereco(data);
            setCepsConsultados((prev) => [...prev, data]);
        } catch (err) {
            setError('Erro ao buscar o CEP');
        }
    };

    return (
        <CepContext.Provider value={{ endereco, buscarCep, error, cepsConsultados }}>
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
