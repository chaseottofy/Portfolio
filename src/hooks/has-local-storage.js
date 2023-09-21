const useHasLocalStorage = () => {
  try {
    const key = '__storage__test';
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default useHasLocalStorage;
