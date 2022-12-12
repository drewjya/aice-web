import React, { useEffect, useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { firestore } from "../config/firebaseConfig"
import { useParams, Link } from "react-router-dom";
import { CalenderOrang } from './Calendar'
import { FormType } from '../service/formData';
import OrangPerBulan from './OrangPerBulan';


interface FormPropsOrang {
    id: string

}

const FormPerOrang = (props: FormPropsOrang) => {
    let { namaOrang } = useParams()

    namaOrang = namaOrang?.replace(/-/g, ' ') ?? "";


    const [salesLastMonth, setSalesLastMonth] = useState<FormType[]>([]);
    const [key, setKey] = useState<any>('Calendar');

    const date = new Date()

    useEffect(() => {
        async function fetchData() {
            let today = new Date();
            const firstDay = new Date(date.getFullYear(), today.getMonth() - 2, 1);
            const lastDay = new Date(date.getFullYear(), today.getMonth() + 1, 0);
            lastDay.setHours(23, 59, 59, 0)

            let { namaOrang } = useParams()

            namaOrang = namaOrang?.replace(/-/g, ' ') ?? "";
            let ids: string[] = []
            await firestore.collectionGroup('form')
                .orderBy("Created At", "desc")
                .where('Nama Distributor', '==', namaOrang)
                .where('Created At', '>=', firstDay)
                .where('Created At', '<=', lastDay)
                .get()
                .then((querySnapshot) => {
                    const documents = querySnapshot.docs.map((doc) => {
                        ids.push(doc.id)
                        return doc.data();
                    });
                    let items: FormType[] = []
                    for (let index = 0; index < documents.length; index++) {
                        items.push({
                            id: ids[index],
                            stickerFreezer: documents[index]["Sticker Freezer"],
                            woblerPromo: documents[index]["Wobler Promo"],
                            kualitasProduk: documents[index]["Kualitas Produk"],
                            fotoFreezerBawah: documents[index]["Foto Freezer Bawah"],
                            fotoSelfie: documents[index]["Foto Selfie"],
                            produkRetur: documents[index]["Produk Retur"],
                            fotoKulkasDariJauh: documents[index]["Foto Kulkas Dari Jauh"],
                            pilihanToko: documents[index]["Pilihan Toko"],
                            kebersihanLem: documents[index]["Kebersihan Lem Freezer"],
                            spanduk: documents[index]["Spanduk"],
                            createdAt: documents[index]["Created At"],
                            jumlahPo: documents[index]["Jumlah PO"],
                            fotoPo: documents[index]["Foto PO"],
                            fotoKulkasTertutup: documents[index]["Foto Kulkas Tertutup"],
                            kodeToko: documents[index]["Kode Toko"],
                            labelHarga: documents[index]["Label Harga"],
                            namaToko: documents[index]["Nama Toko"],
                            brandLain: documents[index]["Brand Lain"],
                            stockBrandLain: documents[index]["Stock Brand Lain"],
                            jumlahItemTerdisplay: documents[index]["Jumlah Item Terdisplay"],
                            papanHarga: documents[index]["Papan Harga"],
                            kepenuhanFreezerAtas: documents[index]["Kepenuhan Freezer Atas"],
                            posisiFreezer: documents[index]["Posisi Freezer"],
                            kebersihanDebuFreezer: documents[index]["Kebersihan Debu Freezer"],
                            fotoKulkasTerbuka: documents[index]["Foto Kulkas Terbuka"],
                            fotoSela: documents[index]["Foto Sela Freezer"],
                            saranKendala: documents[index]["Saran dan Kendala"],
                            dividerKulkas: documents[index]["Divider Kulkas"],
                            namaDistributor: documents[index]["Nama Distributor"],
                            kategoriFreezer: documents[index]["Kategori Freezer"],
                            produkPromosi: documents[index]["Produk Promosi"],
                            kebersihanBungaEs: documents[index]["Kebersihan Bunga Es"],
                            stockDibawahFreezer: documents[index]["Stock Dibawah Freezer"],
                            fotoFreezerOne: documents[index]["Foto Freezer One"],
                            fotoFreezerTwo: documents[index]["Foto Freezer Two"],
                            fotoFreezerThree: documents[index]["Foto Freezer Three"],
                            fotoFreezerIsland1: documents[index]["Foto Freezer Island 1"],
                            fotoFreezerIsland2: documents[index]["Foto Freezer Island 2"],
                            fotoFreezerIsland3: documents[index]["Foto Freezer Island 3"],
                            fotoPop: documents[index]["Foto Pop"],
                            fotoPeralatan: documents[index]["Foto Peralatan"],
                        })

                    }
                    // do something with documents
                    setSalesLastMonth(items);
                });

        }
        fetchData()
    }, [])

    return (
        <div className="text-center">

            <h2 className="container mt-5">{namaOrang}</h2>
            <Link to="/dashboard" className="container mt-2">Kembali ke Dashboard</Link>
            <br />
            <br />
            <Tabs
                className="ml-5 mr-5 mt-5"
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "")}
            >
                <Tab eventKey="Calendar" title="Calendar">
                    <CalenderOrang salesLastMonth={salesLastMonth} namaOrang={namaOrang} />
                </Tab>
                <Tab eventKey="Default" title="Form">
                    <OrangPerBulan salesLastMonth={salesLastMonth} namaOrang={namaOrang} />
                </Tab>
            </Tabs>


        </div>
    )
}

export default FormPerOrang
