import React, { useState, useEffect } from 'react';
import './App.css';
import data from '../src/data.json';

// function App() {
// const [data,setData]=useState([]);
// const getData=()=>{
//   fetch('data.json'
//   ,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//   }
//   )
//     .then(function(response){
//       console.log(response)
//       return response.json();
//     })
//     .then(function(myJson) {
//       setData(myJson);
//       console.log(myJson);
//     });
// }
// useEffect(()=>{
//   getData()
// },[])
// return (
//   <div className="App">
//    {
//      data && data.length>0 && data.map((item)=><p>{item}</p>)
//    }
//   </div>
// );

//   const newData = data.map((data) => {
//     return (
//       <div key={data.analyzeResult.pageResults}>
//         {data.analyzeResult.pageResults.map((table) => {
//           table.tables.map(cell => {
//             cell.cells.map(text => {
//               <th>{text.text}</th>
//             })
//           })
//         })}
//         {newData}
//       </div>
//     )
//   })
// }

const newData = data

class App extends React.Component {

  render() {

    return (
      <ul>
        {newData.map(a => a.analyzeResult.pageResults.map(table => table.tables.map(cell => cell.cells.map(tex => <div>{tex.text}</div>))))}
        <br></br>
        {newData.map(a => a.analyzeResult.documentResults.map(field => (
          <>
            <lable><b>Address : </b></lable>{field.fields.CustomerAddress.text}<br></br>
            <lable><b>CustomerAddressRecipient : </b></lable>{field.fields.CustomerAddressRecipient.text}<br></br>
            <lable><b>CustomerName : </b></lable>{field.fields.CustomerName.text}<br></br>
            <lable><b>DueDate : </b></lable>{field.fields.DueDate.text}<br></br>
            <lable><b>InvoiceDate : </b></lable>{field.fields.InvoiceDate.text}<br></br>
            <lable><b>InvoiceId : </b></lable>{field.fields.InvoiceId.text}<br></br>
            <lable><b>InvoiceTotal : </b></lable>{field.fields.InvoiceTotal.text}<br></br>
            <lable><b>ShippingAddress : </b></lable>{field.fields.ShippingAddress.text}<br></br>
            <lable><b>ShippingAddressRecipient : </b></lable>{field.fields.ShippingAddressRecipient.text}<br></br>
            <lable><b>SubTotal : </b></lable>{field.fields.SubTotal.text}<br></br>
            <lable><b>TotalTax : </b></lable>{field.fields.TotalTax.text}<br></br>
            <lable><b>VendorAddress : </b></lable>{field.fields.VendorAddress.text}<br></br>
            <lable><b>VendorAddressRecipient : </b></lable>{field.fields.VendorAddressRecipient.text}<br></br>
            <lable><b>VendorName : </b></lable>{field.fields.VendorName.text}<br></br>
          </>
        )))}
      </ul>
    )
  }
}

export default App;