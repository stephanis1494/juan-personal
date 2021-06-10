import { motion } from 'framer-motion'
import ContentHero from "../presentations/ContentHero"


export const ListItem = ({link="https://res.cloudinary.com/df0ll615k/image/upload/v1622512511/about_us_page_background.jpg", header="This is a header", desc="This is a description"}) => {
    return (
        <motion.div 
            className="card"
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
                    whileHover={{
                        scale: 1.05,
                        textShadow: "0px 0px 8px rgb(0,0,0)",
                        boxShadow: "0px 0px 8px rgb(0,0,0)"
                    }}
                    transition={{
                        // delay: 0.5,
                        duration: 0.5
                    }}>
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