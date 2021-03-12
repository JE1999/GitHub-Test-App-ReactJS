import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Input/Input'
import { ButtonApp } from '../../components/Button/Button'
import { GridContainer, GridItem } from '../../components/Grid/Grid'
import { TableApp } from '../../components/Table/Table'

import { apiTypes } from '../../types/apiTypes'
import { getData } from '../../hooks/useFetch'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const queryString = require("query-string");

interface IFormInputs {
    userGitHub: string;
}

const schema = yup.object().shape({
    userGitHub: yup.string().required().trim(),
});

export const Home = () =>{

    const history = useHistory()
    const location = useLocation()

    const [state, setState] = useState<any>({})

    const { q = '' } = queryString.parse(location.search)

    const { register, handleSubmit, errors } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if(q){
            const request = async () => {
                const getUser = await getData(apiTypes.users + q + "in:user&per_page=100")
                setState(getUser)
            }
            request()
        }
    }, [q])

    const onSubmit = async (data: IFormInputs) => {
        history.push(`?q=${data.userGitHub}`);
    }

    return (
        <>
            <GridContainer>
                <GridItem sm={12} md={12} lg={12}>
                    <Form
                        handleSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            label="Buscar"
                            name="userGitHub" 
                            register={register} 
                            defaultValue={q}
                            messageError={errors.userGitHub?.message && 'Campo obligatorio'}
                        />

                        <ButtonApp 
                            title="Buscar"
                            type="submit"
                        />
                    </Form>
                </GridItem>
            </GridContainer>

            { Object.keys(state)[0] && <TableApp state={state} /> }
        </>
    )
}