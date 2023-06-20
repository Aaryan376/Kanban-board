import React from "react";

const Sidebar = () => {
    return (
        <div className="hidden md:block sidebar divide-y-2  py-4 w-64 h-fit">
              <div className="flex justify-between py-1">
                <div className="logo-container flex gap-3 mt-2 mb-2">
                    <svg className ="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.6" d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z" fill="#5030E5" />
                        <path d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z" fill="#5030E5" />
                        <path opacity="0.4" d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z" fill="#5030E5" />
                    </svg>

                    <p className="font-semibold">Project M.</p>
                </div>
                <svg className="mt-3 ml-24 mr-2" width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 17.225C18.3417 17.225 18.1833 17.1667 18.0583 17.0417L12.625 11.6083C11.7417 10.725 11.7417 9.27499 12.625 8.39165L18.0583 2.95832C18.3 2.71665 18.7 2.71665 18.9417 2.95832C19.1833 3.19999 19.1833 3.59999 18.9417 3.84165L13.5083 9.27499C13.1083 9.67499 13.1083 10.325 13.5083 10.725L18.9417 16.1583C19.1833 16.4 19.1833 16.8 18.9417 17.0417C18.8167 17.1583 18.6583 17.225 18.5 17.225Z" fill="#787486" />
                    <path d="M12.5 17.225C12.3417 17.225 12.1833 17.1667 12.0583 17.0417L6.62499 11.6083C5.74166 10.725 5.74166 9.27499 6.62499 8.39165L12.0583 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1833 3.19999 13.1833 3.59999 12.9417 3.84165L7.50833 9.27499C7.10833 9.67499 7.10833 10.325 7.50833 10.725L12.9417 16.1583C13.1833 16.4 13.1833 16.8 12.9417 17.0417C12.8167 17.1583 12.6583 17.225 12.5 17.225Z" fill="#787486" />
                </svg>

            </div>
            <div className="sidenav mt-4 pt-4">
                <ul className="px-2">
                    <li className="flex gap-3 mb-5 text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z" fill="#787486" />
                        <path d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z" fill="#787486" />
                        <path d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z" fill="#787486" />
                        <path d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z" fill="#787486" />
                    </svg>
                        Home</li>
                    <li className="flex gap-3 mb-5 text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.9965 11H16.0054" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.9955 11H12.0045" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.99451 11H8.00349" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        Messages</li>
                    <li className="flex gap-3 mb-5 text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.37 8.88H17.62" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.38 8.88L7.13 9.63L9.38 7.38" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.37 15.88H17.62" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.38 15.88L7.13 16.63L9.38 14.38" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        Tasks</li>
                    <li className="flex gap-3 mb-5 text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        Members</li>
                    <li className="flex gap-3 mb-5 text-gray-500"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        Settings</li>
                </ul>

            </div>

            <div className="projects px-2 pt-6">
                <div className="flex justify-between">
                    <p className="font-bold text-xs px-2">MY PROJECTS</p>
                    <svg className="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33334 8H10.6667" stroke="#787486" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 10.6667V5.33333" stroke="#787486" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.00001 14.6667H10C13.3333 14.6667 14.6667 13.3333 14.6667 10V6C14.6667 2.66667 13.3333 1.33333 10 1.33333H6.00001C2.66668 1.33333 1.33334 2.66667 1.33334 6V10C1.33334 13.3333 2.66668 14.6667 6.00001 14.6667Z" stroke="#787486" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                <div className="project-list mt-4">
                    <div className="flex justify-between px-3 py-3 rounded-md mb-4 bg-violet-100">
                        <div className="flex gap-5">
                            <svg className="mt-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#7AC555" />
                            </svg>
                            <p>Mobile App</p>
                        </div>

                        <svg className="mt-3" width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.44318 3.16477C2.03409 3.16477 1.68371 3.02083 1.39205 2.73295C1.10417 2.44508 0.962121 2.09659 0.965909 1.6875C0.962121 1.28598 1.10417 0.943182 1.39205 0.659091C1.68371 0.371212 2.03409 0.227273 2.44318 0.227273C2.82955 0.227273 3.17045 0.371212 3.46591 0.659091C3.76515 0.943182 3.91667 1.28598 3.92045 1.6875C3.91667 1.96023 3.8447 2.20833 3.70455 2.43182C3.56818 2.6553 3.38826 2.83333 3.16477 2.96591C2.94508 3.09848 2.70455 3.16477 2.44318 3.16477ZM7.78131 3.16477C7.37222 3.16477 7.02184 3.02083 6.73017 2.73295C6.44229 2.44508 6.30025 2.09659 6.30403 1.6875C6.30025 1.28598 6.44229 0.943182 6.73017 0.659091C7.02184 0.371212 7.37222 0.227273 7.78131 0.227273C8.16767 0.227273 8.50858 0.371212 8.80403 0.659091C9.10328 0.943182 9.25479 1.28598 9.25858 1.6875C9.25479 1.96023 9.18282 2.20833 9.04267 2.43182C8.90631 2.6553 8.72638 2.83333 8.5029 2.96591C8.2832 3.09848 8.04267 3.16477 7.78131 3.16477ZM13.1194 3.16477C12.7103 3.16477 12.36 3.02083 12.0683 2.73295C11.7804 2.44508 11.6384 2.09659 11.6422 1.6875C11.6384 1.28598 11.7804 0.943182 12.0683 0.659091C12.36 0.371212 12.7103 0.227273 13.1194 0.227273C13.5058 0.227273 13.8467 0.371212 14.1422 0.659091C14.4414 0.943182 14.5929 1.28598 14.5967 1.6875C14.5929 1.96023 14.5209 2.20833 14.3808 2.43182C14.2444 2.6553 14.0645 2.83333 13.841 2.96591C13.6213 3.09848 13.3808 3.16477 13.1194 3.16477Z" fill="#0D062D" />
                        </svg>

                    </div>
                    <div className="flex gap-5 mb-4 px-3">
                        <svg className="mt-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#FFA500" />
                        </svg>
                        <p>Website Redesign</p>
                    </div>
                    <div className="flex  mb-4 gap-5 px-3">
                        <svg className="mt-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#E4CCFD" />
                        </svg>
                        <p>Design System</p>
                    </div>
                    <div className="flex mb-4 gap-5 px-3">
                        <svg className="mt-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#76A5EA" />
                        </svg>
                        <p>Wireframes</p>
                    </div>
                </div>

                <div className="thoughts">


                    <svg className="bg-gray-100 rounded-full p-1 relative left-24 top-2" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_435)">
                            <path d="M20.21 6.36C19.17 4.26 17.16 2.71 14.83 2.2C12.39 1.66 9.88997 2.24 7.97997 3.78C6.05997 5.31 4.96997 7.6 4.96997 10.05C4.96997 12.64 6.51997 15.35 8.85997 16.92V17.75C8.84997 18.03 8.83997 18.46 9.17997 18.81C9.52997 19.17 10.05 19.21 10.46 19.21H15.59C16.13 19.21 16.54 19.06 16.82 18.78C17.2 18.39 17.19 17.89 17.18 17.62V16.92C20.28 14.83 22.23 10.42 20.21 6.36Z" fill="#FBCB18" />
                            <path d="M16.26 22C16.2 22 16.13 21.99 16.07 21.97C14.06 21.4 11.95 21.4 9.93997 21.97C9.56997 22.07 9.17997 21.86 9.07997 21.49C8.96997 21.12 9.18997 20.73 9.55997 20.63C11.82 19.99 14.2 19.99 16.46 20.63C16.83 20.74 17.05 21.12 16.94 21.49C16.84 21.8 16.56 22 16.26 22Z" fill="#FBCB18" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_435" x="-3" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_435" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_435" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <div className="text-center bg-gray-100 p-5 rounded-lg">
                        <h3 className="mb-2 font-medium">Thoughts Time</h3>
                        <p className="text-gray-400 mb-3">We don't have any notice for you, till then you can share your thoughts with your peers.</p>
                        <button className="bg-white p-2 w-48 rounded-lg border-1">Write a message</button>
                    </div>

                </div>

            </div>




        </div>
    )
}

export default Sidebar;