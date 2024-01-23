import React from "react";
import shopify from '../assets/shopify.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'
import intercom from '../assets/intercom.png'
import marvel from '../assets/marvel.png'
import automatic from '../assets/automatic.png'

const HomeExtra = () => {
    const logoStyle = {
        width: "100px", // Adjust the size of the logos
        height: "auto",
        marginRight: "20px", // Add some space between logos
      };

    return (
        <div className="flex flex-col justify-center items-center w-full mt-[80px]">
            <div>
                <p className="font-bold text-gray-400">Joining 1,500+ companies already video conferencing the ClearLink way</p>
            </div>
            <div className="flex items-center pt-[40px]">
                <img src={shopify} alt="Shopify Logo" style={logoStyle} />
                <img src={coinbase} alt="Coinbase Logo" style={logoStyle} />
                <img src={dropbox} alt="Dropbox Logo" style={logoStyle} />
                <img src={intercom} alt="Intercom Logo" style={logoStyle} />
                <img src={marvel} alt="Marvel Logo" style={logoStyle} />
                <img src={automatic} alt="Automatic Logo" style={logoStyle} />
            </div>
        </div>
    );
}

export default HomeExtra;
