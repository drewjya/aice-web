import { Timestamp } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { firestore } from '../config/firebaseConfig'
import { FormData, FormType } from '../service/formData'

const getData = () => Array(10).fill({
    "Sticker Freezer": "Ada",
    "Wobler Promo": "Ada",
    "Kualitas Produk": "Baik",
    "Foto Freezer Bawah": "https://firebasestorage.googleapis.com/v0/b/aice-10463.appspot.com/o/Freezer%20Bawah%2Fd896154b-9715-4b84-83e2-866564ca29c2.jpg?alt=media&token=942cf868-9df9-4779-8cb8-c3d562f3ba03",
    "Foto Selfie": "https://firebasestorage.googleapis.com/v0/b/aice-10463.appspot.com/o/Selfies%2F6f1d193e-83dc-4705-aca3-2216d3ed5d04.jpg?alt=media&token=ab2250f8-7162-4d5c-8e75-bef5844b8d71",
    "Produk Retur": "0",
    "Foto Kulkas Dari Jauh": "https://firebasestorage.googleapis.com/v0/b/aice-10463.appspot.com/o/Far%20Freezer%2F0db16e6f-8aa4-4076-ad9b-850dd9df7be1.jpg?alt=media&token=c895f0b9-4bb2-4463-a1e9-18e745750c33",
    "Pilihan Toko": "Indomaret",
    "Kebersihan Lem Freezer": "Ada Bekas Lem",
    "Spanduk": "Ada",
    "Created At": Timestamp.now(),
    "id": "8c3552e0-f320-11eb-990c-1f983ec4aa33",
    "Jumlah PO": "0",
    "Foto PO": "https://firebasestorage.googleapis.com/v0/b/aice-10463.appspot.com/o/Foto%20PO%2Fc56277dc-6494-4a66-980f-bb995634932b.jpg?alt=media&token=8ee451bf-6737-4e3c-883b-eec7127b8ec5",
    "Foto Kulkas Tertutup": "https://firebasestorage.googleapis.com/v0/b/aice-10463.appspot.com/o/Close%20Freezer%2Feed89c2a-28e0-4637-82c3-a66abd33db65.jpg?alt=media&token=24bb7881-fecd-4c65-be28-62b807b3b3ba",
    "Kode Toko": "SDA9",
    "Label Harga": "Ada",
    "Nama Toko": "PT INDOMAIGOO",
    "Brand Lain": "Ada",
    "Stock Brand Lain": "Ada",
    "Jumlah Item Terdisplay": "0",
    "Papan Harga": "Ada",
    "Kepenuhan Freezer Atas": "90% - 100%",
    "Posisi Freezer": "Sudah Bagus",
    "Kebersihan Debu Freezer": "Ada Debu",
    "Foto Kulkas Terbuka": "https://firebasestorage.googleapis.com/v0/b/aice-10463.appspot.com/o/Opened%20Freezer%2F1f9ed1b2-90c6-453c-ad27-ccb06d99e3e1.jpg?alt=media&token=2615f055-eff6-42e1-8a77-a161376950ea",
    "Saran dan Kendala": "0",
    "Divider Kulkas": "Ada",
    "Nama Distributor": "Ginanjar Laksana Arief Bachtiar"
}
)

enum State {
    loading, done
}



export const Dashboard = () => {
    const [sales, setSales] = useState<FormType[]>([])
    const [stateMonth, setStateMonth] = useState(State.loading)
    const [stateDay, setStateDay] = useState(State.loading)
    const [lastKey, setLastKey] = useState("");
    const [salesLastMonth, setSalesLastMonth] = useState<FormType[]>([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [nextPosts_loading, setNextPostsLoading] = useState(false);

    const date = new Date()
    const today = date.toLocaleDateString("id-ID")

    // async function onClick() {
    //     const data = getData()

    //     for (let index = 0; index < data.length; index++) {
    //         const element = data[index]
    //         await firestore.collection('form').doc().set(element)

    //     }
    // }


    const getAllData = async () => {
        try {
            let data = await FormData.allPosts()
            setSalesLastMonth(data?.posts ?? [])
            setLastKey(data?.lastKey ?? "")
            setStateMonth(State.done)
        } catch (error) {
            setSalesLastMonth([])
            setLastKey("")
            setStateMonth(State.done)
        }
    }

    const getTodayData = async () => {
        try {
            let data = await FormData.postsToday()
            setSales(data?.posts ?? [])
            setStateDay(State.done)
        } catch (error) {
            setSales([])

            setStateDay(State.done)
        }
    }
    useEffect(() => {
        // first 5 posts
        getAllData()
        getTodayData()

    }, []);

    return (
        <section className="container mt-5 pt-5">
            <h1 className="mb-5">Hello Admin</h1>
            <Row>
                <Col>
                    <div className="card-dashboard" >
                        <h5 style={{ fontWeight: 700 }}>Total Submission Bulan Ini</h5>
                        <p style={{ fontSize: 64, fontWeight: 200 }}>{stateMonth === State.loading ? 'Loading' : salesLastMonth.length}</p>
                        <p>{monthNames[date.getMonth()]}</p>
                    </div>
                </Col>
                <Col>
                    <div className="card-dashboard" >
                        <h5 style={{ fontWeight: 700 }}>Total Submission Hari Ini</h5>
                        <p style={{ fontSize: 64, fontWeight: 200 }}>{stateDay !== State.loading ? sales.length : 'Loading'}</p>
                        <p>{today}</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 pt-5">
                <Col>
                    <div className="card-dashboard-white">
                        <h4 style={{ fontWeight: 700 }}>Lihat Tabel Form</h4>
                        <Link to='/form' state={{ sales: sales }}>Disini</Link>
                    </div>
                </Col>
                <Col>
                    <div className="card-dashboard-white">
                        <h5 style={{ fontWeight: 700 }}>Lihat Tabel Absensi</h5>
                        <Link to='/absen' state={{ sales: sales, salesLastMonth: salesLastMonth }}>Disini</Link>
                    </div>
                </Col>

            </Row>
            {/* <button onClick={() => onClick()}>Ayam</button> */}
        </section >

    )
}