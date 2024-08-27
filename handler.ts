import type {
  Context,
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from 'aws-lambda';

const hello = async (event: APIGatewayProxyEventV2, contex: Context) => {
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
