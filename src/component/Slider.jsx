

//import '../styles/styles/Slider.css'

const slidesInfo = [
  {
    src:"https://i.ibb.co/ZNjmnZ2/pergoliana.jpg",
    alt:"proyecto1",
    desc:"https://andres-latorre-la-pergoliana.vercel.app/"
  },
  {
    src:"https://i.ibb.co/sHx0bw0/stahl-prato.jpg",
    alt:"proyecto2",
    desc:"https://stahl-prato.vercel.app/"
  },
  {
    src:"https://i.ibb.co/0Jd6ccQ/comercial-web.jpg",
    alt:"proyecto3",
    desc:"comercial-web.vercel.app"
  },
];

const Slider = () =>{
  return(
    slidesInfo.map(el => (
      <div className="slider-container">
        <img src={el.src} alt={el.alt}/>
        <div className="slide-desc">
          <a href={el.desc} className='link'>ver</a>
        </div>
      </div>
    ))
  );    
} 

export default Slider;