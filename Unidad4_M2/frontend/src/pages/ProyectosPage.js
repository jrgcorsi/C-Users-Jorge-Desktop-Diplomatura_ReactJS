import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image'

import Energia_Eolica from '../img/Energia_eolica.jpg'
import Energia_Electrica from '../img/Energia_electrica.jpg'
import Energia_Hidraulica from '../img/Energia_hidraulica.jpg'
import Energia_Solar from '../img/Energia_solar.jpg'

// ARCHIVO DE ESTILO
import "../../src/styles/components/pages/Proyectos.css"


const ProyectosPage = () => {
    return (
        <div className='div_accordion'>
            <Accordion className='accordion' alwaysOpen defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Obra Electromecanica en Media y Baja tension (llave en mano) </Accordion.Header>
                    <Accordion.Body className='proyecto'>

                        <Image className='img' src={Energia_Electrica}></Image>
                        <p className='texto'>
                            Brindamos una gran variedad de servicios referidos a obra electromecanica en Media y Baja Tension,
                            ofrecemos desde el emvolvente normalizado hasta los conductores especificos para que cada uno de nuestros
                            clientes obtengan el mejor beneficio economico de su inversion. La ingenieria en este proceso inicial
                            es muy importante dado que el exceso de temperatura y la caida de tension pueden beneficiar y/o
                            perjudicar al cliente.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" alwaysOpen>
                    <Accordion.Header>Arreglos fotovoltaicos On-grid y Off-Grid (Proconsumidores)</Accordion.Header>
                    <Accordion.Body className='proyecto'>
                        <Image className='img' src={Energia_Solar}></Image>
                        <p className='texto'>
                            Es nuestra zona de confort, brindamos acompañamiento de punta a punta en el proyectos nos gusta que
                            nuestro cliente aprenda como funciona, sepa administrarlo y planificar su dia a dia en este sentido.
                            Tenemos gran experiencia en arreglos fotovoltaicos conectados a la red y aislados ya sea residencial
                            como en grandes empresas.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" alwaysOpen>
                    <Accordion.Header>Dimensionamiento y montaje de Aerogeneradores de alta potencia </Accordion.Header>
                    <Accordion.Body className='proyecto'>
                        <Image className='img' src={Energia_Eolica}></Image>
                        <p className='texto'>
                            Somos expertos en el dimensionamiento y emplazamiento de generadores eolicos de hasta 300Kw,
                            nuestro equipo de ingenieria y montaje esta formado por prestigiosos referentes de la logistica
                            nacional que durante estos años han trabajado junto a grupos inversores muy importantes del pais y la region.
                            Corpe SAS ha sido privilegiada con el galardon mas importante entregado en sudamerica a aquellas
                            empresas de vanguardia vinculadas al desarrollo de la energia eolica
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" alwaysOpen>
                    <Accordion.Header>Energia Hidraulica de corriente baja</Accordion.Header>
                    <Accordion.Body className='proyecto'>
                        <Image className='img' src={Energia_Hidraulica}></Image>
                        <p className='texto'>
                            Brindamos soluciones de generacion electrica emplazados en saltos de agua de poco caudal,
                            este mismo les permite a quienes confian en nosotros disponer de energia en aquellos lugares
                            donde la red electrica no llega. Disponemos de soluciones autonomas para bombeo solar,
                            riego desatendido y automatizado para grandes superficies.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
}


export default ProyectosPage