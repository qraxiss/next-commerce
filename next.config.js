if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
    throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const { protocol, hostname, port, pathname } = new URL(process.env.WORDPRESS_API_URL)

console.log(pathname)

/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: protocol.slice(0, -1),
                hostname,
                port,
                pathname: `${pathname}/**`
            },
            {
                protocol: 'http',
                hostname: '2.gravatar.com'
            }
        ]
    }
}
