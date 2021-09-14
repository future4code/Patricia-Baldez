import React from "react";
import './App.css';
import styled from 'styled-components';
import Etapa1 from "/components/Etapa1";
import Etapa2 from "/components/Etapa2";
import Etapa3 from "/components/Etapa3";
import Etapa4 from "/components/Etapa4"
const UserForm = ({ onChange, values }) => (
  <div>
    <h1>User</h1>
    <div>
      <div className="row">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={values.name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={values.email} onChange={onChange} />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Country</label>
          <CountrySelector name="country" value={values.country} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>Province</label>
          {values.country
            ? <ProvinceSelector name="province" value={values.province} onChange={onChange} />
            : <span>Select a country first</span>
          }
        </div>
      </div>
    </div>
  </div>
);

// const Principal = Styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// flex-direction: column;

// `
// export default class App extends React.Component {
// state = {
//   etapa:1,
//   respostas:[{
//     nome:"",
//     idade:"",
//     email:"",
//     escolaridade:"",
//   }],
//   inputnome:"",
//   inputidade:"",
//   inputemail:"",
//   inputescolaridade:"",

// }
// renderizaEtapa = ()=>{

// }
//  }

export default App;

