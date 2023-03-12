import {createContext,useState} from "react"

const Context = createContext()

export function NoteProvider({children}) {
    const { text, setText } = useState("")
    const [shop, setShop] = useState(false)
    const [menu, setMenu] = useState(false)
    const [price, setPrice] = useState(0)
    const hendleChange = () => (
        setPrice(price + 1)   
    )
    const menuOpen = () => {
        setMenu(!menu)
    }
    const openMenu = () => {
        setShop(!shop)
    }
    const searchChange = (e) => {
        setText(e.target.value)
    }
  return (
    <Context.Provider value={{
        text,
        shop,
        openMenu,
        searchChange,
        menu,
        price,
        menuOpen,
        hendleChange
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context