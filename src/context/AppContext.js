import { ListsContextProvider } from "./ListsContext";
import { ItemsContextprovider } from "./ItemsContext";



const AppContext = ({ children }) => {
    return (
        <ListsContextProvider>
            <ItemsContextprovider>{children}</ItemsContextprovider>
        </ListsContextProvider>
    )
}

export default AppContext