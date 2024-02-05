import * as cookies from "cookies-next";

export function setCookie(key: string, value: string) {
  cookies.setCookie(key, value);
}

export function getCookie(key: string) {
  return cookies.getCookie(key);
}

export function removeCookie(key: string) {
  cookies.deleteCookie(key);
}
