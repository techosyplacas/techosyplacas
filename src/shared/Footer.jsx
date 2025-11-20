import React from "react";
import "./styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="content__footer grilla">
                <div className="box__footer">
                    <h3>Sobre nosotros</h3>
                    <p>
                        En Techos y Placas brindamos soluciones profesionales en instalación,
                        reparación y mantenimiento de techos, construcción de placas,
                        impermeabilización y remodelaciones.
                    </p>
                    <p>
                        Trabajamos con calidad, responsabilidad y cumplimiento, ofreciendo
                        resultados duraderos y seguros. Nuestro compromiso es garantizar la
                        satisfacción de cada cliente mediante un servicio confiable y transparente.
                    </p>
                </div>

                <div className="box__footer">
                    <h3>Contacto</h3>

                    <div className="box__contact">
                        <i className="bx bxs-map"></i>
                        <span>Carrera 50 # 128C - 36 Prado Veraniego, Bogotá</span>
                    </div>

                    <div className="box__contact">
                        <i className="bx bxs-phone"></i>
                        <span>(601) 9335964</span>
                    </div>

                    <div className="box__contact">
                        <i className="fa-brands fa-whatsapp"></i>
                        <span>3002967969</span>
                    </div>

                    <div className="box__contact">
                        <i className="bx bxs-envelope"></i>
                        <span>techosyplacas1@gmail.com</span>
                    </div>
                </div>

                <div className="box__footer">
                    <h3>Redes sociales</h3>

                    <div className="icons__redes">
                        <a
                            href="https://www.facebook.com/profile.php?id=100089435441637"
                            target={"_blank"}
                        >
                            <i className="bx bxl-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/techosyplacas/" target={"_blank"}>
                            <i className="bx bxl-instagram-alt"></i>
                        </a>
                    </div>
                </div>

                <div className="box__footer">
                    <h3>Horarios</h3>

                    <div className="box__horario">
                        <p>Lunes a Viernes</p>
                        <span>7:30am - 5:30pm</span>
                    </div>

                    <div className="box__horario">
                        <p>Sabado</p>
                        <span>7:30am - 2pm</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
