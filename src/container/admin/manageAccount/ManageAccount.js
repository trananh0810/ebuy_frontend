import React, {useState} from 'react';
import {Button, Form, Icon, Input, Modal, Popconfirm, Select, Table} from "antd";
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';

const {Option} = Select;

const dataSource = [
    {
        key: '1',
        stt: '1',
        name: 'Mike',
        email: 'mike@gmail.com',
        role: 'Quản lý',
    },
    {
        key: '2',
        stt: '2',
        name: 'John',
        email: 'john@gmail.com',
        role: 'Khách hàng',
    }
];


function ManageAccount() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [isShowModal, setIsShowModal] = useState(false);

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        // this.searchInput = node;
                        setSearchInput(node);
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Button
                    type="primary"
                    onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    icon="search"
                    size="small"
                    style={{width: 90, marginRight: 8}}
                >
                    Search
                </Button>
                <Button onClick={() => handleReset(clearFilters)} size="small" style={{width: 90}}>
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{color: filtered ? '#1890ff' : undefined}}/>
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select());
            }
        },
        render: text => searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ) : (
            text
        )
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: 70
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Quyền',
            dataIndex: 'role',
            key: 'role',
            filters: [{text: 'Quản lý', value: 'Q'}, {text: 'Khách hàng', value: 'h'}],
            onFilter: (value, record) => record.role.includes(value)
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <React.Fragment>
                    <Button type="link" className="p-0" onClick={showModal}>
                        <Icon type="edit" theme="twoTone" className="mr-2"/>
                    </Button>
                    <Popconfirm title="Bạn có muốn khóa tài khoản này không?" okText="Đồng ý" cancelText="Hủy">
                        <Icon type="lock" theme="twoTone" twoToneColor="red"/>
                    </Popconfirm>
                    {/*<Popconfirm title="Bạn có muốn mở khóa tài khoản này không?" okText="Đồng ý" cancelText="Hủy">*/}
                    {/*    <Icon type="unlock" theme="twoTone" twoToneColor="red"/>*/}
                    {/*</Popconfirm>*/}
                </React.Fragment>
            ),
            width: 80
        }
    ];

    const showModal = () => setIsShowModal(true);

    const onOK = () => {
    }

    const onCancel = () => {
        setIsShowModal(false);
    }

    return (
        <React.Fragment>
            <div className="container-fluid bg-white rounded pt-4">
                <div className="row mt-2">
                    <div className="col-12">
                        <Table dataSource={dataSource} columns={columns} bordered/>
                    </div>
                </div>
            </div>

            <Modal title="Thay đổi quyền cho tài khoản" visible={isShowModal} onOk={onOK} onCancel={onCancel} okText="Lưu" cancelText="Hủy">
                <Form>
                    <Form.Item label="Loại quyền tài khoản:">
                        <Select defaultValue="Khách hàng">
                            <Option value="Quản lý">Quản lý</Option>
                            <Option value="Khách hàng">Khách hàng</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </React.Fragment>
    );
}

export default ManageAccount;
