import React, { useEffect, useState } from "react";
import "./Personnel.css";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import introduce1 from "../../assets/imgs/introduce1.png";
import introduce2 from "../../assets/imgs/introduce2.png";
import introduce3 from "../../assets/imgs/introduce3.png";
import person1 from "../../assets/imgs/person1.png";
import introduceperson1 from "../../assets/imgs/introduceperson1.png";
import introduceperson2 from "../../assets/imgs/introduceperson2.png";
import introduceperson3 from "../../assets/imgs/introduceperson3.png";
import introduceperson4 from "../../assets/imgs/introduceperson4.png";
const Personnel = () => {
  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA3, inView: inViewA3 } = useInView({ triggerOnce: true });
  const { ref: refA4, inView: inViewA4 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });
  const { ref: refA7, inView: inViewA7 } = useInView({ triggerOnce: true });
  const { ref: refA8, inView: inViewA8 } = useInView({ triggerOnce: true });
  // const { ref: refA9, inView: inViewA9 } = useInView({ triggerOnce: true });
  const { ref: refA10, inView: inViewA10 } = useInView({ triggerOnce: true });
  const { ref: refA11, inView: inViewA11 } = useInView({ triggerOnce: true });
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const updateCheck = () => {
      if (window.innerWidth <= 768) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    };
    updateCheck();
    window.addEventListener("resize", updateCheck);
    return () => {
      window.removeEventListener("resize", updateCheck);
    };
  }, []);
  return (
    <div>
      <div className=" person w-1440 w-350  w-350 py-24 bg-white flex-col justify-start items-start ">
        <div className="personcont h-96 px-[100px] py-16 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch h-64 flex-col justify-start items-center gap-12 flex">
            <div className="h-64 msmsm flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch flex-col justify-center items-center gap-2.5 flex">
                <div className="w-full dnns justify-center items-center flex gap-3">
                  <div className="text-center text-[#002740] text-32 text-[56px] font-bold font-space-grotesk ">
                    Đội ngũ
                  </div>
                  <div className="mrpr ">
                    <ProfessionalBanner title="Nhân sự" />
                  </div>
                </div>
                <div className=" textper w-350 self-stretch text-center text-32 text-[#002740] text-[56px] font-bold font-space-grotesk ">
                  Tận Tâm - Chuyên Nghiệp - Hiệu Quả
                </div>
              </div>
              <div className="w-[654px] w-350 text-center text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                Khám phá đội ngũ luật sư và chuyên gia pháp lý hàng đầu tại
                Apolo Lawyers, luôn sẵn sàng hỗ trợ và bảo vệ quyền lợi của bạn.
              </div>
            </div>
          </div>
        </div>
        <div className=" ctlc w-full px-[100px] py-20 justify-start items-center inline-flex">
          <div className="clt grow shrink basis-0 self-stretch rounded-2xl shadow justify-start items-center flex">
            <img
              className="img-ctl grow shrink basis-0 self-stretch rounded-tl-2xl rounded-bl-2xl"
              src={person1}
            />
            <div className="grow aboutctl shrink basis-0 px-10 py-20 bg-[#f4f4f4]/95 rounded-tr-2xl rounded-br-2xl flex-col justify-start items-start gap-10 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-14 flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch text-[#002740]  text-32 text-5xl font-bold font-space-grotesk leading-[56px]">
                    Chúng tôi là ai?
                  </div>
                </div>
                <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Tại Apolo Lawyers, chúng tôi tin rằng con người là yếu tố cốt
                  lõi tạo nên thành công và sự phát triển bền vững. Đội ngũ nhân
                  sự của chúng tôi bao gồm các luật sư, chuyên gia pháp lý và
                  nhân viên tận tâm, chuyên nghiệp, luôn mang đến dịch vụ pháp
                  lý chất lượng cao.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dn-us py-20 flex-col justify-center items-center gap-2 flex">
          <div
            ref={refA3}
            className={`${
              inViewA3 ? "animate-slide-top" : ""
            } text-dn-mobile text-48 text-32 text-center text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]`}
          >
            Đội ngũ luật sư
          </div>
          <Row
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center grid-mobile`}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className="rounded-full border border-[#40e0d0]"
                src={introduceperson1}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson2}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson3}
              />
            </Col>
            <Col sm={3} className="justify-center items-center col-item flex">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson4}
              />
            </Col>
          </Row>
          <Row
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center grid-mobile`}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className="rounded-full border border-[#40e0d0]"
                src={introduceperson1}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson2}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson3}
              />
            </Col>
            <Col sm={3} className="justify-center items-center col-item flex">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson4}
              />
            </Col>
          </Row>
          <ButtonCustom
            title="Xem thêm"
            from="#40e0d0"
            to="#48d1cc"
            color="text-white"
          />
        </div>
        <div className="dn-us py-20 flex-col justify-center items-center gap-2 flex">
          <div
            ref={refA3}
            className={`${
              inViewA3 ? "animate-slide-top" : ""
            } text-dn-mobile text-48 text-32 text-center text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]`}
          >
            Chuyên gia pháp lý
          </div>
          <Row
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center grid-mobile`}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className="rounded-full border border-[#40e0d0]"
                src={introduceperson1}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson2}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson3}
              />
            </Col>
            <Col sm={3} className="justify-center items-center col-item flex">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson4}
              />
            </Col>
          </Row>
          <Row
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center grid-mobile`}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className="rounded-full border border-[#40e0d0]"
                src={introduceperson1}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson2}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson3}
              />
            </Col>
            <Col sm={3} className="justify-center items-center col-item flex">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson4}
              />
            </Col>
          </Row>
          <ButtonCustom
            title="Xem thêm"
            from="#40e0d0"
            to="#48d1cc"
            color="text-white"
          />
        </div>

        <Row className="gtkb w-full px-[100px] py-20 flex ">
          <Col
            sm={6}
            ref={refA5}
            className={`${inViewA5 ? "animate-slide-bottom" : ""}`}
          >
            <div className="flex-col justify-start items-start flex gap-6 gtkb-contaner ">
              <div className="text-32 text-48 text-gtkb text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
                Lợi ích khi làm việc <br />
                với chúng tôi
              </div>
              <div
                className="text-16 desc-gtkb self-stretch text-[#606670] text-base font-normal font-open-sans leading-7"
                style={{ height: "calc(200px - 20px)" }}
              >
                Tại Apolo Lawyers, chúng tôi không ngừng nỗ lực để tạo ra sự
                khác biệt trong từng dịch vụ pháp lý mà chúng tôi cung cấp. Các
                giá trị cốt lõi dưới đây là nền tảng giúp chúng tôi mang đến cho
                khách hàng những giải pháp pháp lý tốt nhất
              </div>
            </div>
          </Col>
          <Col
            ref={refA6}
            className={`${
              inViewA6 ? "animate-slide-top" : ""
            } flex asd justify-end `}
            sm={6}
          >
            <div className="flex flex100 ">
              <div className="sdasd">
                <div
                  className="hoes"
                  style={{
                    display: "grid",
                    gap: "15px",
                    gridTemplateColumns: "repeat(2, 1fr)",
                  }}
                >
                  <div className="c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-40 text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                      01
                    </div>
                    <div className="text-24 text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                      Chất Lượng Dịch Vụ
                    </div>
                  </div>
                  <div className=" c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-40 text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                      02
                    </div>
                    <div className="text-24 text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                      Tâm Huyết Nghề Nghiệp
                    </div>
                  </div>
                  <div className="c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-40 self-stretch text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                      03
                    </div>
                    <div className="text-24 self-stretch text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                      Đổi Mới Liên Tục
                    </div>
                  </div>
                  <div className="c100 px-4 pt-4 pb-16 rounded-2xl  border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="text-40 self-stretch text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                      04
                    </div>
                    <div className="text-24 self-stretch text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                      Đạo đức nghề nghiệp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="ttcontainer relative w-full pr-[100px] justify-start items-center inline-flex">
          <div
            ref={refA10}
            className={`${
              inViewA10 ? "animate-slide-top" : ""
            } ttnd pl-[100px] pr-[150px] py-24 bg-[#f4f4f4]/95 rounded-2xl flex-col justify-start items-start gap-6 inline-flex`}
            style={{ width: "60%" }}
          >
            <div className="ttdf self-stretch h-max flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-[#002740] text-32 text-48  font-bold font-space-grotesk leading-[56px]">
                Cơ Hội Nghề Nghiệp
              </div>
              <div className=" text-16 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                Apolo Lawyers luôn tìm kiếm những nhân tài mới. Nếu bạn có đam
                mê và mong muốn làm việc trong môi trường chuyên nghiệp, hãy gia
                nhập đội ngũ của chúng tôi.
              </div>
              <ButtonCustom
                title="Xem cơ hội nghề nghiệp"
                from="#40e0d0"
                to="#48d1cc"
                color="text-white"
              />
            </div>
          </div>
          <div
            style={{ right: "70px" }}
            ref={refA11}
            className={`${
              inViewA11 ? "animate-slide-right" : ""
            } absolute move `}
          >
            <img
              className=" object-cover w-full rounded-2xl wmove"
              src={introduce1}
              style={{ width: "630px" }}
            />
          </div>
        </div>
        <Row className="w-full px-[100px] py-20 gk ">
          <Col
            sm={6}
            ref={refA7}
            className={`${inViewA7 ? "animate-slide-left" : ""}`}
          >
            <img className=" rounded-2xl" src={introduce2} />
          </Col>
          <Col
            sm={6}
            ref={refA8}
            className={`${inViewA8 ? "animate-slide-bottom" : ""}`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div className="adasd flex-col justify-start items-start gap-6 flex">
                <div className="  flex-col justify-start items-start gap-4 flex">
                  <div className="text-gk text-48 text-32 text-[#002740] text-4xl font-bold font-space-grotesk ">
                    Cam Kết Của Chúng Tôi
                  </div>
                </div>
                <div className="des-gk text-16 text-black text-base font-normal font-open-sans leading-normal">
                  Chúng tôi cam kết cung cấp các dịch vụ pháp lý chất lượng,
                  nhanh chóng và hiệu quả. Chúng tôi luôn sẵn sàng lắng nghe và
                  giải quyết mọi vấn đề pháp lý của bạn với tinh thần trách
                  nhiệm cao nhất. Hãy để Apolo Lawyers trở thành đối tác pháp lý
                  tin cậy của bạn!
                </div>
              </div>
              <div className="flex buttnsd justify-start mt-4 items-start w-full">
                <ButtonCustom
                  title="Liên hệ ngay"
                  from="#40e0d0"
                  to="#48d1cc"
                  color="text-white"
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="w-full zxc pt-16">
          <div
            ref={refA5}
            className={` ${
              inViewA5 ? "animate-slide-bottom" : ""
            } w-full h-max baovecontainer px-[100px] flex-col justify-start items-start gap-2.5 pb-20 flex`}
          >
            <div className=" baove w-full h-max px-[200px] py-10 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center gap-10 flex">
              <div className="asd h-48 flex-col justify-start items-center gap-6 flex">
                <div className="text-bvvvv text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                  Bảo vệ {check && <br />} Quyền lợi của Bạn {!check && <br />}{" "}
                  Ngay Hôm Nay!
                </div>
                <div className="descbv w-[654px] text-center text-white text-base font-normal font-open-sans leading-7">
                  Đừng để những vấn đề pháp lý cản trở bước tiến của bạn. Hãy để
                  Apolo Lawyers đồng hành và bảo vệ quyền lợi của bạn một cách
                  chuyên nghiệp và tận tâm.
                </div>
              </div>
              <ButtonCustom
                title="Liên hệ ngay"
                from="#fff"
                to="#fff"
                color="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personnel;
