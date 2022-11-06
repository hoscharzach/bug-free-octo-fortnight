import Ably from "ably/promises"
import { NextApiRequest, NextApiResponse } from "next"
import { uniqueNamesGenerator, colors, animals } from "unique-names-generator"

export default async function handler(req, res) {
    const client = new Ably.Realtime(process.env.ABLY_CLIENT_API_KEY)
}
