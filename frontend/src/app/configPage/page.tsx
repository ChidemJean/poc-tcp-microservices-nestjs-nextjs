"use client"
import { useState } from "react";
import ConfigNotation from "../components/configNotation"
import ConfigScreen from "../components/configScreen";
import data from "../../MOCK_DATA.json"

export default function configPage() {

    const [isEditing, setIsEditing] = useState(true)
    const [tolerance, setTolerance] = useState()
    const [inefficiency, setInefficiency] = useState()

    return (


        <div className="overflow-hidden">
            <div className="mb-32 overflow-hidden">
                {
                    data.map((item, idx) => (
                        <ConfigNotation key={idx} data={item} />
                    ))
                }
            </div>

            <ConfigScreen/>
        </div>


    )

}