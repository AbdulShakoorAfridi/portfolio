import { useState } from "react";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className="flex items-center justify-between py-4">
      <div className="logo">
        <svg
          width={214}
          height={34}
          viewBox="0 0 214 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M109.475 4V18.8491C109.475 20.334 109.842 21.4771 110.576 22.2785C111.31 23.0799 112.388 23.4806 113.809 23.4806C115.23 23.4806 116.319 23.0799 117.077 22.2785C117.835 21.4771 118.214 20.334 118.214 18.8491V4H124.289V18.8137C124.289 21.0293 123.815 22.9031 122.868 24.4352C121.921 25.9672 120.642 27.1221 119.031 27.9C117.444 28.6778 115.668 29.0667 113.702 29.0667C111.737 29.0667 109.972 28.6895 108.409 27.9353C106.87 27.1575 105.65 26.0026 104.75 24.4705C103.85 22.9149 103.4 21.0293 103.4 18.8137V4H109.475Z"
            fill="#202020"
          />
          <path
            d="M17.149 24.6389H7.84665L6.35543 29.0667H0L9.01832 4H16.0483L25.0667 29.0667H18.6402L17.149 24.6389ZM15.5868 19.9255L12.4978 10.7487L9.44438 19.9255H15.5868Z"
            fill="#202020"
          />
          <g filter="url(#filter0_d_452_381)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.3112 4H49.0889V29.0667H54.3112V4ZM97.6057 25.4546C95.5061 27.5402 92.7482 28.7994 89.8299 29.0287L89.8223 29.0667H54.3112V23.8445H90.6484C91.9464 23.5228 93.1467 22.8538 94.1143 21.8927C95.5263 20.4901 96.327 18.5803 96.3402 16.5834C96.3534 14.5865 95.5781 12.6661 94.1848 11.2447C92.7916 9.82335 90.7949 9.23561 88.8114 9.22222H54.3112V4L88.811 4L88.8114 4C88.8113 4 88.8111 4 88.811 4M88.9922 4.00254C92.2331 4.0716 95.4463 5.40717 97.7231 7.72999C100.042 10.0961 101.333 13.2928 101.311 16.6168C101.289 19.9408 99.9561 23.1198 97.6057 25.4546"
              fill="#1D1D1D"
            />
          </g>
          <path
            d="M42.2161 16.212C43.6572 16.5214 44.8148 17.2475 45.6889 18.3901C46.563 19.509 47 20.7944 47 22.2465C47 24.3414 46.2677 26.0077 44.803 27.2456C43.3619 28.4596 41.342 29.0667 38.7433 29.0667H27.1556V4H38.3535C40.8813 4 42.854 4.58322 44.2714 5.74967C45.7125 6.91611 46.433 8.49914 46.433 10.4988C46.433 11.9747 46.0432 13.2006 45.2636 14.1766C44.5077 15.1526 43.4918 15.8311 42.2161 16.212ZM33.2152 14.1409H37.1841C38.1763 14.1409 38.9323 13.9267 39.452 13.4982C39.9954 13.0459 40.2671 12.3913 40.2671 11.5343C40.2671 10.6773 39.9954 10.0227 39.452 9.57037C38.9323 9.11808 38.1763 8.89193 37.1841 8.89193H33.2152V14.1409ZM37.6802 24.139C38.6961 24.139 39.4757 23.9129 40.019 23.4606C40.586 22.9845 40.8695 22.306 40.8695 21.4253C40.8695 20.5445 40.5742 19.8541 39.9836 19.3542C39.4166 18.8543 38.6252 18.6044 37.6093 18.6044H33.2152V24.139H37.6802Z"
            fill="#202020"
          />
          <path
            d="M132.708 24.3533H141V29.0667H126.378V4H132.708V24.3533Z"
            fill="#202020"
          />
          <rect x={152} y={13} width={16} height={16} rx={8} fill="#DF0043" />
          <rect x={175} y={13} width={16} height={16} rx={8} fill="#FE9000" />
          <rect x={198} y={13} width={16} height={16} rx={8} fill="#00D8A6" />
          <defs>
            <filter
              id="filter0_d_452_381"
              x="45.0889"
              y={0}
              width="60.2223"
              height="33.0667"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_452_381"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_452_381"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <button
        onClick={() => setToggleNav(!toggleNav)}
        className=" block md:hidden"
      >
        {toggleNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <div className="links md:flex items-center justify-center gap-6 hidden ">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
};

export default Header;
