import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Calculadora from "./pages/Caculadora";
import FooterShare from "./components/FooterShare";
import HeaderShare from "./components/HeaderShare";
import Index from "./pages/Index";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Layout Wiki | Agência Layout - Nova Friburgo RJ";
        metaDescription = "Descubra o Alcance, o CAC, ROI e o ROAS ideais de suas mídias para ter um funil de vendas eficiente.";
        break;
      case "/footershare":
        title = "Layout Wiki | Agência Layout - Nova Friburgo RJ";
        metaDescription = "Descubra o Alcance, o CAC, ROI e o ROAS ideais de suas mídias para ter um funil de vendas eficiente.";
        break;
      case "/headershare":
        title = "Layout Wiki | Agência Layout - Nova Friburgo RJ";
        metaDescription = "Descubra o Alcance, o CAC, ROI e o ROAS ideais de suas mídias para ter um funil de vendas eficiente.";
        break;
      case "/index":
        title = "Layout Wiki | Agência Layout - Nova Friburgo RJ";
        metaDescription = "Descubra o Alcance, o CAC, ROI e o ROAS ideais de suas mídias para ter um funil de vendas eficiente.";
        break;
      default:
        title = "Layout Wiki | Agência Layout - Nova Friburgo RJ";
        metaDescription = "Descubra o Alcance, o CAC, ROI e o ROAS ideais de suas mídias para ter um funil de vendas eficiente.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="/footershare" element={<FooterShare />} />
      <Route path="/headershare" element={<HeaderShare />} />
    </Routes>
  );
}

export default App;
