export default function (req: { url: string }, res: { writeHead: (arg0: number, arg1: { Location: string }) => void; end: () => void }, next: () => void) {
    const redirects = [
        {
            from: "/",
            to: "/regular-items"
        }
    ]

    const redirect = redirects.find((r) => r.from === req.url)

    if (redirect) {
        res.writeHead(301, { Location: redirect.to })
        res.end()
    } else {
        next()
    }
}