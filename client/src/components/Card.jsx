import { useQuery } from '@apollo/client';
import { QUERY_SHIRTS, QUERY_PANTS, QUERY_ONESIES } from '../utils/queries.js'



const Card = () => {

 
const { loading, data } = useQuery(QUERY_SHIRTS, QUERY_PANTS, QUERY_ONESIES)
const shirts = data?.shirts || [];
const pants = data?.pants || []; 
const onesies = data?.onsies || [];


   
 

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
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{shirt.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{shirt.price}</p>
                      </a>
                  ) )}
                        {pants.map(pant => (
                          <a key={pant._id} href={pant} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                              <img
                                src={pant.img}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                              />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{pant.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{pant.price}</p>
                            
                          </a>
                      )) }
                           {onesies.map(onesie => (
                            <a key={onesie._id} href={onesie} className="group">
                              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                  src={onesie.img}
                                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                              </div>
                              <h3 className="mt-4 text-sm text-gray-700">{onesie.name}</h3>
                              <p className="mt-1 text-lg font-medium text-gray-900">{onesie.price}</p>
                            </a>
                    ))}
                  </div>
              
  )}
      </>    
    
  )
}

export default Card