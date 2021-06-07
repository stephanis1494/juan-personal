import ContentHero from "../presentations/ContentHero"

const Projects = () => {
    return (
        <>
            <ContentHero title="Projects" />
            <ul class="cards">

  	            <li class="cards_item">
                    <div class="card">
            
                        <div class="card_image">
                                <img src="https://res.cloudinary.com/df0ll615k/image/upload/v1622512511/about_us_page_background.jpg" />
                        </div>
            
                        <div class="card_content">
                                <h2 class="card_heading">First</h2>
                                <p>I'm a card and I'm first. Quisque commodo hendrerit lorem quis egestas. Maecenas quis tortor arcu. Vivamus rutrum nunc non neque consectetur quis placerat neque.</p>
                                <a href="#" class="card_button">Button</a>
                        </div>
            
                    </div>
	            </li>
                
            </ul>
        </>
    );
}
 
export default Projects;