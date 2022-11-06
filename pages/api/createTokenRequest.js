import Ably from "ably/promises"
// import { NextApiRequest, NextApiResponse } from "next"
import { uniqueNamesGenerator, colors, animals, adjectives } from "unique-names-generator"

export default async function handler(req, res) {
    const client = new Ably.Realtime(process.env.ABLY_CLIENT_API_KEY)

    const randomName = uniqueNamesGenerator({
        dictionaries: [colors, adjectives, animals],
        length: 2
    })

    const tokenRequestData = await client.auth.createTokenRequest({
        clientId: randomName
    })

    res.status(200).json(tokenRequestData)
}
