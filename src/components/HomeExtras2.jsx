import React from "react";
import shopify from '../assets/shopify.png'
import ss from '../assets/ss.png'
import { ArrowLeft, ArrowRight } from "lucide-react";
import i1 from '../assets/i1.png'
import i2 from '../assets/i2.png'
import i3 from '../assets/i3.png'
import i4 from '../assets/i4.png'
import i5 from '../assets/i5.png'

const HomeExtras2 = () => {
    return(
        <div className="flex pt-[140px]">
            <div className="flex flex-row items-start justify-between space-x-[250px]">
                <div className="flex flex-col items-start pl-[80px]">
                <img
                    src={shopify}
                    alt="Shopify Logo"
                    className="w-[150px] pr-[10px]"
                    />
                <div>
                    <span style={{ color: 'gold', fontSize: '30px' }}>&#9733;</span>
                    <span style={{ color: 'gold', fontSize: '30px' }}>&#9733;</span>
                    <span style={{ color: 'gold', fontSize: '30px' }}>&#9733;</span>
                    <span style={{ color: 'gold', fontSize: '30px' }}>&#9733;</span>
                    <span style={{ color: 'gold', fontSize: '30px' }}>&#9733;</span>
                </div>
                <div className="flex flex-col items-start pt-10">
                    <p className="font-bold text-4xl">ClearLink has upgraded our </p>
                    <p className="font-bold text-4xl">remote meetings. High-quality</p>
                    <p className="font-bold text-4xl">video, screen sharing, and</p>
                    <p className="font-bold text-4xl">top-notch security make it</p>
                    <p className="font-bold text-4xl">essential for our team.</p>
                </div>
                <div className="flex flex-row items-start pt-10">
                    <img
                        src={ss}
                        alt="Sarah"
                        className="w-[60px] rounded-full pt-3"
                        />
                    <div className="flex flex-col items-start pl-7 pt-5">
                        <p className="text-black font-bold">Sarah Thompson</p>
                        <p className="text-gray-600">Project Manager, Spotify</p>
                    </div>
                    <div className="flex flex-row justify-between pt-8 space-x-20 pl-[200px]">
                        <ArrowLeft color="blue"/>
                        <ArrowRight color="blue"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-1">
                <img
                    src={i1}
                    alt="Image 1"
                    className="w-[150px] mt-auto"
                />
                <img
                    src={i2}
                    alt="Image 2"
                    className="w-[150px]"
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <img
                    src={i3}
                    alt="Image 3"
                    className="w-[150px]"
                />
                <img
                    src={i4}
                    alt="Image 4"
                    className="w-[150px]"
                />
                <img
                    src={i5}
                    alt="Image 5"
                    className="w-[150px]"
                />
            </div>
        </div>

            </div>
            
        </div>
    );
}

export default HomeExtras2;