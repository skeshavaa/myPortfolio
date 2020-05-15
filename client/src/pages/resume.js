import React from 'react'
import styled from 'styled-components'
import { Fab } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp';
import Layout from '../components/layout'
import Education from '../sections/education'
import Experience from '../sections/experience'
import Achievements from '../sections/achievements'

const Resume = () => {
    return (
        <Wrapper>
            <Layout />
            <Center>
                <ResumeWrapper>
                    <Spacing>
                        <Education />
                    </Spacing>
                    <Spacing>
                        <Experience />
                    </Spacing>
                    <Spacing>
                        <Achievements />
                    </Spacing>
                </ResumeWrapper>
            </Center>
            <ButtonWrapper>
                <Fab>
                    <GetAppIcon />
                </Fab>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Resume

const Wrapper = styled.div`
    min-height: 100vh;
`

const ResumeWrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 90vw;
    min-width: 300px;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
`

const Spacing = styled.div`
    margin: 10px;
    @media (max-width: 200px){
        margin: 10px 0px 10px 0px;
    }
`

const ButtonWrapper = styled.div`
    position:-webkit-sticky;
    position: sticky;
    bottom: 0;
    display: flex;
    width: 100vw;
    justify-content: flex-end;
`


