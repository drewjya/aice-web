import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AbsenTable } from './components/AbsenTable';
import { Authentication } from './components/Authentication';
import { Dashboard } from './components/Dashboard';
import { FormTable } from './components/FormTable';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Authentication />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/form' element={<FormTable />} />
            <Route path='/absen' element={<AbsenTable />} />
            <Route path='/form/:namaOrang' element={<FormTable />} />
        </Routes>

    </BrowserRouter>

)
export default App