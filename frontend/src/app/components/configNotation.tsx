"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useState } from "react";

export default function ConfigNotation(props: any) {

    const [isEditing, setIsEditing] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    const code = props.data.code
    const [configName, setConfigName] = useState(props.data.title)
    const [vehicle, setVehicle] = useState("Grua")
    const [form, setForm] = useState("Produtivo")
    const [tolerance, setTolerance] = useState(props.data.tolerance)
    const [inefficiency, setInefficiency] = useState(props.data.inefficiency)

    const handleEdit = () => {
        isEditing ? setIsEditing(false) : setIsEditing(true)
    }

    const handleSave = () => {
        isEditing ? setIsEditing(false) : setIsEditing(true)
        isSaving ? setIsSaving(false) : setIsSaving(true)
    }

    return (
        <div className="flex justify-center items-center overflow-hidden">
            <div className="flex flex-row justify-between items-center w-[95%] m-5 p-5 shadow-[0px_0px_10px_5px_#959BB133] rounded-lg">
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-row justify-between w-8/12">
                        <div>
                            <Label htmlFor="code" className="text-sm text-[#424242]">Código</Label>
                            <Input disabled type="text" id="code" className="w-20" value={props.data.code} />
                        </div>
                        <div>
                            <Label htmlFor="configName" className="text-sm text-[#424242]">Apontamento</Label>
                            <Input disabled={isEditing} type="text" id="configName" className="w-56" value={isEditing ? configName : undefined} onChange={(e) => setConfigName(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="vehicle" className="text-sm text-[#424242]">Veículo</Label>
                            <Select value={vehicle} onValueChange={(vehicle) => setVehicle(vehicle)} >
                                <SelectTrigger disabled={isEditing} className="w-40" >
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Tipos de Veículos</SelectLabel>
                                        <SelectItem value="Grua">Grua</SelectItem>
                                        <SelectItem value="Caminhão">Caminhão</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="form" className="text-sm text-[#424242]">Formulário</Label>
                            <Select value={form} onValueChange={(form) => setForm(form)}>
                                <SelectTrigger disabled={isEditing} className="w-40">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Grupo de apontamento</SelectLabel>
                                        <SelectItem value="Produtivo">Produtivo</SelectItem>
                                        <SelectItem value="Inprodutivo">Inprodutivo</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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
                                <Dialog>
                                    <DialogTrigger>
                                        <Image className="cursor-pointer ml-5" src={"/assets/delete.png"} height={24} width={24} alt="trash icon" />
                                    </DialogTrigger>
                                    <DialogContent className="w-auto">
                                        <DialogHeader>
                                            <DialogTitle className="text-xl">Excluir</DialogTitle>
                                            <DialogDescription className="text-base">
                                                Você tem certeza que deseja excluir este item?
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <DialogClose>
                                                <Button variant="outline" className="border-[#D2D6E7]">Não</Button>
                                            </DialogClose>
                                            <Button variant="outline" className="border-[#959BB1]">Sim, excluir</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
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