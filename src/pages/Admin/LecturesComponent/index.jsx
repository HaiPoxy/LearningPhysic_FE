import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Card, Col, Row } from "antd";
import { PlayCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { getLessonById } from "../../../API/LessonAPI";
import { getCourseById } from "../../../API/CourseAPI";
function LecturesComponent(props) {
  const { id } = useParams();
  const [lecture, setLecture] = useState({});
  const [dataCourses, setDataCourses] = useState({});

  useEffect(() => {
    if (id) {
      getLessonById(id).then((res) => {
        setLecture(res);
      });
      getCourseById(1).then((res)=>{
        setDataCourses(res)
      });
    }
  }, [id]);

  return (
    <div style={{ textAlign: "left" }}>
      <br />
      <Breadcrumb
        separator=">"
        items={[
          {
            title: <Link to={"/course/"+dataCourses.id}>{dataCourses.courseName}</Link>,
          },
          {
            title: ` ${lecture.lessonName}`,
          },
          
        ]}
      />
      <br />
      {lecture.lessonName}
      <br />
      <Row gutter={16}>
        <Col span={12}>
          <Card title="Lý thuyết" bordered={false}>
            {lecture?.theories?.map((item, index) => (
              <>
                <PlayCircleOutlined key={item.theoryId} />
                <Link to={"/detaillectures/" + item.theoryId}>{item.theoryName}</Link>
                <br />
              </>
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Bài tập" bordered={false}>
            {lecture?.exercises?.map((item, index) => (
              <>
                <CheckCircleOutlined key={item.exerciseId} />
                <Link to={"/excercises/" + item.exerciseId}>{item.exerciseName}</Link>
                <br />
              </>
            ))}
          </Card>
        </Col>
        {/* <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col> */}
      </Row>
    </div>
  );
}

export default LecturesComponent;
