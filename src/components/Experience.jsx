import React from "react";
import "./styles/experience.css";

const Experience = () => {
    return (
        <section className="experience">
            <div className="content__experience grilla">
                <div className="text__experience">
                    <i className="bx bx-list-check"></i>
                    <span>Los años nos respaldan</span>
                    <h3>Experiencia y certificaciones</h3>
                </div>
                <div className="boxes__experience">
                    <div className="box__experience">
                        <h3>Excelente trabajo garantizado</h3>
                        <p>
                            Contamos con 15 años de trayectoria ofreciendo servicios de excelencia,
                            respaldados por personal altamente capacitado.
                        </p>
                        <i className="bx bxs-hard-hat"></i>
                    </div>

                    <div className="box__experience">
                        <h3>Certificaciones al día</h3>
                        <p>
                            Disponemos de todas las certificaciones requeridas para garantizar un
                            servicio de alta calidad.
                        </p>
                        <i className="bx bxs-copy-alt"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
