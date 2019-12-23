import React, {useState} from 'react';
import {Button, Form, Icon, Input, Modal, Popconfirm, DatePicker, Select, Table, List, Avatar} from "antd";
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';

const {Option} = Select;
const {RangePicker} = DatePicker;

const dataSource = [
    {
        key: '1',
        stt: '1',
        orderCode: '1',
        buyer: 'mike',
        phone: '0987654321',
        address: "Hà Nội",
        status: "Chờ xác nhận"
    },
    {
        key: '2',
        stt: '2',
        orderCode: '2',
        buyer: 'john',
        phone: '0123456789',
        address: "Tuyên Quang",
        status: "Hủy"
    }
];

const dataList = [
    {
        title: 'Sản phẩm 1 x1',
    },
    {
        title: 'Sản phẩm 2 x1',
    },
    {
        title: 'Sản phẩm 3 x1',
    },
    {
        title: 'Sản phẩm 4 x1',
    },
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
            title: 'Mã đơn hàng',
            dataIndex: 'orderCode',
            key: 'orderCode',
            width:150,
            ...getColumnSearchProps('orderCode'),
        },
        {
            title: 'Người mua',
            dataIndex: 'buyer',
            key: 'buyer',
            ...getColumnSearchProps('buyer'),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'Địa chỉ nhận hàng',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            filters: [{text: 'Chờ xác nhận', value: 'Chờ xác nhận'}, {text: 'Đã xác nhận', value: 'Đã xác nhận'},
                        {text: 'Đang giao hàng', value: 'Đang giao hàng'}, {text: 'Thành công', value: 'Thành công'},
                        {text: 'Hủy', value: 'Hủy'}],
            onFilter: (value, record) => record.status.includes(value)
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <React.Fragment>
                    <Button type="link" className="p-0" onClick={showModal}>
                        <Icon type="zoom-in"/>
                    </Button>
                </React.Fragment>
            ),
            width: 50
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
                        <RangePicker format="DD/MM/YYYY"/>
                        <Button type="primary" className="ml-2 mr-2">
                            <Icon type="filter"/>
                            Lọc
                        </Button>
                        <Button type="primary">
                            <Icon type="reload"/>
                            Reset
                        </Button>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12">
                        <Table dataSource={dataSource} columns={columns} bordered/>
                    </div>
                </div>
            </div>

            <Modal title="Chi tiết đơn hàng:" visible={isShowModal} onOk={onOK} onCancel={onCancel}
                   okText="OK" cancelText="Đóng">
                <div className="row">
                    <div className="col-4 font-weight-bold">Mã đơn hàng:</div>
                    <div className="col-8 font-weight-normal">123</div>
                </div>
                <div className="row">
                    <div className="col-4 font-weight-bold">Người mua:</div>
                    <div className="col-8 font-weight-normal">Nguyễn Văn A</div>
                </div>
                <div className="row">
                    <div className="col-4 font-weight-bold">Số điện thoại:</div>
                    <div className="col-8 font-weight-normal">0987654321</div>
                </div>
                <div className="row">
                    <div className="col-4 font-weight-bold">Địa chỉ:</div>
                    <div className="col-8 font-weight-normal">Đồng Tĩnh - Tam Dương - Vĩnh Phúc</div>
                </div>
                <div className="row">
                    <div className="col-4 font-weight-bold" style={{lineHeight:'32px'}}>
                        Trạng thái:
                    </div>
                    <div className="col-8 font-weight-normal">
                        Chờ xác nhận
                        <Button type="link" className="ml-2">Xác nhận</Button>
                        <Popconfirm
                            title="Bạn có muốn hủy đơn hàng này không?"
                            // onConfirm={confirm}
                            // onCancel={cancel}
                            okText="Đồng ý"
                            cancelText="Không"
                        >
                            <Button type="link" className="ml-2 text-danger">Hủy</Button>
                        </Popconfirm>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 font-weight-bold" >
                        Tổng tiền:
                    </div>
                    <div className="col-8 font-weight-normal text-danger">
                        10.000.000đ
                    </div>
                </div>

                <List
                    itemLayout="horizontal"
                    dataSource={dataList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar shape="square" size={50} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="1.000.000đ"
                            />
                        </List.Item>
                    )}
                />
            </Modal>
        </React.Fragment>
    );
}

export default ManageAccount;
