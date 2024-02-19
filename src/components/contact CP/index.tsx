
import { ContactComponentBox } from "./style";
import { useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import copy from 'clipboard-copy';
/* import { useForm, ValidationError } from '@formspree/react'; */
import { IoCopy } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";
import { RevealTwo } from "../test/reveal two";
import { useTranslation } from "react-i18next";

const ContactComponent = () => {

    const [t] = useTranslation("global");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    /* const controls = useAnimation(); */

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        // Configurar dados para enviar para o endpoint do Formspree
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        try {
            // Enviar dados para o endpoint do Formspree
            const response = await fetch('https://formspree.io/f/mgegwdwa', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            // Verificar se a requisição foi bem-sucedida (código de status 2xx)
            if (response.ok) {
                // Exibir mensagem de sucesso
                toast.success("mensagem enviada!")
                setName('');
                setEmail('');
                setMessage('');

                // Limpar o estado do formulário ou redirecionar para outra página, se necessário
                // ... faça algo aqui, como resetar os campos do formulário ou redirecionar
            } else {
                // Exibir mensagem de erro se a requisição não foi bem-sucedida
                toast.error("Erro ao enviar!")
            }
        } catch (error) {
            console.error('Ocorreu um erro:', error);
            // Exibir mensagem de erro em caso de falha na requisição
            toast.error("Erro ao enviar!")
        }
    };

    const copyEmail = () => {
        event?.preventDefault();
        const textToCopy = 'gleiberfelipe@hotmail.com';
        copy(textToCopy);
        toast.success(t("Contact.emailC"));
    };
    const copyNumber = () => {
        event?.preventDefault();
        const textToCopy = '31991326989';
        copy(textToCopy);
        toast.success(t("Contact.zapzapC"));
    };
    const copyLinkedin = () => {
        event?.preventDefault();
        const textToCopy = 'https://www.linkedin.com/in/gleiber-coelho-40ba6927/';
        copy(textToCopy);
        toast.success(t("Contact.linkedinC"));
    };
    const copyGithub = () => {
        event?.preventDefault();
        const textToCopy = 'https://github.com/gleibercoelho';;
        copy(textToCopy);
        toast.success(t("Contact.githubC"))
    };

    return (
        <ContactComponentBox>
            <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: .75 }}           
            >{t("Contact.title")}</motion.h1>
            <div className="MapNFormBox">

                <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: .75 }}   className="FormBox">
                    <h2>{t("Contact.message")}</h2>
                    <form onSubmit={handleSubmit}>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={`${t("Contact.name")}`} required />
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={`${t("Contact.message2")}`} required />

                        <button type="submit">{t("Contact.send")}</button>
                    </form>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: .75 }}   className="MapBox">
                    <p>{t("Contact.live")}</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240300.7113113177!2d-44.16931426628847!3d-19.76795545981135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa686b107f0f8eb%3A0xff4527c57ed28253!2sSanta%20Luzia%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1703372366065!5m2!1spt-BR!2sbr"
                        width="600" height="450"
                        style={{ border: "0", maxWidth: "100%", }}  loading="eager" referrerPolicy="no-referrer-when-downgrade">

                    </iframe>

                </motion.div>
            </div>
            <RevealTwo>
            <div  className="ContactWayBox">
                <div  className="SubContactOne">
                    <p>{t("Contact.email")} <a href="mailto:gleiberfelipe@hotmail.com" target="_blank"><span>gleiberfelipe@hotmail.com</span></a> <a className="copy" href="#" onClick={copyEmail}><IoCopy /></a></p>
                    <p>{t("Contact.zapzap")}<a href="https://wa.me/31991326989?text=Olá,%20Gleiber.%20Acabei%20de%20ver%20seu%20portfólio." target="_blank"><span><IoLogoWhatsapp className="zapzap" /></span></a> <a className="copy" href="#" onClick={copyNumber}><IoCopy /></a></p>
                </div>
                <div className="SubContactTwo">
                    <p>{t("Contact.linkedin")} <a href="https://www.linkedin.com/in/gleiber-coelho-40ba6927/" target="_blank"><span>LinkedIn</span></a> <a className="copy" href="#" onClick={copyLinkedin}><IoCopy /></a></p>
                    <p>{t("Contact.github")} <a href="https://github.com/gleibercoelho" target="_blank"><span>GitHub</span></a> <a className="copy" href="#" onClick={copyGithub}><IoCopy /></a></p>
                </div>
            </div>
            </RevealTwo>
            <ToastContainer />
        </ContactComponentBox>
    )

}

export default ContactComponent;