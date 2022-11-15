import Cookies from "js-cookie";

export function Get(nameSpace) {
  return Cookies.get(nameSpace);
}

export function Set(nameSpace, data) {
  Cookies.set(nameSpace, data, { expires: 1 });
}

export default {
  Get,
  Set,
};
