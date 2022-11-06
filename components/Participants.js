import { usePresence, assertConfiguration } from "@ably-labs/react-hooks"
import { nanoid } from "nanoid"

export default function Participants() {
    const ably = assertConfiguration()
    const [presenceData] = usePresence("mainchat")

    const presenceList = presenceData.map(user => {
        return (
            <div className="text-sm break-words whitespace-nowrap" key={nanoid()}>
                {user.clientId}
                <span className="text-sm">{user.clientId === ably.auth.clientId ? " (me)" : ""}</span>
            </div>
        )
    })
    return (
        <div className="flex flex-col items-start ">
            {presenceList && presenceList}
        </div>
    )
}
