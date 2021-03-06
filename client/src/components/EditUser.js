import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const EditUser = (props) => {
    return (
        <Edit title="Edit A User" {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Edit>
    )
}

export default EditUser
