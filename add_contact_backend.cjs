const fs = require('fs');

let serverCode = fs.readFileSync('server.js', 'utf8');

// Inject nodemailer
if (!serverCode.includes("import nodemailer")) {
    serverCode = serverCode.replace("import path from 'path';", "import path from 'path';\nimport nodemailer from 'nodemailer';");
}

const contactRoute = `
// =========================================================
// ROUTE ENVOI DE DEVIS / CONTACT (NODEMAILER)
// =========================================================
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  
    port: 465,
    secure: true,
    auth: {
        user: 'votre_email_ici@gmail.com',         // <-- À REMPLACER
        pass: 'votre_mot_de_passe_d_application'   // <-- À REMPLACER (Mot de passe d'application Google)
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { nom, email, telephone, sujet, type, organisation, division, message } = req.body;
        
        let targetEmail = 'mohamedkarim.moalla@ensi-uma.tn';
        
        if (division) {
            const divLower = division.toLowerCase();
            // Pièce de rechange ou Marine va à moallakarim652@gmail.com
            if (divLower.includes('pièce') || divLower.includes('piece') || divLower.includes('marin')) {
                targetEmail = 'moallakarim652@gmail.com';
            }
        }

        const mailOptions = {
            from: email,
            to: targetEmail,
            subject: \`Nouveau Devis - \${division || 'Aucune division spécifiée'} : \${sujet}\`,
            text: \`
Vous avez reçu une nouvelle demande de devis/contact depuis le site SIA SFAX.

---------------------------------------------------------
INFORMATIONS DU CONTACT
---------------------------------------------------------
Nom/Prénom      : \${nom || 'Non renseigné'}
Email           : \${email || 'Non renseigné'}
Téléphone       : \${telephone || 'Non renseigné'}
Type de client  : \${type || 'Non renseigné'}
Organisation    : \${organisation || 'Non renseigné'}

---------------------------------------------------------
DÉTAILS DE LA DEMANDE
---------------------------------------------------------
Division        : \${division || 'Non renseignée'}
Sujet           : \${sujet || 'Non renseigné'}

Message :
\${message || 'Aucun message.'}
---------------------------------------------------------
            \`
        };

        // Décommentez la ligne ci-dessous une fois l'authentification configurée "auth.user / auth.pass" ci-dessus.
        // await transporter.sendMail(mailOptions);
        console.log(\`[Simulation Email] Devrait être envoyé à: \${targetEmail} concernant \${sujet}\`);

        res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\\'envoi de l\\'email:', error);
        res.status(500).json({ success: false, error: 'Une erreur est survenue lors de l\\'envoi de votre demande.' });
    }
});

`;

// Add route before app.listen if it doesn't already exist
if (!serverCode.includes('/api/contact')) {
    serverCode = serverCode.replace("app.listen(PORT", contactRoute + "\napp.listen(PORT");
    fs.writeFileSync('server.js', serverCode);
    console.log("Contact routing added to server.js");
}
