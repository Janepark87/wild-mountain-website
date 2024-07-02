/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SUPABASE_URL: process.env.SUPABASE_URL,
		SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: process.env.SUPABASE_HOSTNAME,
				port: '',
				pathname: process.env.SUPABSE_IMAGE_PATHNAEM,
			},
		],
	},
};

export default nextConfig;
