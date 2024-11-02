import TravelItems from './travel.js'
import Navbar from './components/Navbar'
import TravelCards from './components/TravelCards'

function App() {

  const travelCards = TravelItems.map(item => {
      return (
          <TravelCards 
            key={item.id}
            item={item}
          />
      )
  }
  )

  return (
    <div>
      <Navbar />
      {travelCards}
    </div>
  )
}

export default App
