import React from 'react'

import { PageModes } from '../../components/nav/top/components/pageMode'
import Template from '../../components/app/template'

const Pages: React.FC = () => {
    return (
        <>
            <PageModes name="Subscriptions" page="Recommended" url="/app/" logo={<i className="fa fa-user" style={{ fontSize: "10px" }}></i>} />
            <PageModes name="Trending" page="Recommended" url="/app/trending" logo={<span className="material-icons" style={{ fontSize: "15px" }}>local_fire_department</span>} />
            <PageModes name="Recommended" page="Recommended" url="/app/recommended" logo={<span className="material-icons" style={{ fontSize: "15px" }}>layers</span>} />
        </>
    )
}

function YoutubeContent() {
    return (
        <Template PageMode={<Pages />} width="320px" page="home" >
            <h4>Youtube</h4>
        </Template>
    )
}

export default YoutubeContent