import React, { useState, useEffect } from "react";
import "./Article.css";
import { Input } from "antd";
import { IoSearch } from "react-icons/io5";
import tinmoi1 from "../../assets/imgs/tinmoi1.png";
import tinmoi2 from "../../assets/imgs/tinmoi2.png";
import tinmoi3 from "../../assets/imgs/tinmoi3.png";
import Slider from "react-slick";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import { Link } from "react-router-dom";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";

const Article = () => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  const dataAllLuat = [
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi1,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi2,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi3,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi1,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi2,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi3,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi1,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi2,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi3,
      date: "03/08/2024",
      blog: "Luật sở hữu trí tuệ",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi1,
      date: "03/08/2024",
      blog: "Tin tức Pháp Lý",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi2,
      date: "03/08/2024",
      blog: "Luật doanh nghiệp",
    },
    {
      title: "Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers",
      description:
        "Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp lý.",
      image: tinmoi3,
      date: "03/08/2024",
      blog: "Tư vấn Pháp Luật",
    },
  ];
  return (
    <div>
      <div className="w-1440 w-350  ar  bg-white py-24 flex-col justify-center items-center flex ">
        <div className=" h-[406px] py-16 flex-col justify-center items-center gap-2.5 flex">
          <div className=" flex-col justify-start items-center gap-12 flex">
            <div className="flex-col justify-start items-center gap-6 flex">
              <div className="flex-col justify-start items-center gap-3 flex">
                <div className="flexasda justify-start items-center gap-3 inline-flex">
                  <h1 className="text-center text-[#002740] text-32 text-[56px] font-bold font-space-grotesk leading-[64px]">
                    Tin tức mới nhất tại
                  </h1>
                  <div className="mrflex">
                    <ProfessionalBanner title="Apollo Laywers" />
                  </div>
                </div>
              </div>
              <div className="w-[654px] w-350 flex flex-col gap-5 text-center text-[#606670] text-base font-normal font-open-sans leading-7">
                Tham gia đội ngũ Apolo Lawyers và phát triển sự nghiệp pháp lý
                của bạn trong môi trường chuyên nghiệp và chất lượng.
                <div className="relative">
                  <Input
                    placeholder="Tìm kiếm"
                    style={{ borderRadius: "50px", padding: "10px 50px" }}
                  />
                  <IoSearch className="absolute top-2 left-3 text-[28px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  inf-ccc  py-2 flex-col justify-start items-center gap-6 flex">
          <div className=" text-[#3c3c3c] mb-3 text-5xl text-32 font-bold font-space-grotesk leading-[56px]">
            Bài viết nổi bật
          </div>

          {check === true ? (
            <div className="w-[375px] h-max">
              <Slider {...settings}>
                {dataAllLuat.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-350 arflex grow shrink basis-0  p-6 bg-[#f0f0f0] rounded-2xl flex"
                    >
                      <img
                        className="img-if grow shrink basis-0  rounded-lg"
                        src={item.image}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div className="flex-col justify-start items-start flex  gap-4 ">
                        <div className=" arflex  px-4 flex-col justify-start items-start gap-2 flex">
                          <div className="text-clamp-mobile1 text-[#002740] text-16 text-2xl font-bold font-space-grotesk ">
                            <Link
                              to={`/bai-viet/bao-ve-quyen-loi`}
                              style={{
                                textDecoration: "none",
                                color: "#002740",
                              }}
                            >
                              {item.title}
                            </Link>
                          </div>
                          <div className="w-[344px] flex-date justify-start items-center gap-2 inline-flex">
                            <div className="text-[#606670] text-sm font-normal font-open-sans ">
                              {item.date}
                            </div>
                            <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                              {item.blog}
                            </div>
                          </div>
                          <div className=" text-clamp text-clamp-mobile text-[#606670] text-sm font-normal font-open-sans ">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (
            <div className=" flex-col pb-10 justify-start items-start gap-8 flex">
              <div className="justify-start  items-start gap-8 flex">
                <div className="grow shrink basis-0  p-6 bg-[#f0f0f0] rounded-2xl justify-start items-start flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    src={tinmoi2}
                    style={{
                      width: "196px",
                      height: "196px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <div className="h-40 px-4 flex-col justify-start items-start gap-2 flex">
                      <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
                        <Link
                          style={{ textDecoration: "none" }}
                          className="text-[#002740]"
                          to={`/bai-viet/bao-ve-quyen-loi`}
                        >
                          Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                        </Link>
                      </div>
                      <div className="w-[344px] justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-normal font-open-sans ">
                          3/8/2024
                        </div>
                        <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                        <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                          Hợp đồng và Giao dịch
                        </div>
                      </div>
                      <div className="text-clamp text-[#606670] text-sm font-normal font-open-sans ">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0  p-6 bg-[#f0f0f0] rounded-2xl justify-start items-start flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    src={tinmoi2}
                    style={{
                      width: "196px",
                      height: "196px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <div className="h-40 px-4 flex-col justify-start items-start gap-2 flex">
                      <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
                        <Link
                          style={{ textDecoration: "none" }}
                          className="text-[#002740]"
                          to={`/bai-viet/bao-ve-quyen-loi`}
                        >
                          Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                        </Link>
                      </div>
                      <div className="w-[344px] justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-normal font-open-sans ">
                          3/8/2024
                        </div>
                        <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                        <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                          Hợp đồng và Giao dịch
                        </div>
                      </div>
                      <div className="text-clamp text-[#606670] text-sm font-normal font-open-sans ">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" justify-start items-start gap-8 flex">
                <div className="grow shrink basis-0  p-6 bg-[#f0f0f0] rounded-2xl justify-start items-start  flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    src={tinmoi3}
                    style={{
                      width: "196px",
                      height: "196px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <div className="h-40 px-4 flex-col justify-start items-start gap-2 flex">
                      <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
                        <Link
                          style={{ textDecoration: "none" }}
                          className="text-[#002740]"
                          to={`/bai-viet/bao-ve-quyen-loi`}
                        >
                          Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                        </Link>
                      </div>
                      <div className="w-[344px] justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-normal font-open-sans ">
                          3/8/2024
                        </div>
                        <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                        <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                          Tư vấn Pháp luật
                        </div>
                      </div>
                      <div className="text-clamp text-[#606670] text-sm font-normal font-open-sans ">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0  p-6 bg-[#f0f0f0] rounded-2xl justify-start items-start  flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    src={tinmoi1}
                    style={{
                      width: "196px",
                      height: "196px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="flex-col justify-start items-start gap-4 inline-flex">
                    <div className="h-40 px-4 flex-col justify-start items-start gap-2 flex">
                      <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
                        <Link
                          style={{ textDecoration: "none" }}
                          className="text-[#002740]"
                          to={`/bai-viet/bao-ve-quyen-loi`}
                        >
                          Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                        </Link>
                      </div>
                      <div className="w-[344px] justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-normal font-open-sans ">
                          3/8/2024
                        </div>
                        <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                        <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                          Tin tức Pháp lý
                        </div>
                      </div>
                      <div className="text-clamp text-[#606670] text-sm font-normal font-open-sans ">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="allchose  pt-16 flex-wrap gap-3 flex">
          <div className="border-[#1cb0ad] justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#1cb0ad] text-base font-semibold font-open-sans leading-normal`}
            >
              Tất cả
            </div>
          </div>

          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Tin tức Pháp lý
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Tư vấn Pháp luật
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Hợp đồng và Giao dịch
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Quyền lợi Người Nước ngoài
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Giải quyết Tranh chấp
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Hôn nhân và Gia đình
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Luật Đất đai và Bất động sản
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Luật Doanh nghiệp
            </div>
          </div>

          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Luật Hàng hải và Bảo hiểm Quốc tế
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Luật Lao động
            </div>
          </div>
          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Luật Hình sự
            </div>
          </div>

          <div className="px-2 border-l justify-start items-center gap-2.5 flex">
            <div
              className={`${
                check &&
                "border border-collapsep-2 p-3 rounded-xl  border-[#1cb0ad]"
              } text-[#002740] text-base font-semibold font-open-sans leading-normal`}
            >
              Luật Sở hữu Trí tuệ
            </div>
          </div>
        </div>
        <div className=" px-[100px] py-20 flex-col justify-start items-center gap-10 flex">
          <div
            className="flexarrr"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "30px",
            }}
          >
            {dataAllLuat?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[392px] w-350 p-6 bg-[#f0f0f0] rounded-2xl flex-col justify-start items-start gap-4 inline-flex"
                >
                  <Link to="/bai-viet/bao-ve-quyen-loi">
                    <img
                      className=" h-[286px] rounded-lg"
                      style={{ width: "100%", height: "286px" }}
                      src={item.image}
                    />
                  </Link>
                  <div className=" h-[132px] px-4 flex-col justify-start items-start gap-2 flex">
                    <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
                      {item.title}
                    </div>
                    <div className="text-clamp text-[#606670] text-sm font-normal font-open-sans ">
                      {item.description}
                    </div>
                  </div>
                  <div className=" px-4 justify-start items-center gap-2 inline-flex">
                    <div className="text-[#3c3c3c] text-sm font-normal font-open-sans ">
                      {item.date}
                    </div>
                    <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                    <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                      {item.blog}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <ButtonCustom
              color="text-white"
              title="Xem thêm"
              from="#40e0d0"
              to="#48d1cc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
