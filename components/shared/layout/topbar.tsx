import React from "react"
import { MdAccountCircle, MdHeadsetMic, MdLaunch, MdNotificationsNone } from "react-icons/md"
import Link from "next/link"

export function Topbar() {
    return (
        <header className="relative z-30" style={{ gridArea: "header" }}>
            <div className="h-full m-auto flex items-center">
                <div className="flex justify-center px-15">
                    <Link href="/">
                        <a className="flex items-center pr-8">
                            <MdLaunch className="icon" />
                            Visit site
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="flex items-center pr-8">
                            <MdHeadsetMic className="icon" />
                            Help
                        </a>
                    </Link>
                </div>

                {/* notif content */}
                <div className="flex items-center ml-auto pr-4">
                    <Link href="/">
                        <a className="relative" href="/">
                            <MdNotificationsNone className="icon" />
                            <i className="bg-red-500 w-2 h-2 rounded-full absolute right-3 top-0" />
                        </a>
                    </Link>

                    <Link href="/">
                        <a className="pr-2">Howdy, Marvin</a>
                    </Link>

                    <MdAccountCircle className="icon" />
                </div>
            </div>
        </header>
    )
}
