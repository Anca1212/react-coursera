import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle , Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { Link } from 'react-router-dom';


    class CommentForm extends Component {

      constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      render() {
        return(
          <React.Fragment>
            <Button outline onClick={this.toggleModal}>
              <span className="fa fa-pencil fa-lg"> Submit Comment  </span>
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
              <ModalBody>
                Body
              </ModalBody>
            </Modal>
          </React.Fragment>
        )
      }
    }

    function RenderComments({comments}) {
        const commentsArray = comments.map((data) =>
            <div key={data.id}>
                <ul className="list-unstyled">
                    <li>{data.comment}</li>
                </ul>
                <ul className="list-unstyled">
                    <li>-- {data.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(data.date)))}</li>
                </ul>
            </div>
        );

        return (
            <div>
              <h4>Comments</h4>
                {commentsArray}
              <CommentForm/>
            </div>
        );
    }


    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }

    const DishDetail = (props) => {
        if (props.dish != null && props.comments != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
              <div></div>
            );
        }

    };



export default DishDetail;