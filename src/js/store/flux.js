const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      planets:[],
      films:[],
      people:[],
      species:[],
      starships:[],
      vehicles:[],
			
		},
		actions: {
			//Creo una función asíncora la cual va a tener una acción que va a ser traer toda la data de la API para todos los elements, es decir una función reutilizable
      getAllElements: async(resource, pagination = {})=>{

        let params = ""
        if (!!pagination.page){
          params = ``
        } // VER LA CLASE PARA ENTENDER MEJOR QUE ES LO QUE PASÓ AQUÍ

        let reply = await fetch("https://www.swapi.tech/api/"+resource)
        if (!reply.ok){
          console.error(reply.statusText)
          return
        }
        let data = await reply.json()
        let newStore = {...getStore()}
        newStore[resource] = data.result || data.results

        setStore(newStore)
      }
		}
	};
};

export default getState;
