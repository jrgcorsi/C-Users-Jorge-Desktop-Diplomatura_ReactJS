// import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import React, { useState } from 'react';
import axios from 'axios';



// ARCHIVO DE ESTILO
import "../../src/styles/components/pages/ContactoPage.css"

const ContactoPage = (props) => {

    const initialForm = {
        email: '',
        nombre: '',
        apellido: '',
        direccion: '',
        empresa: '',
        ciudad: '',
        provincia: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.prevetDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)

        }
    }

    return (
        <div className="formulario_div">
            <Form action='http://localhost:3000/api/contacto' method="post" onSubmit={handleSubmit} className="formulario">
                <Row className="mb-6">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label><b>Email</b></Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingresa tu email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridNombre">
                        <Form.Label><b>Nombre</b></Form.Label>
                        <Form.Control name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Juan" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridApellido">
                        <Form.Label><b>Apellido</b></Form.Label>
                        <Form.Control name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Lopez" />
                    </Form.Group>

                </Row>

                <Form.Group className="mb-6" controlId="formGridDireccion">
                    <Form.Label><b>Direccion</b></Form.Label>
                    <Form.Control name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Av. Corrientes 736" />
                </Form.Group>

                <Form.Group className="mb-6" controlId="formGridEmpresa">
                    <Form.Label><b>Empresa</b></Form.Label>
                    <Form.Control name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Corpe SAS" />
                </Form.Group>

                <Row className="mb-6">
                    <Form.Group as={Col} controlId="formGridCiudad">
                        <Form.Label><b>Ciudad</b></Form.Label>
                        <Form.Control name="ciudad" value={formData.ciudad} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProvincia">
                        <Form.Label><b>Provincia</b></Form.Label>
                        <Form.Select name="provincia" value={formData.provincia} onChange={handleChange} defaultValue="Choose...">
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

                <br />
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>


        </div>
    )
}

export default ContactoPage;

// fromGridEmail
// formGridNombre
// formGridApellido
// formGridDireccion
// formGridEmpresa
// formGridCiudad
// formGridProvincia
