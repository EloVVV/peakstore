import { createContext, useState } from "react";
import { Outlet } from "react-router-dom"

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";

export const ModalContext = createContext(null);

const Root = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = setModal.bind(this, !modal);

    return (
        <ModalContext.Provider value={{modal, toggleModal}}>
            <Modal/>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </ModalContext.Provider>
    )
}

export default Root;