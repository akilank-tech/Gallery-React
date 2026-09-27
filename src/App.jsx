import ImageCard from "./components/imagecard"
import './App.css'


function App() {
  const images = [
    {
      id:1,
      image: "https://www.sourcesplash.com/i/random?q=nature&w=200&h=250",
      title: "Mountain",
      description: "Beautiful Mountain Landscape"
    },
    {
      id:2,
      image: "https://www.sourcesplash.com/i/random?q=beach&w=200&h=250",
      title: "Beach",
      description: "Peaceful beach with blue water"
    },
    {
      id:3,
      image:"https://www.sourcesplash.com/i/random?q=forest&w=200&h=250",
      title: "Forest",
      description: "Green forest surround by nature"
    },
    {
      id:4,
      image: "https://www.sourcesplash.com/i/random?q=lake&w=200&h=250",
      title: "Lake",
      description: "A beautiful lake"
    },
    {
      id:5,
      image: "https://www.sourcesplash.com/i/random?q=nature&w=200&h=250",
      title: "Nature",
      description: "A peaceful natural view"
    },
    {
      id:6,
      image: "https://www.sourcesplash.com/i/random?q=dog&w=200&h=250",
      title: "Dog",
      description: "A cute dog enjoying the day."
    },
    {
      id:7,
      image: "https://www.sourcesplash.com/i/random?q=river&w=200&h=250",
      title: "River",
      description: "Beautiful river surrounded by nature"
    },
    {
      id:8,
      image: "https://www.sourcesplash.com/i/random?q=ice%20cream&w=200&h=250",
      title: "Ice Cream",
      description: "Beautiful Mountain Landscape"
    },
     {
      id:1,
      image: "https://www.sourcesplash.com/i/random?q=nature&w=200&h=250",
      title: "Mountain",
      description: "Beautiful Mountain Landscape"
    },
    {
      id:2,
      image: "https://www.sourcesplash.com/i/random?q=beach&w=200&h=250",
      title: "Beach",
      description: "Peaceful beach with blue water"
    },
    {
      id:3,
      image:"https://www.sourcesplash.com/i/random?q=forest&w=200&h=250",
      title: "Forest",
      description: "Green forest surround by nature"
    },
    {
      id:4,
      image: "https://www.sourcesplash.com/i/random?q=lake&w=200&h=250",
      title: "Lake",
      description: "A beautiful lake"
    },
    {
      id:5,
      image: "https://www.sourcesplash.com/i/random?q=nature&w=200&h=250",
      title: "Nature",
      description: "A peaceful natural view"
    },
    {
      id:6,
      image: "https://www.sourcesplash.com/i/random?q=dog&w=200&h=250",
      title: "Dog",
      description: "A cute dog enjoying the day."
    },
    {
      id:7,
      image: "https://www.sourcesplash.com/i/random?q=river&w=200&h=250",
      title: "River",
      description: "Beautiful river surrounded by nature"
    },
    {
      id:8,
      image: "https://www.sourcesplash.com/i/random?q=ice%20cream&w=200&h=250",
      title: "Ice Cream",
      description: "Beautiful Mountain Landscape"
    }
  ]
  return (
    <>
      <h1 className="title">Image Gallery</h1>
      <div className="gallery">
        {
          images.map((item) =>(
  
              <ImageCard key={item.id} image={item.image} title={item.title} description={item.description}></ImageCard>

            
          ))

        }
      </div>
    </>

  )
}
export default App