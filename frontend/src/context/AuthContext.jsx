import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        // Check if user is already logged in
        supabase.auth.getSession()
        .then(({ data }) => {
            setUser(data.session?.user ?? null);
            setLoading(false);
        });


        // Listen for login/logout changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null);
            }
        );


        return () => {
            subscription.unsubscribe();
        };

    }, []);


    return (
        <AuthContext.Provider value={{ user }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}

/* use case: 

import { useAuth } from "./context/AuthContext";

const { user } = useAuth();

then if user is null, i know im not logged in 



*/