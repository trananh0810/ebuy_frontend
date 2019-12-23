import React, {Component} from 'react';

function ModalLogin() {
    return (
        <div className="modal fade" id="modalLogin" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId"
             aria-hidden="true">
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-white">Đăng nhập</h5>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="txtEmail">Tài khoản</label>
                            <input type="text" className="form-control rounded-custom" name="email" id="txtEmail"/>
                            <small id="helpId" className="form-text text-danger">Help text</small>
                            <label htmlFor="txtPassword" className="mt-2">Mật khẩu</label>
                            <input type="password" className="form-control rounded-custom" name="password"
                                   id="txtPassword"/>
                            <small id="helpId2" className="form-text text-danger">Help text</small>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary rounded-custom" data-dismiss="modal">
                            Đóng
                        </button>
                        <button type="button" className="btn btn-info rounded-custom">
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin;
