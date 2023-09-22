const useIsTouchDevice = () => ('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0);

export default useIsTouchDevice;
