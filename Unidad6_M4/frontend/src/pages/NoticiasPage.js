import { useEffect, useState } from "react";
import axios from 'axios';
import NovedadItem from "../components/layout/NovedadItem";

// ARCHIVO DE ESTILO
import "../../src/styles/components/pages/NoticiasPage.css"

const NoticiasPage = () => {
    const [loading, setLoading] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/notes');
            setNotes(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);
    return (
        <div className='contenedor_noticias'>
            <h2 className="h2_note">Novedades del mercado electrico</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    notes.map(item => <NovedadItem className="tarjeta" title={item.title} description={item.description}
                        body={item.cuerpo} />)
                )
            }
        </div>
    );
};


export default NoticiasPage;