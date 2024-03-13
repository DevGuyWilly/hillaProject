import { useState, useEffect } from 'react';

const useHistory = () => {
    const [previousUrl, setPreviousUrl] = useState('');

    useEffect(() => {
        const handleBeforeunload = () => {
            localStorage.setItem('previousUrl', window.location.pathname);
        };

        window.addEventListener('beforeunload', handleBeforeunload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeunload);
        };
    }, []);

    useEffect(() => {
        setPreviousUrl(localStorage.getItem('previousUrl') || '');
    }, []);

    return previousUrl;
};

export default useHistory;