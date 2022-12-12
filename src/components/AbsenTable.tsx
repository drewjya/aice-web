import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import { Link, useLocation } from 'react-router-dom'
import AbsenTableBulanan from './AbsenTableBulan';
import AbsenTableHarian from './AbsenTableHarian';




export const AbsenTable = () => {

    const location = useLocation()
    const sales = location.state?.sales ?? [];
    const salesLastMonth = location.state?.salesLastMonth ?? [];;


    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date()
    const today = date.toLocaleString("id-ID")
    const bulan = monthNames[date.getMonth()]
    const [key, setKey] = useState<string | number>('Harian');
    return (
        <div>
            <div className="text-center">
                <h1 className="mt-5 container">Absen</h1>
                <Link to="/dashboard" className="container mt-2">Kembali ke Dashboard</Link>

            </div>

            <Tabs
                className="ml-5 mr-5 mt-5"
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "")}
            >
                <Tab eventKey="Harian" title="Harian">
                    <AbsenTableHarian sales={sales} today={today} />
                </Tab>
                <Tab eventKey="Bulanan" title="Bulanan">
                    <AbsenTableBulanan sales={salesLastMonth} today={bulan} />
                </Tab>
            </Tabs>

        </div>
    )
}
