import { FunctionComponent } from "react";

const FooterShare: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[18.75rem] text-left text-[0.75rem] text-white font-open-sans">
      <div className="absolute top-[0rem] left-[calc(50%_-_750px)] w-[93.75rem] h-[18.75rem]">
        <img
          className="absolute top-[0rem] left-[calc(50%_-_750px)] w-[93.75rem] h-[18.75rem]"
          alt=""
          src="/bgfooter.svg"
        />
        <div className="absolute top-[2.34rem] left-[calc(50%_-_183px)] h-[14.14rem] flex flex-row items-start justify-start gap-[22.75rem]">
          <img
            className="relative w-[0.06rem] h-[14rem]"
            alt=""
            src="/vector44.svg"
          />
          <img
            className="relative w-[0.06rem] h-[14rem]"
            alt=""
            src="/vector44.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_101.52px)] left-[calc(50%_-_409px)] h-[12.73rem] flex flex-row items-center justify-start gap-[6.06rem]">
          <div className="flex flex-col items-start justify-start gap-[4.88rem]">
            <img
              className="relative w-[11.73rem] h-[4.69rem]"
              alt=""
              src="/vector45.svg"
            />
            <div className="flex flex-row items-center justify-start gap-[1.88rem]">
              <img
                className="relative w-[0.63rem] h-[1.18rem]"
                alt=""
                src="/vector46.svg"
              />
              <img
                className="relative w-[1.18rem] h-[1.18rem]"
                alt=""
                src="/group.svg"
              />
              <img
                className="relative w-[1.18rem] h-[1.18rem]"
                alt=""
                src="/group1.svg"
              />
              <img
                className="relative w-[1.16rem] h-[0.81rem]"
                alt=""
                src="/vector47.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[3.13rem]">
            <div className="flex flex-col items-start justify-start gap-[0.63rem]">
              <b className="relative text-darkgray-100">Online</b>
              <div className="relative font-light">WebSite</div>
              <div className="relative font-light">Lojas Virtuais</div>
              <b className="relative text-darkgray-100">Gestão de Conteúdo</b>
              <div className="relative font-light">Áudiovisual</div>
              <div className="relative font-light">TV</div>
              <div className="relative font-light">Web</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.63rem]">
              <b className="relative text-darkgray-100">Design</b>
              <div className="relative font-light">Identidade Visual</div>
              <div className="relative font-light">Rótulos</div>
              <div className="relative font-light">Impressos</div>
              <div className="relative font-light">Comemorativos</div>
              <div className="relative font-light">Ambientes/PDV</div>
              <b className="relative text-darkgray-100">Tráfego Pago</b>
              <b className="relative text-darkgray-100">Eventos</b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.13rem] text-darkgray-100">
            <b className="relative font-inter">Conheça a Layout</b>
            <b className="relative font-inter">Fale Conosco</b>
            <div className="relative w-[10.75rem] h-[2rem]">
              <div className="absolute top-[0rem] left-[1.44rem] font-light">
                <p className="m-0">Rua Eduardo Salusse, 15</p>
                <p className="m-0">Centro | Nova Friburgo | RJ</p>
              </div>
              <img
                className="absolute top-[0.5rem] left-[0rem] w-[0.76rem] h-[1rem]"
                alt=""
                src="/vector48.svg"
              />
            </div>
            <div className="relative w-[6.19rem] h-[1rem]">
              <div className="absolute top-[0rem] left-[1.5rem] font-light inline-block w-[4.69rem]">
                22 2522 1614
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[0.99rem] h-[0.99rem]"
                alt=""
                src="/vector49.svg"
              />
            </div>
            <div className="relative w-[6.69rem] h-[1.1rem]">
              <div className="absolute top-[0.06rem] left-[1.56rem] font-light inline-block w-[5.13rem]">
                22 98837 1687
              </div>
              <img
                className="absolute h-full w-[16.39%] top-[0%] right-[83.61%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector50.svg"
              />
            </div>
            <div className="relative w-[5.94rem] h-[1rem]">
              <div className="absolute top-[0rem] left-[1.69rem] font-light inline-block w-[4.25rem]">
                layout.net.br
              </div>
              <img
                className="absolute h-[98%] w-[16.91%] top-[0%] right-[83.09%] bottom-[2%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector51.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterShare;
