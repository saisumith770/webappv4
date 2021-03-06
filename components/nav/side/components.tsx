import React from 'react'
import { motion } from 'framer-motion'
import { NavigationPageProps } from './interface'

import Link from 'next/link'

export const NavigationPages: React.FC<NavigationPageProps> = ({
    name,
    logo,
    link,
    page
}) => {
    return (
        <Link href={link}>
            <motion.div
                className="side-navigation-container"
                style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: page === name ? "#26262C" : undefined
                }}
                whileTap={{ scale: 0.9 }}>
                <div style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#313130",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "5px"
                }}>
                    <span
                        className="material-icons"
                        style={{
                            color: "white",
                            fontSize: "17px"
                        }}
                    >
                        {logo}
                    </span>
                </div>
                <h4 style={{
                    color: "white",
                    fontFamily: "Roboto Condensed",
                    fontSize: "15px",
                    marginLeft: "10px"
                }}>
                    {name}
                </h4>
            </motion.div>
        </Link>
    )
}