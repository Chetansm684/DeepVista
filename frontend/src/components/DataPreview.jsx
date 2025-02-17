import { Table } from 'antd';

const DataPreview = ({ data }) => {
  if (!data || data.length === 0) {
    return <Table columns={[]} dataSource={[]} />;
  }

  // Get table headers
  const headers = data[0];

  // Create column definitions
  const columns = headers.map((header, index) => ({
    title: header,
    dataIndex: `col${index}`,
    key: `col${index}`,
    width: 150,
    ellipsis: true
  }));

  // Process data rows
  const dataSource = data.slice(1).map((row, rowIndex) => {
    const rowData = {
      key: rowIndex,
    };
    row.forEach((cell, index) => {
      rowData[`col${index}`] = cell;
    });
    return rowData;
  });

  return (
    <Table 
      columns={columns} 
      dataSource={dataSource}
      scroll={{ x: 'max-content' }}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true
      }}
    />
  );
};

export default DataPreview; 