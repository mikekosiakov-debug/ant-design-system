import React from 'react';
import { Typography, Space, Card, Divider, Alert, Tag, Button, Descriptions, Row, Col, Image } from 'antd';
import { 
  ThunderboltOutlined,
  LinkOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  SaveOutlined,
  ArrowRightOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

export default {
  title: 'Foundations/Call to Actions (CTAs)',
  parameters: {
    layout: 'padded',
  },
};

const ColorSwatch = ({ color, hex, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div
      style={{
        width: 80,
        height: 80,
        backgroundColor: hex,
        borderRadius: 8,
        border: '1px solid #d9d9d9',
        marginBottom: 8,
      }}
    />
    <Text strong style={{ display: 'block', fontSize: 12 }}>{label}</Text>
    <Text type="secondary" style={{ fontSize: 11 }}>{color}</Text>
    <Text type="secondary" style={{ display: 'block', fontSize: 11 }}>{hex}</Text>
  </div>
);

const ExampleCard = ({ title, children, type = 'default' }) => (
  <Card 
    size="small" 
    title={<Text strong>{title}</Text>}
    style={{ 
      marginBottom: 16,
      ...(type === 'do' && { borderColor: '#52c41a' }),
      ...(type === 'dont' && { borderColor: '#ff4d4f' }),
    }}
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
          <ThunderboltOutlined style={{ marginRight: 12 }} />
          Call to Actions (CTAs)
        </Title>
        <Paragraph type="secondary" style={{ fontSize: 16 }}>
          CTAs guide users toward completing key interactions across the product.
        </Paragraph>
      </div>

      {/* Key Principle */}
      <Alert
        message={
          <Text strong style={{ fontSize: 16 }}>
            Core Principle: Buttons do something, links go somewhere.
          </Text>
        }
        description="They appear primarily as Buttons and Links, depending on the context and level of emphasis required. Use CTAs consistently to maintain clear visual hierarchy and predictable interaction patterns."
        type="info"
        showIcon
        icon={<InfoCircleOutlined />}
      />

      {/* Overview Cards */}
      <Row gutter={16}>
        <Col span={12}>
          <Card 
            style={{ height: '100%', background: '#f0f5ff' }}
            bordered={false}
          >
            <Space direction="vertical">
              <Title level={3} style={{ margin: 0 }}>
                <ThunderboltOutlined style={{ color: '#1890ff' }} /> Buttons
              </Title>
              <Text>Perform actions within the current page or flow</Text>
              <Space wrap>
                <Tag color="blue">Submit forms</Tag>
                <Tag color="blue">Save changes</Tag>
                <Tag color="blue">Confirm actions</Tag>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col span={12}>
          <Card 
            style={{ height: '100%', background: '#f6ffed' }}
            bordered={false}
          >
            <Space direction="vertical">
              <Title level={3} style={{ margin: 0 }}>
                <LinkOutlined style={{ color: '#52c41a' }} /> Links
              </Title>
              <Text>Navigate to other pages, sections, or external resources</Text>
              <Space wrap>
                <Tag color="green">Page navigation</Tag>
                <Tag color="green">External URLs</Tag>
                <Tag color="green">In-page sections</Tag>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
<Card 
  title="Visual Examples"
  style={{ marginBottom: 24 }}
>
  <Image
    src="/images/button-vs-link.png"
    alt="CTA button and link examples"
    style={{ width: '100%' }}
    preview={true}
  />
  <Paragraph style={{ marginTop: 16, marginBottom: 0 }}>
    Example showing proper button and link usage in context.
  </Paragraph>
</Card>

      <Divider />

      {/* Buttons Section */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Buttons</Title>}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          
          <Paragraph>
            Buttons are used to perform actions within the current page or flow. They represent the primary way users trigger commands like submitting forms, saving changes, or confirming actions.
          </Paragraph>

          <Alert
            message="Detailed Documentation"
            description={
              <Text>
                For complete button specifications, variants, and usage examples, see the{' '}
                <Link href="?path=/story/ant-design-button--playground">Button component documentation</Link>.
              </Text>
            }
            type="info"
            showIcon
          />

          {/* Button Examples */}
          <Title level={4}>Button Types & Usage</Title>
          
          <ExampleCard title="Primary Actions" type="do">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text>Use for the main action on a page or in a dialog</Text>
              <Space wrap>
                <Button type="primary" icon={<SaveOutlined />}>Save Changes</Button>
                <Button type="primary">Submit Form</Button>
                <Button type="primary">Confirm Booking</Button>
              </Space>
            </Space>
          </ExampleCard>

          <ExampleCard title="Secondary Actions">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text>Use for secondary or less important actions</Text>
              <Space wrap>
                <Button>Cancel</Button>
                <Button>Reset</Button>
                <Button icon={<DownloadOutlined />}>Download</Button>
              </Space>
            </Space>
          </ExampleCard>

          <ExampleCard title="Destructive Actions">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text>Use for actions that delete or remove data</Text>
              <Space wrap>
                <Button danger type="primary">Delete Account</Button>
                <Button danger>Remove Item</Button>
              </Space>
            </Space>
          </ExampleCard>

          <ExampleCard title="Text & Link Buttons">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Text>Use for tertiary actions or when minimal emphasis is needed</Text>
              <Space wrap>
                <Button type="text">Skip</Button>
                <Button type="link">Learn more</Button>
                <Button type="link" icon={<ArrowRightOutlined />}>View details</Button>
              </Space>
            </Space>
          </ExampleCard>

          {/* Design Specifications */}
          <Divider orientation="left">Design Specifications</Divider>
          
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Sizes">
              <Space wrap>
                <Button size="large">Large</Button>
                <Button>Default</Button>
                <Button size="small">Small</Button>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="States">
              <Space wrap>
                <Button type="primary">Default</Button>
                <Button type="primary" loading>Loading</Button>
                <Button type="primary" disabled>Disabled</Button>
              </Space>
            </Descriptions.Item>
            <Descriptions.Item label="With Icons">
              <Space wrap>
                <Button type="primary" icon={<SaveOutlined />}>Save</Button>
                <Button icon={<DownloadOutlined />}>Download</Button>
              </Space>
            </Descriptions.Item>
          </Descriptions>

          {/* Button Guidelines */}
          <Alert
            message="Button Best Practices"
            description={
              <ul style={{ marginBottom: 0, paddingLeft: 20 }}>
                <li>Use clear, action-oriented labels (Save, Submit, Delete)</li>
                <li>Limit primary buttons to one per section</li>
                <li>Place primary action on the right in forms</li>
                <li>Use consistent button sizes within the same context</li>
                <li>Provide visual feedback on hover and click</li>
              </ul>
            }
            type="success"
            showIcon
            icon={<CheckCircleOutlined />}
          />

        </Space>
      </Card>

      <Divider />

      {/* Links Section */}
      <Card title={<Title level={2} style={{ margin: 0 }}>Links</Title>}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          
          <Paragraph>
            Links are used to navigate users to other pages, sections, or external resources. In Partners, links must always be visually recognizable and accessible.
          </Paragraph>

          {/* Typography Specifications */}
          <Title level={4}>Typography</Title>
          
          <Alert
            message="No Dedicated Link Styles in Figma"
            description="There are no dedicated link text styles in Figma. Designers should apply underline manually using the keyboard shortcut Cmd + U. This rule applies to all text styles, regardless of hierarchy."
            type="warning"
            showIcon
            icon={<WarningOutlined />}
            style={{ marginBottom: 16 }}
          />

          <Card size="small" style={{ background: '#fafafa' }}>
            <Descriptions bordered column={1} size="small">
              <Descriptions.Item label="Body text links">
                For <Tag>Body MD</Tag> and <Tag>Body SM</Tag> text styles, apply links using the <Tag color="blue">Strong</Tag> variation instead of the default weight.
              </Descriptions.Item>
              <Descriptions.Item label="Underline requirement">
                The <Text strong>underline is mandatory</Text> to ensure links remain distinguishable from surrounding text.
              </Descriptions.Item>
              <Descriptions.Item label="Accessibility">
                Avoid relying on color alone to indicate interactivity.
              </Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Color Specifications */}
          <Divider orientation="left">Color Specifications</Divider>

          <Row gutter={[16, 16]}>
            <Col span={6}>
              <ColorSwatch 
                color="text-brand (500)"
                hex="#0C76C7"
                label="Default"
              />
            </Col>
            <Col span={6}>
              <ColorSwatch 
                color="text-brand-secondary (600)"
                hex="#0B66AD"
                label="Hover"
              />
            </Col>
            <Col span={6}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    border: '3px solid #1890ff',
                    marginBottom: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text strong style={{ color: '#0C76C7' }}>Focus</Text>
                </div>
                <Text strong style={{ display: 'block', fontSize: 12 }}>Focus</Text>
                <Text type="secondary" style={{ fontSize: 11 }}>Focus ring</Text>
                <Text type="secondary" style={{ display: 'block', fontSize: 11 }}>(accessibility)</Text>
              </div>
            </Col>
            <Col span={6}>
              <ColorSwatch 
                color="Muted blue"
                hex="#5B8FC7"
                label="Visited"
              />
            </Col>
          </Row>

          {/* Link Examples */}
          <Divider orientation="left">Link Examples</Divider>

          <ExampleCard title="Inline Text Links" type="do">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Paragraph>
                This is a paragraph with an <Link href="#" strong underline>inline link</Link> that follows our guidelines. The link is underlined and uses the strong weight for Body text styles.
              </Paragraph>
              <Paragraph>
                Learn more about our <Link href="#" strong underline>privacy policy</Link> and <Link href="#" strong underline>terms of service</Link>.
              </Paragraph>
            </Space>
          </ExampleCard>

          <ExampleCard title="Standalone Links">
            <Space direction="vertical">
              <Link href="#" strong underline>View all documentation</Link>
              <Link href="#" strong underline icon={<ArrowRightOutlined />}>Go to dashboard</Link>
              <Link href="#" strong underline target="_blank">External resource ↗</Link>
            </Space>
          </ExampleCard>

          {/* Usage Notes */}
          <Alert
            message="Link Usage Guidelines"
            description={
              <Space direction="vertical" style={{ width: '100%' }}>
                <Paragraph style={{ marginBottom: 8 }}>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                  <Text strong>DO:</Text> Use underlined text only for clickable links
                </Paragraph>
                <Paragraph style={{ marginBottom: 8 }}>
                  <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                  <Text strong>DO:</Text> Use buttons for primary actions
                </Paragraph>
                <Paragraph style={{ marginBottom: 8 }}>
                  <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                  <Text strong>DON'T:</Text> Use orange, red, or grey for links on white backgrounds
                </Paragraph>
                <Paragraph style={{ marginBottom: 0 }}>
                  <WarningOutlined style={{ color: '#ff4d4f', marginRight: 8 }} />
                  <Text strong>DON'T:</Text> Rely on color alone to indicate interactivity
                </Paragraph>
              </Space>
            }
            type="info"
            showIcon
          />

          {/* Contrast Examples */}
          <Divider orientation="left">Accessibility & Contrast</Divider>

          <Row gutter={16}>
            <Col span={12}>
              <Card 
                size="small" 
                title={
                  <Space>
                    <CheckCircleOutlined style={{ color: '#52c41a' }} />
                    <Text strong>✓ Good Contrast</Text>
                  </Space>
                }
                style={{ borderColor: '#52c41a' }}
              >
                <div style={{ background: '#fff', padding: 16, borderRadius: 4 }}>
                  <Link href="#" style={{ color: '#0C76C7', textDecoration: 'underline', fontWeight: 600 }}>
                    Blue link on white background
                  </Link>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    This link meets WCAG AA contrast requirements
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card 
                size="small" 
                title={
                  <Space>
                    <WarningOutlined style={{ color: '#ff4d4f' }} />
                    <Text strong>✗ Poor Contrast</Text>
                  </Space>
                }
                style={{ borderColor: '#ff4d4f' }}
              >
                <div style={{ background: '#fff', padding: 16, borderRadius: 4 }}>
                  <Text style={{ color: '#999', textDecoration: 'underline' }}>
                    Grey link on white background
                  </Text>
                  <Paragraph style={{ marginTop: 8, marginBottom: 0 }}>
                    This link fails contrast requirements
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>

        </Space>
      </Card>

      {/* Decision Tree */}
      <Card 
        title={<Title level={2} style={{ margin: 0 }}>When to Use Buttons vs Links</Title>}
        style={{ background: '#f0f5ff' }}
      >
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          
          <ExampleCard title="Use a BUTTON when:">
            <Space direction="vertical">
              <Text>• Submitting a form</Text>
              <Text>• Saving changes</Text>
              <Text>• Opening a modal or dialog</Text>
              <Text>• Confirming or canceling an action</Text>
              <Text>• Triggering a process (e.g., "Generate Report")</Text>
              <Text>• Deleting or modifying data</Text>
            </Space>
          </ExampleCard>

          <ExampleCard title="Use a LINK when:">
            <Space direction="vertical">
              <Text>• Navigating to another page</Text>
              <Text>• Jumping to a section on the same page</Text>
              <Text>• Opening an external resource</Text>
              <Text>• Downloading a file (in some contexts)</Text>
              <Text>• Providing supplementary information</Text>
              <Text>• "Learn more" or "View details" actions</Text>
            </Space>
          </ExampleCard>

          <Alert
            message="Rule of Thumb"
            description="If clicking the element performs an action or changes state → use a Button. If clicking the element navigates somewhere → use a Link."
            type="success"
            showIcon
          />

        </Space>
      </Card>

      {/* Key Takeaways */}
      <Card 
        title={<Title level={2} style={{ margin: 0 }}>Key Takeaways</Title>}
        style={{ background: '#fffbe6' }}
      >
        <Space direction="vertical" size="middle">
          <Paragraph>
            <Tag color="blue">1</Tag>
            <Text strong>Buttons do something</Text> — they trigger actions
          </Paragraph>
          <Paragraph>
            <Tag color="blue">2</Tag>
            <Text strong>Links go somewhere</Text> — they navigate
          </Paragraph>
          <Paragraph>
            <Tag color="blue">3</Tag>
            <Text strong>Always underline links</Text> for accessibility
          </Paragraph>
          <Paragraph>
            <Tag color="blue">4</Tag>
            <Text strong>Use blue (#0C76C7)</Text> for links on white backgrounds
          </Paragraph>
          <Paragraph>
            <Tag color="blue">5</Tag>
            <Text strong>Apply strong weight</Text> to Body MD/SM link text
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            <Tag color="blue">6</Tag>
            <Text strong>Maintain consistency</Text> across the entire application
          </Paragraph>
        </Space>
      </Card>

    </Space>
  </div>
);