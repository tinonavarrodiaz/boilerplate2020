import { verifyMobile, setMobileClass } from "./modules/isMobile";
import {
  d,
  w,
  dd,
  c,
  log,
  dir,
  id,
  q,
  all,
  body,
  cssScrollBarWidth
} from "./modules/initialVariables";
import { loading } from "./modules/loading";

setMobileClass(dd, "mobile", "desktop");

const loadingEle = document.getElementById("loading");

addEventListener("load", () => {
  cssScrollBarWidth();
  if (loadingEle) loading(loadingEle, 500);
});

addEventListener("resize", () => {
  cssScrollBarWidth();
  setMobileClass(dd, "mobile", "desktop");
});

const setCurrentYear = ele => {
  ele.innerText = new Date().getFullYear();
};

const currentYearElement = id("currentYear");
if (currentYearElement) setCurrentYear(currentYearElement);
