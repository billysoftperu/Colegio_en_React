import React from 'react';
import './SliderPortada.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from 'infinite-react-carousel'








const SliderPortada = ({images}) =>{
    return (

       

            <section className='slider'>
			    <h1 className='slider__title'>Galería de fotos</h1>
		    	<Slider className='slider__content'>
				    {
					images.map((image) => (
						<div key={image.id}
						 className='slider__content--item'>
							<img src={image.image} alt={image.title} />
							<p className='slider-description'>{image.title}</p>
						</div>
					))}
			    </Slider>
		    </section>

           
    )
}

export default SliderPortada;