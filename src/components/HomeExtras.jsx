import React from "react";
import { Video, AudioLines, Calendar, Unlock } from "lucide-react";
import m from '../assets/m.png'

const HomeExtras = () => {
    return(
        <div className="flex flex-col items-start mt-[150px]">
            <div className="ml-[100px]">
                <p className="text-blue-700 font-bold">The ClearLink advantage</p>
                <p className="text-[40px] font-bold mt-4">Why Choose ClearLink?</p>
                <p className="text-gray-500 mt-4 font-bold">In a world where connection is everything, ClearLink takes the lead. Our</p>
                <p className="text-gray-500 font-bold">cutting-edge video conferencing app offers:</p>
            </div>
            <div className="flex flex-row">
                <div className="grid grid-cols-2 gap-4 pl-[100px] pt-[120px]">
                    <div className="flex flex-col items-start pb-10">
                        <Video color="blue"/>
                        <p className="text-xl font-bold pt-10">Crystal-clear HD video</p>
                        <p>No more pixelation or blurriness - just</p>
                        <p>stunning, lifelike clarity that brings your</p>
                        <p>team closer in meetings</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <AudioLines color="blue"/>
                        <p className="text-xl font-bold pt-10">Noise-canceling audio</p>
                        <p>Say goodbye to distractions with our</p>
                        <p>advanced audio tech for crisp,</p>
                        <p>interruption-free conversations.</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Calendar color="blue"/>
                        <p className="text-xl font-bold pt-10">Scheduling made easy</p>
                        <p>Streamline your agenda with ClearLink's</p>
                        <p>intuitive scheduling. Set up meetings,</p>
                        <p>send invitations, and receive reminders in</p>
                        <p>one place.</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <Unlock color="blue"/>
                        <p className="text-xl font-bold pt-10">Bank-grade security</p>
                        <p>Your privacy is our priority with bank -</p>
                        <p>grade security protocols safeguarding</p>
                        <p>your meetings and data from unwanted</p>
                        <p>intruders.</p>
                    </div>
                </div>
                <div>
                <div style={{ position: 'relative'}} className="pl-[200px] pt-[120px]">
                    <svg width="283" height="244" viewBox="0 0 283 244" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: -102, left: 240, zIndex: 2 }}>
                        {/* Your SVG path goes here */}
                        <path d="M202.47 235.718C202.025 236.729 202.483 237.909 203.494 238.355C204.505 238.8 205.686 238.341 206.131 237.33L202.47 235.718ZM113.314 118.038L111.623 119.105L111.623 119.106L113.314 118.038ZM197.936 96.9693L195.961 96.6584L195.961 96.6587L197.936 96.9693ZM45.3918 42.1969C44.4387 42.7551 44.1185 43.9803 44.6767 44.9334C45.2348 45.8866 46.46 46.2068 47.4132 45.6486L45.3918 42.1969ZM223.019 231.518C224.019 231.051 224.452 229.861 223.985 228.86C223.518 227.859 222.327 227.426 221.327 227.893L223.019 231.518ZM203.645 238.354L201.956 239.424C202.494 240.274 203.58 240.592 204.491 240.166L203.645 238.354ZM193.87 219.979C193.186 219.112 191.928 218.964 191.061 219.649C190.194 220.333 190.046 221.591 190.731 222.458L193.87 219.979ZM204.301 236.524C206.131 237.33 206.131 237.33 206.132 237.328C206.132 237.328 206.133 237.326 206.134 237.324C206.135 237.321 206.137 237.316 206.14 237.31C206.145 237.298 206.153 237.28 206.163 237.257C206.183 237.212 206.211 237.145 206.249 237.058C206.324 236.884 206.432 236.627 206.572 236.292C206.85 235.623 207.251 234.64 207.742 233.377C208.726 230.852 210.075 227.204 211.546 222.692C214.488 213.675 217.929 201.182 219.912 187.302C223.861 159.663 222.106 125.893 198.23 103.48L195.492 106.396C217.887 127.418 219.852 159.441 215.952 186.736C214.011 200.323 210.637 212.583 207.744 221.452C206.298 225.883 204.975 229.461 204.015 231.926C203.535 233.158 203.146 234.112 202.879 234.755C202.745 235.077 202.642 235.32 202.572 235.482C202.538 235.563 202.511 235.623 202.494 235.663C202.486 235.683 202.479 235.697 202.475 235.706C202.473 235.711 202.472 235.714 202.471 235.716C202.471 235.717 202.47 235.718 202.47 235.718C202.47 235.718 202.47 235.718 204.301 236.524ZM198.23 103.48C174.594 81.2938 149.344 78.6473 131.688 84.7651C122.905 87.8083 115.932 93.0529 112.096 99.2126C108.225 105.429 107.545 112.645 111.623 119.105L115.006 116.97C111.892 112.037 112.276 106.49 115.492 101.327C118.742 96.1076 124.879 91.3574 132.997 88.5447C149.142 82.9506 172.856 85.1477 195.492 106.396L198.23 103.48ZM111.623 119.106C115.548 125.321 122.643 129.967 130.942 132.768C139.272 135.579 149.022 136.606 158.538 135.408C177.597 133.009 196.093 121.574 199.912 97.2799L195.961 96.6587C192.495 118.706 175.872 129.195 158.039 131.44C149.109 132.564 139.968 131.592 132.221 128.978C124.442 126.352 118.273 122.145 115.005 116.97L111.623 119.106ZM199.912 97.2801C201.854 84.9374 196.987 72.8987 187.898 62.5135C178.81 52.1301 165.39 43.2487 149.795 37.0675C118.634 24.7162 78.2582 22.9504 45.3918 42.1969L47.4132 45.6486C78.9615 27.174 117.997 28.7664 148.322 40.786C163.47 46.7904 176.311 55.3476 184.888 65.1478C193.463 74.9462 197.664 85.836 195.961 96.6584L199.912 97.2801ZM221.327 227.893L202.799 236.542L204.491 240.166L223.019 231.518L221.327 227.893ZM203.645 238.354C205.335 237.284 205.335 237.284 205.335 237.284C205.335 237.284 205.335 237.283 205.335 237.283C205.334 237.283 205.334 237.282 205.333 237.281C205.332 237.28 205.331 237.277 205.328 237.273C205.324 237.267 205.318 237.256 205.309 237.243C205.292 237.216 205.267 237.177 205.234 237.125C205.168 237.021 205.072 236.869 204.948 236.674C204.7 236.285 204.344 235.725 203.908 235.044C203.038 233.681 201.851 231.831 200.585 229.881C198.084 226.028 195.188 221.648 193.87 219.979L190.731 222.458C191.905 223.945 194.681 228.133 197.23 232.059C198.489 233.998 199.671 235.84 200.538 237.197C200.971 237.876 201.326 238.433 201.572 238.82C201.695 239.014 201.791 239.165 201.856 239.268C201.889 239.319 201.914 239.358 201.931 239.385C201.939 239.398 201.945 239.408 201.949 239.414C201.952 239.418 201.953 239.42 201.954 239.422C201.955 239.422 201.955 239.423 201.955 239.423C201.955 239.424 201.955 239.424 201.956 239.424C201.956 239.424 201.956 239.424 203.645 238.354Z" fill="#004EEB"/>

                    </svg>
                    <img src={m} alt="Group of people" style={{ position: 'relative', zIndex: 1 }} className="w-[500px] h-[500px]"/>
                </div>

                </div>
            </div>
            
        </div>
    );
}

export default HomeExtras;