import { useState } from 'react';
import { fetchCep } from '../services/cepService';
import Endereco from '../types/Endereco';


export const useFetchCep = () => {
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

    return { endereco, error, buscarCep };
};
