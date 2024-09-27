import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Button, Input, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./detail-lecture.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Link, useParams } from "react-router-dom";
import { getTheoryById } from "../../../API/TheoryAPI";
import { getLessonById } from "../../../API/LessonAPI";

function DetailLecturesComponet(props) {
  const { id } = useParams();
  const [detailLecture, setDetailLecture] = useState({});
  const [lecture, setLecture] = useState({});

  useEffect(() => {
    if (id) {
      getTheoryById(id).then((res) => {
        setDetailLecture(res);
      });
    }
  }, [id]);

  // useEffect(() => {
  //   getLessonById(detailLecture.lessonId).then((res) => {
  //     setLecture(res);
  //   });
  // }, [detailLecture]);



  const containerStyle = {
    width: "100%",
    height: 300,
    overflow: "auto",
    boxShadow: "0 0 0 1px #1677ff",
    scrollbarWidth: "auto",
    scrollbarColor: "unset",
  };
  const style = {
    width: "100%",
    height: 500,
  };
  //----------------custumer ô lý thuyết----
  const transform = (slot) => ({
    ...slot,
    Open: () => <></>,
  });
  const renderToolbar = (Toolbar) => (
    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
  );
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
  });
  const { renderDefaultToolbar } =
    defaultLayoutPluginInstance.toolbarPluginInstance;
  //---------------------------
  return (
    <Container style={{ textAlign: "left" }}>
      <br />
      <Breadcrumb
        separator=">"
        items={[
          // {
          //   title: (
          //     <Link to={"/course/" + lecture.courseId}>
          //       {lecture.courseName}
          //     </Link>
          //   ),
          // },
          {
            title: (
              <Link to={"/lectures/" + detailLecture.lessonId}>
                {detailLecture.lessonName}
              </Link>
            ),
          },
          {
            title: `Lý thuyết: ${detailLecture.theoryName}`,
          },
        ]}
      />
      <br />
      {detailLecture.theoryName}
      <br />
      <br />
      Video bài giảng:
      <br />
      <Space.Compact
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        <ReactPlayer
          url={detailLecture.videoUrl}
          //url="public\Quantum physics for babies.mp4"
          width="100%"
          height={500}
          controls={true}
        />
      </Space.Compact>
      <br />
      Tóm tắt lý thuyết:
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/Vật Lí 12 Chân trời sáng tạo Bài 1. Sự chuyển thể.pdf"
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
      <br />
      Bình luận:
      <Space.Compact
        style={{
          width: "100%",
        }}
      >
        <Avatar>
          <UserOutlined />
        </Avatar>

        <Input
          className="abc"
          placeholder="Bình luận..."
          //prefix={<UserOutlined />}
        />
        <Button type="primary">Gửi</Button>
      </Space.Compact>
    </Container>
  );
}

export default DetailLecturesComponet;
