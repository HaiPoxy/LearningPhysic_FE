import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card, Space } from "antd";
import { getCourseById } from "../../../API/CourseAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import LecturesComponent from "../LecturesComponent";

function CoursesComponent(props) {
  let [dataCourses, setDataCourses] = useState({});
  useEffect(() => {
    getCourseById(1).then((res) => {
      // reduce bien doi mang thanh 1 dang khac, co the la object hoac array moi
      const transformLessons = res.lessons.reduce((acc, item) => {
        if (acc[item.chapterName]) {
          acc[item.chapterName].push(item);
        } else {
          acc[item.chapterName] = [item];
        }
        return acc;
      }, {});
      setDataCourses({
        ...res,
        lessons: Object.entries(transformLessons),
        // [['Chuong1', [{id: 1, lessName: 'Bai1'}, {id: 2, lessName: 'Bai2'}]], ['Chuong1', [{id: 1, lessName: 'Bai1'}, {id: 2, lessName: 'Bai2'}]]]
      });
    });
  }, []);

  return (
    <Container style={{ textAlign: "left" }}>
      <br />
      KHÓA HỌC: {dataCourses.courseName}
      <br />
      <br />
      Nội dung khóa học:
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "flex",
        }}
      >
        {dataCourses?.lessons?.map((item, index) => {
          return (
            <Card
              key={index}
              title={`Chương ${index + 1}: ${item[0]}`}
              size="small"
            >
              {item[1].map((lesson) => {
                return (
                  <p key={lesson.id}>
                    <Link to={"/lectures/" + lesson.id}>
                      {lesson.lessonName}
                    </Link>
                  </p>
                );
              })}
            </Card>
          );
        })}
      </Space>
    </Container>
  );
}

export default CoursesComponent;
