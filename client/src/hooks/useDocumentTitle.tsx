import { useEffect } from 'react';

export const useDocumentTitle = (titleDocument: string) => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = titleDocument;
        return () => {
            document.title = prevTitle;
        }
    }, [titleDocument]);
};
