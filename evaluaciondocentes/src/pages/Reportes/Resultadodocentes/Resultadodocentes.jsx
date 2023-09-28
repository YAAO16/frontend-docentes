import React from "react";
import logo from './logo.png';
import './Resultadodocentes.css'
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { Link } from "react-router-dom";
import { FcDownLeft } from "react-icons/fc";
import firma from './firma.png'

function Resultadodocentes() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 10,
    },
    text: {
      fontSize: '1.5vw',
    },
    table: {
      display: 'table',
      width: 'auto',
      margin: 'auto',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      alignItems: 'center',
      height: '24px',
    },
    tableCell: {
      flex: 1,
      fontSize: '1vw',
      padding: '4px 8px', 
    },
    tableHeader: {
      fontWeight: 'bold',
    },
    spacer: {
      height: 15, 
    },
    firmaLinea: {
      borderTopWidth: 1,
      width: '25%', 
      marginTop: 5,
    },
  });

  const PdfDocument = () => (
    <Document>
      <Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.section}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={logo} style={{ width: 80, height: 80 }} />
          </View>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <Text style={{ fontSize: 25, textAlign: 'center' }}>Sistema de Evaluacion de Docentes</Text>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>"El saber como arma de vida"</Text>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          {/* Tabla */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader]}>Sede</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>C. Docentes</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Nombres</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>R. Eval.</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Evaluación 30%</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>N. Autoeva.</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>Evaluación 20%</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>N. Decano</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>E. Decano 30%</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>N. Formación</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>E. Formación 20%</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>N. Final</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Mocoa</Text>
            <Text style={styles.tableCell}>123456</Text>
            <Text style={styles.tableCell}>NIXON ANACONA</Text>
            <Text style={styles.tableCell}>5</Text>
            <Text style={styles.tableCell}>Eva. 30%</Text>
            <Text style={styles.tableCell}>1.5</Text>
            <Text style={styles.tableCell}>1.0</Text>
            <Text style={styles.tableCell}>5.0</Text>
            <Text style={styles.tableCell}>1.5</Text>
            <Text style={styles.tableCell}>5.0</Text>
            <Text style={styles.tableCell}>1.0</Text>
            <Text style={styles.tableCell}>5.0</Text>
          </View>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={firma} style={{ width: 80, height: 80 }} />
            <View style={styles.firmaLinea} />
            <Text style={{ fontSize: 12, textAlign: 'center' }}>Alice adrian martinez</Text>
            <Text style={{ fontSize: 12, textAlign: 'center' }}>CC. 1.004.559.120 de Caldas</Text>
            <Text style={{ fontSize: 12, textAlign: 'center' }}>Vicerrectoria academica</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Link to="/menu" className="botoncue"><FcDownLeft className="icon"/></Link>
    <div className="w-11/12 md:w-9/12 lg:w-6/12 xl:w-15/15 p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-16 h-16" />
      </div>
      <div className="mt-4">
        <h1 className="text-xl md:text-2xl font-semibold text-center">Sistema de Evaluación de Docentes</h1>
        <p className="text-center">"El saber como arma de vida"</p>
        <p className="line-break"></p>
        <div className="mx-auto">
        <center>
        <table className="w-full md:w-1/2 border-collapse text-center">
          <thead>
            <tr className="bg-green-500">
              <th className="p-4 md:p-6 border-b-2" colSpan={12} style={{fontSize:'12px'}}>
                <center>INFORME DE CALIFICACION DOCENTE 2023-1</center>
              </th>
            </tr>
            <tr className="bg-gray-200 border-b-2" style={{fontSize:'10px'}}>
              <th className="p-2 md:p-4">Sede</th>
              <th className="p-2 md:p-4">Cod. Docentes</th>
              <th className="p-2 md:p-4">Nombres</th>
              <th className="p-2 md:p-4">Resultado Evaluaci{'\u00F3'}n</th>
              <th className="p-2 md:p-4">Evaluación 30%</th>
              <th className="p-2 md:p-4">Nota Autoevaluaci{'\u00F3'}n</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b-2" style={{fontSize:'10px'}}>
              <td className="p-2 md:p-4">Mocoa</td>
              <td className="p-2 md:p-4">123456</td>
              <th className="p-2 md:p-4">NIXON ANACONA</th>
              <th className="p-2 md:p-4">5</th>
              <th className="p-2 md:p-4">Evaluación 30%</th>
              <th className="p-2 md:p-4">1.5</th>
            </tr>
          </tbody>
          <thead>
            <tr className="bg-gray-200 border-b-2" style={{fontSize:'10px'}}>
              <th className="p-2 md:p-4">Evaluaci{'\u00F3'}n 20%</th>
              <th className="p-2 md:p-4">Nota Decano</th>
              <th className="p-2 md:p-4">Evaluaci{'\u00F3'}n Decano 30%</th>
              <th className="p-2 md:p-4">Nota Formaci{'\u00F3'}n</th>
              <th className="p-2 md:p-4">Evaluaci{'\u00F3'}n Formaci{'\u00F3'}n 20%</th>
              <th className="p-2 md:p-4">Nota Final</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b-2" style={{fontSize:'10px'}}>
              <th className="p-2 md:p-4">1.0</th>
              <th className="p-2 md:p-4">5.0</th>
              <th className="p-2 md:p-4">1.5</th>
              <th className="p-2 md:p-4">5.0</th>
              <th className="p-2 md:p-4">1.0</th>
              <th className="p-2 md:p-4">5.0</th>
            </tr>
          </tbody>
        </table>
        </center>
        </div>         
      </div>
      <div className="mt-4 text-center">
        <PDFDownloadLink document={<PdfDocument />} fileName="certificado_docente.pdf" className="text-blue-500 underline hover:text-blue-700">
          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  </div>
);
};

export default Resultadodocentes;