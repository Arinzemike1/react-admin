import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const CreateUser = (props) => {
    return (
        <Create title="Create A User" {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    )
}

export default CreateUser
