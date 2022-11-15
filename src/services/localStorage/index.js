import SecureLS from "secure-ls";

export default {
  ls,
  get,
  set,
};

let ls = new SecureLS({
  encodingType: "aes",
});

export function get(nameSpace, prop) {
  let data = ls.get(nameSpace);
  return data?.[prop];
}

export function set(nameSpace, prop) {
  let data = ls.get(nameSpace);
  ls.set(nameSpace, { ...data, ...prop });
  return Promise.resolve();
}
