import React from "react";
import "./styles/services.css";
import instalacion from "../assets/images-services/instalacion.png";
import mantenimiento from "../assets/images-services/mantenimiento.png";
import impermeabilizacion_terrazas from "../assets/images-services/impermeabilizacion-terrazas.png";
import diagnostico from "../assets/images-services/diagnostico.png";
import enchapes from "../assets/images-services/enchapes.png";
import instalacion_canales from "../assets/images-services/instalacion-canales.png";
import instalacion_domos from "../assets/images-services/instalacion-domos.png";

const Services = ({ setShowFloatForm }) => {
    return (
        <section className="services" id="servicesHome">
            <div className="content__services grilla">
                <div className="text__services__head">
                    <i className="bx bxs-building-house"></i>
                    <span>Selecciona el servicio que necesite</span>
                    <h3>Contamos con los siguientes servicios</h3>
                </div>

                <div className="boxes__services">
                    <div className="box__service">
                        <div className="text__services">
                            <h3>Instalación, reparación y cambios de techos</h3>

                            <div onClick={() => setShowFloatForm(true)} className="btn__services">
                                <span>Me interesa</span>
                            </div>
                        </div>

                        <img src={instalacion} alt="impermeabilizacion de techo" />
                    </div>

                    <div className="box__service">
                        <div className="text__services">
                            <h3>Mantenimiento de cubiertas</h3>
                            <div className="service__list">
                                <span>PCV</span>
                                <span>Metálicas</span>
                                <span>Fibrocemento</span>
                            </div>

                            <div onClick={() => setShowFloatForm(true)} className="btn__services">
                                <span>Me interesa</span>
                            </div>
                        </div>
                        <img src={mantenimiento} alt="reparacion de techos" />
                    </div>

                    <div className="box__service">
                        <div className="text__services">
                            <h3>Impermeabilización de terrazas y cubiertas</h3>

                            <div onClick={() => setShowFloatForm(true)} className="btn__services">
                                <span>Me interesa</span>
                            </div>
                        </div>
                        <img src={impermeabilizacion_terrazas} alt="instalacion de techos" />
                    </div>

                    <div className="box__service">
                        <div className="text__services">
                            <h3>Instalación y reparación de domos</h3>

                            <div onClick={() => setShowFloatForm(true)} className="btn__services">
                                <span>Me interesa</span>
                            </div>
                        </div>
                        <img src={instalacion_domos} alt="reparacion de goteras" />
                    </div>

                    <div className="box__service">
                        <div className="text__services">
                            <h3>Diagnóstico y correción de filtraciones</h3>

                            <div onClick={() => setShowFloatForm(true)} className="btn__services">
                                <span>Me interesa</span>
                            </div>
                        </div>
                        <img src={diagnostico} alt="reparacion de goteras" />
                    </div>

                    <div className="box__service">
                        <div className="text__services">
                            <h3>Enchapes y acabados</h3>

                            <div onClick={() => setShowFloatForm(true)} className="btn__services">
                                <span>Me interesa</span>
                            </div>
                        </div>
                        <img src={enchapes} alt="reparacion de goteras" />
                    </div>

                    <div className="box__service">
                        <div className="text__services">
                            <h3>Instalación de canales y bajantes</h3>

                            <div onClick={() => setShowFloatForm(true)} className="btn__services">
                                <span>Me interesa</span>
                            </div>
                        </div>
                        <img src={instalacion_canales} alt="reparacion de goteras" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
