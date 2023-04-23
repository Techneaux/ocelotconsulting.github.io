import {ComponentPropsWithRef} from 'react'

export default function PeopleIcon(props: ComponentPropsWithRef<'svg'>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.6593 21.7538C17.6897 21.7519 17.7204 21.751 17.7513 21.751H38.2972C39.1257 21.751 39.7972 22.4225 39.7972 23.251C39.7972 24.0794 39.1257 24.751 38.2972 24.751H17.7939C14.8278 24.8375 12.3493 27.3837 12.3222 30.5134L13.791 50.5822C13.8454 51.1626 14.3162 51.9389 15.3256 52.6941C16.3039 53.4261 17.536 53.9392 18.5755 54.0927C18.5919 54.0951 18.6083 54.0978 18.6246 54.1008C18.6783 54.1105 18.7315 54.1165 18.8465 54.128C19.5715 54.2005 20.1395 54.7836 20.1931 55.5102L22.1731 82.3487C22.1827 82.4801 22.2462 82.618 22.3589 82.7256C22.4721 82.8337 22.5918 82.8716 22.6788 82.8716H33.3696C33.4566 82.8716 33.5763 82.8337 33.6896 82.7256C33.8024 82.6179 33.8659 82.4801 33.8755 82.3487L34.6956 71.232C34.7565 70.4058 35.4757 69.7855 36.3019 69.8464C37.1281 69.9074 37.7484 70.6266 37.6874 71.4527L36.8675 82.5669C36.8675 82.5671 36.8675 82.5666 36.8675 82.5669C36.8675 82.5671 36.8674 82.568 36.8674 82.5681C36.7353 84.3715 35.2137 85.8716 33.3696 85.8716H22.6788C20.8345 85.8716 19.3133 84.3714 19.1811 82.5681C19.1811 82.568 19.1811 82.5683 19.1811 82.5681C19.1811 82.5679 19.181 82.5671 19.181 82.5669L17.2868 56.8902C15.9751 56.5609 14.6352 55.9244 13.5283 55.0962C12.2163 54.1145 10.9599 52.6509 10.8016 50.8343L10.7999 50.8136L9.32599 30.6747C9.32333 30.6383 9.32199 30.6017 9.32199 30.5652C9.32199 25.8751 13.008 21.9151 17.6593 21.7538Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M28.0242 6.22888C25.2357 6.22888 22.9689 8.50334 22.9689 11.2842C22.9689 14.0728 25.2434 16.3395 28.0242 16.3395C30.8128 16.3395 33.0796 14.065 33.0796 11.2842C33.0796 8.49566 30.8051 6.22888 28.0242 6.22888ZM19.9689 11.2842C19.9689 6.84979 23.5755 3.22888 28.0242 3.22888C32.4586 3.22888 36.0796 6.83547 36.0796 11.2842C36.0796 15.7186 32.4729 19.3395 28.0242 19.3395C23.5898 19.3395 19.9689 15.7329 19.9689 11.2842Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M28.0242 52.2397C28.8526 52.2397 29.5242 52.9113 29.5242 53.7397V83.5246C29.5242 84.3531 28.8526 85.0246 28.0242 85.0246C27.1958 85.0246 26.5242 84.3531 26.5242 83.5246V53.7397C26.5242 52.9113 27.1958 52.2397 28.0242 52.2397Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.9143 31.7531C17.7405 31.6918 18.4599 32.3118 18.5213 33.1379L20.1821 55.5096C20.2434 56.3357 19.6234 57.0552 18.7973 57.1165C17.9711 57.1778 17.2517 56.5578 17.1903 55.7317L15.5295 33.36C15.4682 32.5339 16.0882 31.8144 16.9143 31.7531Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M60.1809 23.251C60.1809 22.4225 60.8525 21.751 61.6809 21.751H82.2267C82.2395 21.751 82.2524 21.7511 82.2653 21.7515C86.9521 21.8723 90.678 25.8498 90.678 30.5652C90.678 30.6911 90.6625 30.8134 90.6333 30.9302L89.178 50.8136L89.1764 50.8343C89.0181 52.6509 87.7618 54.1144 86.4497 55.0961C85.3428 55.9244 84.0029 56.5609 82.6912 56.8902L80.797 82.5669C80.7969 82.5671 80.797 82.5666 80.797 82.5669C80.7969 82.5671 80.7969 82.568 80.7969 82.5681C80.6647 84.3714 79.1434 85.8716 77.2992 85.8716H66.6083C64.7642 85.8716 63.2427 84.3715 63.1105 82.5681C63.1105 82.568 63.1106 82.5683 63.1105 82.5681C63.1105 82.5679 63.1105 82.5671 63.1104 82.5669L62.2521 70.931C62.1912 70.1049 62.8115 69.3857 63.6377 69.3248C64.4639 69.2638 65.183 69.8842 65.244 70.7103L66.1025 82.3487C66.1121 82.4801 66.1756 82.6179 66.2884 82.7256C66.4016 82.8337 66.5213 82.8716 66.6083 82.8716H77.2992C77.3862 82.8716 77.5058 82.8337 77.619 82.7256C77.7318 82.618 77.7953 82.4801 77.8049 82.3487L79.7848 55.5102C79.8384 54.7836 80.4065 54.2005 81.1315 54.128C81.2467 54.1165 81.2999 54.1105 81.3535 54.1008C81.3698 54.0978 81.3862 54.0951 81.4027 54.0927C82.4421 53.9392 83.6742 53.4261 84.6524 52.6941C85.6617 51.9389 86.1325 51.1626 86.187 50.5822L87.66 30.4557C87.663 30.4152 87.6675 30.3752 87.6736 30.3356C87.5563 27.2878 85.1158 24.8359 82.2061 24.751H61.6809C60.8525 24.751 60.1809 24.0794 60.1809 23.251Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M71.9427 6.22888C69.1542 6.22888 66.8874 8.50334 66.8874 11.2842C66.8874 14.0728 69.1619 16.3395 71.9427 16.3395C74.7313 16.3395 76.998 14.065 76.998 11.2842C76.998 8.49562 74.7235 6.22888 71.9427 6.22888ZM63.8874 11.2842C63.8874 6.84979 67.494 3.22888 71.9427 3.22888C76.3771 3.22888 79.998 6.83551 79.998 11.2842C79.998 15.7186 76.3914 19.3395 71.9427 19.3395C67.5083 19.3395 63.8874 15.7329 63.8874 11.2842Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M71.9317 52.2397C72.7601 52.2397 73.4317 52.9113 73.4317 53.7397V83.5246C73.4317 84.3531 72.7601 85.0246 71.9317 85.0246C71.1033 85.0246 70.4317 84.3531 70.4317 83.5246V53.7397C70.4317 52.9113 71.1033 52.2397 71.9317 52.2397Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M83.0409 31.753C83.8671 31.814 84.4874 32.5331 84.4265 33.3593L82.7767 55.7309C82.7157 56.5571 81.9966 57.1775 81.1704 57.1166C80.3442 57.0556 79.7239 56.3365 79.7848 55.5103L81.4346 33.1386C81.4956 32.3125 82.2147 31.6921 83.0409 31.753Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M49.978 17.1285C47.1895 17.1285 44.9226 19.4031 44.9226 22.1839C44.9226 24.9724 47.1972 27.2392 49.978 27.2392C52.7666 27.2392 55.0333 24.9647 55.0333 22.1839C55.0333 19.3953 52.7589 17.1285 49.978 17.1285ZM41.9226 22.1839C41.9226 17.7494 45.5294 14.1285 49.978 14.1285C54.4125 14.1285 58.0333 17.7352 58.0333 22.1839C58.0333 26.6183 54.4267 30.2392 49.978 30.2392C45.5437 30.2392 41.9226 26.6326 41.9226 22.1839Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M49.978 63.1394C50.8065 63.1394 51.478 63.811 51.478 64.6394V94.4243C51.478 95.2527 50.8065 95.9243 49.978 95.9243C49.1496 95.9243 48.478 95.2527 48.478 94.4243V64.6394C48.478 63.811 49.1496 63.1394 49.978 63.1394Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M38.8681 42.6527C39.6943 42.5914 40.4137 43.2114 40.4751 44.0376L42.1359 66.4092C42.1972 67.2354 41.5772 67.9548 40.7511 68.0162C39.9249 68.0775 39.2055 67.4575 39.1441 66.6313L37.4833 44.2597C37.422 43.4335 38.042 42.7141 38.8681 42.6527Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M61.0879 42.6527C61.9141 42.7141 62.5341 43.4335 62.4728 44.2597L60.8119 66.6313C60.7506 67.4575 60.0311 68.0775 59.205 68.0162C58.3788 67.9548 57.7588 67.2354 57.8202 66.4092L59.481 44.0376C59.5423 43.2114 60.2618 42.5914 61.0879 42.6527Z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M39.6772 32.6513C39.6901 32.651 39.7031 32.6508 39.716 32.6508H60.262C60.2749 32.6508 60.2877 32.651 60.3006 32.6513C64.9875 32.7722 68.7132 36.7497 68.7132 41.4651C68.7132 41.591 68.6977 41.7132 68.6685 41.8301L67.2133 61.7134L67.2117 61.7342C67.0534 63.5507 65.797 65.0143 64.485 65.996C63.3781 66.8242 62.0382 67.4607 60.7265 67.7901L58.8323 93.4667L58.8322 93.468C58.7 95.2713 57.1787 96.7714 55.3345 96.7714H44.6435C42.7993 96.7714 41.278 95.2713 41.1458 93.468L41.1458 93.4667L39.2515 67.79C37.9403 67.4606 36.6027 66.8242 35.4974 65.9976C34.1874 65.0177 32.9335 63.5595 32.767 61.7526L32.7648 61.7263L31.2901 41.9168C31.2808 41.7774 31.281 41.6615 31.2832 41.5728C31.2841 41.5359 31.2854 41.5022 31.2862 41.4824L31.2864 41.4759C31.2866 41.4708 31.2868 41.467 31.2869 41.4643M39.7367 35.6508C36.7804 35.7378 34.2869 38.3073 34.2869 41.476C34.2869 41.5237 34.2851 41.5694 34.2843 41.589L34.2839 41.5991C34.2831 41.6207 34.2826 41.6324 34.2823 41.646C34.2817 41.6687 34.2818 41.6892 34.2833 41.713L35.7554 61.4879C35.8136 62.0666 36.2869 62.8418 37.2942 63.5952C38.2718 64.3263 39.5013 64.8391 40.5402 64.9925C40.5566 64.995 40.573 64.9977 40.5894 65.0006C40.6431 65.0104 40.6963 65.0164 40.8112 65.0279C41.5362 65.1004 42.1043 65.6834 42.1579 66.4101L44.1378 93.2486C44.1474 93.38 44.2109 93.5179 44.3237 93.6255C44.4369 93.7336 44.5565 93.7714 44.6435 93.7714H55.3345C55.4215 93.7714 55.5411 93.7336 55.6543 93.6255C55.7671 93.5179 55.8306 93.38 55.8402 93.2486L57.8201 66.4101C57.8738 65.6834 58.4418 65.1004 59.1668 65.0279C59.2817 65.0164 59.335 65.0104 59.3886 65.0006C59.405 64.9977 59.4214 64.995 59.4378 64.9925C60.4773 64.839 61.7094 64.3259 62.6877 63.594C63.697 62.8388 64.1678 62.0625 64.2223 61.4821L65.6952 41.3556C65.6981 41.3151 65.7027 41.275 65.7088 41.2355C65.5915 38.1876 63.1511 35.7358 60.2414 35.6508H39.7367Z"></path>
            <path d="M41.8157 34.1114C38.7133 33.8416 32.1445 34.3339 32.8459 42.373" stroke="black" strokeWidth="3"></path>
        </svg>
    )
}