const createAscii = () => {
  const asciitext = `
      ,o888888o. 8888888 8888888888 8888888 8888888888 ,o888888o.     
   . 8888     '88.     8 8888             8 8888    . 8888     '88.   
  ,8 8888       '8b    8 8888             8 8888   ,8 8888       '8b  
  88 8888        '8b   8 8888             8 8888   88 8888        '8b 
  88 8888         88   8 8888             8 8888   88 8888         88 
  88 8888         88   8 8888             8 8888   88 8888         88 
  88 8888        ,8P   8 8888             8 8888   88 8888        ,8P 
  '8 8888       ,8P    8 8888             8 8888   '8 8888       ,8P  
   ' 8888     ,88'     8 8888             8 8888    ' 8888     ,88'   
      '8888888P'       8 8888             8 8888       '8888888P'   
  `;
  const asciiWrapper = document.querySelector('.ascii-wrapper');
  asciiWrapper.textContent = asciitext;
};
export default createAscii;
