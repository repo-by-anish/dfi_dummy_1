import { useEffect } from 'react';
const useTitle = (title: string): void => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const oldTitle = document.title;
    title && (document.title = title);
    return () => {
      document.title = oldTitle;
    };
  }, [title]);
};

export default useTitle;
