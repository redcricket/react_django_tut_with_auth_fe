import {createContext, useContext} from "react";
import {ensure} from "./ss-util";
import axios from 'axios';

export type User = {
    userName: string;
}

// see https://medium.com/better-programming/how-to-use-async-await-with-axios-in-react-e07daac2905f
export const fetchUser = async (): Promise<User> => {
    // return Promise.resolve({ userName: "dave" });
    console.log('burp');
    const resp = await axios.get("http://localhost:8000/rest-auth/user/");
    if( resp.status === 403 ) {
        return Promise.resolve({userName: "none"}).catch(error => ({userName: "none"}));
    }
    return Promise.resolve({userName: "none"});
    // return Promise.resolve( axios.get("http://localhost:8000/rest-auth/user/").then(response => { console.log('good'); } ) .catch( error => { console.log('bad');} ) );
    //return await axios.get("http://localhost:8000/rest-auth/user/");
/*
let res = await axios.get("https://reqres.in/api/users?page=1");
 */

};


export const UserCtx = createContext<User | null>(null);

export function useUser(): User {
    const user = useContext(UserCtx);
    return ensure(user);
}