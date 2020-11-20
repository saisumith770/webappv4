import React from 'react'
import { motion } from 'framer-motion'

interface StreamCardProps {
    src: string
    title: string
}

export const StreamCard: React.FC<StreamCardProps> = ({ src, title }) => {
    return (
        <div>
            <motion.img
                src={src}
                alt="thumbnail"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                    type: "spring",
                    duration: 0.3
                }}
                style={{
                    width: "180px",
                    objectFit: "cover",
                    cursor: "pointer"
                }}
            />
            <h4 style={{ fontFamily: "sans-serif", color: "white", fontSize: "11px", width: "200px" }}>{title.length > 50 ? title.slice(0, 50) + '...' : title}</h4>
        </div>
    )
}