import { SVGProps } from "react";
import "./bodyparts.css";

const Head = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div className="bodypart-container">
      <svg
        width="100%"
        viewBox="0 0 160 173"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M65.679 76.609c-2.966-2.827-5.381-5.883-10.065-12.049-5.14-8.658-2.17-29.095 8.865-36.305 9.508-6.137 19.045-7.741 28.419-.64 8.103 6.138 13.783 27.184 9.05 34.858-4.362 7.071-5.846 9.128-9.511 13.976-5.051 1.832-5.991 1.079-12.362 1.096-6.069.016-6.571.493-14.396-.937z"
          fill="#cbd8e1"
        />
        <path
          d="M69.859 70.419c-5.684.014-13.247-4.66-12.797-19.395.45-14.736 5.78-19.746 10.373-23.348 6.902-5.48 16.053-5.645 23.91-.795 6.605 4.077 13.107 19.472 11.621 29.887-1.989 7.13-7.94 14.79-10.779 15.457-6.533.277-5.961-2.62-10.951-2.562-4.99.06-5.693.742-11.377.756z"
          fill="#f9fbfb"
        />
      </svg>
    </div>
  );
};

export default Head;