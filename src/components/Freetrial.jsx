import React from "react";
import freet from '../assets/freet.png'
import { CheckCircle2 } from "lucide-react";

const Freetrial = () => {
    return(
        <div className="flex pt-[150px] flex-row items-center justify-between">
            <div className="flex flex-col items-start pl-[100px]">
                <div>
                    <p className="text-4xl font-bold">Ready to clear the path to</p>
                    <p className="text-4xl font-bold pt-3">perfect communication?</p>
                </div>
                <div className="pt-[40px]">
                    <div className="flex flex-row items-center space-x-4 pt-3">
                        <CheckCircle2 color="blue"/>
                        <p className="text-[25px]">30 days free trial</p>
                    </div>
                    <div className="flex flex-row items-center space-x-4 pt-3">
                        <CheckCircle2 color="blue"/>
                        <p className="text-[25px]">Cancel at any time</p>
                    </div>
                    <div className="flex flex-row items-center space-x-4 pt-3">
                        <CheckCircle2 color="blue"/>
                        <p className="text-[25px]">Access to all features</p>
                    </div>
                    <div className="flex flex-row items-center space-x-4 pt-3">
                        <CheckCircle2 color="blue"/>
                        <p className="text-[25px]">Personalized onboarding</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between space-x-4 pt-10">
                <button className="text-black border font-bold border-gray-400 px-4 py-2 mt-1 rounded-full hover:bg-gray-200 transition">Talk to Sales</button>
                <button className="text-white bg-blue-500 font-bold border border-white px-4 py-2 rounded-full hover:bg-blue-300 transition">Sign up for free</button>                
                </div>
            </div>

            <div className="pt-[150px]">
                <img
                src={freet}
                alt="Free image blah blah"
                className="ml-auto w-[800px]"
                />
            </div>
            
        </div>
    );
}

export default Freetrial;