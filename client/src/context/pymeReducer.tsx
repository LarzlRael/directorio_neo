import { PymeResponseResponse } from '../interfaces/pymeResponse';

export interface PymeState {

    loading: boolean;
    allPymes: PymeResponseResponse[],
    onePyme: PymeResponseResponse | null,
    notFound: boolean;
}

type PymeAction =
    | { type: 'getAllPymes', payload: PymeResponseResponse[] }
    | { type: 'getOnePyme', payload: PymeResponseResponse }
    /* | { type: 'signUp', payload: { token: string, usuario: CreadoPor } } */
    | { type: 'addError' }
    | { type: 'notFound' }
    | { type: 'logout' }

export const pymeReducer = (state: PymeState, action: PymeAction): PymeState => {


    switch (action.type) {
        case 'getAllPymes':

            return {
                ...state,
                allPymes: action.payload,
                loading: false,


            };
        case 'getOnePyme':
            return {
                ...state,
                onePyme: action.payload,
                loading: false,
                notFound: false,
            };
        case 'notFound':
            return {
                ...state,
                notFound: true,
            };
        /*
                case 'logout':
                case 'noAuthenticated':
                    return {
                        ...state,
                        status: 'not-authenticated',
                        token: null,
                        user: null,
                    }; */



        default:
            return state;
    }


}