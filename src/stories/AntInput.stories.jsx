import { Input, Space, Divider } from 'antd';
import { 
  UserOutlined, 
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  SearchOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';

const { TextArea, Search, Password } = Input;

export default {
  title: 'Ant Design/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: 'The size of the input box',
      table: {
        defaultValue: { summary: 'middle' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of input',
    },
    value: {
      control: 'text',
      description: 'The input content value',
    },
    defaultValue: {
      control: 'text',
      description: 'The initial input content',
    },
    maxLength: {
      control: 'number',
      description: 'The max length',
    },
    showCount: {
      control: 'boolean',
      description: 'Whether show text count',
      table: {
        defaultValue: { summary: false },
      },
    },
    allowClear: {
      control: 'boolean',
      description: 'If allow to remove input content with clear icon',
      table: {
        defaultValue: { summary: false },
      },
    },
    bordered: {
      control: 'boolean',
      description: 'Whether has border style',
      table: {
        defaultValue: { summary: true },
      },
    },
    status: {
      control: 'select',
      options: ['error', 'warning', ''],
      description: 'Set validation status',
    },
  },
};

// Interactive playground
const Template = (args) => <Input {...args} style={{ width: 300 }} />;

export const Playground = Template.bind({});
Playground.args = {
  placeholder: 'Basic usage',
  size: 'middle',
  disabled: false,
  allowClear: false,
  showCount: false,
  bordered: true,
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Interactive playground to test all input properties. Use the controls below to customize the input.',
    },
  },
};

// Basic Usage
export const Basic = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input placeholder="Basic usage" />
  </Space>
);
Basic.parameters = {
  docs: {
    description: {
      story: 'Basic usage example.',
    },
  },
};

// Input Sizes
export const Sizes = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input size="large" placeholder="Large size" />
    <Input placeholder="Default size" />
    <Input size="small" placeholder="Small size" />
  </Space>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'There are three sizes of an Input box: `large` (40px), `default` (32px) and `small` (24px).',
    },
  },
};

// With Prefix and Suffix
export const PrefixAndSuffix = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input placeholder="Enter your username" prefix={<UserOutlined />} />
    <Input
      placeholder="Enter your username"
      prefix={<UserOutlined />}
      suffix={
        <InfoCircleOutlined
          style={{
            color: 'rgba(0,0,0,.45)',
          }}
        />
      }
    />
  </Space>
);
PrefixAndSuffix.parameters = {
  docs: {
    description: {
      story: 'Using `prefix` and `suffix` props to add icons or text inside the input.',
    },
  },
};

// With Addon
export const WithAddon = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <Input addonBefore="https://" defaultValue="mysite.com" />
    <Input addonAfter=".com" defaultValue="mysite" />
  </Space>
);
WithAddon.parameters = {
  docs: {
    description: {
      story: 'Using `addonBefore` and `addonAfter` props to add content before or after the input.',
    },
  },
};

// Disabled
export const Disabled = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input placeholder="Disabled input" disabled />
    <Input placeholder="Disabled input with value" disabled defaultValue="Disabled text" />
  </Space>
);
Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled state of Input.',
    },
  },
};

// Allow Clear
export const AllowClear = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input placeholder="Input with clear icon" allowClear />
    <Input placeholder="Input with clear icon (with value)" allowClear defaultValue="Some text" />
  </Space>
);
AllowClear.parameters = {
  docs: {
    description: {
      story: 'Make the Input clearable with `allowClear` prop.',
    },
  },
};

// Show Count
export const ShowCount = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input showCount maxLength={20} placeholder="Input with character count" />
    <Input showCount maxLength={100} placeholder="Can have longer max length" />
  </Space>
);
ShowCount.parameters = {
  docs: {
    description: {
      story: 'Display character count with `showCount` prop.',
    },
  },
};

// Status (Validation)
export const Status = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input status="error" placeholder="Error status" />
    <Input status="warning" placeholder="Warning status" />
    <Input status="error" placeholder="Error with prefix" prefix={<UserOutlined />} />
  </Space>
);
Status.parameters = {
  docs: {
    description: {
      story: 'Add status to Input with `status` prop. Will change border color.',
    },
  },
};

// Borderless
export const Borderless = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input placeholder="Borderless" bordered={false} />
    <Input placeholder="Borderless with prefix" bordered={false} prefix={<UserOutlined />} />
  </Space>
);
Borderless.parameters = {
  docs: {
    description: {
      story: 'Remove border with `bordered={false}` prop.',
    },
  },
};

// Password Input
export const PasswordInput = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Password placeholder="Input password" />
    <Password
      placeholder="Input password with icon"
      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    <Password placeholder="Visible password" visibilityToggle={false} />
  </Space>
);
PasswordInput.parameters = {
  docs: {
    description: {
      story: 'Input type of password with toggle visibility icon.',
    },
  },
};

// TextArea
export const TextAreaInput = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <TextArea rows={4} placeholder="Basic textarea" />
    <TextArea
      showCount
      maxLength={100}
      placeholder="Textarea with character count"
      style={{ height: 120, resize: 'none' }}
    />
    <TextArea placeholder="Autosize textarea" autoSize />
    <TextArea
      placeholder="Autosize with min and max rows"
      autoSize={{ minRows: 2, maxRows: 6 }}
    />
  </Space>
);
TextAreaInput.parameters = {
  docs: {
    description: {
      story: 'Multi-line text input using `Input.TextArea`.',
    },
  },
};

// Search Input
export const SearchInput = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Search placeholder="Input search text" onSearch={(value) => console.log(value)} />
    <Search
      placeholder="Input search text"
      allowClear
      onSearch={(value) => console.log(value)}
    />
    <Search
      placeholder="Input search text"
      enterButton="Search"
      size="large"
      onSearch={(value) => console.log(value)}
    />
    <Search
      placeholder="Input search text"
      enterButton={<SearchOutlined />}
      size="large"
      onSearch={(value) => console.log(value)}
    />
    <Search
      placeholder="Input search text"
      loading
      enterButton
    />
  </Space>
);
SearchInput.parameters = {
  docs: {
    description: {
      story: 'Search input with search button using `Input.Search`.',
    },
  },
};

// Input Group
export const InputGroup = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }}>
    <Input.Group compact>
      <Input style={{ width: '20%' }} defaultValue="+1" />
      <Input style={{ width: '80%' }} defaultValue="5551234" />
    </Input.Group>
    
    <Input.Group compact>
      <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
      <Input style={{ width: '200px' }} defaultValue="Combination" />
    </Input.Group>
  </Space>
);
InputGroup.parameters = {
  docs: {
    description: {
      story: 'Group multiple inputs together using `Input.Group`.',
    },
  },
};

// All Variants Combined
export const AllVariants = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }} size="large">
    <Divider>Basic Input</Divider>
    <Input placeholder="Basic input" />
    
    <Divider>With Icons</Divider>
    <Input placeholder="Username" prefix={<UserOutlined />} />
    <Input placeholder="Password" prefix={<LockOutlined />} />
    
    <Divider>With Clear</Divider>
    <Input placeholder="Clearable input" allowClear />
    
    <Divider>With Count</Divider>
    <Input showCount maxLength={20} placeholder="Max 20 characters" />
    
    <Divider>Password</Divider>
    <Password placeholder="Enter password" />
    
    <Divider>Search</Divider>
    <Search placeholder="Search..." enterButton />
    
    <Divider>TextArea</Divider>
    <TextArea rows={3} placeholder="Multi-line text" />
    
    <Divider>Disabled</Divider>
    <Input placeholder="Disabled" disabled />
    
    <Divider>Status</Divider>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
  </Space>
);
AllVariants.parameters = {
  docs: {
    description: {
      story: 'Complete overview of all input variants and states.',
    },
  },
};

// Real World Examples
export const RealWorldExamples = () => (
  <Space direction="vertical" style={{ width: '100%', maxWidth: 400 }} size="large">
    <Divider>Login Form Inputs</Divider>
    <Input 
      size="large"
      placeholder="Email address" 
      prefix={<UserOutlined />}
      allowClear
    />
    <Password
      size="large"
      placeholder="Password"
      prefix={<LockOutlined />}
    />
    
    <Divider>URL Input</Divider>
    <Input 
      addonBefore="https://" 
      addonAfter=".com" 
      placeholder="mywebsite"
      allowClear
    />
    
    <Divider>Comment Box</Divider>
    <TextArea
      showCount
      maxLength={500}
      placeholder="Write your comment here..."
      autoSize={{ minRows: 3, maxRows: 8 }}
    />
    
    <Divider>Search Bar</Divider>
    <Search
      placeholder="Search products, brands, categories..."
      allowClear
      enterButton="Search"
      size="large"
    />
  </Space>
);
RealWorldExamples.parameters = {
  docs: {
    description: {
      story: 'Real-world usage examples showing common input patterns.',
    },
  },
};