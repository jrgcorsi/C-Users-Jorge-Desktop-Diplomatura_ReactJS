import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// ARCHIVO DE ESTILO
import "../../src/styles/components/pages/ContactoPage.css"


const ContactoPage = () => {
    return (
        <div className='formulario'>
            <Form>
            <Row className="mb-6">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNombre">
                    <Form.Label><b>Nombre</b></Form.Label>
                    <Form.Control placeholder="Juan" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridApellido">
                    <Form.Label><b>Apellido</b></Form.Label>
                    <Form.Control placeholder="Lopez" />
                </Form.Group>

            </Row>

            <Form.Group className="mb-6" controlId="formGridDireccion">
                <Form.Label><b>Direccion</b></Form.Label>
                <Form.Control placeholder="Av. Corrientes 736" />
            </Form.Group>

            <Form.Group className="mb-6" controlId="formGridEmpresa">
                <Form.Label><b>Empresa</b></Form.Label>
                <Form.Control placeholder="Corpe SAS" />
            </Form.Group>

            <Row className="mb-6">
                <Form.Group as={Col} controlId="formGridCiudad">
                    <Form.Label><b>Ciudad</b></Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridProvincia">
                    <Form.Label><b>Provincia</b></Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Elije una provincia...</option>
                        <option>Buenos Aires...</option>
                        <option>CABA...</option>
                        <option>Santa Fe...</option>
                        <option>Entre Rios...</option>
                        <option>Corrientes...</option>
                        <option>Misiones...</option>
                        <option>La Pampa...</option>
                        <option>Cordoba...</option>
                        <option>Santiago de Estero...</option>
                        <option>Chaco...</option>
                        <option>Formosa...</option>
                        <option>Neuquen...</option>
                        <option>Mendoza...</option>
                        <option>San Luis...</option>
                        <option>San Juan...</option>
                        <option>La Rioja...</option>
                        <option>Catamarca...</option>
                        <option>Tucuman...</option>
                        <option>Salta...</option>
                        <option>Jujuy...</option>
                        <option>Rio Negro...</option>
                        <option>Chubut...</option>
                        <option>Santa Cruz...</option>
                        <option>Tierra del Fuego...</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <br/>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    </div>
    )
}

export default ContactoPage