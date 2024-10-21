import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, Rectangle } from 'react-leaflet'
import L from 'leaflet';

export type VehicleCardProps = {
    metaAtingida: number;
    color: string,
    type: number,
    isEmpty?: number
    qtd?: number
}

export default function VehicleCard({ metaAtingida, color, type, isEmpty }: VehicleCardProps) {

    let meta = metaAtingida + "%";
    let style = { '--meta-atingida': meta } as React.CSSProperties;

    let icon = L.icon({
        iconUrl: `/assets/vehicle-type-${color}.png`,
        shadowUrl: `/assets/vehicle-type-${color}.png`
    });

    return (
        <Dialog>
            <DialogTrigger className="w-full">
                <Card className="my-3 !mr-0 bg-white shadow-[0px_0px_10px_1px_#959BB114] min-w-max w-[95%]" style={style}>
                    <div className="flex rounded-xl p-0 flex-1 justify-between max-w-md min-w-md w-90">
                        <div className="p-3 text-center flex">
                            <Image className="w-12 h-auto object-contain object-center rounded-none m-1 mr-4" src={`/assets/vehicle-type-${color}.png`} alt="" width="200" height="400" />
                            <div className="grid gap-0.5">
                                <span className="text-lg border-2 border-[#e7e7e7] rounded-sm bg-[#fafafa] w-fit p-1 font-bold h-fit">
                                    QRS3T45
                                </span>
                                <div className="h-fit">
                                    0h 10m 15s
                                </div>
                            </div>
                        </div>
                        <div className="p-3">
                            <div className="gap-2.5 w-fit flex rounded-lg !m-0 border border-[#EAEBF1] p-2 py-1">
                                <div className="my-0 text-[#959BB1] text-xs">
                                    <div className="border border-[#e7e7e7] w-3 h-9 m-auto p-px rounded-sm flex flex-col justify-end">
                                        <div className="dynamic-height bg-[#959BB1] w-2 h-[--meta-atingida]" />
                                    </div>
                                    ATUAL
                                </div>
                                <div className="my-0 text-[#959BB1] text-xs">
                                    <div className="border p-px border-[#e7e7e7] w-3 h-9 m-auto">
                                        <div className="bg-[#4FD95D] w-2 h-8" />
                                    </div>
                                    META
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="flex">
                            <Image className="w-5 h-auto object-contain object-center rounded-none m-1" src="/assets/location.png" width="200" height="400" alt="" />
                            <span> Fazenda Águas Claras / A1BC23 </span>
                        </div>
                        <div className="flex">
                            <Image className="w-5 h-auto object-contain object-center rounded-none m-1" src="/assets/timer.png" width="200" height="400" alt="" />
                            <span> Fazenda Águas Claras / A1BC23 </span>
                        </div>
                        <div>
                            <span className="relative right-[5px]">Última Comunic.: 09:17:00, 19/07/24</span>
                        </div>
                    </div>
                </Card >
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="relative bottom-2.5 text-left">
                    <DialogTitle className="font-normal border-b-2 pb-3 border-[#EAEBF1">
                        Informações do Veículo
                        <span className="ml-1.5	align-bottom bg-[#111111cc] text-sm text-white p-1 rounded-lg">
                            {type === 0 ? 'Caminhão' : 'Grua'}
                        </span></DialogTitle>
                    <DialogDescription style={style} >
                        <div className="p-3 pr-0 text-center flex flex-1 justify-between">
                            <div className="flex">
                                <Image className="w-16 h-auto object-contain object-center rounded-none m-1" src={`/assets/vehicle-type-${color}.png`} alt="" width="200" height="400" />
                                <div className="text-justify ml-5">
                                    <span className="text-lg text-[#424242] h-fit block">
                                        Placa / Prefixo: <span className="text-[1.09rem] text-[#212121] border-2 border-[#e7e7e7] rounded-sm bg-[#fafafa] w-fit p-1 font-semibold h-fit">ABC1D23 / ABC1D23</span>
                                    </span>
                                    <span className="text-lg h-fit block text-[#424242]">
                                        Operador: <span className="text-[#212121]">Nome Sobrenome Motorista</span>
                                    </span>
                                    <span className="text-lg h-fit block text-[#424242]">
                                        Última Comunic.: <span className="text-[#212121]">16:19:00, 21/07/24</span>
                                    </span>
                                    {type === 0 && (
                                        <span className="text-lg h-fit text-[#424242]">
                                            Situação: <span className={`${isEmpty === 1 ? 'text-red-600' : 'text-green-600'}`}>{`${isEmpty === 1 ? 'Vazio' : 'Carregado'}`}</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="grid">
                                <span className="font-semibold text-[#424242]">1h 20m 10s</span>
                                <div className="!border-0">
                                    <div className="gap-2.5 w-fit p-1 pb-0 flex rounded-lg !m-0 border border-[#EAEBF1] p-2 py-1">
                                        <div className="text-[#959BB1] text-xs">
                                            <div className="border border-[#e7e7e7] w-3 h-9 m-auto p-px rounded-sm flex flex-col justify-end">
                                                <div className="dynamic-height bg-[#959BB1] w-2 h-[--meta-atingida]" />
                                            </div>
                                            ATUAL
                                        </div>
                                        <div className="text-[#959BB1] text-xs">
                                            <div className="border p-px border-[#e7e7e7] w-3 h-9 m-auto">
                                                <div className="bg-[#4FD95D] w-2 h-8" />
                                            </div>
                                            META
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {type === 1 && (
                            <div className="w-full flex flex-1 justify-between my-5">
                                <div className="flex">
                                    <Image className="w-5 object-contain object-center h-auto rounded-none m-1" src="/assets/vehicle-type-white.png" width="200" height="400" alt="" />
                                    <span className="pt-1.5"> <span className="font-bold">Entrando no raio da Grua: </span> 20 </span>
                                </div>
                                <div className="flex">
                                    <Image className="w-5 object-contain object-center h-auto rounded-none m-1" src="/assets/vehicle-type-white.png" width="200" height="400" alt="" />
                                    <span className="pt-1.5"> <span className="font-bold">Saindo do raio da Grua: </span> 10 </span>
                                </div>
                                <div className="flex">
                                    <Image className="w-5 object-contain object-center h-auto rounded-none m-1" src="/assets/vehicle-type-white.png" width="200" height="400" alt="" />
                                    <span className="pt-1.5"> <span className="font-bold">Carregando: </span> 02 </span>
                                </div>
                                <div className="flex">
                                    <Image className="w-5 object-contain object-center h-auto rounded-none m-1" src="/assets/vehicle-type-white.png" width="200" height="400" alt="" />
                                    <span className="pt-1.5"> <span className="font-bold">Carregados: </span> 12 </span>
                                </div>
                            </div>
                        )}
                        <div className="border-2 border-[#EAEBF1] rounded-lg">
                            <div className="flex flex-1 justify-between">
                                <div className="flex">
                                    <Image className="w-5 object-contain object-center h-auto rounded-none m-1" src="/assets/location.png" width="200" height="400" alt="" />
                                    <span className="pt-1"> Local: Fazenda Matinhos</span>
                                </div>
                                <div className="flex">
                                    <Image className="w-5 object-contain object-center h-auto rounded-none m-1" src="/assets/timer.png" width="200" height="400" alt="" />
                                    <span className="pt-1.5"> <span className="font-bold">Carregamento</span> 00:30:00</span>
                                    <Image className="w-5 h-auto rounded-none m-1" src="/assets/history.png" width="200" height="400" alt="" />
                                </div>
                            </div>
                            <MapContainer className="min-h-96" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[51.505, -0.09]} icon={icon}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                                <Rectangle bounds={[[51.49, -0.1], [51.51, -0.06]]} pathOptions={{ color: 'lime' }} />
                            </MapContainer>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    );
}
