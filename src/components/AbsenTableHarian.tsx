import React, { useRef } from 'react'
import { Table } from 'react-bootstrap'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { FormType } from '../service/formData'

interface TableHarianProps {
    sales: FormType[]
    today: string

}

const AbsenTableHarian = (props: TableHarianProps) => {

    const sales = props.sales
    const today = props.today

    const tableRef = useRef<HTMLTableElement>(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "daily-absen",
        sheet: "Daily Absen"
    })
    const reducedSales = sales.reduce((acc: any, item) => {
        var previousItem = acc.find((findItem) => findItem.namaDistributor === item.namaDistributor);

        if (!previousItem) {
            acc.push({ ...item, length: 1 })
        } else {
            previousItem.length++
        }
        return acc;
    }, [])
    const kebabcase = (val: string) => {
        return val.replace(/\s+/g, '-').toLowerCase();
    }
    return (
        <>
            <p className="container mt-5 mr-5">Absen {today}</p>
            <div className="container mr-5 mb-3">
                <div className="container mb-3">
                    <button onClick={onDownload} id="test-table-xls-button"
                        className="download-table-xls-button">Download As XLS</button>

                </div>
            </div>


            <Table ref={tableRef} className="container" style={{ width: "1000px" }} bordered hover responsive id="daily-absen">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Distributor</th>
                        <th>Jumlah Toko</th>
                        <th>Jam Postingan pertama</th>
                    </tr>
                </thead>
                <tbody>
                    {reducedSales.sort((a, b) => a.namaDistributor.toLowerCase().localeCompare(b.namaDistributor.toLowerCase())).map((sale, index) => (

                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{sale.namaDistributor}</td>
                            <td>{sale.length}</td>
                            <td>{new Date(sale.createdAt.seconds * 1000).toLocaleTimeString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default AbsenTableHarian
