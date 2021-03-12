import { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'

import { GridContainer, GridItem } from "../../components/Grid/Grid"
import { CardApp } from "../../components/Card/Card"

import { getData } from "../../hooks/useFetch"

import { apiTypes } from "../../types/apiTypes"

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ButtonApp } from "../../components/Button/Button"

interface IParams {
    userId: string;
}

export const Details = () =>{

    const params = useParams<IParams>()
    const history = useHistory()

    const [state, setState] = useState<any>({})
    const [stateRepos, setStateRepos] = useState<any>([])

    useEffect(() => {
        const request = async () => {
            const getUser = await getData(apiTypes.user + params.userId)
            const getUserRepos = await getData(apiTypes.user + params.userId + apiTypes.repos)
            setState(getUser)
            setStateRepos(getUserRepos)
        }
        request()
    },[params])

    return (
        <>
            <ButtonApp
                title="Atrás" 
                fullWidth={false}
                handleClick={() => history.goBack()}
            />

            <br />
            <br />

            <GridContainer>
                <GridItem sm={3} md={3} lg={3}>
                    <img 
                        src={state.avatar_url}
                        width="150"
                        className="rounded"
                        alt={state.name}
                    />
                </GridItem>
                <GridItem sm={9} md={9} lg={9}>
                    <Typography component="div">
                        <Box fontSize="h3.fontSize" m={1}>
                            {state.name}
                        </Box>
                        <Box fontWeight={500} m={1}>
                            {state.bio}
                        </Box>
                        <Box fontWeight={500} m={1}>
                            Email: {state.email}
                        </Box>
                        <Box fontWeight={500} m={1}>
                            <a 
                                href={state.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-github"
                            >GitHub
                            </a>
                        </Box>
                    </Typography>
                </GridItem>
            </GridContainer>

            <GridContainer>
                {stateRepos.map((state: any) => (
                    <GridItem 
                        key={state.id}
                        sm={12} md={6} lg={4}
                    >
                        <CardApp
                            state={state}
                        />
                    </GridItem>
                ))}
            </GridContainer>
        </>
    )
}