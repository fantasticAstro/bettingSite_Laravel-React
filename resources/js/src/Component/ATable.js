
import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import '../../../../node_modules/react-data-table-component-extensions/dist/index.css' ;

function ATable(props) {

    let columns = props.columns ;
    let data = props.data
    const tableData = {
        columns,
        data,
    };

    return (
        <div>
            <DataTableExtensions
            {...tableData}
            >
                <DataTable
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                />
            </DataTableExtensions>
        </div>
    )
}

export default ATable ;