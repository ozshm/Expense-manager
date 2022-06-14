import Container from "../components/Container";
import { useState } from "react";

const Report = (style) =>{

    const [report, setReport] = useState({});
    const [response, setResponse] = useState('');


    const formProps = {
        onSubmit: async (e) => {
            e.preventDefault();
            let res = await fetch("http://localhost:3000/costs/get?" +
             new URLSearchParams(report), {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                
            })
            const resJson = await res.json();
            setReport({...report, body: resJson.body});
            setResponse(resJson);

        },
        fields: [
            {
                label: 'User ID:',
                inputType: 'number',
                name: 'userId',
                onChange: (e) => setReport({
                    ...report,
                    userId: e.target.value
                }),
            },
            {
                label: 'Month:',
                inputType: 'month',
                name: 'monthAndYear',
                onChange: (e) => setReport({
                    ...report,
                    monthAndYear: e.target.value
                }),
            }
        ],
        button: {
            value: 'Get Report'
        },
        response: response,
    }


    return (
        <Container title='Report' formProps={formProps} report = {report}/>
    )
}
export default Report;
