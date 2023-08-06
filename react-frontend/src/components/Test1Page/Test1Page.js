import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import AreYouSureDialog from "../common/AreYouSureDialog";
import Test1Datatable from "./Test1DataTable";
import Test1EditDialogComponent from "./Test1EditDialogComponent";
import Test1CreateDialogComponent from "./Test1CreateDialogComponent";
import Test1FakerDialogComponent from "./Test1FakerDialogComponent";
import Test1SeederDialogComponent from "./Test1SeederDialogComponent";

const Test1Page = (props) => {
    const history = useHistory();
    const [data, setData] = useState([]);
    const [showAreYouSureDialog, setShowAreYouSureDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showCreateDialog, setShowCreateDialog] = useState(false);
    const [showFakerDialog, setShowFakerDialog] = useState(false);
    const [showSeederDialog, setShowSeederDialog] = useState(false);
    const [selectedEntityIndex, setSelectedEntityIndex] = useState();
    useEffect(() => {
        //on mount
        client
            .service("test1")
            .find({ query: { $limit: 100 } })
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Test1", type: "error", message: error.message || "Failed get test1" });
            });
    }, []);

    const onEditRow = (rowData, rowIndex) => {
        setSelectedEntityIndex(rowIndex);
        setShowEditDialog(true);
    };

    const onCreateResult = (newEntity) => {
        setData([...data, newEntity]);
    };
    const onFakerCreateResults = (newEntities) => {
        setData([...data, ...newEntities]);
    };
    const onSeederResults = (newEntities) => {
        setData([...data, ...newEntities]);
    };

    const onEditResult = (newEntity) => {
        let _newData = _.cloneDeep(data);
        _newData[selectedEntityIndex] = newEntity;
        setData(_newData);
    };

    const deleteRow = async () => {
        try {
            await client.service("test1").remove(data[selectedEntityIndex]?._id);
            let _newData = data.filter((_, i) => i !== selectedEntityIndex);
            setData(_newData);
            setSelectedEntityIndex(null);
            setShowAreYouSureDialog(false)
        } catch (error) {
            console.log({ error });
            props.alert({ title: "Test1", type: "error", message: error.message || "Failed delete record" });
        }
    };
    const onRowDelete = (index) => {
        setSelectedEntityIndex(index);
        setShowAreYouSureDialog(true);
    };

    const onRowClick = (e) => {};

    const menuItems = [
        {
            label: "Faker",
            icon: "pi pi-sliders-h",
            command: (e) => {
                setShowFakerDialog(true);
            },
        },
        {
            label: "Seeder",
            icon: "pi pi-forward",
            command: (e) => {
                setShowSeederDialog(true);
            },
        },
    ];

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <h3 className="mb-0 ml-2">Test1</h3>
                <div className="col flex justify-content-end">
                    <Button label="add" icon="pi pi-plus" onClick={() => setShowCreateDialog(true)} role="test1-add-button"/>
                    <SplitButton model={menuItems} dropdownIcon="pi pi-ellipsis-v" buttonClassName="hidden" menuButtonClassName="ml-1 p-button-text"></SplitButton>
                </div>
            </div>
            <div className="grid col-10">
                <div className="col-12" role="test1-datatable">
                    <Test1Datatable items={data} onRowDelete={onRowDelete} onEditRow={onEditRow} onRowClick={onRowClick} />
                </div>
            </div>
            <AreYouSureDialog header="Delete" body="Are you sure you want to delete this record?" show={showAreYouSureDialog} onHide={() => setShowAreYouSureDialog(false)} onYes={() => deleteRow()} />
            <Test1EditDialogComponent entity={data[selectedEntityIndex]} show={showEditDialog} onHide={() => setShowEditDialog(false)} onEditResult={onEditResult} />
            <Test1CreateDialogComponent show={showCreateDialog} onHide={() => setShowCreateDialog(false)} onCreateResult={onCreateResult} />
            <Test1FakerDialogComponent show={showFakerDialog} onHide={() => setShowFakerDialog(false)} onFakerCreateResults={onFakerCreateResults} />
            <Test1SeederDialogComponent show={showSeederDialog} onHide={() => setShowSeederDialog(false)} onSeederResults={onSeederResults} />
        </div>
    );
};
const mapState = (state) => ({
    //
});
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(Test1Page);
