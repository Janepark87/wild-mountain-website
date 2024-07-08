/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SUPABASE_URL: process.env.SUPABASE_URL,
		SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: process.env.PROTOCOL,
				hostname: process.env.SUPABASE_HOSTNAME,
				port: '',
				pathname: process.env.SUPABSE_IMAGE_PATHNAEM,
			},
			{
				protocol: process.env.PROTOCOL,
				hostname: process.env.GOOGLE_IMAGE_HOSTNAME,
				port: '',
				pathname: '/**',
			},
		],
	},
	// output: 'export',
};

export default nextConfig;
