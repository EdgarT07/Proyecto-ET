const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configura tus credenciales de correo de forma segura
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendContactEmail = functions.firestore
    .document("messages/{messageId}")
    .onCreate((snap, _context) => {
      const data = snap.data();

      const mailOptions = {
        from: `"Tu Página Web" <${gmailEmail}>`,
        to: "connorteran3@gmail.com", // <-- TU CORREO DE EMPRESA
        subject: `Nuevo mensaje de contacto de ${data.name}`,
        text: `Has recibido un nuevo mensaje de:
        Nombre: ${data.name}
        Correo: ${data.email}
        Mensaje: ${data.message}`,
      };

      return mailTransport.sendMail(mailOptions)
          .then(() => console.log("Correo de contacto enviado con éxito a", mailOptions.to))
          .catch((error) => console.error("Hubo un error al enviar el correo:", error));
    });
