import { Divider, Table } from 'antd';
import React, { FC, useState } from 'react';

interface Props {
    data: any[],
    columns: any[],
    handleSelection: (e:any) => any
}

const SelectionTable: FC<Props> = (props) => {

    const rowSelection = {
      onChange: (selectedRowKeys: any, selectedRows: any) => {
          props.handleSelection(selectedRows);
      },
      getCheckboxProps: (record: any) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
      }),
    };

  const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
  return (
    <div>
      <Divider />
      <Table
        style={{ marginRight: 50}}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={props.columns}
        dataSource={props.data}
        pagination={false}
        scroll={{y: 500}}
      />
    </div>
  );
};

export default SelectionTable


