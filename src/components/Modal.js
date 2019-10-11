import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({
    botones,
    contenido,
    mostrar,
    nombre,
    titulo,
    onCerrarModal,
}) => {

    if (typeof mostrar !== 'boolean') {
        mostrar = false;
    }

    if (typeof nombre !== 'string') {
        nombre = 'modalTest';
    }

    if (typeof titulo !== 'string') {
        titulo = '';
    }

    const [creadoEnDOM, setCreadoEnDOM] = useState(false);

    if (!creadoEnDOM) {
        const modalDiv = document.createElement('div');
        modalDiv.id = nombre;
        document.body.appendChild(modalDiv);
        setCreadoEnDOM(true);
    }

    useEffect(() => {
        return () => {
            // Eliminar div dinámico
            document.getElementById(nombre).remove();
        }
    }, []);

    let styles = {};

    if (mostrar) {
        styles.display = 'block';
    }

    return ReactDOM.createPortal(
        <div className={`modal fade ${mostrar ? 'show' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="tituloModal"
            aria-hidden="true"
            style={styles}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="tituloModal">{titulo}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCerrarModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{contenido}</div>
                    <div className="modal-footer">
                        {botones ? botones : (<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCerrarModal}>Cerrar</button>)}
                    </div>
                </div>
            </div>
        </div>, document.getElementById(nombre));
}

export default Modal;