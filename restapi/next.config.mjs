/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: [
      'react-syntax-highlighter',
      'swagger-client',
      'swagger-ui-react',
    ],
  };
  
  export default nextConfig;