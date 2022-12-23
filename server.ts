import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const handler: NextApiHandler = (req: any, res: any) => {
  const proxy = createProxyMiddleware({
    target: 'https://api.instagram.com',
    changeOrigin: true,
  });

  // @ts-ignore
  proxy(req, res);
};

export default handler;
