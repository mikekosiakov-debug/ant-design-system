import React from 'react';
import { Typography, Table, Divider, Space, Card, Tag, Alert, Descriptions } from 'antd';
import { 
  CalendarOutlined, 
  ClockCircleOutlined, 
  GlobalOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

export default {
  title: 'Foundations/Date & Time',
  parameters: {
    layout: 'padded',
  },
};

const rulesColumns = [
  {
    title: 'Start date',
    dataIndex: 'startDate',
    key: 'startDate',
    width: 100,
  },
  {
    title: 'End date',
    dataIndex: 'endDate',
    key: 'endDate',
    width: 100,
  },
  {
    title: 'Start Time',
    dataIndex: 'startTime',
    key: 'startTime',
    width: 100,
  },
  {
    title: 'End Time',
    dataIndex: 'endTime',
    key: 'endTime',
    width: 120,
  },
  {
    title: 'Expected result',
    dataIndex: 'result',
    key: 'result',
    render: (text) => <Text code>{text}</Text>,
  },
  {
    title: 'Same day result',
    dataIndex: 'sameDay',
    key: 'sameDay',
    render: (text) => text ? <Text code>{text}</Text> : <Text type="secondary">—</Text>,
  },
];

const rulesData = [
  {
    key: '1',
    startDate: '1',
    endDate: 'null',
    startTime: 'null',
    endTime: 'null',
    result: 'Feb 21, 2024',
    sameDay: '',
  },
  {
    key: '2',
    startDate: '1',
    endDate: 'null',
    startTime: 'null',
    endTime: '1 (ignored)',
    result: 'Feb 21, 2024',
    sameDay: '',
  },
  {
    key: '3',
    startDate: '1',
    endDate: 'null',
    startTime: '1',
    endTime: 'null',
    result: 'Sep 19, 2023, 21:52',
    sameDay: '',
  },
  {
    key: '4',
    startDate: '1',
    endDate: '1',
    startTime: 'null',
    endTime: 'null',
    result: 'Feb 20 - Feb 21, 2024',
    sameDay: 'Feb 20, 2024',
  },
  {
    key: '5',
    startDate: '1',
    endDate: 'null',
    startTime: '1',
    endTime: '1',
    result: 'Jan 23, 2024, 00:05 - 00:55',
    sameDay: '',
  },
  {
    key: '6',
    startDate: '1',
    endDate: '1',
    startTime: 'null',
    endTime: '1',
    result: 'Jul 17 - Jul 18, 2024, 02:00',
    sameDay: 'Jul 17 - Jul 17, 2024, 02:00',
  },
  {
    key: '7',
    startDate: '1',
    endDate: '1',
    startTime: '1',
    endTime: 'null',
    result: 'Feb 20, 15:00 - Feb 21, 2024',
    sameDay: 'Feb 20, 2024, 15:00',
  },
  {
    key: '8',
    startDate: '1',
    endDate: '1',
    startTime: '1',
    endTime: '1',
    result: 'Jan 23, 2024, 00:05 - Jan 24, 2024, 00:55',
    sameDay: 'Jan 23, 2024, 00:05 - 00:55',
  },
];

const ExampleCard = ({ title, examples, icon }) => (
  <Card 
    size="small" 
    title={
      <Space>
        {icon}
        <Text strong>{title}</Text>
      </Space>
    }
    style={{ marginBottom: 16 }}
  >
    <Space direction="vertical" style={{ width: '100%' }}>
      {examples.map((example, index) => (
        <Text key={index} code>{example}</Text>
      ))}
    </Space>
  </Card>
);

const SectionCard = ({ title, children }) => (
  <Card 
    title={<Title level={4} style={{ margin: 0 }}>{title}</Title>}
    style={{ marginBottom: 24 }}
  >
    {children}
  </Card>
);

export const Documentation = () => (
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      
      {/* Header */}
      <div>
        <Title level={1}>
          <CalendarOutlined style={{ marginRight: 12 }} />
          Date & Time
        </Title>
        <Paragraph type="secondary" style={{ fontSize: 16 }}>
          Comprehensive guidelines for date and time formatting across the application
        </Paragraph>
      </div>

      {/* Related Documentation */}
      <Alert
        message="Related Documentation"
        description={
          <ul style={{ marginBottom: 0 }}>
            <li>
              <Link href="https://kuonigts.atlassian.net/wiki/spaces/DIG/pages/2721415316" target="_blank">
                SP_Date_Format_Mapping
              </Link>
            </li>
            <li>
              <Link href="https://kuonigts.atlassian.net/wiki/x/BADlr" target="_blank">
                Date time interval rules
              </Link>
            </li>
          </ul>
        }
        type="info"
        showIcon
        icon={<InfoCircleOutlined />}
      />

      {/* Principles */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Principles</Title>}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Paragraph>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Use the <Tag color="blue">month abbreviation</Tag> and <Tag color="blue">24-hour format</Tag> for clarity.
          </Paragraph>
          <Paragraph>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            <Tag color="blue">Omit the year</Tag> when it is not necessary to avoid redundancy and simplify the interface.
          </Paragraph>
          <Paragraph>
            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
            Ensure <Tag color="blue">consistency</Tag> across the application for better user experience.
          </Paragraph>
          <Paragraph>
            <GlobalOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            <Text strong>Localization:</Text> Ensure that your application supports localization, allowing users to select their preferred date and time format if needed.
          </Paragraph>
          <Paragraph>
            <ClockCircleOutlined style={{ color: '#1890ff', marginRight: 8 }} />
            <Text strong>Timezone Handling:</Text> Always store dates and times in UTC in your database and convert them to the user's local timezone when displaying.
          </Paragraph>
        </Space>
      </Card>

      {/* Date Formats */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Date Formats</Title>}>
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <ExampleCard 
            title="From date to date (range)" 
            examples={['Feb 20 - Feb 21, 2024']}
            icon={<CalendarOutlined />}
          />
          
          <ExampleCard 
            title="From date and time to date and time (range)" 
            examples={[
              'Jan 23, 2024, 00:05 - Jan 24, 2024, 00:55',
              'Tue, Oct 2, 2024, 18:00 - Wed, Oct 3, 2024, 9:00'
            ]}
            icon={<CalendarOutlined />}
          />
          
          <ExampleCard 
            title="From same date and time to time (range)" 
            examples={['Jan 23, 2024, 00:05 - 00:55']}
            icon={<CalendarOutlined />}
          />
          
          <ExampleCard 
            title="From same date and time" 
            examples={['Jan 01, 2024, 00:55']}
            icon={<CalendarOutlined />}
          />
          
          <ExampleCard 
            title="From time to time (range)" 
            examples={['13:20 - 15:00']}
            icon={<ClockCircleOutlined />}
          />
          
          <ExampleCard 
            title="Starting date and time" 
            examples={['Sep 19, 2023, 21:52']}
            icon={<CalendarOutlined />}
          />
          
          <ExampleCard 
            title="Ending date and time" 
            examples={['Sep 20, 2023, 06:30']}
            icon={<CalendarOutlined />}
          />
          
          <ExampleCard 
            title="Date only" 
            examples={['Feb 21, 2024']}
            icon={<CalendarOutlined />}
          />
        </Space>
      </Card>

      {/* Time */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Time</Title>}>
        <Alert
          message="24-Hour Format"
          description="This is widely used and understood across both regions. It eliminates any confusion that might arise from AM/PM distinctions."
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
        <Descriptions title="Examples" bordered column={1}>
          <Descriptions.Item label="2:30 PM">
            <Text code>14:30</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Time range">
            <Text code>13:20 - 15:00</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Date with time range">
            <Text code>Jan 23, 2024, 00:05 - Jan 24, 2024, 00:55</Text>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Date + Time + Day of Week */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Date + Time + Day of the Week</Title>}>
        <Paragraph>Added day of the week to the date</Paragraph>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Text code>Tue, Jan 23, 2024, 00:05 - Wed, Jan 24, 2024, 00:55</Text>
          <Text code>Tue, Jan 23, 2024 - Wed, Jan 24, 2024</Text>
          <Text code>Tue, Jan 23 - Wed, Jan 24</Text>
        </Space>
      </Card>

      {/* Rules Table */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Rules for Date & Time</Title>}>
        <Paragraph>
          These are common rules for formatting date time ranges in Partners. 
          This is used e.g. in Requests or Bookings tables.
        </Paragraph>
        <Table 
          columns={rulesColumns} 
          dataSource={rulesData} 
          pagination={false}
          bordered
          size="small"
          scroll={{ x: 'max-content' }}
        />
      </Card>

      {/* Specific Implementation */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Specific Implementation</Title>}>
        
        <Title level={3}>Supplier Role</Title>
        
        <SectionCard title="Requests - Date Column">
          <Space direction="vertical">
            <Text code>Jan 10, 2024, 14:00-16:00</Text>
            <Text code>Jan 23, 2024, 00:05 - Jan 24, 2024, 00:55</Text>
            <Text code>Feb 20 - Feb 21, 2024</Text>
            <Text code>Feb 21, 2024</Text>
          </Space>
        </SectionCard>

        <SectionCard title="Request – Send Message - Subheading">
          <Space direction="vertical">
            <Text code>Jan 10 - Jan 10</Text>
            <Text code>Jan 23 - Jan 24</Text>
            <Text code>Feb 20 - Feb 21</Text>
          </Space>
        </SectionCard>

        <SectionCard title="Bookings - Date Column">
          <Space direction="vertical">
            <Text code>Jun 13, 21:00 - Jun 14, 2022</Text>
            <Text code>Jan 17, 12:30 - Jan 17, 2023</Text>
            <Text code>Feb 11, 2023, 13:00-14:30</Text>
            <Text code>Sep 19, 2023, 21:45 - Sep 20, 2023, 06:30</Text>
            <Text code>Feb 20 - Feb 21, 2024</Text>
          </Space>
        </SectionCard>

        <Divider />

        <Title level={3}>Booking Details</Title>

        <SectionCard title="Summary">
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Start date">
              <Text strong>Sep 19, 2023</Text>
            </Descriptions.Item>
            <Descriptions.Item label="End date">
              <Text strong>Sep 20, 2023</Text>
            </Descriptions.Item>
          </Descriptions>
        </SectionCard>

        <SectionCard title="For flights with times">
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Start date">
              <Text strong>Sep 19, 2023, 21:52</Text>
            </Descriptions.Item>
            <Descriptions.Item label="End date">
              <Text strong>Sep 20, 2023, 06:30</Text>
            </Descriptions.Item>
          </Descriptions>
        </SectionCard>

        <Divider />

        <Title level={3}>Individual Services by Type</Title>

        <SectionCard title="FLIGHT Type">
          <Space direction="vertical">
            <Text code>Departure: Feb 13, 01:00</Text>
            <Text code>Arrival: Feb 13, 19:00</Text>
          </Space>
        </SectionCard>

        <SectionCard title="COACH Type">
          <Text code>Time: Nov 02, 09:00 - Nov 02, 21:00</Text>
        </SectionCard>

        <SectionCard title="GUIDE / LOCAL TRANSPORT Type">
          <Space direction="vertical">
            <Text code>Time: Jun 23, 13:20 - Jun 30, 09:00</Text>
            <Text code>Time: 13:20 - 15:00</Text>
          </Space>
        </SectionCard>

        <SectionCard title="TRAIN Type">
          <Text code>Time: Mar 26, 11:18 - Mar 26, 12:46</Text>
        </SectionCard>

        <SectionCard title="OTHER Type">
          <Space direction="vertical">
            <Text code>Time: Jun 23, 13:20 - Jun 30, 09:00</Text>
            <Text code>Time: 00:30 - 00:50</Text>
            <Text code>Time: 00:01</Text>
          </Space>
        </SectionCard>

        <Alert
          message="RESTAURANT / ENTRANCE / HOTEL / TEXT Type"
          description="No dates or times in details."
          type="warning"
          showIcon
          style={{ marginTop: 16 }}
        />
      </Card>

      {/* Key Takeaways */}
      <Card 
        title={<Title level={2} style={{ margin: 0 }}>Key Takeaways</Title>}
        style={{ background: '#f0f5ff' }}
      >
        <Space direction="vertical" size="middle">
          <Paragraph>
            <Tag color="blue">1</Tag>
            <Text strong>Always use 24-hour format</Text> for time
          </Paragraph>
          <Paragraph>
            <Tag color="blue">2</Tag>
            <Text strong>Use month abbreviations</Text> (Jan, Feb, Mar, etc.)
          </Paragraph>
          <Paragraph>
            <Tag color="blue">3</Tag>
            <Text strong>Omit year when appropriate</Text> to reduce clutter
          </Paragraph>
          <Paragraph>
            <Tag color="blue">4</Tag>
            <Text strong>Be consistent</Text> across the entire application
          </Paragraph>
          <Paragraph>
            <Tag color="blue">5</Tag>
            <Text strong>Store in UTC</Text>, display in local timezone
          </Paragraph>
          <Paragraph>
            <Tag color="blue">6</Tag>
            <Text strong>Support localization</Text> for international users
          </Paragraph>
        </Space>
      </Card>

    </Space>
  </div>
);