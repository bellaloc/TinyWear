import { useQuery } from '@apollo/client';
import { QUERY_SHIRTS } from '../utils/queries.js'


const Home = () => {

 
const { loading, data } = useQuery(QUERY_SHIRTS)
const shirts = data?.shirts || [];

 

  return (
    <>
        {loading ? (
      <div> loading... </div>
      
    ) : (

  
            <div>
                    {shirts.map(shirt => (
                      <a key={shirt._id} href={shirt} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={shirt.img}
                            alt={shirt.img}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{shirt.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{shirt.name}</p>
                      </a>
                    ))}
                 

              </div>
              
  )}
      </>    
    
  )
}

export default Home;