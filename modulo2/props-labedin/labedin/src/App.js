import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './Component/CardPequeno';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/BT6E-lH-lNHI6im5od81VWLYPVe5VLl0mblRkWgQLG_Tsro2mMk0MdBTYyzU7TE7jf5SRuavGceDOWInmWM8-pchBTdIBgL_Tr2KxJFBRT-MfpmaREsBEWi8MHd1qGh5m54_AGRhWYn_GP_74fXqW1cJETvogZeDuJLcOTLQhMVJRvxwS2Diu-p3oyJXxEdbJMqC9uUTICnrZVHIeuafkme-LWWCIEgdYjt-uL9HQZtKoxQztIzA81a3iL0Zl1nA4aYqUd86m9jkucZwkByQHP6QHScEVS8wKewmQkrnj3gJx41vgwucEE_3SLOFJbQ4MD_uJN_Df4dbPhQsQJbwryRs7cILhb2Gf0R2GLvCdzl3Nlde5tZyQHVjmrjwq-DjZ27mnCsyO4RGypzRCb6LZrhvK-V38pUPh23RQ_zWoyMY2f2u7qgUFjJy9CrzCVdaAKCTE2Az7JZb6jarOOXeAaoHRtz-nRVbyEtQwfMXdTyx_q0rW7sot_g0Q3fWnoM-uY-iTSISeM6K4VyQJnwGVdaXu0UghcM0mHv7Tpmkufv8dyLtlZfxVzxHgFkyaCA2M_4gZvoj72zzw_9jkn-uCyiQ2hWhTx9vvKQl601ju_-hyXD_QUINAYs57tVYwD4WYVvodt2mjQY06Ngp6TU3dNxJ1FiQ6Q9Nv6I6xR3TOJ23z7kkRkI4JHkVucelUnlqKa6lYmQWoZuIt1rV-SHNaMupTuhYdMzv6_VYPH6TEdMFCfIgGdPkoZbrLVbQrbCQd9MwS96vdzia6IpSxF9abNITFxVzFZk-ww=w310-h637-no?authuser=1" 
          nome="Frederico Lopes" 
          descricao="Oi, eu sou o Frederico Lopes. Sou estudante da Labenu,e apaixonado por tecnologia.Estou adorando esses meus primeiros passos."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno
        imagem="https://t3.ftcdn.net/jpg/01/40/87/88/240_F_140878889_5q9KGY7b72ATF2uIT8mJ9ISdrxog4Caz.jpg"
        nome="email"
        email="fredlsmartins@outlook.com"
        />
         <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/128/5576/premium/5576908.png?token=exp=1647982294~hmac=ad370fe256fd2b5a4a31f55aac54470e"
        nome="Endereço"
        email="Brasilia DF"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Sem experiencia na area de tecnologia. Estudante" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Ser perfeccionista." 
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
      </div>
    </div>
  );
}

export default App;
