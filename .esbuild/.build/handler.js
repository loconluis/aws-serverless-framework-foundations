"use strict";

// handler.ts
var hello = async (event, contex) => {
  const hour = (/* @__PURE__ */ new Date()).getHours();
  const minute = (/* @__PURE__ */ new Date()).getMinutes();
  const second = (/* @__PURE__ */ new Date()).getSeconds();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hora: ${hour}:${minute}:${second}`
    })
  };
};
module.exports = {
  hello
};
