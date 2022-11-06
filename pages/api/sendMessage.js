import Ably from "ably/promises"

const ably = Ably.Rest(process.env.ABLY_SERVER_API_KEY)
const channel = ably.channels.get("mainchat")

export default async function handler(req, res) {

    const { author, message } = req.body

    if (req.method !== "POST") {
        res.status(405).json({})
        return
    }

    channel.publish("new-message", {
        message,
        author
    })

    res.status(200).json({})
}
