import React, { useState, useEffect } from 'react'
import { db } from "../firebase"
import './List.css';

function List() {
    const [tempList, setTempList] = useState({});

    useEffect(() => {
        const ref = db.ref(`Sensor`);
        ref.on("value", (snapshot) => {
        if(snapshot.val() !== null) {
                setTempList({
                    ...snapshot.val(),
                });
            } else{
                snapshot({});
            }
        })
        return () => ref.off();
    }, [])

    return (
        <div>
           <div className="image">
            <img className="img" src="http://192.168.0.156/" alt="Camera stream"/>
            <h1>Camera View</h1>
           </div>
           <br/><br/>
           <table className="table">
            <tr>
                <th className="theader1">Current Time</th>
                <th className="theader2">Temperature (°C)</th>
                <th className="theader3">Mask Detection Rate</th>
            </tr>
            <tr>
                <td className="table">{tempList.Timestamp}</td>
                <td className="table">{tempList.Temperature}°C</td>
                <td className="table">{tempList.Mask}%</td>
            </tr>
            </table>
        </div>
    )
}

export default List