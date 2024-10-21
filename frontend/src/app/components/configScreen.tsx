"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { use, useState } from "react";
import { Loader2 } from "lucide-react"

export default function ConfigScreen() {

    const [isEditing, setIsEditing] = useState(true)
    const [isSaving, setIsSaving] = useState(false)

    const [configName, setConfigName] = useState("")
    const [tolerance, setTolerance] = useState(0)
    const [inefficiency, setInefficiency] = useState(0)

    const handleEdit = () => {
        isEditing ? setIsEditing(false) : setIsEditing(true)
    }

    const handleSave = () => {
        isEditing ? setIsEditing(false) : setIsEditing(true)
        isSaving ? setIsSaving(false) : setIsSaving(true)
    }

    return (
        <div className="flex justify-center items-center w-full fixed bottom-0 bg-white overflow-hidden shadow-[0px_0px_10px_5px_#959BB133]">
            <div className="flex flex-row justify-between items-center w-full p-5  rounded-lg">
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-row justify-evenly w-8/12">
                        <div>
                            <Label htmlFor="configName" className="text-sm text-[#424242]">Configuração da tela</Label>
                            <Input disabled={isEditing} type="text" id="configName" className="w-56" value={isEditing ? configName : undefined} onChange={(e) => setConfigName(e.target.value)} />
                        </div>

                        <div>
                            <Label htmlFor="tolerance" className="text-sm text-[#424242]">Tolerância <span className="text-sm text-[#777777cc]">(Minutos)</span></Label>
                            <Input disabled={isEditing} type="number" id="tolerance" className="w-40 text-[#FFC700]" value={isEditing ? tolerance : undefined} onChange={(e) => setTolerance(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="ineficiency" className="text-sm text-[#424242]">Ineficiência <span className="text-sm text-[#777777cc]">(Minutos)</span></Label>
                            <Input disabled={isEditing} type="number" id="ineficiency" className="w-40 text-[#F7442C]" value={isEditing ? inefficiency : undefined} onChange={(e) => setInefficiency(e.target.value)} />
                        </div>
                    </div>


                </div>

                <div className={`flex flex-row w-44 justify-end items-star items-center`}>
                    {
                        isEditing ?
                            <>
                                <Image className="cursor-pointer" src={"/assets/edit.png"} height={24} width={24} alt="pencil icon" onClick={() => { handleEdit() }} />

                            </>
                            :
                            <Button variant="outline" className="border-[#959BB1]" onClick={() => handleSave()}>Salva Alterações
                                {/* {isSaving ? <Loader2 className="ml-2 h-4 w-4 animate-spin" /> : null} */}
                            </Button>

                    }


                </div>
            </div>

        </div>

    )

}