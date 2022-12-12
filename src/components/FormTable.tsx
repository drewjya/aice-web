import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import { Link, useLocation } from 'react-router-dom'
import { FormData, FormType } from '../service/formData'
import { firestore } from "../config/firebaseConfig"
import FormTableHarian from './FormTableHarian'

export const FormTable = (props: any) => {
    const location = useLocation();
    const sales = location.state?.sales ?? [];
    const [lastKey, setLastKey] = useState("");
    const [salesLastMonth, setSalesLastMonth] = useState<FormType[]>([]);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date()
    const today = date.toLocaleString("id-ID")
    const bulan = monthNames[date.getMonth()]
    const [key, setKey] = useState('Harian');

    const [nextPosts_loading, setNextPostsLoading] = useState(false);

    const [lastDoc, setLastDoc] = useState<any>();

    useEffect(() => {
        // first 5 posts
        async function fetchData() {
            try {
                const date = new Date()
                let today = new Date();

                const firstDay = new Date(date.getFullYear(), today.getMonth() - 1, 1);
                const lastDay = new Date(date.getFullYear(), today.getMonth() + 1, 0);
                lastDay.setHours(23, 59, 59, 0)
                const posts: FormType[] = []
                firestore
                    .collectionGroup('form')
                    .orderBy("Created At", "desc")
                    .where('Created At', '>=', firstDay)
                    .where('Created At', '<=', lastDay)
                    .limit(1000)
                    .get()
                    .then((collections) => {
                        collections.forEach((doc) => {
                            posts.push({
                                id: doc.id,
                                stickerFreezer: doc.data()["Sticker Freezer"],
                                woblerPromo: doc.data()["Wobler Promo"],
                                kualitasProduk: doc.data()["Kualitas Produk"],
                                fotoFreezerBawah: doc.data()["Foto Freezer Bawah"],
                                fotoSelfie: doc.data()["Foto Selfie"],
                                fotoSela: doc.data()["Foto Sela Freezer"],
                                produkRetur: doc.data()["Produk Retur"],
                                fotoKulkasDariJauh: doc.data()["Foto Kulkas Dari Jauh"],
                                pilihanToko: doc.data()["Pilihan Toko"],
                                kebersihanLem: doc.data()["Kebersihan Lem Freezer"],
                                spanduk: doc.data()["Spanduk"],
                                createdAt: doc.data()["Created At"],
                                jumlahPo: doc.data()["Jumlah PO"],
                                fotoPo: doc.data()["Foto PO"],
                                fotoKulkasTertutup: doc.data()["Foto Kulkas Tertutup"],
                                kodeToko: doc.data()["Kode Toko"],
                                labelHarga: doc.data()["Label Harga"],
                                namaToko: doc.data()["Nama Toko"],
                                brandLain: doc.data()["Brand Lain"],
                                stockBrandLain: doc.data()["Stock Brand Lain"],
                                jumlahItemTerdisplay: doc.data()["Jumlah Item Terdisplay"],
                                papanHarga: doc.data()["Papan Harga"],
                                kepenuhanFreezerAtas: doc.data()["Kepenuhan Freezer Atas"],
                                posisiFreezer: doc.data()["Posisi Freezer"],
                                kebersihanDebuFreezer: doc.data()["Kebersihan Debu Freezer"],
                                fotoKulkasTerbuka: doc.data()["Foto Kulkas Terbuka"],
                                saranKendala: doc.data()["Saran dan Kendala"],
                                dividerKulkas: doc.data()["Divider Kulkas"],
                                namaDistributor: doc.data()["Nama Distributor"],
                                kategoriFreezer: doc.data()["Kategori Freezer"],
                                produkPromosi: doc.data()["Produk Promosi"],
                                kebersihanBungaEs: doc.data()["Kebersihan Bunga Es"],
                                stockDibawahFreezer: doc.data()["Stock Dibawah Freezer"], fotoFreezerOne: doc.data()["Foto Freezer One"],
                                fotoFreezerTwo: doc.data()["Foto Freezer Two"],
                                fotoFreezerThree: doc.data()["Foto Freezer Three"],
                                fotoFreezerIsland1: doc.data()["Foto Freezer Island 1"],
                                fotoFreezerIsland2: doc.data()["Foto Freezer Island 2"],
                                fotoFreezerIsland3: doc.data()["Foto Freezer Island 3"],
                                fotoPop: doc.data()["Foto Pop"],
                                fotoPeralatan: doc.data()["Foto Peralatan"],
                            });
                        });
                        const lastDoc = collections.docs[collections.docs.length - 1]
                        setSalesLastMonth(posts)
                        setLastDoc(lastDoc)
                    })
            } catch (e) {
                console.log(e);
            }
        }
        fetchData()
    }, []);

    const fetchMore = () => {
        const date = new Date()
        let today = new Date();

        const firstDay = new Date(date.getFullYear(), today.getMonth() - 1, 1);
        const lastDay = new Date(date.getFullYear(), today.getMonth() + 1, 0);
        lastDay.setHours(23, 59, 59, 0)
        const posts: FormType[] = []

        firestore
            .collectionGroup('form')
            .orderBy("Created At", "desc")
            .startAfter(lastDoc)
            .where('Created At', '>=', firstDay)
            .where('Created At', '<=', lastDay)
            .limit(5000)
            .get()
            .then((collections) => {
                collections.forEach((doc) => {
                    posts.push({
                        id: doc.id,
                        stickerFreezer: doc.data()["Sticker Freezer"],
                        woblerPromo: doc.data()["Wobler Promo"],
                        kualitasProduk: doc.data()["Kualitas Produk"],
                        fotoFreezerBawah: doc.data()["Foto Freezer Bawah"],
                        fotoSelfie: doc.data()["Foto Selfie"],
                        fotoSela: doc.data()["Foto Sela Freezer"],
                        produkRetur: doc.data()["Produk Retur"],
                        fotoKulkasDariJauh: doc.data()["Foto Kulkas Dari Jauh"],
                        pilihanToko: doc.data()["Pilihan Toko"],
                        kebersihanLem: doc.data()["Kebersihan Lem Freezer"],
                        spanduk: doc.data()["Spanduk"],
                        createdAt: doc.data()["Created At"],
                        jumlahPo: doc.data()["Jumlah PO"],
                        fotoPo: doc.data()["Foto PO"],
                        fotoKulkasTertutup: doc.data()["Foto Kulkas Tertutup"],
                        kodeToko: doc.data()["Kode Toko"],
                        labelHarga: doc.data()["Label Harga"],
                        namaToko: doc.data()["Nama Toko"],
                        brandLain: doc.data()["Brand Lain"],
                        stockBrandLain: doc.data()["Stock Brand Lain"],
                        jumlahItemTerdisplay: doc.data()["Jumlah Item Terdisplay"],
                        papanHarga: doc.data()["Papan Harga"],
                        kepenuhanFreezerAtas: doc.data()["Kepenuhan Freezer Atas"],
                        posisiFreezer: doc.data()["Posisi Freezer"],
                        kebersihanDebuFreezer: doc.data()["Kebersihan Debu Freezer"],
                        fotoKulkasTerbuka: doc.data()["Foto Kulkas Terbuka"],
                        saranKendala: doc.data()["Saran dan Kendala"],
                        dividerKulkas: doc.data()["Divider Kulkas"],
                        namaDistributor: doc.data()["Nama Distributor"],
                        kategoriFreezer: doc.data()["Kategori Freezer"],
                        produkPromosi: doc.data()["Produk Promosi"],
                        kebersihanBungaEs: doc.data()["Kebersihan Bunga Es"],
                        stockDibawahFreezer: doc.data()["Stock Dibawah Freezer"],
                        fotoFreezerOne: doc.data()["Foto Freezer One"],
                        fotoFreezerTwo: doc.data()["Foto Freezer Two"],
                        fotoFreezerThree: doc.data()["Foto Freezer Three"],
                        fotoFreezerIsland1: doc.data()["Foto Freezer Island 1"],
                        fotoFreezerIsland2: doc.data()["Foto Freezer Island 2"],
                        fotoFreezerIsland3: doc.data()["Foto Freezer Island 3"],
                        fotoPop: doc.data()["Foto Pop"],
                        fotoPeralatan: doc.data()["Foto Peralatan"],
                    });
                });
                const lastDoc = collections.docs[collections.docs.length - 1]
                setSalesLastMonth(salesLastMonth => [...salesLastMonth, ...posts])
                setLastDoc(lastDoc)
            })
    }


    return (
        <div>
            <div className="text-center">
                <h1 className="mt-5 container">Form Submissions</h1>
                <Link to="/dashboard" className="container mt-2">Kembali ke Dashboard</Link>
                {key === "Bulanan" ? <button className="btn btn-dark" onClick={() => fetchMore()}>Add 5000 More Sales</button> : ''}

            </div>

            <Tabs
                className="ml-5 mr-5 mt-5"
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "")}
            >
                <Tab eventKey="Harian" title="Harian">
                    <FormTableHarian harian={true} sales={sales} today={today} id={"form-harian"} table={"form-harian"} filename={"form-harian"} sheetname={"Form Harian"} />
                </Tab>
                <Tab eventKey="Bulanan" title="Bulanan">
                    <FormTableHarian harian={false} sales={salesLastMonth} today={bulan} id={"form-bulanan"} table={"form-bulanan"} filename={"form-bulanan"} sheetname={"Form bulanan"} />
                </Tab>
            </Tabs>
            <br />
        </div>
    )
}
