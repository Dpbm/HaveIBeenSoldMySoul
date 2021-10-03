import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ErrorPage(){
    const router = useRouter();
    const error = () => toast('Página inexistente!');

    useEffect(() => { 
        error();
        router.replace('/');
    }, []);

    return null;
}