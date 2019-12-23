import React, {Component} from 'react';
import '../../../assets/css/intro.css'

let contextPath = window.location.origin;

function Introduction() {
    return (
        <React.Fragment>
            {/*Banner*/}
            <section className="sec-banner">
                <img className="img-fluid" src={`${contextPath}/assets/images/sng-archive-banner.webp`} alt=""/>
            </section>
            {/*End banner*/}

            <section id="sec-content" className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-justify">
                                Theo thống kê của tạp chí The Nature ngày 02-9-2015, trên toàn thế giới có khoảng 3000
                                tỷ cây xanh <i>(cây con, cây đang triển và cây trưởng thành)</i>. Mỗi năm có khoảng 15
                                tỷ cây trưởng thành bị khai thác và con số này sẽ tăng lên theo từng năm, tuy nhiên chỉ
                                có khoảng 5 tỷ cây được trồng mới. Và cứ theo như vậy thì chưa đến 100 năm nữa, trái đất
                                chúng ta sẽ mất đi khoảng 1/3 số cây xanh hiện nay.
                            </p>
                            <p className="text-justify">
                                Việc khai thác gỗ tràn lan, số cây trồng lại thì không bù đắp được gây ra những hậu quả
                                rất lớn : biến đổi khí hậu, mất cân bằng hệ sinh thái, lũ lụt,…Mà không kể đâu xa, trong
                                tháng 8 vừa qua đã diễn ra trận lũ lịch sử tại tỉnh Thanh Hóa gây thiệt hại to lớn về
                                người cũng như tài sản.
                            </p>
                            <p className="text-justify">
                                Số cây xanh được khai thác với nhiều mục đích khác nhau : đốt nương làm dẫy, làm thủy
                                điện, khai thác gỗ làm vật liệu xây dựng và một trong những mục đích nữa đó làm sản xuất
                                giấy.
                            </p>
                            <p className="text-justify">
                                Giấy là một thứ rất quen thuộc trong cuộc sống hàng ngày của chúng ta. Theo thống kê của
                                Viện Công Nghiệp Giấy năm 2018, nước ta sản xuất 3,674 triệu tấn giấy và để sản xuất
                                được lượng giấy này thì cẩn phải khai thác một lượng gỗ rất rất lớn.
                            </p>
                            <p className="text-justify">
                                Ở hầu hết các siêu thị tại Việt Nam hiện nay, chúng ta có thể dễ dàng nhận thấy các sản
                                phẩm bày bán được gắn rất nhiều nhãn mác bằng giấy, được bọc trong những khay nhựa, túi
                                ni lông.
                            </p>
                            <p className="text-justify">
                                Và để giải quyết vấn đề này, chúng em đã lên ý tưởng và thực hiện dự án <b>Ứng dụng đơn
                                hàng điện tử trong mua sắm – eBuy</b>.
                            </p>
                            <div className="w-100 text-center">
                                <img className="img-fluid" src="./assets/images/logo_ebuy.png" alt=""/>
                            </div>
                            <p className="text-justify mb-0">
                                <b>eBuy</b> sẽ giúp:
                            </p>
                            <p className="text-justify mb-0">
                                - Giảm thiểu lượng giấy và túi bóng được tiêu thụ.
                            </p>
                            <p className="text-justify">
                                - Hàng hóa được chuyển đến cho người mua hàng, người mua hàng không cần phải đến trực
                                tiếp cửa hàng, từ đó giảm được lượng khí thải từ các phương tiện giao thông.
                            </p>
                            <p className="text-justify mb-0">
                                Các chức năng chính của eBuy:
                            </p>
                            <p className="text-justify mb-0">
                                - Quét mã QR để thêm sản phẩm vào giỏ hàng.
                            </p>
                            <p className="text-justify">
                                - Đặt hàng trực tuyến.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Introduction;
