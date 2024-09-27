import React, { useEffect, useState } from "react";
import { Avatar, Breadcrumb, Button, Input, Space } from "antd";
import { Collapse, Divider } from 'antd';
import { Link, useParams } from "react-router-dom";
import { getExerciseById } from "../../../API/ExerciseAPI";
import { UserOutlined } from "@ant-design/icons";
import { getQuestionById } from "../../../API/Question";

function ExcercisesComponent(props) {
  const text = `
 A. Mô hình động học phân tử.
`;
const question = `
  Câu 2: Để giải thích các hiện tượng nhiệt quan sát được các nhà khoa học đã đưa ra mô hình nào?
`;

const { id } = useParams();
  const [exerciseData, setExerciseData] = useState({});
  const [questionData, setQuestionData] = useState({});
  useEffect(() => {
    if (id) {
      getExerciseById(id).then((res) => {
        setExerciseData(res);
      });
      // getQuestionById(id).then((res) => {
      //   setQuestionData(res);
      // });
    }
  }, [id]);
  return (
    <div style={{ textAlign: "left" }}>
      <br />
      <Breadcrumb
      separator=">"
        items={[
          {
            title: <Link to={"/lectures/" + exerciseData.lessonId}>{exerciseData.lessonName}</Link>,
          },
          {
            title: `Bài tập: ${exerciseData.exerciseName}`,
          },
        ]}
      />
      <br />
      {exerciseData.exerciseName}
      <br />
      <br />
      Bài tập:
      {/* <Divider orientation="left">
        {questionData.questionName}
      </Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>{questionData.correctAnswer}</p>,
          },
        ]}
      /> */}
      {/* <Divider orientation="left">{question}</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>{text}</p>,
          },
        ]}
      /> */}
      <Divider orientation="left">Câu 1: Ở thể rắn, các phân tử có đặc điểm gì về hình dạng và thể tích?</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>Có thể tích và hình dạng riêng xác định.</p>,
          },
        ]}
      />
      <Divider orientation="left">Câu 2: Để giải thích các hiện tượng nhiệt quan sát được các nhà khoa học đã đưa ra mô hình nào?</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>Mô hình động học phân tử.</p>,
          },
        ]}
      />
      <Divider orientation="left">Câu 3: Ở thể khí, các phân tử chuyển động như thế nào?</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>Chuyển động hỗn loạn.</p>,
          },
        ]}
      />
      <Divider orientation="left">Câu 4: Lực tương tác giữa các phân tử là</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>lực hút và lực đẩy.</p>,
          },
        ]}
      />
      <Divider orientation="left">Câu 5: Sự hóa hơi có thể xảy ra qua hình thức nào?</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>Bay hơi và sôi.</p>,
          },
        ]}
      />
      <Divider orientation="left">Câu 6: Sự hóa hơi xảy ra ở đâu?</Divider>
      <Collapse
        items={[
          {
            key: "1",
            label: "Hiển thị đáp án",
            children: <p>Bề mặt của chất lỏng.</p>,
          },
        ]}
      />
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

    </div>
  );
}

export default ExcercisesComponent;
