import React, { useEffect, useState } from "react";
import * as API from '../../API';
import CheckWork from "./CheckWork";
import './check.sass';
import Loading from "../../Components/Loading/Loading";


export default function Check() {

    const [works, setWorks] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        API.GetAllWorks()
            .then(res => {
                setWorks(res.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
    }, []);


    const getWorks = () => {
        let result = [];

        for(let work in works) {
            let groupItem = <div className="check-group" key={work}>
                <div className="check-group__title">
                    <span className="check-group__name-group_grey">Группа: </span>
                    <span className="check-group__name-group">{work}</span>
                </div>

                {works[work].map(w => {
                    return <CheckWork
                                id={w.id}
                                date={getDate(w)}
                                template={w.template}
                                name={w.nameFile}
                                errorList={w.errors.map(el => el.desc)}
                                status={w.status}
                                path={w.path}
                                key={w.id}/>
                })}
            </div>;

             result.push(groupItem);
        }

        return result;
    };

    const getDate = (work) => {
        return new Date(work.date).toLocaleString("ru",
            {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            })
    };

    return <main>
        <h1>Проверка студенческих работ</h1>

        { loading? <Loading/> : getWorks() }

    </main>
}