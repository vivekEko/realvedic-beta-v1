import { atom } from "recoil";

const activeNavAtom = atom({
  key: "activeNavAtom", // unique ID (with respect to other atoms/selectors)
  default: {
    MomBaby: false,
    Products: false,
    Pharma: false,
    Doctor: false,
  }, // default value (aka initial value)
});

export default activeNavAtom;
