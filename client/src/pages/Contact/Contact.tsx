import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PageMeta from "../../components/PageMeta/PageMeta";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import contact1 from "../../assets/imgs/ct.png";
import introduce2 from "../../assets/imgs/introduce2.png";
import { Select } from "antd";
import "./Contact.css";
export default function Contact() {
  const [check, setCheck] = useState(false);
  const { ref: refA7, inView: inViewA7 } = useInView({ triggerOnce: true });
  const { ref: refA8, inView: inViewA8 } = useInView({ triggerOnce: true });
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
    <>
      <PageMeta
        title="Liên hệ với công ty của chúng tôi"
        description="Tìm hiểu về Công Ty Luật [Tên Công Ty], chuyên cung cấp dịch vụ luật pháp uy tín và chất lượng. Đọc về sứ mệnh, giá trị, và đội ngũ luật sư của chúng tôi."
      />
      <div className="w-1440 w-350 py-24  bg-white flex-col justify-center items-center flex">
        <div className="w-full py-16 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-full flex-col justify-center items-center gap-12 flex">
            <div className="w-full flex-col justify-center items-center gap-6 flex">
              <div className="flex-col w-full justify-center items-center gap-3 flex">
                <div className="w-full contactsasd px-[100px] justify-center items-center flex gap-36 ">
                  <div className="text-center text-asdccc pr-5 text-[#002740] text-[56px] text-32 font-bold font-space-grotesk leading-[64px]">
                    Hãy để Apolo Lawyers
                  </div>
                  <div style={{ marginLeft: "-140px" }}>
                    <ProfessionalBanner title="Đồng hành" />
                  </div>
                  <div className="text-center text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                    cùng bạn
                  </div>
                </div>
              </div>
              <div className="w-[654px] w-350 text-center text-[#606670] text-base font-normal font-open-sans leading-7">
                Chúng tôi cam kết bảo vệ quyền lợi và mang lại giải pháp pháp lý
                tối ưu cho bạn.
              </div>
            </div>
            <ButtonCustom
              color="text-white"
              title="Liên hệ ngay"
              to="#48d1cc"
              from="#40e0d0"
            />
          </div>
        </div>
        <div className="ctcc cw-1440 w-350 px-[100px] py-20 justify-start items-center inline-flex">
          <div className=" mld grow w-full shrink basis-0  rounded-2xl shadow justify-start items-center flex">
            <div className="w-full formboder grow shrink basis-0 px-10 py-20 bg-[#f4f4f4]/95 rounded-tl-2xl rounded-bl-2xl flex-col justify-start items-start gap-10 inline-flex">
              <div className="w-full h-[72px] flex-col justify-start items-start gap-6 flex">
                <div className="w-full h-[72px] flex-col justify-start items-start gap-4 flex">
                  <div className=" text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                    Chúng tôi sẽ liên hệ vào thông tin bạn gửi, hãy điền vào
                    form bên dưới
                  </div>
                </div>
              </div>
              <div className="h-[464px] ttextform w-full flex-col justify-start items-start gap-[17px] flex">
                <div className="w-full flex-col justify-center items-start gap-4 flex">
                  <div className="relative  w-full">
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
              </div>
              <ButtonCustom
                color="text-white"
                title="Gửi"
                to="#48d1cc"
                from="#40e0d0"
              />
            </div>
            <img
              className="imgmon grow shrink basis-0  rounded-tr-2xl rounded-br-2xl"
              src={contact1}
              style={{ width: "620px", height: "824px" }}
            />
          </div>
        </div>
        <div className="fomtcontact w-full px-[100px] py-20 bg-[#f4f4f4]/95 justify-start items-center gap-10 inline-flex">
          <div className=" p1 w-[580px] w-350 flex-col justify-start items-start gap-8 inline-flex">
            <div className="  flex-col justify-start items-start gap-4 flex">
              <div className=" text-[#9ea8b6] text-[28px] font-bold font-space-grotesk leading-9">
                Email
              </div>
              <div className=" text-[#1cb0ad] text-xl font-normal font-open-sans leading-7">
                contact@apolo.vn
              </div>
            </div>
            <div className=" flex-col justify-start items-start gap-4 flex">
              <div className=" text-[#9ea8b6] text-[28px] font-bold font-space-grotesk leading-9">
                Trụ sở chính
              </div>
              <div className=" flex-col justify-start items-start gap-2 flex">
                <div className="">
                  <span className="text-[#138e8e] text-xl font-bold font-open-sans leading-7">
                    Địa chỉ:
                  </span>
                  <span className="text-[#1cb0ad] text-xl font-normal font-open-sans leading-7">
                    {" "}
                    Tầng 2,108 Trần Đình Xu, Phường Nguyễn Cư Trinh, Quận 1, TP
                    Hồ Chí Minh
                  </span>
                </div>
                <div className="">
                  <span className="text-[#138e8e] text-xl font-bold font-open-sans leading-7">
                    Số điện thoại:
                  </span>
                  <span className="text-[#1cb0ad] text-xl font-normal font-open-sans leading-7">
                    {" "}
                    (028) 66.701.709 - 0903.419.479
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex-col justify-start items-start gap-4 flex">
              <div className=" text-[#9ea8b6] text-[28px] font-bold font-space-grotesk leading-9">
                Chi nhánh 1
              </div>
              <div className=" ] flex-col justify-start items-start gap-2 flex">
                <div className="">
                  <span className="text-[#138e8e] text-xl font-bold font-open-sans leading-7">
                    Địa chỉ:
                  </span>
                  <span className="text-[#1cb0ad] text-xl font-normal font-open-sans leading-7">
                    {" "}
                    Tòa nhà PaxSky, 51 Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh
                  </span>
                </div>
                <div className="">
                  <span className="text-[#138e8e] text-xl font-bold font-open-sans leading-7">
                    Số điện thoại:
                  </span>
                  <span className="text-[#1cb0ad] text-xl font-normal font-open-sans leading-7">
                    {" "}
                    (028) 66.701.709 - 0903.419.479
                  </span>
                </div>
              </div>
            </div>
            <div className="  flex-col justify-start items-start gap-4 flex">
              <div className=" text-[#9ea8b6] text-[28px] font-bold font-space-grotesk leading-9">
                Chi nhánh 2
              </div>
              <div className="  flex-col justify-start items-start gap-2 flex">
                <div className="">
                  <span className="text-[#138e8e] text-xl font-bold font-open-sans leading-7">
                    Địa chỉ:
                  </span>
                  <span className="text-[#1cb0ad] text-xl font-normal font-open-sans leading-7">
                    {" "}
                    Tầng 09 Tower K&M, số 33 Ung Văn Khiêm, Quận Bình Thạnh, TP.
                    Hồ Chí Minh
                  </span>
                </div>
                <div className="">
                  <span className="text-[#138e8e] text-xl font-bold font-open-sans leading-7">
                    Số điện thoại:
                  </span>
                  <span className="text-[#1cb0ad] text-xl font-normal font-open-sans leading-7">
                    {" "}
                    (028) 35.059.349 - 0903.600.347
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[620px] w-350 h-[608px] relative rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1959.8214830992588!2d106.688234338838!3d10.761975332380898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zVOG6p25nIDIsMTA4IFRy4bqnbiDEkMOsbmggWHUsIFBoxrDhu51uZyBOZ3V54buFbiBDxrAgVHJpbmgsIFF14bqtbiAxLCBUUCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1723375381291!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: "0", width: "100%", height: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-1440 w-350 cmkdd px-[100px] py-20 justify-center items-center gap-10 inline-flex">
          <img
            className="grow shrink basis-0 h-[736px] rounded-2xl"
            src={introduce2}
            alt="img"
          />
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
            <div className=" w-full flex-col justify-start items-start gap-6 flex">
              <div className=" w-full flex-col justify-start items-start gap-4 flex">
                <div className=" w-full text-[#002740] text-32 text-5xl font-bold font-space-grotesk leading-[56px]">
                  Cam Kết Của Chúng Tôi
                </div>
              </div>
              <div className="w-[540.32px] textck w-350 text-black text-base font-normal font-['Inter'] leading-normal">
                Chúng tôi cam kết cung cấp các dịch vụ pháp lý chất lượng, nhanh
                chóng và hiệu quả. Chúng tôi luôn sẵn sàng lắng nghe và giải
                quyết mọi vấn đề pháp lý của bạn với tinh thần trách nhiệm cao
                nhất. Hãy để Apolo Lawyers trở thành đối tác pháp lý tin cậy của
                bạn!
              </div>
            </div>
            <ButtonCustom
              color="text-white"
              title="Liên hệ ngay"
              to="#48d1cc"
              from="#40e0d0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
