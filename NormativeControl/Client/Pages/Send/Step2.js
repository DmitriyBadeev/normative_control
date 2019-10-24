import React, {useState, useEffect} from 'react';
import Dropzone from "../../Components/Dropzone/Dropzone";

import './send.sass';
import SolidButton from "../../Components/Buttons/SolidButton";
import * as API from '../../API';

export default function ({onDropHandler, selectedFile, toBunNextStep, toAllowNextStep, successLoaded, isSuccessLoaded}) {

    const [disableLoad, setDisableLoad] = useState({disable: isSuccessLoaded});
    const [isLoading, setIsLoading] = useState({isLoading: false});

    useEffect(() => {
        if(!isSuccessLoaded)
            toBunNextStep();
    }, []);

    const loadFile = () => {
        setIsLoading({isLoading: true});
        API.UploadTempFile(selectedFile)
            .then(res => {
                toAllowNextStep();
                successLoaded();
                setDisableLoad({disable: true});
                setIsLoading({isLoading: false});
                console.log(res.data);
            })
            .catch(error => {
                setIsLoading({isLoading: false});
                console.log(error);
            })

    };

    const getTitleButton = () => {
        if(isSuccessLoaded)
            return "Загрузка завершена";

        if(isLoading.isLoading)
            return "Загрузка...";

        return "Загрузить";
    };

    return <div className="step-wrapper">
        <p>Загрузите свою работу в формате docx.</p>

        <div className="mt-40">
            <Dropzone onDropHandler={onDropHandler} selectedFile={selectedFile}/>
        </div>

        <SolidButton size="medium"
                     text={getTitleButton()}
                     className="mt-30 load-button"
                     disable={selectedFile === null || disableLoad.disable}
                     onClick={loadFile}
        />
    </div>
}