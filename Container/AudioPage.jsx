import React from 'react';
import { DatePicker, message, Button, Icon, Row, Col } from 'antd'
import '../node_modules/antd/lib/date-picker/style/index.css'
import '../node_modules/antd/lib/button/style/index.css'
import '../node_modules/antd/lib/row/style/index.js'
import '../node_modules/antd/lib/col/style/index.js'

class AudioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    render() {
        return (
            <div>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={value => this.handleChange(value)} />
                    <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
                </div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="ghost">Ghost</Button>
                    <Button type="dashed">Dashed</Button>
                </div>
                <Icon type="step-backward" />
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">.ant-col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">.ant-col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">.ant-col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">.ant-col-6</div>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default AudioSection


