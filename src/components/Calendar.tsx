import React, { useRef } from 'react'
import { Table } from 'react-bootstrap'

import { useDownloadExcel } from 'react-export-table-to-excel';
import { FormType } from "../service/formData";

export type FormProps = {
    salesLastMonth: FormType[];
    namaOrang: string;

}

interface PropsType {
    date: string;
    name: string;
    dates: Set<string>;
    totalSubmit: Number
}


export const CalenderOrang = (props: FormProps) => {
    const salesLastMonth = props.salesLastMonth;
    const namaOrang = props.namaOrang;

    const updatedSales = salesLastMonth.map(sale => {
        return { date: new Date(sale.createdAt.seconds * 1000).toLocaleDateString('en-GB'), name: sale.namaDistributor } as any
    })

    const temp: Object = updatedSales.reduce((acc: any, { name, date }) => {

        acc[date] = acc[date] || { date, dates: new Set(), totalSubmit: 0 };
        acc[date].totalSubmit++;
        acc[date].dates.add(date);
        return acc;
    }, {});

    const result = Object.values(temp).map(({ date, totalSubmit }) => ({ date, totalSubmit }));

    const tableRef = useRef<HTMLTableElement>(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "kalendar-absen",
        sheet: "Kalendar Absen"
    })
    return (
        <>
            <div className="container mr-5 mb-3">
                <div className="container mb-3">
                    <button onClick={onDownload} id="test-table-xls-button"
                        className="download-table-xls-button">Download As XLS</button>

                </div>
            </div>

            <Table className="container" ref={tableRef} style={{ width: "1000px" }} bordered hover responsive id="kalendar-absen">
                <thead>
                    <tr>
                        <th>Tanggal (D/M/Y)</th>
                        <th>Jumlah Toko</th>
                    </tr>
                </thead>
                <tbody>
                    {result.sort((a, b) => a.date - b.date).map((sale, index) => (
                        <tr key={index}>
                            <td>{sale.date}</td>
                            <td>{sale.totalSubmit}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
