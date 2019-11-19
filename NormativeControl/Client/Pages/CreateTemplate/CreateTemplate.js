import React, {useState, useEffect} from 'react';
import './create-template.sass';
import {TextField} from "@material-ui/core";
import SolidButton from "../../Components/Buttons/SolidButton";
import IconButtonNamed from "../../Components/Buttons/IconButtonNamed";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import * as API from '../../API';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CreateTemplate() {

    const [nameTemplate, setNameTemplate] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const [templates, setTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        API.GetTemplates()
            .then(res => {
                setTemplates(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            })
    }, []);

    const sendForm = (e) => {
        e.preventDefault();

        if (!file) {
            setError("Файл не загружен");
            return;
        }

        API.PostTemplate(nameTemplate, file)
            .then(res => {
                alert("Шаблон создан");
                location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    };

    return <main>
        <h1>Создать шаблон</h1>

        <form onSubmit={sendForm}>
            <div className="create-template-field">
                <TextField
                    id="name"
                    label="Имя шаблона"
                    className="field"
                    placeholder="Имя шаблона"
                    margin="normal"
                    required={true}
                    onChange={(e) => setNameTemplate(e.target.value)}
                />
            </div>

            <IconButtonNamed text="Загрузить описание шаблона (формат docx)" icon="upload" className="mt-30" disable={false}
                             onClick={(e) => setFile(e.target.files[0])} isFile={true} id="templateLoad"/>

            { file && <p className="mt-20">Загруженный файл: <span className="create-template__file">{file.name}</span></p>}
            { error && <p className="mt-20 create-template__error">{error}</p>}

            <SolidButton text="Создать шаблон" size="big" className="mt-40"/>
        </form>

        <div className="mt-40">
            <h1>Текущие шаблоны</h1>
            <TemplateData templates={templates} isLoading={isLoading}/>
        </div>
    </main>
}

function TemplateData({templates, isLoading}) {

    const removeTemplate = (id) => {
        API.DeleteTemplate(id)
            .then(res => {
                location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    };

    if(isLoading)
        return <div className="d-flex jc-center mt-40">
            <CircularProgress color="secondary"/>
        </div>;

    return <div className="mt-30">
        {templates.map((temp) => {
            return <div className="currentTemplate" key={temp.id}>
                <div className="currentTemplate__title">
                    {temp.name}
                </div>
                <div className="currentTemplate__link">
                    <a href={temp.path} target="_blank" className="under-link">Скачать правила оформления</a>
                </div>
                <div className="currentTemplate__remove" onClick={() => removeTemplate(temp.id)}>
                    <FontAwesomeIcon icon="times"/>
                </div>
            </div>
        })}
    </div>
}








