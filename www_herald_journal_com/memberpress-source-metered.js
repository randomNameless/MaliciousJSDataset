const meterMessages =
  document.querySelectorAll("#source-header-meter-message") ||
  document.querySelectorAll("#source-header-email_meter-message");

const mainMenu = document.querySelector(".oht-menu--main");
const wrapper = document.querySelector(".wrapper");
const footer = document.querySelector("footer");
const flyout = document.querySelector(".oht-menu-container--flyout");

const body = document.querySelector("body");
meterMessages.forEach((meterMessage) => {
  var position = meterMessage?.dataset.position;
  if (meterMessage && position === "header") {
    console.log
    mainMenu.style.top = meterMessage.offsetHeight + "px";
    let newMenuOffset = meterMessage.offsetHeight;
    wrapper.style.top = meterMessage.offsetHeight + mainMenu.offsetHeight + "px";
    footer.style.top = mainMenu.offsetHeight + meterMessage.offsetHeight + "px";
    flyout.style.top = mainMenu.offsetHeight + meterMessage.offsetHeight + "px";
    let newBannerOffset = 0;

    window.addEventListener("scroll", function () {
      const bannerInterval = setInterval(() => {
        if (mainMenu.style.top == "0px" && window.scrollY !== 0) {
          clearInterval(bannerInterval);
          flyout.style.top = "56px";
        } else if (
          window.scrollY === 0 &&
          mainMenu.style.top !== meterMessage.offsetHeight + "px"
        ) {
          newMenuOffset = newMenuOffset + 1;
          mainMenu.style.top = newMenuOffset + "px";
          newBannerOffset = newBannerOffset + 1;
          meterMessage.style.top = newBannerOffset + "px";
          flyout.style.top = mainMenu.offsetHeight + meterMessage.offsetHeight + "px";
          if (mainMenu.style.top === meterMessage.offsetHeight + "px") {
            clearInterval(bannerInterval);
          }
        } else {
          newMenuOffset = newMenuOffset - 1;
          mainMenu.style.top = newMenuOffset + "px";
          newBannerOffset = newBannerOffset - 1;
          meterMessage.style.top = newBannerOffset + "px";
        }
      }, 5);
    });

    body.prepend(meterMessage);
  }
});