import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Narzedzie } from './magazyn/NarzedziePage.jsx';
import { Narzedzia } from './magazyn/NarzedziaPage.jsx';
import { Pracownik } from './pracownik/PracownikPage.jsx';
import { Pracownicy } from './pracownik/PracownicyPage.jsx';
import { Zamowienie } from './zamowienie/ZamowieniePage.jsx';
import { Zamowienia } from './zamowienie/ZamowieniaPage.jsx';
import { Layout } from './layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App />,
//    },
//    {
//        path: "/narzedzie",
//        element: <Narzedzie />,
//    },
//    {
//        path: "/narzedzia",
//        element: <Narzedzia />,
//    },
//    {
//        path: "/pracownik",
//        element: <Pracownik />,
//    },
//    {
//        path: "/pracownicy",
//        element: <Pracownicy />,
//    }
//]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                {/*<Route path='/' element={<App />}></Route>*/}
                <Route path='/narzedzie' element={<Layout />}>
                    <Route index element={<Narzedzie />} />
                </Route>
                <Route path='/narzedzia' element={<Layout />}>
                    <Route index element={<Narzedzia />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/zamowienia' element={<Layout />}>
                    <Route index element={<Zamowienia />} />
                </Route>
                <Route path='/zamowienie' element={<Layout />}>
                    <Route index element={<Zamowienie />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>
)
