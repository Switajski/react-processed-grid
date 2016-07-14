import React from 'react'
import DataGrid from 'react-datagrid/'

var columns = [
    { name: 'index', title: '#', width: 150 },
    { name: 'firstName'},
    { name: 'lastName' },
    { name: 'city', width: 200 },
    { name: 'country', width: 200 },
    { name: 'email'}
];

const DataGridWrapper = React.createClass({
    render() {
        return (
            <div>
                <h2>
                    Priebes neue Tabelle
                </h2>
                <DataGrid
                    idProperty='id'
                    dataSource='./app/huge.json'
                    pagination={false}
                    columns={columns}
                    style={{height: 700}}
                />
            </div>
        )
    }
})

export default DataGridWrapper