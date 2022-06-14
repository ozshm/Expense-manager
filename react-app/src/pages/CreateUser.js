import Container from "../components/Container";
import { useState } from "react";

const CreateUser = () => {

    const [user, setUser] = useState({});
    const [response, setResponse] = useState('');

    const formProps = {
        onSubmit:  async (e) => {
            e.preventDefault();
            let res = await fetch("http://localhost:3000/users/create",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                body: new URLSearchParams(user)
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
                    onChange: (e) => setUser({
                        ...user,
                        userId: e.target.value
                    }),
                },
                {
                    label: 'First Name:',
                    inputType: 'text',
                    name: 'firstName',
                    onChange: (e) => setUser({
                        ...user,
                        firstName: e.target.value
                    }),
                },
                {
                    label: 'Last Name:',
                    inputType: 'text',
                    name: 'lastName',
                    onChange: (e) => setUser({
                        ...user,
                        lastName: e.target.value
                    })
                },
                {
                    label: 'Birthday:',
                    inputType: 'Date',
                    name: 'birthday',
                    onChange: (e) => setUser({
                        ...user,
                        birthday: e.target.value
                    }),
                },
                {
                    label: 'Married:',
                    inputType: 'checkbox',
                    name: 'married',
                    onChange: (e) => setUser({
                        ...user,
                        married: e.target.value
                    }),
                }
            ],
            button: {
                value: 'Save User',
            },
            response: response,
        }
        return ( 
            <Container 
                title = 'Create User'
                formProps = {
                    formProps
                }
            />
        )
        }
        export default CreateUser;