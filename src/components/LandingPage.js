import React, {useEffect, useState} from 'react'
import './LandingPage.css'

function LandingPage() {
    // const [data, setData] = useState([]);
    // const [data1, setData1] = useState([]);
    // const [data2, setData2] = useState([]);
    // const [data3, setData3] = useState([]);
    // const [data4, setData4] = useState([]);
    // const [data5, setData5] = useState([]);
    // const [data6, setData6] = useState([]);
    // const [data7, setData7] = useState([]);
    // const [data8, setData8] = useState([]);
    // const [data9, setData9] = useState([]);
    // const [data10, setData10] = useState([]);
    // const [data11, setData11] = useState([]);
    // const [data12, setData12] = useState([]);
    // const [data13, setData13] = useState([]);

    // const getCovidData = async () => {
    //     try {
    //         const res = await fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Malaysia');
    //         const actualData = await res.json();
    //         setData(actualData.All);
    //         setData1(actualData.Johor);
    //         setData2(actualData.Kedah);
    //         setData3(actualData.Kelantan);
    //         setData4(actualData.Melaka);
    //         setData5(actualData.['Negeri Sembilan']);
    //         setData6(actualData.Pahang);
    //         setData7(actualData.Perak);
    //         setData8(actualData.Perlis);
    //         setData9(actualData.['Pulau Pinang']);
    //         setData10(actualData.Sabah);
    //         setData11(actualData.Sarawak);
    //         setData12(actualData.Selangor);
    //         setData13(actualData.Terengganu);

    //         console.log(actualData);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // useEffect(()=>{
    //     getCovidData();
    // }, []);

    return (
        <div>
            Please head to login page to access Camera View
        </div>
        // <div>
        //     <h1>Malaysia COVID Status</h1>
        //     <ul>
        //         <li className="box">
        //             <div className="card_main">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>My</span> Country</p>
        //                     <p className="card_total card_small">MALAYSIA</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <div className="grid">
        //         <li className="box">
        //             <div className="card_main">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>cases </span>Confirmed</p>
        //                     <p className="card_total card_small">{data.confirmed}</p>
        //                 </div>
        //             </div>
        //         </li>

        //         <li className="box">
        //             <div className="card_main">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>cases </span> Death</p>
        //                     <p className="card_total card_small">{data.deaths}</p>
        //                 </div>
        //             </div>
        //         </li>

        //         <li className="box">
        //             <div className="card_main">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>cases</span> Recovered</p>
        //                     <p className="card_total card_small">{data.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         </div>
        //     </ul>
        //     <ul>
        //         <div className="grid1">
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Johor</p>
        //                     <p className="card_total card_small">Confirmed: {data1.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data1.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data1.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>

        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Kedah</p>
        //                     <p className="card_total card_small">Confirmed: {data2.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data2.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data2.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Kelantan</p>
        //                     <p className="card_total card_small">Confirmed: {data3.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data3.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data3.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Melaka</p>
        //                     <p className="card_total card_small">Confirmed: {data4.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data4.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data4.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Negeri Sembilan</p>
        //                     <p className="card_total card_small">Confirmed: {data5.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data5.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data5.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Pahang</p>
        //                     <p className="card_total card_small">Confirmed: {data6.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data6.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data6.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Perak</p>
        //                     <p className="card_total card_small">Confirmed: {data7.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data7.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data7.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Perlis</p>
        //                     <p className="card_total card_small">Confirmed: {data8.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data8.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data8.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Pulau Pinang</p>
        //                     <p className="card_total card_small">Confirmed: {data9.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data9.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data9.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Sabah</p>
        //                     <p className="card_total card_small">Confirmed: {data10.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data10.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data10.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Sarawak</p>
        //                     <p className="card_total card_small">Confirmed: {data11.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data11.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data11.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Selangor</p>
        //                     <p className="card_total card_small">Confirmed: {data12.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data12.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data12.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>
        //         <li className="box">
        //             <div className="card_main1">
        //                 <div className="card_inner">
        //                     <p className="card_name"><span>state:</span> Terengganu</p>
        //                     <p className="card_total card_small">Confirmed: {data13.confirmed}</p>
        //                     <p className="card_total card_small">Death: {data13.deaths}</p>
        //                     <p className="card_total card_small">Recovered: {data13.recovered}</p>
        //                 </div>
        //             </div>
        //         </li>

        //         </div>                
        //     </ul> 
        // </div>
    )
}

export default LandingPage
