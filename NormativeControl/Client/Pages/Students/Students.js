import React, {useState, useEffect} from "react";

import * as API from '../../API';
import * as Config from '../../Config';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './students.sass'

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Loading from "../../Components/Loading/Loading";

export default function Students() {

    const [studentGroups, setStudentGroups] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        API.GetUsers()
            .then(res => {
                let students = res.data.filter(g => g[0].role !== Config.ROLE.NORMCONTROL);
                setStudentGroups(students);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            });
    }, []);

    if (isLoading)
        return <Loading />;

    return <main>
        <h1>Студенты</h1>

            {studentGroups.map((group, index) => {
                return <div key={index} className="mt-30">
                    <h3 className="students__group">{group[0].group}</h3>
                    {group.map(student => {
                        return <StudentInfo studentInfo={student} key={student.id}/>
                    })}
                </div>
            })}
    </main>
}

function StudentInfo({studentInfo}) {

    return <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<FontAwesomeIcon icon="angle-down"/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>{`${studentInfo.name} ${studentInfo.lastName}`}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="column">
            <h4>Информация</h4>
            <ul className="students__info">
                <li>{`Id: ${studentInfo.id}`}</li>
                <li>{`Email: ${studentInfo.email}`}</li>
                <li>{`Группа: ${studentInfo.group}`}</li>
            </ul>
        </ExpansionPanelDetails>
    </ExpansionPanel>
}