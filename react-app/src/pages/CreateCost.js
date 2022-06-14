import Container from "../components/Container";
import { useState } from "react";

const CreateCost = (style) =>{

    const [cost, setCost] = useState({});
    const [response, setResponse] = useState('');

    const formProps = {
        onSubmit: async (e) => {
            e.preventDefault();
            let res = await fetch("http://localhost:3000/costs/create", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: new URLSearchParams(cost)
            })
            const resJson = await res.json();
            console.log(resJson);
            setResponse(resJson);

        },
        fields: [
            {
            label: 'User ID:',
            inputType: 'number',
            name: 'userId',
            onChange: (e) => setCost({
                ...cost,
                userId: e.target.value
            }),
            },
            {
                label: 'Category:',
                inputType: 'text',
                name: 'category',
                onChange: (e) => setCost({
                    ...cost,
                    category: e.target.value
                }),
            },
            {
                label: 'Description:',
                inputType: 'text',
                name: 'description',
                onChange: (e) => setCost({
                    ...cost,
                    description: e.target.value
                }),
            },
            {
                label: 'Sum:',
                inputType: 'number',
                name: 'sum',
                onChange: (e) => setCost({
                    ...cost,
                    sum: e.target.value
                }),
            },
            {
                label: 'Month:',
                inputType: 'month',
                name: 'monthAndYear',
                onChange: (e) => setCost({
                    ...cost,
                    monthAndYear: e.target.value
                }),
            }
        ],
        button: {
            value: 'Save Cost'
        },
        response: response,
    }

    return (
        <Container title='Create Cost' formProps={formProps}/>
    )
}
export default CreateCost;
