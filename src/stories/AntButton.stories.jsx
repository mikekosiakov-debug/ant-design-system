import { Button, Space, Divider } from 'antd';
import { 
  SearchOutlined, 
  DownloadOutlined, 
  PoweroffOutlined,
  LeftOutlined,
  RightOutlined 
} from '@ant-design/icons';

export default {
  title: 'Ant Design/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation. Ant Design provides 5 types of button and 3 sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'text', 'link'],
      description: 'Can be set to primary, default, dashed, text, link',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: 'Set the size of button',
      table: {
        defaultValue: { summary: 'middle' },
      },
    },
    danger: {
      control: 'boolean',
      description: 'Set the danger status of button',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of button',
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Set the loading status of button',
      table: {
        defaultValue: { summary: false },
      },
    },
    block: {
      control: 'boolean',
      description: 'Option to fit button width to its parent width',
      table: {
        defaultValue: { summary: false },
      },
    },
    ghost: {
      control: 'boolean',
      description: 'Make background transparent and invert text and border colors',
      table: {
        defaultValue: { summary: false },
      },
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round'],
      description: 'Can be set button shape',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    htmlType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Set the original html type of button',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

// Interactive playground
const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  type: 'primary',
  children: 'Button',
  size: 'middle',
  danger: false,
  disabled: false,
  loading: false,
  block: false,
  ghost: false,
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Interactive playground to test all button properties. Use the controls below to customize the button.',
    },
  },
};

// Button Types
export const Types = () => (
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
);
Types.parameters = {
  docs: {
    description: {
      story: 'There are `primary`, `default`, `dashed`, `text` and `link` button types in Ant Design.',
    },
  design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YrlxdeckWRcVKlHjqS4ieu/AntKT?node-id=28193-54511&t=fKEa41hHSHU21PcV-11',
    },
  },
};

// Button Sizes
export const Sizes = () => (
  <Space wrap>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
  </Space>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Ant Design supports `large`, `middle` (default), and `small` button sizes.',
    },
  },
};

// Danger Buttons
export const Danger = () => (
  <Space wrap direction="vertical">
    <Space wrap>
      <Button type="primary" danger>Primary</Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>Dashed</Button>
      <Button type="text" danger>Text</Button>
      <Button type="link" danger>Link</Button>
    </Space>
  </Space>
);
Danger.parameters = {
  docs: {
    description: {
      story: 'Danger is a property of button after `antd@4.0`. Adding `danger` will render a red-styled button.',
    },
  },
};

// Disabled State
export const Disabled = () => (
  <Space wrap>
    <Button type="primary" disabled>Primary(disabled)</Button>
    <Button disabled>Default(disabled)</Button>
    <Button type="dashed" disabled>Dashed(disabled)</Button>
    <Button type="text" disabled>Text(disabled)</Button>
    <Button type="link" disabled>Link(disabled)</Button>
  </Space>
);
Disabled.parameters = {
  docs: {
    description: {
      story: 'To mark a button as disabled, add the `disabled` property to the Button.',
    },
  },
};

// Loading State
export const Loading = () => (
  <Space wrap direction="vertical">
    <Space wrap>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" size="small" loading>Loading</Button>
    </Space>
    <Space wrap>
      <Button type="primary" loading={true}>Click me!</Button>
      <Button type="primary" icon={<PoweroffOutlined />} loading>Click me!</Button>
    </Space>
  </Space>
);
Loading.parameters = {
  docs: {
    description: {
      story: 'A loading indicator can be added to a button by setting the `loading` property on the Button.',
    },
  },
};

// With Icons
export const WithIcons = () => (
  <Space wrap>
    <Button type="primary" icon={<SearchOutlined />}>Search</Button>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    <Button type="primary" icon={<SearchOutlined />}>Search</Button>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Button type="dashed" icon={<DownloadOutlined />}>Download</Button>
  </Space>
);
WithIcons.parameters = {
  docs: {
    description: {
      story: 'Button components can contain an Icon. This is done by setting the `icon` property or placing an Icon component within the Button.',
    },
  },
};

// Icon Only
export const IconOnly = () => (
  <Space wrap>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    <Button type="primary" icon={<SearchOutlined />} />
    <Button type="primary" shape="round" icon={<SearchOutlined />} />
    <Button type="primary" shape="round" icon={<DownloadOutlined />} />
    <Button type="primary" icon={<SearchOutlined />} />
  </Space>
);
IconOnly.parameters = {
  docs: {
    description: {
      story: 'When you need icon only button, you can set the `shape` property to `circle` or omit the button text.',
    },
  },
};

// Block Button
export const Block = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Button type="primary" block>Primary</Button>
    <Button block>Default</Button>
    <Button type="dashed" block>Dashed</Button>
    <Button type="link" block>Link</Button>
  </Space>
);
Block.parameters = {
  docs: {
    description: {
      story: '`block` property will make the button fit to its parent width.',
    },
  },
};

// Ghost Button
export const Ghost = () => (
  <Space wrap style={{ padding: '20px', background: '#1890ff' }}>
    <Button type="primary" ghost>Primary</Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="primary" danger ghost>Danger</Button>
  </Space>
);
Ghost.parameters = {
  docs: {
    description: {
      story: '`ghost` property will make button\'s background transparent. It is often used on colored backgrounds.',
    },
  },
};

// Button Shapes
export const Shapes = () => (
  <Space wrap>
    <Button type="primary">Default</Button>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    <Button type="primary" shape="round">Round</Button>
    <Button type="primary" shape="round" icon={<SearchOutlined />}>Search</Button>
  </Space>
);
Shapes.parameters = {
  docs: {
    description: {
      story: 'Button shape can be `circle`, `round` or `default` (no shape property).',
    },
  },
};

// Multiple Buttons
export const MultipleButtons = () => (
  <Space wrap>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <Button type="link">Link</Button>
  </Space>
);
MultipleButtons.parameters = {
  docs: {
    description: {
      story: 'Use `Space` component to create a group of buttons with consistent spacing.',
    },
  },
};

// Button Group Example
export const ButtonWithNavigation = () => (
  <Space>
    <Button type="primary" icon={<LeftOutlined />}>Previous</Button>
    <Button type="primary">
      Next<RightOutlined />
    </Button>
  </Space>
);
ButtonWithNavigation.parameters = {
  docs: {
    description: {
      story: 'Example of buttons used for navigation with icons positioned before/after text.',
    },
  },
};

// All Sizes Comparison
export const AllSizesComparison = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Divider>Large Size</Divider>
    <Space wrap>
      <Button type="primary" size="large">Primary</Button>
      <Button size="large">Default</Button>
      <Button type="dashed" size="large">Dashed</Button>
      <Button type="link" size="large">Link</Button>
    </Space>
    
    <Divider>Middle Size (Default)</Divider>
    <Space wrap>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Space>
    
    <Divider>Small Size</Divider>
    <Space wrap>
      <Button type="primary" size="small">Primary</Button>
      <Button size="small">Default</Button>
      <Button type="dashed" size="small">Dashed</Button>
      <Button type="link" size="small">Link</Button>
    </Space>
  </Space>
);
AllSizesComparison.parameters = {
  docs: {
    description: {
      story: 'Complete comparison of all button sizes across different button types.',
    },
  },
};