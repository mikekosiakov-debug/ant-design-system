import React, { useState } from 'react';
import { Table, Space, Button, Tag, Input, Select, Typography } from 'antd';
import { 
  SearchOutlined, 
  EditOutlined, 
  DeleteOutlined,
  EyeOutlined,
  FilterOutlined,
  DownloadOutlined 
} from '@ant-design/icons';

const { Text } = Typography;

export default {
  title: 'Ant Design/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'A table displays rows of data. Use Table when you need to display data in a structured way with sorting, filtering, and pagination.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: 'Size of table',
      table: {
        defaultValue: { summary: 'middle' },
      },
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show all table borders',
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading status of table',
      table: {
        defaultValue: { summary: false },
      },
    },
    showHeader: {
      control: 'boolean',
      description: 'Whether to show table header',
      table: {
        defaultValue: { summary: true },
      },
    },
    pagination: {
      control: 'object',
      description: 'Pagination config or false to hide',
    },
  },
};

// Sample data
const basicData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const basicColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

// Interactive playground
const Template = (args) => (
  <Table 
    columns={basicColumns} 
    dataSource={basicData} 
    {...args} 
  />
);

export const Playground = Template.bind({});
Playground.args = {
  size: 'middle',
  bordered: false,
  loading: false,
  showHeader: true,
  pagination: { pageSize: 10 },
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Interactive playground to test all table properties. Use the controls below to customize the table.',
    },
  },
};

// Basic Usage
export const Basic = () => (
  <Table columns={basicColumns} dataSource={basicData} />
);
Basic.parameters = {
  docs: {
    description: {
      story: 'Simple table with basic data.',
    },
  },
};

// Table Sizes
export const Sizes = () => (
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <div>
      <Text strong>Large Size</Text>
      <Table columns={basicColumns} dataSource={basicData} size="large" pagination={false} />
    </div>
    <div>
      <Text strong>Middle Size (Default)</Text>
      <Table columns={basicColumns} dataSource={basicData} size="middle" pagination={false} />
    </div>
    <div>
      <Text strong>Small Size</Text>
      <Table columns={basicColumns} dataSource={basicData} size="small" pagination={false} />
    </div>
  </Space>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Three sizes are available: `large`, `middle` (default), and `small`.',
    },
  },
};

// Bordered Table
export const Bordered = () => (
  <Table columns={basicColumns} dataSource={basicData} bordered />
);
Bordered.parameters = {
  docs: {
    description: {
      story: 'Add borders on all sides of the table and cells with `bordered` prop.',
    },
  },
};

// With Row Selection
export const RowSelection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Text>Selected {selectedRowKeys.length} items</Text>
      </div>
      <Table 
        rowSelection={rowSelection} 
        columns={basicColumns} 
        dataSource={basicData} 
      />
    </div>
  );
};
RowSelection.parameters = {
  docs: {
    description: {
      story: 'Rows can be selectable by making first column as a selectable column using `rowSelection`.',
    },
  },
};

// Sortable Columns
export const Sortable = () => {
  const sortableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      defaultSortOrder: 'descend',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
  ];

  return <Table columns={sortableColumns} dataSource={basicData} />;
};
Sortable.parameters = {
  docs: {
    description: {
      story: 'Sort data by clicking column headers. Use `sorter` prop to enable sorting.',
    },
  },
};

// Filterable Columns
export const Filterable = () => {
  const filterableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
        { text: 'John', value: 'John' },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      filters: [
        { text: '32', value: 32 },
        { text: '42', value: 42 },
      ],
      onFilter: (value, record) => record.age === value,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table columns={filterableColumns} dataSource={basicData} />;
};
Filterable.parameters = {
  docs: {
    description: {
      story: 'Filter data by selecting values from dropdown. Use `filters` and `onFilter` props.',
    },
  },
};

// Custom Render
export const CustomRender = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      status: 'active',
      tags: ['developer', 'senior'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      status: 'inactive',
      tags: ['designer'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      status: 'active',
      tags: ['developer', 'junior'],
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
CustomRender.parameters = {
  docs: {
    description: {
      story: 'Customize how cell content is rendered using the `render` function in column definitions.',
    },
  },
};

// With Actions
export const WithActions = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'john@example.com',
      role: 'Admin',
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'jim@example.com',
      role: 'User',
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'joe@example.com',
      role: 'User',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => (
        <Tag color={role === 'Admin' ? 'gold' : 'blue'}>{role}</Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button 
            type="link" 
            icon={<EyeOutlined />} 
            onClick={() => console.log('View', record)}
          >
            View
          </Button>
          <Button 
            type="link" 
            icon={<EditOutlined />} 
            onClick={() => console.log('Edit', record)}
          >
            Edit
          </Button>
          <Button 
            type="link" 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => console.log('Delete', record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
WithActions.parameters = {
  docs: {
    description: {
      story: 'Add action buttons in a dedicated column for common operations like view, edit, and delete.',
    },
  },
};

// Expandable Rows
export const ExpandableRows = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
  ];

  return (
    <Table
      columns={basicColumns}
      dataSource={data}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
      }}
    />
  );
};
ExpandableRows.parameters = {
  docs: {
    description: {
      story: 'Show additional details by expanding rows using the `expandable` prop.',
    },
  },
};

// Fixed Header
export const FixedHeader = () => (
  <Table
    columns={basicColumns}
    dataSource={[...basicData, ...basicData, ...basicData]}
    scroll={{ y: 240 }}
    pagination={false}
  />
);
FixedHeader.parameters = {
  docs: {
    description: {
      story: 'A fixed header for long tables using `scroll={{ y: height }}`.',
    },
  },
};

// Fixed Columns
export const FixedColumns = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 200,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 200,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 200,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 200,
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 100,
      render: () => <Button type="link">Action</Button>,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={basicData}
      scroll={{ x: 1300 }}
    />
  );
};
FixedColumns.parameters = {
  docs: {
    description: {
      story: 'Fix columns on the left or right side using `fixed` prop with horizontal scrolling.',
    },
  },
};

// Pagination
export const Pagination = () => {
  const largeData = Array.from({ length: 46 }, (_, i) => ({
    key: i,
    name: `Person ${i + 1}`,
    age: 20 + (i % 30),
    address: `Address ${i + 1}`,
  }));

  return (
    <Table
      columns={basicColumns}
      dataSource={largeData}
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
        showTotal: (total) => `Total ${total} items`,
      }}
    />
  );
};
Pagination.parameters = {
  docs: {
    description: {
      story: 'Pagination for large datasets. Configure with `pagination` prop or set to `false` to disable.',
    },
  },
};

// Loading State
export const Loading = () => (
  <Table columns={basicColumns} dataSource={basicData} loading />
);
Loading.parameters = {
  docs: {
    description: {
      story: 'Show loading state with `loading` prop.',
    },
  },
};

// Empty State
export const Empty = () => (
  <Table columns={basicColumns} dataSource={[]} />
);
Empty.parameters = {
  docs: {
    description: {
      story: 'Default empty state when no data is available.',
    },
  },
};

// Grouped Columns
export const GroupedColumns = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Personal Info',
      children: [
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        },
      ],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      gender: 'Male',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      gender: 'Male',
      address: 'London No. 1 Lake Park',
    },
  ];

  return <Table columns={columns} dataSource={data} bordered />;
};
GroupedColumns.parameters = {
  docs: {
    description: {
      story: 'Group columns using the `children` property in column definitions.',
    },
  },
};

// Real World Example - User Management
export const UserManagement = () => {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      lastLogin: 'Jan 23, 2024, 14:30',
    },
    {
      key: '2',
      name: 'Jim Green',
      email: 'jim@example.com',
      role: 'Editor',
      status: 'active',
      lastLogin: 'Jan 22, 2024, 09:15',
    },
    {
      key: '3',
      name: 'Joe Black',
      email: 'joe@example.com',
      role: 'User',
      status: 'inactive',
      lastLogin: 'Jan 15, 2024, 16:45',
    },
    {
      key: '4',
      name: 'Jane Doe',
      email: 'jane@example.com',
      role: 'Editor',
      status: 'active',
      lastLogin: 'Jan 23, 2024, 11:20',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'Editor', value: 'Editor' },
        { text: 'User', value: 'User' },
      ],
      onFilter: (value, record) => record.role === value,
      render: (role) => {
        const color = role === 'Admin' ? 'gold' : role === 'Editor' ? 'blue' : 'default';
        return <Tag color={color}>{role}</Tag>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      sorter: (a, b) => new Date(a.lastLogin) - new Date(b.lastLogin),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button type="link" size="small" icon={<EyeOutlined />}>
            View
          </Button>
          <Button type="link" size="small" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button type="link" size="small" danger icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                          item.email.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="middle">
      <Space>
        <Input
          placeholder="Search by name or email"
          prefix={<SearchOutlined />}
          style={{ width: 250 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
        />
        <Select
          style={{ width: 150 }}
          value={statusFilter}
          onChange={setStatusFilter}
        >
          <Select.Option value="all">All Status</Select.Option>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="inactive">Inactive</Select.Option>
        </Select>
        <Button icon={<FilterOutlined />}>More Filters</Button>
        <Button type="primary" icon={<DownloadOutlined />}>
          Export
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} users`,
        }}
      />
    </Space>
  );
};
UserManagement.parameters = {
  docs: {
    description: {
      story: 'Real-world example of a user management table with search, filters, sorting, and actions.',
    },
  },
};