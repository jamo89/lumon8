import { createContext, useContext, useState } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const [user] = useState({
        name: "Jamo",
        email: "jamo@fakeemail.com",
        dob: "04/20/2069",
    });
    return <UserContext.Provider value={{user}}></UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
