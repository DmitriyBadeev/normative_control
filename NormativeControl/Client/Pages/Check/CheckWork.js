import React, {useState} from "react";
import IconButtonNamed from "../../Components/Buttons/IconButtonNamed";
import SolidButton from "../../Components/Buttons/SolidButton";
import Input from "@material-ui/core/Input";
import ErrorList from "../../Components/ErrorList/ErrorList";
import * as Config from '../../Config';
import * as API from '../../API';

export default function CheckWork(props) {

    const [errors, setErrors] = useState(props.errorList);
    const [input, setInput] = useState('');
    const [uploadFile, setUploadFile] = useState();
    const [disable, setDisable] = useState(props.status === Config.STATUS.PENDING_CORRECTION || props.status === Config.STATUS.ACCEPTED);

    const addError = (e) => {
        e.preventDefault();

        if (input !== '') {
            setErrors([input, ...errors]);
            setInput('');
        }
    };

    const removeError = (index) => {
        setErrors([...errors.filter((el, i) => i !== index)]);
    };

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const putErrors = (e) => {
        const workId = props.id;
        const errorPromise = API.PutErrors(workId, errors);

        const filePromise = uploadFile != null ?
            API.UploadFile(uploadFile, workId, Config.STATUS.PENDING_CORRECTION) :
            Promise.resolve();

        Promise.all([errorPromise, filePromise])
            .then(res => {
                alert("Работа успешно отправлена!");
                location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const acceptWork = (e) => {

        API.AcceptWork(props.id)
            .then(res => {
                location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    };

    const getStatusClasses = () => {
        if (props.status === Config.STATUS.CHECK || props.status === Config.STATUS.PENDING_RECHECK)
            return 'check-work_check';

        if (props.status === Config.STATUS.PENDING_CORRECTION)
            return 'check-work_pending';

        if (props.status === Config.STATUS.ACCEPTED)
            return 'check-work_accept';
    };

    const handleDownloadWork = (e) => {
        e.preventDefault();
        window.open(props.path);
    };

    const handleUploadWork = (e) => {
        const file = e.target.files[0];
        setUploadFile(file);

        console.log(file);
    };

    return <div className={`check-work ${getStatusClasses()}`}>
        <div className="check-work__left">
            <div className="check-work__dateAndTemplate">
                <span className="check-work__date">{props.date} </span>
                <span className="check-work__template">{props.template}</span>
                <span className={`check-work__status${props.status === Config.STATUS.ACCEPTED ? '_accepted' : ''}`}> {props.status}</span>
            </div>
            <div className="check-work__name">
                {props.name}
            </div>
            <div className="check-work__downAndUpBtn">
                <IconButtonNamed text="Скачать работу" icon="download" className="check-work__downloadBtn"
                                 disable={disable} onClick={handleDownloadWork}/>
                <IconButtonNamed text="Загрузить работу" icon="upload" className="check-work__uploadBtn"
                                 disable={disable} onClick={handleUploadWork} isFile={true} id={props.id}/>
            </div>
            {uploadFile && <h3 className="mt-40">Загружен файл: {uploadFile.name}</h3>}
        </div>
        <div className="check-work__right">
            <div className="check-work__main-btn">
                <SolidButton disable={disable} text="Отправить на доработку" size="long" className="check-work__reject-btn" onClick={putErrors}/>
                <SolidButton disable={disable} text="Принять работу" size="long" className="check-work__accept-btn" onClick={acceptWork}/>
            </div>

            <form className="check-work__errors" onSubmit={addError}>
                <Input placeholder="Замечание" className="check-work__input" disabled={disable} onChange={inputHandler} value={input}/>
                <IconButtonNamed text="Добавить замечание" icon="plus" disable={disable}/>
            </form>

            <ErrorList errorList={errors} className="check-work__errorList" isDelete={true} deleteHandler={removeError} disable={disable}/>
        </div>
    </div>
}