import React from "react";
import colorfilter from "../../assets/images/colorfilter.png";
import arrow from '../../assets/images/arrow.png';
import search from "../../assets/images/search.png";
import calendar from "../../assets/images/calendar.png";
import question from "../../assets/images/question.png";
import notification from "../../assets/images/notification.png";
import profile from "../../assets/images/profile.png";
import ArrowDown from "../../assets/images/arrow-down.png";
const Navbar = () => {
    return (
        <nav className="navbar flex justify-between  py-3 px-3">
          

            <div className="search-container flex bg-zinc-100 w-96 gap-5 p-2 rounded-lg">
                <svg className="mt-1" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3417 19.25C16.1512 19.25 20.0501 15.3512 20.0501 10.5417C20.0501 5.7322 16.1512 1.83334 11.3417 1.83334C6.53225 1.83334 2.63339 5.7322 2.63339 10.5417C2.63339 15.3512 6.53225 19.25 11.3417 19.25Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.9667 20.1667L19.1334 18.3333" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <input type="text" placeholder="Search for anything..." className="bg-zinc-100 focus:outline-none text-gray-400" />
            </div>

            <div className="hidden md:flex gap-4 mt-2">
                <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M108.02 2.91C104.71 2.91 102.02 5.6 102.02 8.91V11.8C102.02 12.41 101.76 13.34 101.45 13.86L100.3 15.77C99.59 16.95 100.08 18.26 101.38 18.7C105.69 20.14 110.34 20.14 114.65 18.7C115.86 18.3 116.39 16.87 115.73 15.77L114.58 13.86C114.28 13.34 114.02 12.41 114.02 11.8V8.91C114.02 5.61 111.32 2.91 108.02 2.91Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                    <path d="M109.87 3.2C109.56 3.11 109.24 3.04 108.91 3C107.95 2.88 107.03 2.95 106.17 3.2C106.46 2.46 107.18 1.94 108.02 1.94C108.86 1.94 109.58 2.46 109.87 3.2Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M111.02 19.06C111.02 20.71 109.67 22.06 108.02 22.06C107.2 22.06 106.44 21.72 105.9 21.18C105.36 20.64 105.02 19.88 105.02 19.06" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" />
                    <circle cx="114" cy="4" r="3" fill="#D8727D" />
                    <path d="M65 18.4301H61L56.55 21.39C55.89 21.83 55 21.3601 55 20.5601V18.4301C52 18.4301 50 16.4301 50 13.4301V7.42999C50 4.42999 52 2.42999 55 2.42999H65C68 2.42999 70 4.42999 70 7.42999V13.4301C70 16.4301 68 18.4301 65 18.4301Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M60 11.36V11.15C60 10.47 60.42 10.11 60.84 9.82001C61.25 9.54001 61.66 9.18002 61.66 8.52002C61.66 7.60002 60.92 6.85999 60 6.85999C59.08 6.85999 58.34 7.60002 58.34 8.52002" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M59.9955 13.75H60.0045" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.5 9.09H20.5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.9955 13.7H12.0045" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.29431 13.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.29431 16.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>

            <div className="flex gap-5">
                <div className="">
                    <p className="float-right md:float-both">Anima Agrawal</p>
                    <p className="text-gray-400 float-right">U.P,India</p>
                </div>
                <div className="flex gap-2">
                    <img className="w-10" src={profile} alt="profile" />
                    <svg className="mt-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00002 12.6C8.47502 12.6 7.95002 12.3975 7.55252 12L2.66251 7.11001C2.44501 6.89251 2.44501 6.53251 2.66251 6.31501C2.88001 6.09751 3.24001 6.09751 3.45751 6.31501L8.34752 11.205C8.70752 11.565 9.29252 11.565 9.65252 11.205L14.5425 6.31501C14.76 6.09751 15.12 6.09751 15.3375 6.31501C15.555 6.53251 15.555 6.89251 15.3375 7.11001L10.4475 12C10.05 12.3975 9.52502 12.6 9.00002 12.6Z" fill="#292D32" />
                    </svg>

                </div>



            </div>

        </nav>
    )
}

export default Navbar;