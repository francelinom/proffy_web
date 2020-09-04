import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


function TeacherList() {

    const [subject, setSubject] = useState('');
    const [weekday, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function searchTeachers(){

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
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
                <Select 
                        name="week-day" 
                        label="Dia da Semana"
                        value={weekday}
                        onChange={(e) => {setWeekDay(e.target.value)}}
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
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => {setTime(e.target.value) }}
                    />                    
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;