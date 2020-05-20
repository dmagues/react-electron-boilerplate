import React from 'react';
  
class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="footer fixed-bottom bg-dark">
            {/* <p className="float-right"><a href="#">Subir</a></p> */}
            {/* <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p> */}
            <div className="container text-white">Copyright &copy; 2018-2020 Neuralium inc. All rights reserved.</div>
        </footer>
 
    )
    
  }
 
}
 
export default Footer;