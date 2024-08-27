const hello = async (event, context) => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hora: ${hour}:${minute}:${second}`,
    }),
  };
};

module.exports = {
  hello,
};
