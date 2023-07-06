import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const HeaderShare: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[18.75rem] text-left text-[1.25rem] text-white font-open-sans">
      <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_750px)] w-[93.75rem]">
        <img
          className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_750px)] max-h-full w-[93.75rem]"
          alt=""
          src="/vector52.svg"
        />
        <div className="absolute top-[3.04rem] left-[48.94rem] w-[23.64rem] h-[1.64rem] flex flex-row items-start justify-start gap-[4.63rem]">
        <a
            href="https://layout.net.br" target="_blank"
            className="relative text-white font-open-sans"
            style={{
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Layout
          </a>
          
          <Link
            to="/calculadora"
            className="relative text-white font-open-sans"
            style={{
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Sobre
          </Link>
          
          <Link
            to="/calculadora"
            className="relative text-white font-open-sans"
            style={{
              textDecoration: "none",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Calculadora
          </Link>
        </div>
        <img
          className="absolute h-[27.27%] w-[13.3%] top-[16.23%] right-[83.29%] bottom-[56.49%] left-[3.41%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/layout-wiki.svg"
        />
        <div className="absolute h-[7.14%] w-[10.67%] top-[87.34%] left-[86.53%] text-[1rem] inline-block">
          <span>{`Olá, `}</span>
          <b>Ryan Figueredo</b>
        </div>
        <div className="absolute top-[3.04rem] left-[84.79rem] w-[5rem] h-[1.83rem] flex flex-row items-start justify-start gap-[1.25rem]">
          <img
            className="relative w-[1.87rem] h-[1.88rem]"
            alt=""
            src="/vector53.svg"
          />
          <img
            className="relative w-[1.87rem] h-[1.88rem]"
            alt=""
            src="/vector54.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderShare;
