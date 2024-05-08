const BASE_url = "https://www.swapi.tech/api";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      planets: [],
      starships: [],
      detailCharacters: {},
      detailPlanets: {},
      detailStarships: {},
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacters: (name) => {
        fetch(`${BASE_url}/people`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to get characters");
            }
            return response.json();
          })
          .then((data) => {
            console.log("All the characters", data);
            setStore({ characters: data.results });
          })
          .catch((error) => console.log(error));
      },
      getStarShips: () => {
        fetch(`${BASE_url}/starships`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to get Planets");
            }
            return response.json();
          })
          .then((data) => {
            setStore({ starships: data.results });
            console.log("All the planets", data);
          })
          .catch((error) => console.log(error));
      },
      getPlanets: () => {
        fetch(`${BASE_url}/planets`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to get start ships");
            }
            return response.json();
          })
          .then((data) => {
            setStore({ planets: data.results });
            console.log("All the Start Ships", data);
          })
          .catch((error) => console.log(error));
      },

      getDetailsCharacterts: (uid) => {
        fetch(`${BASE_url}/people/${uid}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to get detail characters");
            }
            return response.json();
          })
          .then((data) => {
            console.log("All the characters", data.result);
            setStore({ detailCharacters: data.result });
          })
          .catch((error) => console.log(error));
      },

      getDetailPlanets: (uid) => {
        fetch(`${BASE_url}/planets/${uid}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to get detail characters");
            }
            return response.json();
          })
          .then((data) => {
            console.log("All the planets ditails", data.result);
            setStore({ detailPlanets: data.result });
          })
          .catch((error) => console.log(error));
      },

      getDetailStarships: (uid) => {
        fetch(`${BASE_url}/starships/${uid}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Unable to get starships details");
            }
            return response.json();
          })
          .then((data) => {
            console.log("All the startships detail", data);
            setStore({ detailStarships: data.result });
          })
          .catch((error) => console.log(error));
      },

      addFavorite: (uid, name) => {
        const favorite = {
          id: uid,
          name: name,
        };
        const newFavorite = [...getStore().favorites, favorite];
        setStore({ favorites: newFavorite });

        // definir logica de agregar a fav
      },

      deleteFavorite: (uid) => {
        const favs = getStore().favorites.filter(
          (favorite) => favorite.id != uid
        );
        setStore({ favorites: favs });
      },
    },
  };
};

export default getState;
