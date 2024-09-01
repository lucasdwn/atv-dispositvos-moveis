import axios from 'axios';
import Endereco from '../types/Endereco';

export const fetchCep = async (cep: string): Promise<Endereco> => {
    const response = await axios.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
};
