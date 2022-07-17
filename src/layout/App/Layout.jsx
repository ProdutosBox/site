import * as S from "./styles";
import Header from "components/Header";
import Footer from "components/Footer";
import { Col, Row } from "antd";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Row>
          <Col span={24}>{children}</Col>
        </Row>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
