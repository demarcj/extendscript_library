const csInterface = new CSInterface();

const init = () => {
  themeManager.init();
  const btn_test = document.querySelector("#btn_test") as HTMLButtonElement;
  
  btn_test.addEventListener(`click`, () => csInterface.evalScript('sayHello()'));
}
init();
    
