import Hero from "../Components/Hero/Hero"
import NewProducts from "../Components/NewProducts/NewProducts"
import Newsletter from "../Components/Newsletter/Newsletter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/Popular/Popular"

function Shop(){
    return(
        <div>
            <Hero/>
          <Popular/>
          <Offers/>
          <NewProducts/>
          <Newsletter/>
        </div>
    )
}
export default Shop