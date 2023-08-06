
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';


const ProductDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const inputTemplate0 = (rowData, { rowIndex }) => <InputText value={rowData.ProductID}  />
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.ProductName}  />
    const imageTemplate2 = (rowData, { rowIndex }) => <Image src={rowData.ProductImage}  alt="Image" height="60px" />
    const inputTemplate3 = (rowData, { rowIndex }) => <InputText value={rowData.price}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="ProductID" header="Product_ID" body={inputTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="ProductName" header="ProductName" body={inputTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="ProductImage" header="ProductImage" body={imageTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="price" header="price" body={inputTemplate3} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ProductDataTable;