import React, { FC } from 'react';
import { Table, Space } from 'antd';
import { GrupoFornecedores } from '../../types/relatorios/relatoriosType';
import { ColumnsType } from 'antd/lib/table';

interface Props {
    data: GrupoFornecedores[],
    change: () => void;
}

const DataTable: FC<Props> = (props) => {

    function filter(propertie: keyof GrupoFornecedores) {
        let list: GrupoFornecedores[] = [];

        props.data.map(e => {

          const index = list.findIndex(t => t[propertie] === e[propertie]);
            if(index === -1)
            list.push(e);
        });

        return list;
    }

    const columns: ColumnsType<GrupoFornecedores> = [
      {
        title: 'Código Grupo',
        dataIndex: 'codigoGrupo',
        filters:(filter('codigoGrupo').length > 1) ? 
        filter('codigoGrupo').map(e => {
            return  {
                text: e.codigoGrupo,
                value: e.codigoGrupo
            }
        }) : undefined,
      //filteredValue: filteredInfo || null,
      onFilter: (filter('codigoGrupo').length > 1) ? 
      (value: any, record: GrupoFornecedores) => record.codigoGrupo.toString().includes(value) 
      : undefined,
        // sorter: true,
        // sortOrder:  "descend",
        ellipsis: true,
      },
        {
          title: 'Código Fornecedor Principal',
          dataIndex: 'codigoFornecedorPrincipal',
          filters:(filter('codigoFornecedorPrincipal').length > 1) ? 
          filter('codigoFornecedorPrincipal').map(e => {
              return  {
                  text: e.codigoFornecedorPrincipal,
                  value: e.codigoFornecedorPrincipal
              }
          }) : undefined,
        //filteredValue: filteredInfo || null,
        onFilter: (filter('codigoFornecedorPrincipal').length > 1) ? 
        (value: any, record: GrupoFornecedores) => record.codigoFornecedorPrincipal.toString().includes(value) 
        : undefined,
        //   sorter: true,
        //   sortOrder:  "descend",
          ellipsis: true,
        },
        {
            title: 'Nome Fornecedor Principal',
            dataIndex: 'nomeFornecedorPrincipal',
            filters:(filter('nomeFornecedorPrincipal').length > 1) ? 
          filter('nomeFornecedorPrincipal').map(e => {
              return  {
                  text: e.nomeFornecedorPrincipal,
                  value: e.nomeFornecedorPrincipal
              }
          }) : undefined,
        //filteredValue: filteredInfo || null,
        onFilter: (filter('nomeFornecedorPrincipal').length > 1) ? 
        (value: any, record: GrupoFornecedores) => record.nomeFornecedorPrincipal.includes(value) 
        : undefined,
            // sorter:true,
            // sortOrder:  "descend",
            ellipsis: true,
          },
          {
            title: 'Código Fornecedor Filho',
            dataIndex: 'codigoFornecedorFilho',
            filters:(filter('codigoFornecedorFilho').length > 1) ? 
          filter('codigoFornecedorFilho').map(e => {
              return  {
                  text: e.codigoFornecedorFilho,
                  value: e.codigoFornecedorFilho
              }
          }) : undefined,
        //filteredValue: filteredInfo || null,
        onFilter: (filter('codigoFornecedorFilho').length > 1) ? 
        (value: any, record: GrupoFornecedores) => record.codigoFornecedorFilho.toString().includes(value) 
        : undefined,
            //sorter: true,
            //sortOrder:  "descend",
            ellipsis: true,
          },
          {
            title: 'Dígito Fornecedor Filho',
            dataIndex: 'digitoFornecedorFilho',
            filters:(filter('digitoFornecedorFilho').length > 1) ? 
            filter('digitoFornecedorFilho').map(e => {
                return  {
                    text: e.digitoFornecedorFilho,
                    value: e.digitoFornecedorFilho
                }
            }) : undefined,
          //filteredValue: filteredInfo || null,
          onFilter: (filter('digitoFornecedorFilho').length > 1) ? 
          (value: any, record: GrupoFornecedores) => record.digitoFornecedorFilho.toString().includes(value) 
          : undefined,
            // sorter: true,
            // sortOrder: "descend",
            ellipsis: true,
          },
          {
            title: 'Nome Fornecedor Filho',
            dataIndex: 'nomeFornecedorFilho',
            filters:(filter('nomeFornecedorFilho').length > 1) ? 
            filter('nomeFornecedorFilho').map(e => {
                return  {
                    text: e.nomeFornecedorFilho,
                    value: e.nomeFornecedorFilho
                }
            }) : undefined,
          //filteredValue: filteredInfo || null,
          onFilter: (filter('nomeFornecedorFilho').length > 1) ? 
          (value: any, record: GrupoFornecedores) => record.nomeFornecedorFilho.includes(value) 
          : undefined,
            // sorter: true,
            // sortOrder:  "descend",
            ellipsis: true,
          },
    ]

    return (
          <>
            <Space style={{ marginBottom: 16 }}>
              {/* <Button onClick={this.setAgeSort}>Sort age</Button>
              <Button onClick={this.clearFilters}>Clear filters</Button>
              <Button onClick={this.clearAll}>Clear filters and sorters</Button> */}
            </Space>
            <Table<GrupoFornecedores> onChange={props.change} columns={columns} dataSource={props.data} 
            rowKey="codigoFornecedorFilho" />
          </>
    );
}

export default DataTable;
