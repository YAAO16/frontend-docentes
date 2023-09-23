import React, {useState}  from "react";
import logo from './logo.png';
import './Evaluacion.css'
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { Link } from "react-router-dom";
import { FcDownLeft } from "react-icons/fc";
import firma from './firma.png'
import { FcList } from "react-icons/fc";
import { Button, Dropdown } from 'react-bootstrap';

function Evaluacion() {
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
    headerCell: {
      backgroundColor: '#f2f2f2',
      padding: '10px',
      fontWeight: 'bold',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      
    },
    cell: {
      padding: '2px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      with: '10px',
    }
    
  });

  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const toggleMostrarOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (rowIndex, optionIndex) => {
      setSelectedOptions(prevOptions => ({
        ...prevOptions,
        [rowIndex]: optionIndex
      }));
    };

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
        <h1 className="text-xl md:text-2xl font-semibold text-center">Evaluacion de docentes</h1>
        <p className="line-break"></p>
        <div className="mx-auto">
        <center>
        <h1 className="text-slate-950" style={{fontSize: '19px'}}>Usuario: <span style={{ fontWeight: 'bold', color:"green"}}>NIXON CAMILO ANACONA</span></h1>
      <table style={{ borderCollapse: 'collapse', width: '70%' }}>
          <thead>
          <tr>
              <th style={styles.headerCell}>Evaluaciones Activas</th>
              <th style={styles.headerCell}>
              <div className="relative inline-block text-left-green-500">
                  <Button variant="primary" style={{color:'black',fontSize: '15px'}} className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2" onClick={toggleMostrarOpciones}>Seleccione una evaluacion <FcList /> </Button>
                  {mostrarOpciones && (
                  <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg" style={{ width: '100%'}}>
                      <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-gray-900">
                      Asistencia, Formacion y Capacitacion de docentes 2023-1
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-gray-900">
                      Evaluacion Decanos a Docentes 2023-1
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-gray-900">
                      Formato Autoevaluacion Docentes 2023-1
                      </Dropdown.Item>
                  </Dropdown>
                  )}
              </div>
              </th>
          </tr>
          </thead>
      </table>
      <table style={{ borderCollapse: 'collapse', width: '70%' }}>
                          <thead>
                          <tr>
                          </tr>
                          <p className="line-break"></p>  
                          <tr>
                              <th style={styles.headerCell}>Preguntas</th>
                              <th style={styles.headerCell}> 1</th>
                              <th style={styles.headerCell}> 2</th>
                              <th style={styles.headerCell}> 3</th>
                              <th style={styles.headerCell}> 4</th>
                              <th style={styles.headerCell}> 5</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td style={styles.cell}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td style={styles.cell}><input type="radio" name="option1" checked={selectedOptions[0] === 0} onChange={() => handleOptionChange(0, 0)}/></td>
                              <td style={styles.cell}><input type="radio" name="option2" checked={selectedOptions[0] === 1} onChange={() => handleOptionChange(0, 1)}/></td>
                              <td style={styles.cell}><input type="radio" name="option3" checked={selectedOptions[0] === 2} onChange={() => handleOptionChange(0, 2)}/></td>
                              <td style={styles.cell}><input type="radio" name="option4"checked={selectedOptions[0] === 3} onChange={() => handleOptionChange(0, 3)}/></td>
                              <td style={styles.cell}><input type="radio" name="option5"checked={selectedOptions[0] === 4}onChange={() => handleOptionChange(0, 4)}/></td>
                          </tr>
                          <tr>
                              <td style={styles.cell}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td style={styles.cell}><input type="radio" value="1" name="option1" checked={selectedOptions[1] === 0}onChange={() => handleOptionChange(1, 0)}/></td>
                              <td style={styles.cell}><input type="radio" name="option2" checked={selectedOptions[1] === 1}onChange={() => handleOptionChange(1, 1)}/></td>
                              <td style={styles.cell}><input type="radio" name="option3" checked={selectedOptions[1] === 2} onChange={() => handleOptionChange(1, 2)}/></td>
                              <td style={styles.cell}><input type="radio" name="option4" checked={selectedOptions[1] === 3} onChange={() => handleOptionChange(1, 3)}/></td>
                              <td style={styles.cell}><input type="radio" name="option5" checked={selectedOptions[1] === 4} onChange={() => handleOptionChange(1, 4)}/></td>
                          </tr>
                          <tr>
                              <td style={styles.cell}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                              <td style={styles.cell}><input type="radio" name="option1" checked={selectedOptions[2] === 0} onChange={() => handleOptionChange(2, 0)}/></td>
                              <td style={styles.cell}><input type="radio" name="option2" checked={selectedOptions[2] === 1} onChange={() => handleOptionChange(2, 1)}/></td>
                              <td style={styles.cell}><input type="radio" name="option3" checked={selectedOptions[2] === 2} onChange={() => handleOptionChange(2, 2)}/></td>
                              <td style={styles.cell}><input type="radio"name="option4" checked={selectedOptions[2] === 3} onChange={() => handleOptionChange(2, 3)}/></td>
                              <td style={styles.cell}><input type="radio" name="option5"checked={selectedOptions[2] === 4}onChange={() => handleOptionChange(2, 4)}/></td>
                          </tr>
                          </tbody>
                      </table>
        </center>
        </div>         
      </div>
      <div className="mt-4 text-center">
        <PDFDownloadLink document={<PdfDocument />} fileName="certificado_docente.pdf" className="text-blue-500 underline hover:text-blue-700">
          {({ loading }) => (loading ? 'Generando PDF...' : 'Descargar el certificado formato PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  </div>
);
};

export default Evaluacion