import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Incríveil que você quer dar aulas"
                description="O primeiro passo é preencher o formulario de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/> 
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>
                    <Select name="subject" label="Matéria"/>
                    <Input name="cost" label="Custo da sua hora aula"/>
                </fieldset>

                <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante" />
                    Importante! <br />
                    Preencha todos os dados
                </p>
                <button type="button">
                    Salvar Cadastro
                </button>
            </footer>
            </main>
        </div>
    )
}

export default TeacherForm;