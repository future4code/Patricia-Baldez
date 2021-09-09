import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem ="https://media-exp1.licdn.com/dms/image/C4D16AQH2N1BEttRjxw/profile-displaybackgroundimage-shrink_350_1400/0/1623815384127?e=1636588800&v=beta&t=EtP-s7ymkSYXgHXiytN8JwWtspHy6HsxohgCNSwJPV4" 
        />
         <CardGrande
          imagem1 ="https://media-exp1.licdn.com/dms/image/C4D03AQGBeSA3JdGxPw/profile-displayphoto-shrink_100_100/0/1625050001487?e=1636588800&v=beta&t=W9-Pp-CkHqaZHVTNvQYHbTr9bzMSnTVvCku3kR1ByLo" 
          nome="Patricia Dias Baldez" 
          descricao="Estudante, Labenu!."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="" 
          nome="Lb serviços informatizados" 
          descricao="Responsável pelo envio do e-Social e por garantir que as rotinas da empresa sigam nos termos da legislação trabalhista, estar atenta às mudanças nas leis trabalhistas e tributárias, responsável pela entrega de declarações fiscais federais como: EFD contribuições, DCTF, conferência de dados fiscais e outras rotinas, baixas de inscrições CNPJ na prefeitura, entre outras rotinas tributárias e societárias!" 
        />
        <CardGrande 
          imagem="" 
          nome="JB Contabilidade" 
          descricao="Encarregada Departamento Pessoal-responsável pelo envio do eSocial, folha de pagamento, impostos da folha como: INSS, FGTS, IRRF, Declarações como: GFIP, SEFIP, RAIS, CAGED, DIRF, admissão, demissão, Certidões negativas, férias, benefícios VT,VR, VA, Seguro de Vida, Plano de saúde, enfim todas as rotinas do departamento pessoal." 
        />
        <CardGrande 
          imagem="http://www.assesconth.com.br/images/m-01-b.jpg" 
          nome="Assesconty Assessoria Contabil" 
          descricao="Encarregada Fiscal- com funções de lançamentos de notas de entradas e saídas, emissão de guias PIS, COFINS, CSSL, IRPJ, ICMS, ST e ISSQN e outras atividades que envolvem a área Fiscal
          Encarregada Departamento Pessoal- Folha de pagamento, INSS, FGTS, RAIS,CAGED, DIRF, IRRF, admissão, demissão, Certidões negativas, férias, benefícios como: VT,VR, VA, Seguro de Vida, Plano de saúde, enfim todas as rotinas do departamento!" 
        />
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/185/185963.png" 
          nome="" 
          descricao="patriciabaldez1985@gmail.com" 
          imagem1="https://image.flaticon.com/icons/png/512/185/185988.png" 
          nome="Contato" 
          descricao="patriciabaldez1985@gmail.com" 
          imagem2="https://image.flaticon.com/icons/png/512/185/185964.png" 
          nome="Contato" 
          descricao="patriciabaldez1985@gmail.com"
          fone="Fone:51997110194" 
          endereco="Endereco: Estrada Chacara do Banco, 200, Porto Alegre-RS" 
        />
         
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />    
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/185/185964.png" 
          texto="Linkedin" 
        />  
                  
      </div>
    </div>
  );
}

export default App;
