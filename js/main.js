(() => {
  // ts/main.ts
  var csInterface = new CSInterface();
  var init = () => {
    themeManager.init();
    const btn_test = document.querySelector("#btn_test");
    btn_test.addEventListener(`click`, () => csInterface.evalScript("sayHello()"));
  };
  init();
})();
