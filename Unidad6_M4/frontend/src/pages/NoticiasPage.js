import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


// ARCHIVO DE ESTILO
import "../../src/styles/components/pages/NoticiasPage.css"

const NoticiasPage = () => {
    return (
        <div className='contenedor_noticias'>
            <CardGroup className='grupo-noticias'>
                <Card className='noticia'>
                    <Card.Body>
                        <Card.Title>YPF Luz construirá un parque eólico en Córdoba</Card.Title>
                        <Card.Text>
                            YPF Luz volverá a apostar por la energía eólica y montará su cuarto parque en el sur de la Provincia de Córdoba. Según anunció su CEO Martín Mandarano durante su exposición en el Forbes Energy Summit, el mismo tendrá una potencia de 65 MW en una primera etapa, para luego escalar a 150 MW.

                            Luego de iniciar su incursión en las energías renovables con tres parques eólicos como Manantiales Behr, en Chubut; Cañadón León, en Santa Cruz; y Los Teros, en Azul, la compañía había dado un giro hacia la energía solar por la falta de capacidad de transporte para seguir expandiéndose en ese segmento.

                            En ese sentido, comenzó las obras del proyecto El Zonda, en San Juan, en un Hub de la zona de Tocota que buscará ampliar hasta los 500 MW. Es decir que, cuando finalicen todas sus etapas, será el emprendimiento renovable más grande del país junto a Cauchari.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='noticia' style={{ borderRadius: '10px' }}>
                    <Card.Body>
                        <Card.Title>Cómo llega Argentina a la COP27: una fotografía del desarrollo renovable</Card.Title>
                        <Card.Text>
                            A menos de un mes del inicio de la COP27, Argentina muestra un panorama muy preocupante en su desarrollo renovable. Muy pocos proyectos han sido desarrollados en la última administración. La desaceleración de la opción de renovables es clara. Si bien el gobierno nacional promete presentar una hoja de ruta para dicha conferencia, las evidencias no dan claridad sobre el camino que estará planteando. Para esto, es importante comprender cuál es la situación actual.

                            Hoy en día, en el país existen 194 proyectos de energía renovable funcionando en las diferentes provincias. Algo que se traduce en una capacidad instalada de 5201,59 Mwh, menos de un 1% de la demanda primaria nacional (133800 Gwh), y cubre un 13% del aporte a la red eléctrica. No obstante, hace menos de 10 años la oferta era cero absoluto. No fue hasta 2012 que el país logró comenzar a implementar este tipo de energías en su matriz.

                            El desarrollo en renovables se ha centrado principalmente en la red eléctrica que es uno de los sectores que más emisiones de gases de efecto invernadero generan en el país (15%). Sin embargo, la segunda fuente de emisiones, el transporte (12%), no ha sido tomada en cuenta sustancialmente. La única fuente que hasta hoy sirve como sustituto de los hidrocarburos convencionales son los biocombustibles.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='noticia'>
                    <Card.Body>
                        <Card.Title>El crecimiento de las renovables se estancó a un 2% por la saturación de las redes</Card.Title>
                        <Card.Text>
                            Los temores que venía advirtiendo la industria de energías renovables finalmente se transformaron en realidad y el sector entró en una preocupante fase de estancamiento.

                            Luego de crecer durante los últimos cinco años a un ritmo sorprendente, el último dato de agosto marca un avance de solamente un 2,1% interanual. Para tener una idea de la caída que significa este número, hay que recordar que un año atrás ese valor llegaba al 52%.

                            En este caso, la merma se explica por una baja interanual de todas las fuentes renovables, con excepción de la solar fotovoltaica que tuvo un incremento del 39,6% frente a agosto del 2021, de acuerdo a un informe del Instituto Mosconi.

                            Por el contrario, el biogás cayó un 1,7%, la biomasa un 3,4%, los pequeños aprovechamientos hidroeléctricos un 0,9% y la eólica – la de mayor importancia ya que representa el 74% del total renovable- retrocedió un 2,4% de forma interanual.                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>

    );
}


export default NoticiasPage;