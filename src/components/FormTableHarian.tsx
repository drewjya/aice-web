import React, { useRef } from 'react'
import { Table } from 'react-bootstrap'
import { useDownloadExcel } from 'react-export-table-to-excel';
import { FormType } from "../service/formData";

export type FormProps = {
    sales: FormType[];
    today: string;
    table: string;
    filename: string;
    sheetname: string;
    id: string;
    harian: Boolean;


}

const FormTableHarian = (props: FormProps) => {
    const sales = props.sales;
    const today = props.today;
    const table = props.table;
    const filename = props.filename;
    const sheetname = props.sheetname;
    const id = props.id;
    const harian = props.harian;
    const bulanan = !harian;


    const tableRef = useRef<HTMLTableElement>(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: filename,
        sheet: sheetname
    })

    return (
        <>
            <h1 className="mt-5 container">{today}</h1>
            <p className="container">{sales.length} Submissions</p>



            <div className="container mb-3">
                <button onClick={onDownload} id="test-table-xls-button"
                    className="download-table-xls-button">Download As XLS</button>
                {/* <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table={table}
                    filename={filename}
                    sheet={sheetname}
                    buttonText="Download as XLS" /> */}
            </div>
            <Table className="mt-5" style={{ width: "6000px" }} ref={tableRef} bordered hover responsive>
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
                        <th>Produk Retur</th>
                        <th>Saran dan Kendala</th>
                        <th>Kategori Freezer</th>
                        <th>Produk Promosi</th>
                        <th>Kebersihan Bunga Es</th>
                        <th>Stock Dibawah Freezer</th>
                        <th>Foto Selfie</th>
                        <th>Foto Kulkas Dari Jauh</th>
                        <th>Foto Kulkas Terbuka</th>
                        <th>Foto Kulkas Tertutup</th>
                        <th>Foto PO</th>
                        <th>Foto Freezer Bawah</th>
                        <th>Foto Sela Freezer</th>

                        <th>Foto Freezer One</th>
                        <th>Foto Freezer Two</th>
                        <th>Foto Freezer Three</th>
                        <th>Foto Freezer Island 1</th>
                        <th>Foto Freezer Island 2</th>
                        <th>Foto Freezer Island 3</th>
                        <th>Foto Pop</th>
                        <th>Foto Peralatan</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.sort((a, b) => {
                        return b.createdAt.seconds - a.createdAt.seconds
                    }).map((sale, index) => (
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
                                {sale.produkRetur}
                            </td>
                            <td>
                                {sale.saranKendala}
                            </td>
                            <td>
                                {sale.kategoriFreezer}
                            </td>
                            <td>
                                {sale.produkPromosi}
                            </td>
                            <td>
                                {sale.kebersihanBungaEs}
                            </td>
                            <td>
                                {sale.stockDibawahFreezer}
                            </td>
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
                                <a href={sale.fotoSela} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoSela} width="48px" alt="foto-sela-freezer" />
                                </a>
                            </td>

                            <td>
                                <a href={sale.fotoFreezerOne} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoFreezerOne} width="48px" alt="foto-freezer-one" />
                                </a>
                            </td>
                            <td>
                                <a href={sale.fotoFreezerTwo} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoFreezerTwo} width="48px" alt="foto-freezer-two" />
                                </a>
                            </td>
                            <td>
                                <a href={sale.fotoFreezerThree} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoFreezerThree} width="48px" alt="foto-freezer-three" />
                                </a>
                            </td>
                            <td>
                                <a href={sale.fotoFreezerIsland1} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoFreezerIsland1} width="48px" alt="foto-freezer-island1" />
                                </a>
                            </td>
                            <td>
                                <a href={sale.fotoFreezerIsland2} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoFreezerIsland2} width="48px" alt="foto-freezer-island2" />
                                </a>
                            </td>
                            <td>
                                <a href={sale.fotoFreezerIsland3} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoFreezerIsland3} width="48px" alt="foto-freezer-island3" />
                                </a>
                            </td>
                            <td>
                                <a href={sale.fotoPop} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoPop} width="48px" alt="foto-pop" />
                                </a>
                            </td>
                            <td>
                                <a href={sale.fotoPeralatan} target="_blank" rel="noreferrer">
                                    <img src={sale.fotoPeralatan} width="48px" alt="foto-peralatan" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Table className="mt-5 d-none" style={{ width: "6000px" }} bordered hover responsive id={id}>
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
                        <th>Produk Retur</th>
                        <th>Saran dan Kendala</th>
                        <th>Kategori Freezer</th>
                        <th>Produk Promosi</th>
                        <th>Kebersihan Bunga Es</th>
                        <th>Stock Dibawah Freezer</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.sort((a, b) => {
                        return b.createdAt.seconds - a.createdAt.seconds
                    }).map((sale, index) => (
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
                                {sale.produkRetur}
                            </td>
                            <td>
                                {sale.saranKendala}
                            </td>
                            <td>
                                {sale.kategoriFreezer}
                            </td>
                            <td>
                                {sale.produkPromosi}
                            </td>
                            <td>
                                {sale.kebersihanBungaEs}
                            </td>
                            <td>
                                {sale.stockDibawahFreezer}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default FormTableHarian
