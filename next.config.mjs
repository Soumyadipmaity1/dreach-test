/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
	  domains: [
		'images.unsplash.com', 
		'res.cloudinary.com', 
		'randomuser.me',
		'startupindia.gov.in',
		'upload.wikimedia.org'
	  ],
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'images.unsplash.com',
		},
		{
		  protocol: 'https',
		  hostname: 'res.cloudinary.com',
		},
		{
		  protocol: 'https',
		  hostname: 'randomuser.me',
		},
		{
		  protocol: 'https',
		  hostname: 'startupindia.gov.in',
		},
		{
		  protocol: 'https',
		  hostname: 'upload.wikimedia.org',
		},
	  ],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: false,
	},
};

export default nextConfig;