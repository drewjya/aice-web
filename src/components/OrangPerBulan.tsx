import React, { useEffect, useRef, useState } from 'react'
import { Table, Tabs, Tab } from 'react-bootstrap'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { FormProps } from './Calendar'

const OrangPerBulan = (props: FormProps) => {
    const salesLastMonth = props.salesLastMonth
    const namaOrang = props.namaOrang

    const tableRef = useRef<HTMLTableElement>(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "monthly-absen",
        sheet: "Form Distributor"
    })

    return (
        <div>
            <div className="container mr-5 mb-3">
                <div className="container mb-3">
                    <button onClick={onDownload} id="test-table-xls-button"
                        className="download-table-xls-button">Download As XLS</button>

                </div>
            </div>

            <div className="container">
                <Table className="mt-5" ref={tableRef} style={{ width: "6000px" }} bordered hover responsive id={`Form Distributor`}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Distributor</th>
                            <th>Nama Toko</th>
                            <th>Kode Toko </th>
                            <th>Tanggal</th>
                            <th>Pilihan Toko</th>
                            <th>Jumlah PO</th>
                            <th>Item Terdisplay</th>
                            <th>Kualitas Produk</th>
                            <th>Sticker Freezer</th>
                            <th>Papan Harga</th>
                            <th>Label Harga</th>
                            <th>Wobler Promo</th>
                            <th>Spanduk</th>
                            <th>Divider Kulkas</th>
                            <th>Kepenuhan Freezer Atas</th>
                            <th>Kebersihan Debu Freezer</th>
                            <th>Kebersihan Lem Freezer</th>
                            <th>Atribut Brand Lain</th>
                            <th>Stock Brand Lain</th>
                            <th>Posisi Freezer</th>
                            <th>Foto Selfie</th>
                            <th>Foto Kulkas Dari Jauh</th>
                            <th>Foto Kulkas Terbuka</th>
                            <th>Foto Kulkas Tertutup</th>
                            <th>Foto PO</th>
                            <th>Foto Freezer Bawah</th>
                            <th>Produk Retur</th>
                            <th>Saran dan Kendala</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesLastMonth.sort((a, b) => {
                            return b.createdAt.seconds - b.createdAt.seconds
                        }).filter(sale => sale.namaDistributor === namaOrang).map((sale, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{sale.namaDistributor}</td>
                                <td>{sale.namaToko}</td>
                                <td>{sale.kodeToko}</td>
                                <td>{new Date(sale.createdAt.seconds * 1000).toLocaleString("id-ID")}</td>
                                <td>{sale.pilihanToko}</td>
                                <td>{sale.jumlahPo}</td>
                                <td>{sale.jumlahItemTerdisplay}</td>
                                <td>{sale.kualitasProduk}</td>
                                <td>{sale.stickerFreezer}</td>
                                <td>{sale.papanHarga}</td>
                                <td>{sale.labelHarga}</td>
                                <td>{sale.woblerPromo}</td>
                                <td>{sale.spanduk}</td>
                                <td>{sale.dividerKulkas}</td>
                                <td>{sale.kepenuhanFreezerAtas}</td>
                                <td>{sale.kebersihanDebuFreezer}</td>
                                <td>{sale.kebersihanLem}</td>
                                <td>{sale.brandLain}</td>
                                <td>{sale.stockBrandLain}</td>
                                <td>{sale.posisiFreezer}</td>
                                <td>
                                    <a href={sale.fotoSelfie} target="_blank" rel="noreferrer">
                                        <img src={sale.fotoSelfie} width="48px" alt="foto-selfie" />
                                    </a>
                                </td>
                                <td>
                                    <a href={sale.fotoKulkasDariJauh} target="_blank" rel="noreferrer">
                                        <img src={sale.fotoKulkasDariJauh} width="48px" alt="foto-jauh" />
                                    </a>
                                </td>
                                <td>
                                    <a href={sale.fotoKulkasTerbuka} target="_blank" rel="noreferrer">
                                        <img src={sale.fotoKulkasTerbuka} width="48px" alt="foto-terbuka" />
                                    </a>
                                </td>
                                <td>
                                    <a href={sale.fotoKulkasTertutup} target="_blank" rel="noreferrer">
                                        <img src={sale.fotoKulkasTertutup} width="48px" alt="foto-tertutup" />
                                    </a>
                                </td>
                                <td>
                                    <a href={sale.fotoPo} target="_blank" rel="noreferrer">
                                        <img src={sale.fotoPo} width="48px" alt="foto-po" />
                                    </a>
                                </td>
                                <td>
                                    <a href={sale.fotoFreezerBawah} target="_blank" rel="noreferrer">
                                        <img src={sale.fotoFreezerBawah} width="48px" alt="foto-freezer-bawah" />
                                    </a>
                                </td>
                                <td>
                                    {sale.produkRetur}
                                </td>
                                <td>
                                    {sale.saranKendala}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


            </div>
        </div>
    )
}

export default OrangPerBulan
