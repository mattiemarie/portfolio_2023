import { Col } from "react-bootstrap";
import headerImg from "";

export const Banner = () => {
    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className = "tagline">Mattie Marie</span>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* Heading Image goes here */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}