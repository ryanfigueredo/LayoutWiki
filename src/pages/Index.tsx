import { FunctionComponent } from "react";
import HeaderShare from "../components/HeaderShare";
import FooterShare from "../components/FooterShare";

const Index: FunctionComponent = () => {
  return (
    <div>
      <HeaderShare />
    <div className="relative bg-white w-full h-[64rem] overflow-hidden text-left text-[1.13rem] text-tomato font-open-sans">
      <div className="absolute top-[0rem] left-[calc(50%_-_790px)] flex flex-col p-[3.13rem] items-center justify-center gap-[3.13rem]">
        <div className="relative w-[92.5rem] h-[43.75rem]">
          <div className="absolute top-[0rem] left-[0rem] bg-white flex flex-row items-start justify-start gap-[3.13rem]">
            <div className="relative bg-tomato w-[58.13rem] h-[43.75rem]">
              <div className="absolute top-[5.69rem] left-[6.25rem] flex flex-col items-start justify-start gap-[0.63rem]">
                <img
                  className="relative w-[4.84rem] h-[5.82rem]"
                  alt=""
                  src="/vector55.svg"
                />
                <div className="flex flex-col items-start justify-start text-white">
                  <div className="relative">Informe seus Dados</div>
                  <b className="relative text-[0.75rem]">
                    *Preenchimento Obrigatório
                  </b>
                </div>
                <div className="bg-whitesmoke overflow-hidden flex flex-row py-[1.38rem] px-[11.81rem] items-start justify-start">
                  <div className="relative">Nome</div>
                </div>
                <div className="bg-whitesmoke overflow-hidden flex flex-row py-[1.38rem] px-[10.75rem] items-start justify-start">
                  <div className="relative">Whatsapp</div>
                </div>
                <div className="bg-whitesmoke overflow-hidden flex flex-row py-[1.38rem] px-[11.81rem] items-start justify-start">
                  <div className="relative">E-mail</div>
                </div>
                <div className="bg-whitesmoke w-[26.81rem] overflow-hidden flex flex-row p-[0.25rem] box-border items-center justify-start gap-[6.06rem]">
                  <img
                    className="relative w-[5rem] h-[3.13rem]"
                    alt=""
                    src="/vector56.svg"
                  />
                  <b className="relative">Começar</b>
                </div>
              </div>
            </div>
            <div className="relative bg-whitesmoke w-[31.25rem] h-[43.75rem] text-justify text-[1.75rem] text-gray">
              <img
                className="absolute h-[12.09%] w-[15.49%] top-[20.57%] right-[67.71%] bottom-[67.33%] left-[16.8%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector57.svg"
              />
              <b className="absolute top-[16.94rem] left-[5.31rem] inline-block w-[20.81rem]">
                Descubra o Alcance, o CAC, ROI e o ROAS ideais de suas mídias
                para ter um funil de vendas eficiente.
              </b>
            </div>
          </div>
        </div>
        <div className="bg-whitesmoke box-border w-[92.5rem] flex flex-row py-[3.13rem] px-[6.25rem] items-center justify-center gap-[3.13rem] text-justify text-[2rem] border-[2px] border-solid border-tomato">
          <div className="flex flex-col items-start justify-start">
            <b className="relative inline-block w-[8.07rem]">Gostou?</b>
            <div className="relative text-[1.25rem] font-medium text-gray inline-block w-[50.13rem]">
              Está é uma inciativa da Layout para auxiliar a tomada de decisão
              do empreendedor. Nós somos uma agência de publicidade completa.
              Conheça nosso trabalho.
            </div>
          </div>
          <div className="relative w-[23.56rem] h-[5rem] text-[1.63rem] text-whitesmoke">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector31.svg"
            />
            <img
              className="absolute h-3/6 w-[10.88%] top-[25%] right-[81.17%] bottom-[25%] left-[7.96%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector32.svg"
            />
            <div className="absolute top-[1.44rem] left-[8.72rem] font-medium inline-block w-[9.95rem]">
              layout.net.br
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterShare />
    </div>
  );
};

export default Index;
