import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm() {

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ]);
    }
    
    function handleCreateClass(e: FormEvent){
        e.preventDefault()
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Incríveil que você quer dar aulas"
                description="O primeiro passo é preencher o formulario de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                            <Input 
                                name="name" 
                                label="Nome Completo"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}    
                            />
                            <Input 
                                name="avatar" 
                                label="Avatar"
                                value={avatar}
                                onChange={(e) => {setAvatar(e.target.value)}}      
                            />
                            <Input 
                                name="whatsapp" 
                                label="WhatsApp"
                                value={whatsapp}
                                onChange={(e) => {setWhatsapp(e.target.value)}}      
                            /> 
                            <Textarea 
                                name="bio" 
                                label="Biografia"
                                value={bio}
                                onChange={(e) => {setBio(e.target.value)}}  
                            />
                        </fieldset>

                        <fieldset>
                            <legend>Sobre a Aula</legend>
                            <Select 
                                name="subject" 
                                label="Matéria"
                                value={subject}
                                onChange={(e) => {setSubject(e.target.value)}}
                                options={[
                                    {value: 'Artes', label: 'Artes'},
                                    {value: 'Matematica', label: 'Matemática'},
                                    {value: 'Fisica', label: 'Física'},
                                    {value: 'Portugues', label: 'Português'},
                                    {value: 'Historia', label: 'História'},
                                    {value: 'Geografia', label: 'Geografia'}
                                ]}
                            />
                            <Input 
                                name="cost" 
                                label="Custo da sua hora aula"
                                value={cost}
                                onChange={(e) => {setCost(e.target.value)}}
                            />
                        </fieldset>

                        <fieldset>
                            <legend>
                                Horários disponíveis
                                <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                                </button>
                            </legend>

                            {scheduleItems.map(scheduleItem => {
                                return (
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select 
                                            name="week-day" 
                                            label="Dia da Semana"
                                            options={[
                                                {value: '0', label: 'Domingo'},
                                                {value: '1', label: 'Segunda'},
                                                {value: '2', label: 'Terça'},
                                                {value: '3', label: 'Quarta'},
                                                {value: '4', label: 'quinta'},
                                                {value: '5', label: 'Sexta'},
                                                {value: '6', label: 'Sábado'},
                                            ]}
                                        />  
                                        <Input name="from" label="Das" type="time" />
                                        <Input name="to" label="Até" type="time"/>
                                    </div>
                                );
                            })}

                        </fieldset>

                        <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;