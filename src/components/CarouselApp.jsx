import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

// eslint-disable-next-line react/prop-types
const CarouselApp = ({ images = [] }) => {
    const plugins = [new AutoPlay({duration:1300, direction:"NEXT", stopOnHover:true})];

    return (
        <Flicking
            circular={true}
            horizontal={true}
            bound={false}
            plugins={plugins}
            className="shadow-lg min-w-[300px] rounded-xl"
        >
            {
                images.map((src, idx) => (
                    <div className="w-full relative object-cover" key={idx}>
                        <div className="top-0 left-0 absolute w-full h-full"></div>
                        <img
                            src={src}
                            alt={`carousel_image_${name}_${idx + 1}`}
                            className="w-full h-full object-cover z-1"
                        />
                    </div>
                ))
            }
        </Flicking>
    )
}

export default CarouselApp