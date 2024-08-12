import React, { useEffect, useState } from "react";
import "./ Recruitment.css";
import Slider from "react-slick";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
// import { Col, Row } from "react-bootstrap";
import { Select } from "antd";
import td2 from "../../assets/imgs/Rectangle 17.png";
import "./ Recruitment.css";
import { useNavigate } from "react-router-dom";
const Recruitment = () => {
  const navigate = useNavigate()
  const [check, setCheck] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3.5);
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1.2);
        setCheck(true);
      } else {
        setCheck(false);
        setSlidesToShow(3);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    centerMode: false,
  };
  return (
    <div>
      <div
        className="py-24 w-350 w-1440  bg-white flex-col flex justify-center items-center td"
        style={{ margin: "0 auto" }}
      >
        <div className="h-[406px] px-[100px] py-16 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-full h-[278px] flex-col justify-start items-center gap-12 flex gap-recu">
            <div className="flex-col w-full justify-start items-center gap-6 flex">
              <div className="h-[102px] w-full flex-col justify-start items-center gap-3 flex">
                <div  className="w-full justify-start items-center inline-flex flex gap-3 mobile-re">
                  <div className="text-center text-[#002740] text-[56px] text-32 font-bold font-space-grotesk ">
                    Cơ hội nghề nghiệp tại
                  </div>
                  <div>
                    <ProfessionalBanner title="Apollo Lawyers" />
                  </div>
                </div>
              </div>
              <div className="w-[654px] w-350 text-center text-[#606670] text-base font-normal font-open-sans leading-7 des-recrui">
                Tham gia đội ngũ Apolo Lawyers và phát triển sự nghiệp pháp lý
                của bạn trong môi trường chuyên nghiệp và chất lượng.
              </div>
            </div>
            <ButtonCustom
              title="Ứng tuyển ngay"
              to="#48d1cc"
              color="text-white"
              from="#40e0d0"
            />
          </div>
        </div>
        <div className="w-full px-[100px] py-20 justify-start items-center inline-flex ax">
          <div className="grow shrink basis-0   rounded-2xl shadow justify-start items-center flex gnqd">
            <img
              className="img-rec grow shrink basis-0  rounded-tl-2xl rounded-bl-2xl"
              src={td2}
            />
            <div className="grow dvcls shrink basis-0 px-10 py-20 bg-[#f4f4f4]/95 rounded-tr-2xl rounded-br-2xl flex-col justify-start items-start gap-10 inline-flex">
              <div className=" h-[296px] flex-col justify-start items-start gap-6 flex">
                <div className="w-full h-[216px] flex-col justify-start items-start gap-4 flex gncenter">
                  <div className=" text-[#9ea8b6] text-16 text-2xl font-bold font-space-grotesk leading-loose text-gk">
                    Gia nhập đội quân Apolo Lawyers
                  </div>
                  <div className="text-32 desc-gn text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
                    Bạn là một mảnh ghép quan trọng mà Apolo Lawyers đang tìm
                    kiếm
                  </div>
                </div>
                <div className="descs-gn text-[#606670] text-base font-normal font-open-sans leading-7">
                  Tham gia đội ngũ Apolo Lawyers và phát triển sự nghiệp pháp lý
                  của bạn trong môi trường chuyên nghiệp và chất lượng.
                </div>
              </div>
              <ButtonCustom
                title="Xem vị trí ứng tuyển"
                to="#48d1cc"
                color="text-white"
                from="#40e0d0"
                onClick={()=> navigate('/tuyen-dung/luat-su-rieng')}
              />
            </div>
          </div>
        </div>
        <div className="w-full px-[100px] py-20 justify-start items-start gap-16 inline-flex why">
          <div className="w-[440px] why-heading w-350 flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-full text-[#002740] text-5xl text-32 font-bold text-mobile font-space-grotesk leading-[56px]">
              Tại sao chọn <br />
              Apolo Lawyers?
            </div>
            <div className="desc-why text-[#606670] text-base font-normal font-open-sans leading-7">
              Chúng tôi cung cấp môi trường làm việc chuyên nghiệp, cơ hội phát
              triển sự nghiệp vượt trội và sự hỗ trợ tận tâm từ đội ngũ lãnh
              đạo.
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="why-col justify-start items-center gap-6 inline-flex">
              <div className="items-why grow shrink basis-0 h-[200px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  01
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Chế Độ Đãi Ngộ Hấp Dẫn
                </div>
              </div>
              <div className=" items-why grow shrink basis-0 h-[200px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  02
                </div>
                <div className="items-why text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Nghỉ phép
                </div>
              </div>
              <div className="items-why grow shrink basis-0 h-[200px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  03
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Đào Tạo và Phát Triển
                </div>
              </div>
            </div>
            <div className="why-col justify-start items-center gap-6 inline-flex">
              <div className="items-why grow shrink basis-0 h-[200px] px-4 pt-4  rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  04
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Cơ Hội Thăng Tiến
                </div>
              </div>
              <div className="items-why grow shrink basis-0 h-[200px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  05
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Chuyên nghiệp và thân thiện
                </div>
              </div>
              <div className="items-why grow shrink basis-0 h-[200px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  06
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Team-building
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20 flex-col justify-center items-center gap-2.5 flex">
          <div className="w-full relative">
            <div className="h-[284px] outw w-full px-[100px] pt-12 pb-[100px] left-0 top-0 absolute bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] flex-col justify-start items-center gap-6 inline-flex">
              <div className="text-32 text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                Vị trí tuyển dụng
              </div>
              <div className="w-[654px] des-das w-350 text-center text-white text-base font-normal font-open-sans leading-7">
                Hãy gia nhập đội ngũ Apolo Lawyers để phát triển sự nghiệp pháp
                lý của bạn trong một môi trường chuyên nghiệp, hòa đồng và đầy
                cơ hội.
              </div>
            </div>
            {/* <div className="w-full px-[100px] left-0 top-[200px] absolute justify-center items-center gap-6 inline-flex"> */}
            <div className="w-full px[100px] absolute left-0 top-[200px] ab-top">
              <Slider {...settings}>
                <div className="grow shrink basis-0 h-max p-6 bg-white rounded-2xl shadow flex-col justify-between items-end inline-flex">
                  <div className="h-[max] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[max] flex-col justify-start items-start gap-2 flex">
                      <div>
                        <div className=" text-[#606670] text-base font-semibold font-open-sans leading-normal">
                          4/8/2024
                        </div>
                        <div className=" text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                          Luật sư Tư vấn Pháp lý
                        </div>
                      </div>
                      <div className="text-clamp-recrui text-[#606670] text-base font-normal font-open-sans leading-7 ">
                        Cung cấp tư vấn pháp lý cho khách hàng trong các lĩnh
                        vực như dân sự, thương mại, lao động, và hôn nhân gia
                        đình. Luật sư tư vấn pháp lý sẽ làm việc chặt chẽ với
                        khách hàng để hiểu rõ nhu cầu và đưa ra giải pháp pháp
                        lý hiệu quả nhất.
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-open-sans leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[317px] p-6 bg-white rounded-2xl shadow flex-col justify-between items-end inline-flex">
                  <div className="h-[max] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[max] flex-col justify-start items-start gap-2 flex">
                      <div>
                        <div className=" text-[#606670] text-base font-semibold font-open-sans leading-normal">
                          4/8/2024
                        </div>
                        <div className=" text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                          Luật sư Tranh tụng
                        </div>
                      </div>
                      <div className="text-clamp-recrui text-[#606670] text-base font-normal font-open-sans leading-7">
                        Đại diện khách hàng trong các vụ kiện tại tòa án và các
                        cơ quan pháp lý khác. Luật sư tranh tụng chịu trách
                        nhiệm chuẩn bị hồ sơ vụ án, thu thập chứng cứ, và tranh
                        luận tại tòa để bảo vệ quyền lợi của khách hàng.
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-open-sans leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[317px] p-6 bg-white rounded-2xl shadow flex-col justify-between items-end inline-flex">
                  <div className=" h-[max] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[max] flex-col justify-start items-start gap-2 flex">
                      <div>
                        <div className=" text-[#606670] text-base font-semibold font-open-sans leading-normal">
                          4/8/2024
                        </div>
                        <div className=" text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                          Chuyên viên Pháp lý
                        </div>
                      </div>
                      <div className=" text-clamp-recrui  text-[#606670] text-base font-normal font-open-sans leading-7">
                        Hỗ trợ các luật sư trong việc nghiên cứu pháp lý, soạn
                        thảo tài liệu, và chuẩn bị hồ sơ. Chuyên viên pháp lý
                        cũng có thể trực tiếp tư vấn cho khách hàng dưới sự giám
                        sát của luật sư.
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-open-sans leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[317px] p-6 bg-white rounded-2xl shadow flex-col justify-between items-end inline-flex">
                  <div className=" h-[max] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[max] flex-col justify-start items-start gap-2 flex">
                      <div>
                        <div className=" text-[#606670] text-base font-semibold font-open-sans leading-normal">
                          4/8/2024
                        </div>
                        <div className=" text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                          Chuyên viên Pháp lý
                        </div>
                      </div>
                      <div className=" text-clamp-recrui  text-[#606670] text-base font-normal font-open-sans leading-7">
                        Hỗ trợ các luật sư trong việc nghiên cứu pháp lý, soạn
                        thảo tài liệu, và chuẩn bị hồ sơ. Chuyên viên pháp lý
                        cũng có thể trực tiếp tư vấn cho khách hàng dưới sự giám
                        sát của luật sư.
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-open-sans leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[317px] p-6 bg-white rounded-2xl shadow flex-col justify-between items-end inline-flex">
                  <div className=" h-[max] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[max] flex-col justify-start items-start gap-2 flex">
                      <div>
                        <div className=" text-[#606670] text-base font-semibold font-open-sans leading-normal">
                          4/8/2024
                        </div>
                        <div className=" text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                          Chuyên viên Pháp lý
                        </div>
                      </div>
                      <div className=" text-clamp-recrui  text-[#606670] text-base font-normal font-open-sans leading-7">
                        Hỗ trợ các luật sư trong việc nghiên cứu pháp lý, soạn
                        thảo tài liệu, và chuẩn bị hồ sơ. Chuyên viên pháp lý
                        cũng có thể trực tiếp tư vấn cho khách hàng dưới sự giám
                        sát của luật sư.
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-open-sans leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-[317px] p-6 bg-white rounded-2xl shadow flex-col justify-between items-end inline-flex">
                  <div className=" h-[max] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[max] flex-col justify-start items-start gap-2 flex">
                      <div>
                        <div className=" text-[#606670] text-base font-semibold font-open-sans leading-normal">
                          4/8/2024
                        </div>
                        <div className=" text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                          Chuyên viên Pháp lý
                        </div>
                      </div>
                      <div className=" text-clamp-recrui  text-[#606670] text-base font-normal font-open-sans leading-7">
                        Hỗ trợ các luật sư trong việc nghiên cứu pháp lý, soạn
                        thảo tài liệu, và chuẩn bị hồ sơ. Chuyên viên pháp lý
                        cũng có thể trực tiếp tư vấn cho khách hàng dưới sự giám
                        sát của luật sư.
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-open-sans leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="w-full pt-[600px] px-[100px] py-20 flex-col justify-start items-center gap-16 flex asds1">
          <div className="w-[654px] w-350 flex-col justify-start items-center gap-6 flex">
            <div className=" text-center text-[#002740] text-5xl text-32 font-bold font-space-grotesk leading-[56px]">
              Đến Apolo Lawyers, bạn sẽ cảm nhận được sự khác biệt
            </div>
            <div className="w-[654px] w-350 text-center text-[#606670] text-base font-normal font-open-sans leading-7">
              Chúng tôi cung cấp môi trường làm việc chuyên nghiệp, cơ hội phát
              triển sự nghiệp vượt trội và sự hỗ trợ tận tâm từ đội ngũ lãnh
              đạo.
            </div>
          </div>
          <div className=" w-full tcs justify-start items-start gap-4 flex">
            <div className="grow tcss2 shrink basis-0 h-[184px] justify-start items-center gap-4 flex">
              <div className="grow  tccssmax shrink basis-0 h-[184px] px-4 pt-4 pb-16 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-4xl font-medium font-space-grotesk leading-[44px]">
                  01
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Tích cực
                </div>
              </div>
              <div className="grow tccssmax shrink basis-0 h-[184px] px-4 pt-4 pb-16 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-4xl font-medium font-space-grotesk leading-[44px]">
                  02
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Kết nối
                </div>
              </div>
              <div className="grow tccssmax shrink basis-0 h-[184px] px-4 pt-4 pb-16 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-4xl font-medium font-space-grotesk leading-[44px]">
                  03
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Phát Triển
                </div>
              </div>
            </div>
            <div className="tcss2  grow shrink basis-0 h-[184px] justify-start items-center gap-4 flex">
              <div className="grow tccssmax shrink basis-0 h-[184px] px-4 pt-4 pb-16 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-4xl font-medium font-space-grotesk leading-[44px]">
                  04
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Tận Tâm
                </div>
              </div>
              <div className="grow tccssmax shrink basis-0 h-[184px] px-4 pt-4 pb-16 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-4xl font-medium font-space-grotesk leading-[44px]">
                  05
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Thấu cảm
                </div>
              </div>
              <div className="grow tccssmax shrink basis-0 h-[184px] px-4 pt-4 pb-16 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-4xl font-medium font-space-grotesk leading-[44px]">
                  06
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Nề nếp
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[max] formasd px-[100px] py-3 flex-col justify-center items-center gap-2.5 flex">
          <div className=" h-[max] px-[200px] dsdss py-10 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center gap-10 flex">
            <div className="teas-form h-[136px] flex-col justify-start items-center gap-6 flex">
              <div className=" text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                Apolo Lawyers luôn chào đón bạn
              </div>
              <div className="w-[654px] text-p w-350 text-center text-white text-base font-normal font-open-sans leading-7">
                Chúng tôi rất mong được đón nhận những ứng viên tiềm năng và
                nhiệt huyết. Hãy cùng chúng tôi xây dựng sự nghiệp vững chắc và
                thành công
              </div>
            </div>
            <div className="w-[840px] form-c w-350 h-max flex-col justify-start items-start gap-[17px] flex">
              <div className="w-full formas h-[94px] flex-col justify-center items-start gap-4 flex">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="w-full block py-2 px-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Họ tên
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="w-full block px-2 py-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="floating_outlined"
                  className="w-full block py-2 px-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Số điện thoại
                </label>
              </div>
              <div className="w-full h-9 ">
                <Select
                  showSearch
                  className="bg-[#f3f3f3] h-full text-gray-900"
                  style={{ width: "100%" }}
                  dropdownStyle={{ background: "#f3f3f3" }}
                  placeholder="Chọn dịch vụ"
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                    {
                      value: "5",
                      label: "Resolved",
                    },
                    {
                      value: "6",
                      label: "Cancelled",
                    },
                  ]}
                />
              </div>
              <div className="w-full relative">
                <textarea
                  id="message"
                  className="w-full block py-2 px-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=""
                ></textarea>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  Nội dung tin nhắn
                </label>
              </div>
            </div>
            <ButtonCustom
              title="Ứng tuyển ngay"
              to="#fff"
              from="#fff"
              color="text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
