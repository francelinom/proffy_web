import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/43214576?s=460&u=cf5abc5edbfaf53c3492a7b37040755f15075725&v=4" alt="Francelino Marcílio" />
            <div>
                <strong>Francelino Marcílio</strong>
                <span>Programação</span>
            </div>
        </header>
        <p>
            Estudante de Desenvolvimento de sistemas
            <br /><br/>
            Escola Agricola de Jundiaí - UFRN
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;