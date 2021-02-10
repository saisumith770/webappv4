import React from 'react'

import { AccounCredentialSettings, AccountRemovalSettings, BannerSettings } from './mainComponents'

export const AccountUpdateDisplay: React.FC = () => {
    return (
        <div style={{
            height: "100%"
        }}>
            <div style={{
                width: "700px",
                height: "100%",
                position: "relative",
                // backgroundColor: "red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <div style={{
                    width: "calc(100% - 100px)"
                }}>
                    <h4 style={{
                        fontFamily: "Whitney",
                        fontSize: "15px",
                        color: "silver"
                    }}>
                        My Channel
                    </h4>
                </div>
                <AccounCredentialSettings />
                <BannerSettings />
                <AccountRemovalSettings />
            </div>
        </div>
    )
}