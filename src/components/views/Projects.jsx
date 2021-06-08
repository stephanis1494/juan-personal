import ContentHero from "../presentations/ContentHero"


export const ListItem = ({link="https://res.cloudinary.com/df0ll615k/image/upload/v1622512511/about_us_page_background.jpg", header="This is a header", desc="This is a description"}) => {
    return (
        <div className="card">

            <div className="card_image">
                <img src={link} />
            </div>

            <div className="card_content">
                <h2 className="card_heading">{header}</h2>
                <p className="card_description">{desc}</p>
                <button className="card_button">Go to project</button>
            </div>

        </div>

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