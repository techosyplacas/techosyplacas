import React from "react";
import "./styles/testimonials.css";

const Testimonials = () => {
    const data = [
        {
            id: 1,
            testimonial: "Me gustó mucho la atención al cliente, excelente servicio",
            name: "Neris Ospino",
        },
        {
            id: 2,
            testimonial: "Excelente servicio, recomendado al 100%",
            name: "Jeison Cepeda",
        },
        {
            id: 3,
            testimonial: "Muy buena atención, cumplidos y eficientes",
            name: "Lilia Ramirez de Lopez",
        },
        {
            id: 4,
            testimonial: "¡Muy buen servicio me encantó! Dejaron todo tal cual lo pedí",
            name: "Ligia Lopez Ramirez",
        },
        {
            id: 5,
            testimonial:
                "Excelente empresa, hacen muy buenos trabajos, son eficientes y cumplidos, los recomiendo",
            name: "Ligia Patiño",
        },
        {
            id: 6,
            testimonial: "El servicio fue excelente",
            name: "Yarle Ospino",
        },
        {
            id: 7,
            testimonial:
                "Realizaron un gran trabajo, muy pendientes del trabajo haciendolo de calidad",
            name: "Erick Quiroz",
        },
        {
            id: 8,
            testimonial:
                "Muy profesionales, buen servicio, son responsables y cumplen con lo prometido. ¡Los recomiendo!",
            name: "Eilyn De La Hoz",
        },
        {
            id: 9,
            testimonial:
                "Excelente servicio con materiales de excelente calidad. Son muy profesionales",
            name: "Juan Ospino",
        },
        {
            id: 10,
            testimonial: "Excelente servicio muy responsables y puntuales, recomendados al 100%",
            name: "Brayan Tarazona",
        },
        {
            id: 11,
            testimonial:
                "Súper reomendados. El equipo de  Techos y Placas trabaja con mucha dedicación y los resultados son  impecables. Se nota que saben lo que hacen y se preocupan por cada detalle",
            name: "Gabriel Rodeo",
        },
        {
            id: 12,
            testimonial: "Muy cumplidos y ordenados",
            name: "Diego Alejandro Patarroyo",
        },
    ];

    return (
        <section className="testimonials">
            <div className="content__testimonial grilla">
                <h3>Testimonios</h3>
                <div className="boxes__testimonials">
                    {data.map(({ id, name, testimonial }) => {
                        return (
                            <div key={id} className="box__testimonials">
                                <div className="text__testimonial">
                                    <p>"{testimonial}"</p>
                                    <div className="box__person">
                                        <div>
                                            <i className="bx  bx-user"></i>
                                        </div>
                                        <span>{name}</span>
                                    </div>
                                </div>
                                <div className="box__bottom__testimonial"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
