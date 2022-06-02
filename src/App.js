import React from "react";
import { Alert, Badge, Button, Row, Col, ButtonGroup, ButtonToolbar, Container, Breadcrumb, Card } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 3, offset: 0 }}><Alert variant="primary">Website React Bootstrap</Alert></Col>
        <Col md={{ span: 3, offset: 4 }}>
          <ButtonToolbar>
            <ButtonGroup>
              <Button variant="primary">
                Notification <Badge bg="light" text="dark">9</Badge>
              </Button>
            </ButtonGroup>
            <ButtonGroup className="me-2">
              <Button variant="primary">
                Message <Badge bg="light" text="dark">19</Badge>
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
        <Col><img src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt="Profil.jpg" width="20%" height="55%"/>  Andreas
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 8 }}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
            <Card.Body>
              <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
              <Card.Text>Goding sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas Thailand di final piala Tiongkok.Diego Godin boleh berbangga setelah resemi menjadi.</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
            <Card.Body>
              <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</Card.Title>
              <Card.Text>Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
            <Card.Body>
              <Card.Title>Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
              <Card.Text>Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimistis.Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncil sekarang ini.</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
            <Card.Body>
              <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
              <Card.Text>Gelangdang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pamungkas grup K.</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
