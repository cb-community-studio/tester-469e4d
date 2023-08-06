
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const OrderDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const inputTemplate0 = (rowData, { rowIndex }) => <InputText value={rowData.OrderID}  />
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.Total}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.CartID}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="OrderID" header="OrderID" body={inputTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="Total" header="Total Price" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="CartID" header="Cart ID" body={pTemplate2} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default OrderDataTable;