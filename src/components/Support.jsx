import React from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

const Support = () => {
    return(
        <div className="flex mt-[200px] pl-[100px] flex-row space-x-[400px]">
            <div className="flex flex-col items-start">
                <p className="text-blue-700 text-xl font-bold">Support</p>
                <p className="text-5xl font-bold">FAQs</p>
                <div className="pt-10">
                    <p className="text-gray-500 text-[20px]">Everything you need to know about the product</p>
                    <p className="text-gray-500 text-[20px]">and billing. Can't find the answer you're looking</p>
                    <div className="flex flex-row items space-x-1">
                        <p className="text-gray-500 text-[20px]">for? Please </p>
                        <p className="text-gray-500 text-[20px]"> chat to our friendly team</p>
                    </div>
                </div>
                

            </div>

            <div>
                <div className="pt-[20px]">
                    <div>
                        <div className="flex flex-row space-x-7">
                            <p className="font-bold">How many participants can join a ClearLink video conference?</p>
                            <MinusCircle color="gray"/>
                        </div>
                        <div className="pt-[20px]">
                            <p className="text-gray-500">ClearLink offers flexible meeting options. Depending on your subscription</p>
                            <p className="text-gray-500">plan, you can host meetings with varying number of participants. Our plans</p>
                            <p className="text-gray-500">are designed to accommodate small team collaborations and large-scale</p>
                            <p className="text-gray-500">webinars, ensuring you have the right fit for your needs.</p>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex flex-row space-x-7">
                            <div className="w-[520px]">
                            <p className="font-bold">Can I use ClearLink on multiple devices?</p>
                            </div>
                            <PlusCircle color="gray"/>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex flex-row space-x-7">
                            <div className="w-[520px]">
                            <p className="font-bold">Is ClearLink compatible with other video conferencing platforms?</p>
                            </div>
                            <PlusCircle color="gray"/>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex flex-row space-x-7">
                            <div className="w-[520px]">
                            <p className="font-bold">How does ClearLink ensure the security of my video conferencing platforms?</p>
                            </div>
                            <PlusCircle color="gray"/>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex flex-row space-x-7">
                        <div className="w-[520px]">
                            <p className="font-bold">Do I need to download any software to use ClearLink?</p>
                        </div>
                            <PlusCircle color="gray"/>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex flex-row space-x-7">
                        <div className="w-[520px]">
                            <p className="font-bold">What kind of customer support does ClearLink provide?</p>
                        </div>
                            <PlusCircle color="gray"/>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}

export default Support;