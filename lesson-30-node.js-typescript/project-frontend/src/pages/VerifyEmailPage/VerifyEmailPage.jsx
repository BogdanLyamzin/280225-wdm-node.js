import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { verifyUserApi } from "../../shared/api/auth-api";

const VerifyEmailPage = ()=> {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const token = searchParams.get("token");

    useEffect(()=> {
        const fetchVerifyUser = async()=> {
            try {
                await verifyUserApi(token);
                navigate("/");
            }
            catch(error) {
                setError(error?.response?.data?.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchVerifyUser()
    });

    if(loading) return <h2>Verify processibg...</h2>

    if(error) return <h2>Verify error: {error}</h2>

}

export default VerifyEmailPage;