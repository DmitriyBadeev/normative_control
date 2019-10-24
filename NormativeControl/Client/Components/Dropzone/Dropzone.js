import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import DocxIcon from '../../img/docx.svg'

import './dropzone.sass'

export default function Dropzone({onDropHandler, selectedFile}) {

    const docxFormat = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length > 1) {
            setError({textError: "Вы можете загрузить только один файл"});
            return;
        }

        if(acceptedFiles[0].type !== docxFormat) {
            setError({textError: "Неверный формат файла. Допустимый формат: docx"});
            return;
        }

        setError({textError: ''});
        onDropHandler(acceptedFiles[0]);
        setLoadState({isSuccess: true});
    }, []);

    const [error, setError] = useState({textError: ''});
    const [loadState, setLoadState] = useState({isSuccess: selectedFile});

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    const getTitle = () => {
        if (isDragActive)
          return <p>Перетащите файл сюда</p>;

        if (selectedFile)
            return <React.Fragment>
                <img src={DocxIcon} alt="docx" className="dropzone-icon"/>
                <p className="dropzone-line">Выбран файл: {selectedFile.name}</p>
        </React.Fragment>;

        return <p>Перетащите файл сюда или кликните, чтобы выбрать его</p>;
    };

    const getError = () => {
        if (error.textError)
            return <p className="dropzone-error">{error.textError}</p>;
    };

    return (
        <div {...getRootProps()} className={loadState.isSuccess? "dropzone-container dropzone-container_success": "dropzone-container"}>
            <input {...getInputProps()} />
            <div className="dropzone-text">
                {
                    getTitle()
                }
                <br />
                {
                    getError()
                }
            </div>
        </div>
    )
}