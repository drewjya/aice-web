import React, { useRef } from 'react'
import { Table } from 'react-bootstrap'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { useNavigate } from "react-router-dom";
import { FormType } from '../service/formData';

interface AbsenBulanan {
    sales: FormType[]
    today: string
}


const AbsenTableBulanan = (props: AbsenBulanan) => {
    const sales = props.sales
    const today = props.today
    const updatedSales = sales.map(sale => {
        return { ...sale, date: new Date(sale.createdAt.seconds * 1000).toLocaleDateString(), name: sale.namaDistributor }
    })
    const temp: Object = updatedSales.reduce((acc: any, { name, date }) => {
        acc[date] = acc[name] || { name, dates: new Set(), totalSubmit: 0 };
        acc[date].totalSubmit++;
        acc[date].dates.add(date);
        return acc;
    }, {});


    const result = Object.values(temp).map(({ name, dates, totalSubmit }) => ({ name, uniqueDate: dates.size, totalSubmit }));
    const kebabcase = (value: string) => {
        return value.split(" ").join("-");
    }
    let history = useNavigate();
    const tableRef = useRef<HTMLTableElement>(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "monthly-absen",
        sheet: "Form Distributor"
    })

    return (
        <>
            <p className="container mt-5 mr-5">Absen {today}</p>
            <div className="container mr-5 mb-3">
                <div className="container mb-3">
                    <button onClick={onDownload} id="test-table-xls-button"
                        className="download-table-xls-button">Download As XLS</button>

                </div>
            </div>

            <Table className="container" ref={tableRef} style={{ width: "1000px" }} bordered hover responsive id="monthly-absen">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Distributor</th>
                        <th>Total Toko</th>
                        <th>Hari Kerja</th>
                    </tr>
                </thead>
                <tbody>
                    {result.sort((a, b) => {
                        console.log(a)
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    }).map((sale, index) => (
                        <tr key={index} onClick={() => {
                            history(`form/${kebabcase(sale.name)}`)
                        }}>
                            <td>{index + 1}</td>
                            <td>{sale.name}</td>
                            <td>{sale.totalSubmit}</td>
                            <td>{sale.uniqueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default AbsenTableBulanan
