import Image from "next/image"
import dog1 from './../../public/images/dogs/dog1.png'
import dog2 from './../../public/images/dogs/dog2.png'
import dog3 from './../../public/images/dogs/dog3.png'
import dog4 from './../../public/images/dogs/dog4.png'
import H1 from "@/components/h1"

export const metadata = {
    title: 'Photos'
}

export default function PhotosPage() {
    return (
        <div>
            <H1 className="text-2xl mb-8 font-semibold">
                My photos
            </H1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog1}
                    className="object-cover w-full h-full"
                    alt="Picture of a dog"
                    sizes="(max-width: 768px) 100vw, 50vw"/>
                </div>
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog2}
                    className="object-cover w-full h-full"
                    alt="Picture of a dog"
                    sizes="(max-width: 768px) 100vw, 50vw"/>
                </div>
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog3}
                    className="object-cover w-full h-full"
                    alt="Picture of a dog"
                    sizes="(max-width: 768px) 100vw, 50vw"/>
                </div>
                <div className="h-60 overflow-hidden relative">
                    <Image fill src={dog4}
                    className="object-cover w-full h-full"
                    alt="Picture of a dog"
                    sizes="(max-width: 768px) 100vw, 50vw"/>
                </div>
                
            </div>
        </div>
        
    )
}