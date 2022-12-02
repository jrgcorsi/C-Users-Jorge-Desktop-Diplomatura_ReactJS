var express = require('express');
const router = express.Router();
const Note = require('../public/models/noticia');
const Image = require('../public/models/image')
const NoticiasControl = require('../controllers/notes.controller');
var nodemailer = require('nodemailer');


router.get("/notes", NoticiasControl.renderNotesJson);

router.post("/contacto", async (req, res) => {

    const mail = {
      // from: 'Remitente',
      to: 'jrgcorsi@gmail.com',
      subject: 'contacto web',
      html: `${req.body.nombre}, ${req.body.apellido} de la empresa ${req.body.empresa}, ${req.body.direccion} - ${req.body.ciudad} (${req.body.provincia}) se contacto a traves de la web y quiere mas informacion al correo ${req.body.email}`
    };
  
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ecd0c4da89dc4f",
        pass: "957749809695fb"
      }
    });
    await transport.sendMail(mail)
  
    res.status(201).json({
      error: false,
      message: 'mensaje enviado'
    })
  });
  
module.exports = router;
