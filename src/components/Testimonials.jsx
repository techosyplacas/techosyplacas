import React from "react";
import "./styles/testimonials.css";

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="content__testimonial grilla">
                <h3>Testimonios</h3>
                <div className="boxes__testimonials">
                    <div className="box__testimonials">
                        <div className="text__testimonial">
                            <p>"Me gustó mucho la atención al cliente, excelente servicio"</p>
                            <div className="box__person">
                                <div>
                                    <i className="bx  bx-user"></i>
                                </div>
                                <span>Neris Ospino</span>
                            </div>
                        </div>
                        <div className="box__bottom__testimonial"></div>
                    </div>

                    <div className="box__testimonials">
                        <div className="text__testimonial">
                            <p>"Excelente servicio, recomendado al 100%"</p>
                            <div className="box__person">
                                <div>
                                    <i className="bx  bx-user"></i>
                                </div>
                                <span>Jeison Cepeda</span>
                            </div>
                        </div>
                        <div className="box__bottom__testimonial"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
