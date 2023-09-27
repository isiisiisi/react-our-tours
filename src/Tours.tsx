import Tour from './Tour';

interface Tour {
    id: number;
    name: string;
    info: string;
    image: string;
    price: string;
  }

/*const Tours = ({ tours, removeTour } : {tours: any , removeTour: (id: number) => void}) =>*/
const Tours = ({ tours, removeTour }: { tours: Tour[], removeTour: (id: number) => void }) =>  {
    return (
        <section>
            <div className = "title">
                <h2> our tours </h2>
                <div className ="title-underline"></div>
            </div>
            <div className = "tours">
            {tours.map((tour: Tour) => {
                return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
            })}            
            </div>
        </section>
    )
}

/*{tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour} />
})}*/
export default Tours;