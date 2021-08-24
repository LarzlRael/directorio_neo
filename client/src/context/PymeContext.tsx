import { createContext, useReducer } from 'react';
import { PymeResponseResponse } from '../interfaces/pymeResponse';
import { serverAPI } from '../provider/serverProvider';
import { pymeReducer, PymeState } from './pymeReducer';
import { capitalizeFirstLetter } from '../components/utils/utils';

type PymeContextProps = {
    getOnePyme: (nombre: string) => Promise<void>;
    getAllPymes: () => Promise<void>;
    loading: boolean;
    allPymes: PymeResponseResponse[],
    onePyme: PymeResponseResponse | null,
    notFound: boolean

}

const AuthInitialState: PymeState = {
    allPymes: [],
    onePyme: null,
    loading: false,
    notFound: false,

};

const PymeContext = createContext({} as PymeContextProps);

const PymeProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(pymeReducer, AuthInitialState);


    const getAllPymes = async () => {
        const { data } = await serverAPI.get<PymeResponseResponse[]>('/pymes/');
        /*         console.log(data); */
        return dispatch({
            type: 'getAllPymes',
            payload: data,
        });
    }

    const getOnePyme = async (nombre: string) => {
        try {
            const { data } = await serverAPI.get<PymeResponseResponse>(`pymes/${nombre}`);
            data.nombre = capitalizeFirstLetter(data.nombre);
            return dispatch({
                type: 'getOnePyme',
                payload: data,
            });
        } catch (error) {
            /* console.log(error.response); */
            return dispatch({
                type: 'notFound'
            });
        }

    }
    return (
        <PymeContext.Provider
            value={{
                getAllPymes,
                getOnePyme,
                ...state
            }}
        >
            {children}
        </PymeContext.Provider>
    )
}

export { PymeProvider, PymeContext }
