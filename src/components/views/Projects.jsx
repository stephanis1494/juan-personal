import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ContentHero from "../presentations/ContentHero"


export const ListItem = ({
  link="https://res.cloudinary.com/df0ll615k/image/upload/v1622512511/about_us_page_background.jpg",
  header="This is a header",
  desc="This is a description"
}) => {
  const [hover, setHover] = React.useState(false)

    return (
        <motion.div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="card"
          animate={{ scale: (hover && 1.01) || 1.0}}
          transition={{
            type: 'tween',
            stiffness: 200,
            damping: 30,
            duration: 0.25
          }}
        >

            <motion.div 
                className="card_image"
            >
                <motion.img 
                    src={link} 
                />
            </motion.div>

            <div className="card_content">
                <h2 className="card_heading">{header}</h2>
                <p className="card_description">{desc}</p>
                <motion.button 
                    className="card_button"
                    animate={{ background: (hover && 'rgba(214, 211, 24, 1)') || 'rgba(214, 211, 24, 0.8)' }}
                    transition={{
                      type: 'tween',
                      stiffness: 200,
                      damping: 30,
                      duration: 0.15
                    }}
                >

                    Go to project
                    </motion.button>
            </div>

        </motion.div>

    );
}


const Projects = () => {
    return (
        <>
            <ContentHero title="Projects" />
            <div className="cards">

                {/* card 1 */}
  	            <ListItem />

                {/* card 2 */}
  	            <ListItem />

                {/* card 3 */}
  	            <ListItem />

            </div>
        </>
    );
}
 
export default Projects;