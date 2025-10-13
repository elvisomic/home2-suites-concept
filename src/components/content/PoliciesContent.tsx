export const PoliciesContent = {
    Parking: (
        <div>
            <span>The hotel offers convenient parking options for all guests. Valet service is available for a fee, while self-parking options may be limited. Please contact the Front Desk for current availability and rates.</span>
            <div className="grid md:grid-cols-[25%_75%] grid-cols-[50%_50%] gap-x-6 text-[16px] mt-12">

                <div className="flex flex-col space-y-8 font-bold">
                    <span>Self-parking:</span>
                    <span>Valet Parking:</span>
                    <span>EV Charging:</span>
                    <span>Secured Parking:</span>
                    <span>Covered Parking:</span>
                    <span>In/Out Privileges:</span>
                    <span>Other Parking Information:</span>
                </div>

                <div className="flex flex-col space-y-8 ">
                    <span>Not available</span>
                    <span>$85.00</span>
                    <span>Not available</span>
                    <span>Available</span>
                    <span>Available</span>
                    <span>Not available</span>
                    <span>$85 + tax for Compact $95 + tax for SUVs & Large Cars</span>
                </div>
            </div>
        </div>
    ),
    Pets: (
        <div>
            <span>Pets are welcome at the hotel. A non-refundable fee of $75 applies per stay, with a maximum weight limit of 50 lbs for medium-sized pets.</span>
            <div className="grid md:grid-cols-[25%_75%] grid-cols-[50%_50%] gap-x-6 text-[16px] mt-12">

                <div className="flex flex-col space-y-8 font-bold">
                    <span>Pets Allowed:</span>
                    <span>Deposit:</span>
                    <span>Maximum Weight:</span>
                    <span>Maximum Size:</span>

                </div>

                <div className="flex flex-col space-y-8 ">
                    <span>Yes</span>
                    <span>$75 non-refundable fee</span>
                    <span>50lbs</span>
                    <span>Medium</span>
                </div>
            </div>
        </div>
    ),
    Smoking: (
        <div>
            <span>Smoking is not permitted in any non-smoking guest room. A cleaning fee will be charged to guests who violate this policy. Designated outdoor smoking areas are available; please contact the Front Desk for details</span>
        </div>
    ),
    WiFi: (
        <div>
            <span>Complimentary high-speed Wi-Fi is provided in all guest rooms and in the lobby, allowing guests to stay connected with ease throughout their stay.</span>
        </div>
    )
} as const;

export type PolicyKey = keyof typeof PoliciesContent;

export const PolicySVG = {
    Parking: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Parking--Streamline-Guidance-Free" height="64" width="64">
            <desc>
                Parking Streamline Icon: https://streamlinehq.com
            </desc>
            <path stroke="#000000" d="m9 19 0 -6.5m0 0v-7h4.5a3.5 3.5 0 1 1 0 7H9Zm3 11C5.649 23.5 0.5 18.351 0.5 12S5.649 0.5 12 0.5 23.5 5.649 23.5 12 18.351 23.5 12 23.5Z" stroke-width="1"></path>
        </svg>
    ),
    Pets: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Paw--Streamline-Font-Awesome" height="64" width="64">
            <desc>
                Paw Streamline Icon: https://streamlinehq.com
            </desc>
            <path d="M7.078125 2.903125c0.446875 1.340625 -0.009375 2.69375 -1.01875 3.025s-2.190625 -0.4875 -2.6375 -1.828125 0.009375 -2.69375 1.01875 -3.025 2.190625 0.4875 2.6375 1.828125zM3.1375 6.20625c0.590625 1.0125 0.446875 2.190625 -0.31875 2.628125s-1.865625 -0.028125 -2.453125 -1.040625 -0.45 -2.190625 0.315625 -2.628125 1.865625 0.028125 2.453125 1.040625zM2.1625 12.5375C3.8 8.121875 6.709375 7 8 7s4.2 1.121875 5.8375 5.5375c0.1125 0.303125 0.1625 0.628125 0.1625 0.953125v0.05c0 0.80625 -0.653125 1.459375 -1.459375 1.459375 -0.359375 0 -0.715625 -0.04375 -1.0625 -0.13125l-2.75 -0.6875c-0.478125 -0.11875 -0.978125 -0.11875 -1.45625 0l-2.75 0.6875c-0.346875 0.0875 -0.703125 0.13125 -1.0625 0.13125 -0.80625 0 -1.459375 -0.653125 -1.459375 -1.459375v-0.05c0 -0.325 0.05 -0.65 0.1625 -0.953125zm11.01875 -3.703125c-0.765625 -0.4375 -0.909375 -1.615625 -0.31875 -2.628125s1.6875 -1.478125 2.453125 -1.040625 0.909375 1.615625 0.31875 2.628125 -1.6875 1.478125 -2.453125 1.040625zm-3.490625 -2.90625c-1.009375 -0.33125 -1.465625 -1.684375 -1.01875 -3.025s1.628125 -2.159375 2.6375 -1.828125 1.465625 1.684375 1.01875 3.025 -1.628125 2.159375 -2.6375 1.828125z" fill="#000000" stroke-width="0.0313"></path>
        </svg>
    ),
    Smoking: (
        <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" height="64" width="64">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M 3.71875 2.28125 L 2.28125 3.71875 L 28.28125 29.71875 L 29.71875 28.28125 L 23.4375 22 L 31 22 L 31 16 L 17.4375 16 Z M 16.03125 4 C 15.671875 4.359375 15.40625 4.785156 15.09375 5.46875 C 14.78125 6.152344 14.503906 7.011719 14.5 7.96875 C 14.496094 8.925781 14.828125 10.019531 15.6875 10.84375 C 16.546875 11.667969 17.859375 12.203125 19.6875 12.4375 C 21.210938 12.632813 22.191406 12.882813 22.75 13.21875 C 23.308594 13.554688 23.539063 13.898438 23.71875 14.71875 L 25.6875 14.28125 C 25.429688 13.101563 24.777344 12.097656 23.78125 11.5 C 22.785156 10.902344 21.566406 10.644531 19.9375 10.4375 C 18.378906 10.238281 17.507813 9.800781 17.0625 9.375 C 16.617188 8.949219 16.5 8.511719 16.5 7.96875 C 16.5 7.425781 16.675781 6.816406 16.90625 6.3125 C 17.136719 5.808594 17.492188 5.351563 17.4375 5.40625 Z M 21.5625 4.3125 L 21.5625 6.3125 C 22.183594 6.3125 22.984375 6.40625 23.59375 6.75 C 24.203125 7.09375 24.71875 7.601563 24.84375 9.0625 L 24.9375 10 L 25.84375 10 C 26.359375 10 27.433594 10.160156 27.96875 10.625 C 28.234375 10.859375 28.40625 11.132813 28.46875 11.65625 C 28.53125 12.179688 28.4375 12.980469 27.96875 14.125 L 29.84375 14.875 C 30.402344 13.515625 30.585938 12.386719 30.46875 11.40625 C 30.351563 10.425781 29.875 9.644531 29.28125 9.125 C 28.378906 8.335938 27.398438 8.132813 26.59375 8.0625 C 26.246094 6.617188 25.523438 5.527344 24.59375 5 C 23.472656 4.363281 22.304688 4.3125 21.5625 4.3125 Z M 1 16 L 1 22 L 17.8125 22 L 15.8125 20 L 3 20 L 3 18 L 13.8125 18 L 11.8125 16 Z M 19.4375 18 L 23 18 L 23 20 L 21.4375 20 Z M 25 18 L 26 18 L 26 20 L 25 20 Z M 28 18 L 29 18 L 29 20 L 28 20 Z"></path>
            </g>
        </svg>
    ),
    WiFi: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Wifi--Streamline-Core" height="64" width="64">
            <desc>
                Wifi Streamline Icon: https://streamlinehq.com
            </desc>
            <g id="wifi--wireless-wifi-internet-server-network-connection">
                <path id="Vector" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7 12.2499c0.7235 0 1.31 -0.5865 1.31 -1.31S7.7235 9.62988 7 9.62988c-0.72349 0 -1.31 0.58652 -1.31 1.31002 0 0.7235 0.58651 1.31 1.31 1.31Z" stroke-width="1"></path>
                <path id="Vector_2" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.53 7.99989c0.32517 -0.33383 0.71392 -0.59916 1.14329 -0.78032 0.42937 -0.18117 0.89068 -0.2745 1.35671 -0.2745 0.46603 0 0.92734 0.09333 1.35671 0.2745 0.42937 0.18116 0.81811 0.44649 1.14329 0.78032" stroke-width="1"></path>
                <path id="Vector_3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M2.35999 6.31011c0.60871 -0.61226 1.33246 -1.09814 2.12962 -1.4297 0.79716 -0.33155 1.65201 -0.50224 2.51538 -0.50224 0.86336 0 1.71821 0.17069 2.51537 0.50224 0.79714 0.33156 1.52094 0.81744 2.12964 1.4297" stroke-width="1"></path>
                <path id="Vector_4" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M0.5 4.44997c0.85343 -0.85388 1.86674 -1.53123 2.98204 -1.99337C4.59733 1.99446 5.79275 1.75659 7 1.75659c1.20725 0 2.40267 0.23787 3.518 0.70001 1.1153 0.46214 2.1286 1.13949 2.982 1.99337" stroke-width="1"></path>
            </g>
        </svg>
    ),
}