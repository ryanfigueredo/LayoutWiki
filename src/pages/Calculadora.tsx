import React, { useState, ChangeEvent, FocusEvent } from "react";
import HeaderShare from "../components/HeaderShare";
import FooterShare from "../components/FooterShare";
import "./Calculadora.css";

const Calculadora = () => {
  const [ticketMedio, setTicketMedio] = useState("");
  const [metaFaturamento, setMetaFaturamento] = useState("");
  const [investimentoComunicacao, setInvestimentoComunicacao] = useState("");
  const [investimentoMidiaPaga, setInvestimentoMidiaPaga] = useState("");
  const [porcentagemConsideramComprar, setPorcentagemConsideramComprar] = useState("");
  const [porcentagemCompram, setPorcentagemCompram] = useState("");
  const [roi, setROI] = useState("");
  const [roas, setROAS] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "ticketMedio":
        setTicketMedio(value);
        break;
      case "metaFaturamento":
        setMetaFaturamento(value);
        break;
      case "investimentoComunicacao":
        setInvestimentoComunicacao(value);
        break;
      case "investimentoMidiaPaga":
        setInvestimentoMidiaPaga(value);
        break;
      default:
        break;
    }
  };

  const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
    const previousSibling = event.target.previousSibling as HTMLElement;
    if (previousSibling?.classList) {
      previousSibling.classList.add("input-label-focused");
    }
  };

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    const previousSibling = event.target.previousSibling as HTMLElement;
    if (previousSibling?.classList) {
      if (event.target.value === "") {
        previousSibling.classList.remove("input-label-focused");
      }
    }
  };

  const calcularROI = () => {
    const investimentoTotal = parseFloat(investimentoComunicacao) + parseFloat(investimentoMidiaPaga);
    const retorno = parseFloat(metaFaturamento);
    const roiValue = ((retorno - investimentoTotal) / investimentoTotal) * 100;
    setROI(roiValue.toFixed(2));
  };

  const calcularROAS = () => {
    const investimentoTotal = parseFloat(investimentoMidiaPaga);
    const retorno = parseFloat(metaFaturamento);
    const roasValue = (retorno / investimentoTotal) * 100;
    setROAS(roasValue.toFixed(2));
  };

  const calcularPorcentagemConsideramComprar = () => {
    const consideramComprar = (parseFloat(metaFaturamento) / parseFloat(ticketMedio)) * 100;
    setPorcentagemConsideramComprar(consideramComprar.toFixed(2));
  };

  const calcularPorcentagemCompram = () => {
    const compram = (parseFloat(metaFaturamento) / (parseFloat(ticketMedio) * parseFloat(investimentoComunicacao))) * 100;
    setPorcentagemCompram(compram.toFixed(2));
  };

  return (
    <div>
      <HeaderShare />
      
      <div className="section-calculator">
      <div className="title-container">
          <div>
            <img src="iconcalculatortitle.svg" alt="" />
            <h1>Descubra o Alcance, o CAC, ROI e o ROAS ideais de suas mídias para ter um funil de vendas eficiente.</h1>
          </div>
            
  
        </div>



        <div className="calculadora-container">
          <div className="titlesec">
            <h1>Informe seus Dados</h1>
            <p className="color-gray">Preenchimento Obrigatório*</p>
          </div>
            
          <div className="input-container">
            <div className="input-icon input-icon-left">
              <img src="/realmoeda.svg" alt="Ícone Moeda R$ Real" />
            </div>
            <input
              type="number"
              name="ticketMedio"
              value={ticketMedio}
              onChange={handleInputChange}
              placeholder="Ticket Médio"
            />
          </div>


          <div className="input-container">
            <input
              type="number"
              name="metaFaturamento"
              value={metaFaturamento}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Meta de Faturamento Mensal"
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              name="investimentoComunicacao"
              value={investimentoComunicacao}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Investimentos em Comunicação"
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              name="investimentoMidiaPaga"
              value={investimentoMidiaPaga}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Investimentos em Mídia Paga"
            />
          </div>
          <button className="calcular-btn" onClick={calcularROI}>
            Calcular ROI
          </button>
          <button className="calcular-btn" onClick={calcularROAS}>
            Calcular ROAS
          </button>
          {roi && <p className="resultado-text">ROI: {roi}%</p>}
          {roas && <p className="resultado-text">ROAS: {roas}%</p>}
          {porcentagemConsideramComprar && (
            <p>Porcentagem de usuários que consideram comprar: {porcentagemConsideramComprar}%</p>
          )}
          {porcentagemCompram && (
            <p>Porcentagem de usuários que compram: {porcentagemCompram}%</p>
          )}
        </div>
      </div>

      <FooterShare />
    </div>
  );
};

export default Calculadora;
