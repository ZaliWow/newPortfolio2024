import { useContext } from "react";
import { ApiStatusContext } from "../context/ApiStatus";

export function useApiStatus() {
    const {status, setStatus} = useContext(ApiStatusContext)

    const handleApiStatus = (status) => {
        setStatus(status)
    }

    return {status, setStatus, handleApiStatus}
}