import { useState } from "react";

function useToast() {
    const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState('');

    const handleNotification = (severity, message) => {
        setIsSnackBarOpen(true);
        setSeverity(severity);
        setMessage(message);

        setTimeout(() => {
            setIsSnackBarOpen(false);
        }, 2000);
    };

    return {
        isSnackBarOpen,
        severity,
        message,
        handleNotification,
        setIsSnackBarOpen,
    }
}

export default useToast;