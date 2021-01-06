export default {
  mounted(el) {
    let childInput = el.children[0];
    let childMenu = el.children[1];
    let oLabel = childInput.children[0];
    let oInput = childInput.children[1];
    let oIcon = childInput.children[2];

    oInput.addEventListener(
      "focus",
      (e) => {
        oLabel.style.display = "none";

        setTimeout(() => {
          childMenu.style.display = "block";
          oIcon.className = 'icon iconfont icon-sousuo';
        }, 200);
      },
      false
    );

    oInput.addEventListener(
      "blur",
      (e) => {
        setTimeout(() => {
          childMenu.style.display = "none";

          if (oInput.value.length === 0) {
            oIcon.className = 'icon iconfont icon-ai-arrow-down';
            oLabel.style.display = "block";
          }
        }, 200);
      },
      false
    );
  },
};
