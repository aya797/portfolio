import { Col } from "react-bootstrap";

export const Card = ({ title, description, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-img">
        <img src={url} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
