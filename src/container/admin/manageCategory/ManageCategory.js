import React, {useState} from 'react';
import {Button, Form, Icon, Input, Modal, Popconfirm, Table, Upload} from "antd";
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';

const dataSource = [
    {
        key: '1',
        stt: '1',
        name: 'Danh mục 1',
        slogan: 'Slogan 1',
        thumnail: 'Thumnail 1',
    },
    {
        key: '2',
        stt: '2',
        name: 'Danh mục 2',
        slogan: 'Slogan 2',
        thumnail: 'Thumnail 2',
    }
];

function ManageCategory() {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [isShowModal, setIsShowModal] = useState(false);

    const imageUrl = "";

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
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Slogan',
            dataIndex: 'slogan',
            key: 'slogan',
        },
        {
            title: 'Ảnh',
            dataIndex: 'thumnail',
            key: 'thumnail',
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
                    <Popconfirm title="Bạn có muốn xóa danh mục này không?" okText="Đồng ý" cancelText="Hủy">
                        <Icon type="delete" theme="twoTone" twoToneColor="red"/>
                    </Popconfirm>
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

    const uploadButton = (
        <div>
            {/*<Icon type={this.state.loading ? 'loading' : 'plus'} />*/}
            <Icon type={'plus'} />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <React.Fragment>
            <div className="container-fluid bg-white rounded pt-4">
                <div className="row mt-2">
                    <div className="col-12">
                        <Button type="primary" onClick={showModal}>
                            <Icon type="plus" />
                            Thêm mới
                        </Button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <Table dataSource={dataSource} columns={columns} bordered/>
                    </div>
                </div>
            </div>

            <Modal title="Thêm mới danh mục" visible={isShowModal} onOk={onOK} onCancel={onCancel} okText="Lưu"
                   cancelText="Hủy">
                <Form>
                    <Form.Item label="Tên danh mục:" className="mb-2">
                        <Input/>
                    </Form.Item>

                    <Form.Item label="Slogan:" className="mb-2">
                        <Input/>
                    </Form.Item>

                    <Form.Item label="Ảnh:" className="mb-2">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            // beforeUpload={beforeUpload}
                            // onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </React.Fragment>
    );
}

export default ManageCategory;
