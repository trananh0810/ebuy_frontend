import React, {Component, useState} from 'react';
import {Button, Form, Input, Modal} from "antd";

function Profile() {
    const [isShowModal, setIsShowModal] = useState(false);

    const onCancel = () => {
        setIsShowModal(false);
    }

    const showModal = () => setIsShowModal(true);

    return (
        <div className="row pt-4">
            <div className="col-lg-4 col-xlg-3 col-md-5">
                <div className="card">
                    <div className="card-block" style={{height:'271px'}}>
                        <center className="m-t-30"><img src="../assets/images/users/5.jpg" className="img-circle"
                                                        width={150}/>
                            <h4 className="card-title m-t-10">Hanna Gover</h4>
                        </center>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 col-xlg-9 col-md-7">
                <div className="card">
                    <div className="card-block">
                        <form className="form-horizontal form-material">
                            <div className="form-group">
                                <label className="col-md-12">Full Name</label>
                                <div className="col-md-12">
                                    <input type="text" className="form-control form-control-line" value="Trân Đức Anh"
                                           disabled/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example-email" className="col-md-12">Email</label>
                                <div className="col-md-12">
                                    <input type="email" className="form-control form-control-line" name="example-email"
                                           id="example-email" disabled value="anhtd@gmail.com"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <Button type="primary" className="mr-2">Cập nhật thông tin</Button>
                                    <Button type="primary" onClick={showModal}>Đổi mật khẩu</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Modal title="Thay đổi mật khẩu" visible={isShowModal} cancelText="Hủy" okText="Đổi"
                onCancel={onCancel}>
                <Form>
                    <Form.Item label="Mật khẩu hiện tại:">
                        <Input type="password" />
                    </Form.Item>

                    <Form.Item label="Mật khẩu mới:">
                        <Input type="password" />
                    </Form.Item>

                    <Form.Item label="Nhập lại mật khẩu mới:">
                        <Input type="password" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Profile;
