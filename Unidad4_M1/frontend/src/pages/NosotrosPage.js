import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Nosotros1 from '../img/nosotros1.jpg'
import Nosotros2 from '../img/nosotros2.jpg'
import Nosotros3 from '../img/nosotros3.jpg'
import Nosotros4 from '../img/nosotros4.jpg'
import Nosotros5 from '../img/nosotros5.jpg'

import Image from 'react-bootstrap/Image'

// ARCHIVO DE ESTILO
import "../../src/styles/components/pages/NosotrosPage.css"

function NosotrosPage() {
    return (

        <div className='h3_somos'>
            <h2 className='historia'>Historia</h2>
            <p>
                Corpe SAS es una empresa fundada el 28 de Junio de 1983, Nuestro fundador Juan Gomez ideo en aquel momento una empresa que siempre tuviera al cliente en el centro de la escena,
                al servicio de hacer utilizar sus recursos al maximo con el minimo costo posible. Ese amor por lo que hace y el apoyo incondicional de nuestros clientes han logrado de esta compañia
                convertirla en una de las mas prestigiosas empresas de inveniria de sudamerica. CORPE SAS ha sido recientemente galardonada con el BUI de Platino por su capacidad y desarrollo tecnologico a los largo de las ultimas 2 decadas.
                Entre sus Galardones CORPE SAS ha sido galardonada por el premio nacional a la calidad otorgado en el Senado de la Republica Argentina por el Presidente Alberto Fernandez,
                es fundadora de la CADER (Camara Argentina de Energias Renovables) Siendo nuestro Gerente General su director.
            </p>

            <CardGroup className='grupo-personas'>
                <Card className='persona'>
                    <Image className='img' roundedCircle src={Nosotros1}></Image>
                    <Card.Body>
                        <Card.Title>Juan Peres</Card.Title>
                        <h6 class="cargo">Gerente General</h6>
                        <Card.Text>
                            Ingeniero Civil con mas de 3 decadas de experiencia en obras civiles y electromecanicas.
                            Es docente en la UBA y posee gran experiencia liderando equipos de alto rendimiento.
                            Funda CORPE el 28 de Junio de 1983 junto a profesionales con gran recorrido en empresas de primer nivel..
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='persona'>
                    <Image className='img' roundedCircle src={Nosotros2}></Image>
                    <Card.Body>
                        <Card.Title>Tefy Graff</Card.Title>
                        <h6 class="cargo">Gerente de Logistica y Montaje</h6>
                        <Card.Text>
                            MBA en Desarrollo Industrial internacional, posee mas de 2 decadas de experiencia en montajes
                            industriales de gran escala en su gran experiencia lo encontramos como
                            referente de grandes empresas como PETROBRAS, REPSOL, FORD Company, BWM Motors y Honda de Argentina.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='persona'>
                    <Image className='img' roundedCircle src={Nosotros3}></Image>
                    <Card.Body>
                        <Card.Title>John Doe</Card.Title>
                        <h6 class="cargo">Gerente de Ingenieria y Operaciones</h6>
                        <Card.Text>
                            Ingeniero Aueronautico de la Univ. Di Tella, Master en Operaciones civiles y Postgrado en Ingenieria Naval.
                            Juan es una de las personas mas jovenes en la compañia, pero su pasion y
                            dedicacion por la satisfaccion de nuestros clientes lo hacen uno de los pilares mas importantes en esta.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='persona'>
                    <Image className='img' roundedCircle src={Nosotros4}></Image>
                    <Card.Body>
                        <Card.Title>Gabriella Zabattini</Card.Title>
                        <h6 class="cargo">Gerente de RRHH</h6>
                        <Card.Text>
                            MBA en Relaciones laborales, amante del Tenis y de las mascotas! Gabriela es una referente
                            nacional de la inclusion y desarrollo de las personas. Su gran recorrido en empresas de primer nivel como Coca Cola Inc, Google,
                            Microsoft la conveniente en una experta en todo lo que hace.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='persona'>
                    <Image className='img' roundedCircle src={Nosotros5}></Image>
                    <Card.Body>
                        <Card.Title>Juan D' Los Palotes</Card.Title>
                        <h6 class="cargo">Gerente Ventas</h6>
                        <Card.Text>
                            Licenciado en Comercio Internacional, MBA en Administracion de empresas.
                            Juan posee mas de 4 decadas al servicio de los clientes y eso le permite
                            saber muy bien que necesitan y cuando lo necesitan! Nuestros clientes lo aman.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default NosotrosPage;