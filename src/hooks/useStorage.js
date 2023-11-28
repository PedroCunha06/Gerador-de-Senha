import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //Buscar os itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (erro) {
            console.log("Erro ao buscar", erro)
            return [];
        }


    }

    //Salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (erro) {
            console.log("ERRO AO SALVAR", erro)
        }
    }

    const updateItem = async (key, update) => {
        try {
            let passwords = await getItem(key);
    
            const indexToUpdate = passwords.findIndex((password) => {
                return (
                    password.password === update.password
                );
            });

            // Se o item for encontrado, substituir pelo item atualizado
            if (indexToUpdate !== -1) {            
               passwords[indexToUpdate] = update
               await AsyncStorage.setItem(key, JSON.stringify(passwords));
               return passwords;
            } else {
                console.log("Item não encontrado para atualização.");
            }
        } catch (erro) {
            console.log("Erro ao atualizar", erro);
        }
    };
    

    //Remover um item no storage
    const deleteItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPassword = passwords.filter((password) => {
                return (password.password !== item.password || password.name !== item.name)
            });

            await AsyncStorage.setItem(key, JSON.stringify(myPassword))
            return myPassword;

        } catch (erro) {
            console.log("Erro ao Deletar", erro)
        }
    }

    const deleteAllItems = async (key) => {
        try {
          // Obtém os itens existentes
          const passwords = await getItem(key);
      
          // Remove todos os itens definindo um array vazio
          await AsyncStorage.setItem(key, JSON.stringify([]));
      
          return passwords; // Retorna os itens removidos, se necessário
        } catch (erro) {
          console.log("Erro ao Deletar", erro);
        }
      };

    return {
        getItem,
        saveItem,
        deleteItem,
        updateItem,
        deleteAllItems, 
    }

}

export default useStorage;