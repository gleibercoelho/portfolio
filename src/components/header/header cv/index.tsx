import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronsRight } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import { HeaderBoxCV } from './style';
import { HiDocumentDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";





const HeaderCV = () => {  
  const [t] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [showNewActive, setShowNewActive] = useState(false);
 
 

  useEffect(() => {
    if (isOpen) {
      // Adiciona a classe 'active' após um pequeno intervalo
      const timeoutId = setTimeout(() => {
        setShowActive(true);
      }, 100);
      const timeoutUl = setTimeout(() => {
        setShowNewActive(true);
      }, 1000);

      // Limpa o timeout quando o componente é desmontado ou o menu é fechado
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(timeoutUl);
      };
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setShowNewActive(false);
      const timeoutId = setTimeout(() => {
        setShowActive(false);
      }, 100);

      const timeoutIsOpen = setTimeout(() => {
        setIsOpen(false);
      }, 1500);
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(timeoutIsOpen);
      };
    }
  };

  const handleLinkClick = (path:any) => {
    if (window.location.pathname === path) {
      // Se o usuário já está na mesma página, substitua a entrada mais recente no histórico
      window.history.replaceState(null, '', path);
    }
  };
   return (
    <HeaderBoxCV>
      <h1>Gleiber Coelho</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu size="50px" />
      </div>
      {isOpen && (
        <div className={`toast-menu ${showActive && 'active'}`}>
          <FiX
            onClick={toggleMenu}
            size="50px"
            className={`fade-in svg ${showNewActive && 'show'}`}
          />
        <Link to="/"><FaHome className={`button svg ${showNewActive && 'show'}`} 
        onClick={() => handleLinkClick('/')} /></Link>

          <ul className={`fade-in ${showNewActive && 'show'}`}>
            <li><Link to="/projects"
            onClick={() => handleLinkClick('/projects')}>
              <FiChevronsRight color="black" />
              {t("header.project")}
              </Link>
            </li>
            <li><Link to="/about"
            onClick={() => handleLinkClick('/about')}>
              <FiChevronsRight color="black" />
              {t("header.about")}
              </Link>
            </li>
            <li><Link to="/contact"
            onClick={() => handleLinkClick('/contact')}>
              <FiChevronsRight color="black" /> 
              {t("header.contact")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    
        <a href="https://github.com/gleibercoelho/portfolio/files/13867780/Gleiber.Coelho.CV.pdf" target="_blank" download><HiDocumentDownload className="CV" /><p> {t("about.cv")}</p></a>  
    </HeaderBoxCV>
  );
};

export default HeaderCV;
