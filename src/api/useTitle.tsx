import { useEffect } from 'react';
const useTitle = (title: string): void => {
  useEffect(() => {
    const oldTitle = document.title;
    title && (document.title = title);
    return () => {
      document.title = oldTitle;
    };
  }, [title]);
};

export default useTitle;
