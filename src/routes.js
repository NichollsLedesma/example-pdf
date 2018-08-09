const routes = require('express').Router();
const PDFDocument = require('pdfkit');
const fs = require('file-system');

routes.get('/pdf', (req, res)=>{
    
    let doc = new PDFDocument({
        layout: 'landscape',
        size: [600, 900] 
      });
    doc.pipe(fs.createWriteStream('./certificado.pdf'));

    let apeNom='Apellido, Nombre1 Nombre2',
        dni=32165498;

    let title= 'Lorem Ipsum',
        subtitle= '¿Qué es Lorem Ipsum?',
        container= 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
        footer= 'CORRIENTES, 01 de Julio de 2018-.';

/////////////////////////////////////////////////
    doc.image('/home/nico/Escritorio/Projects/examples/example-pdf/public/img/logo-transp.png', {
        width: 200,
        heigth: 100,
    });
    doc.moveDown(3);
/////////////////////////////////////////////////
    doc.fontSize(20);
    doc.font('Times-Bold').text(title, {
        align: 'center'
    });
    doc.moveDown();
/////////////////////////////////////////////////

    doc.fontSize(18);
    doc.font('Times-Roman').text(subtitle, {
        align: 'center'
    });
    doc.moveDown();
/////////////////////////////////////////////////
    doc.fontSize(15);
    doc.text(container,{align: 'justify', lineGap: 7});
    doc.moveDown(3);


    // doc.moveDown();
/////////////////////////////////////////////////
    // doc.fontSize(20);
    doc.text(footer);
    doc.moveDown();
    /////////////////////////////////////////////////
    // Finalize PDF file
    doc.end()

    res.send('generacion de pdf');
});

module.exports = routes;